/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updeateProfile = (email, name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
      email: email,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
      // console.log(User);
      setLoading(false);
      // const userEmail = User?.email || user?.email;
      // const loggedUser = { email: userEmail };
      // setUser(User);
      // console.log("current user", User);
      // setLoading(false);
      // if user exists then issue a token
      // if (User) {
      //   axios
      //     .post("https://donation-server-site-psi.vercel.app/jwt", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("token response", res.data);
      //     });
      // } else {
      //   axios
      //     .post("https://donation-server-site-psi.vercel.app/logout", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    updeateProfile,
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
