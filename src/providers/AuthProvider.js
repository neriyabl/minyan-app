import React, { createContext } from "react";
import { authMethods } from "../firebase/firebase";

export const firebaseAuth = createContext();

const AuthProvider = ({ children }) => {
  return (
    <firebaseAuth.Provider
      value={{
        ...authMethods,
      }}
    >
      {children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
