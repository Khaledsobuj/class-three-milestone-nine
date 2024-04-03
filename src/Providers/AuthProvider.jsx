import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);

    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("observing current user inside ", currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const autInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}



/****
 * 
 * 1.create context and export it
 * 2.set provider with value 
 * 3.use the Auth Provider in the main.jsx file .
 * 4. access children in AuthProvider component as children and use it in the middle of the Provider
 */