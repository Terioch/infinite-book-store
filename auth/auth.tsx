import React, { useState, useEffect, createContext, useContext } from "react";
import nookies from "nookies";
import firebaseClient from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = createContext({ user: null });

export const AuthProvider: React.FC = ({ children }) => {
  firebaseClient(); // Initialize the client
  const [user, setUser] = useState(null);

  // Handle user initialization on mount
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      } 

      // If user exists then store token within nookies and set the user
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Define a custom hook for our auth context
export const useAuth = () => useContext(AuthContext);