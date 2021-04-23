import { useState, useEffect, createContext, useContext } from "react";
import firebaseClient from "../auth/firebaseClient";

const AuthContext = createContext({ user: null });

export const AuthProvider: React.FC = ({ children }) => {
	firebaseClient(); // Initialize firebase client
	const [user, setUser] = useState(null);

	// Fetch and set user from storage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("user"));
		data && setUser(data.user);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

// Export auth context as a custom hook
export const useAuth = () => useContext(AuthContext);
