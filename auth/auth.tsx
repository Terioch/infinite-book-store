import {
	useState,
	useEffect,
	createContext,
	useContext,
	SetStateAction,
	Dispatch,
} from "react";
import nookies from "nookies";
import firebaseClient from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

export interface User {
	user: any;
	setUser: Dispatch<SetStateAction<any>>;
}

export const AuthContext = createContext<User>({
	user: null,
	setUser: (): void => {},
});

export const AuthProvider: React.FC = ({ children }) => {
	firebaseClient(); // Initialize the client
	const [user, setUser] = useState(null);

	// Handle user initialization
	useEffect(() => {
		return firebase.auth().onIdTokenChanged(async user => {
			if (!user) {
				setUser(null);
				nookies.set(undefined, "token", "", {});
				return;
			}

			// If user exists then store token within nookies and set a new user
			const token = await user.getIdToken();
			setUser(user);
			nookies.set(undefined, "token", token, {});
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

// Define a custom hook for our auth context
export const useAuth = () => useContext(AuthContext);
