/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // create new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


//   observer
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        setUser(currentUser)
    })
    return () => {
        unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
