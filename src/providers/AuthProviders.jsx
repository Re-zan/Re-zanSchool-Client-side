import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../utilities/firebase/fibaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //sign in
  const creatUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //google log in
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  //profile
  const profile = (userData, name, photo) => {
    setLoader(true);
    updateProfile(userData, {
      displayName: name,
      photoURL: photo,
    });
  };
  //authUser
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("https://re-school-camp-server.vercel.app/users/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data);
            setLoader(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscriber();
    };
  }, []);

  const authInfo = {
    user,
    creatUser,
    loader,
    logIn,
    logOut,
    googleLogin,
    profile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
