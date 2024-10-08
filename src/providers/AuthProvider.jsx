import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPassword, setShowPassWord] = useState(false);

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const GoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const GithubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const   unSubscribe=onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
              setLoading(false);
          });
          return ()=>{
              unSubscribe();
          }
      }, [auth])

    const userInfo = {
        user,
        setUser,
        createUser,
        showPassword,
        setShowPassWord,
        loading,
        signIn,
        GoogleLogin,
        GithubLogin,
        logOut

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;