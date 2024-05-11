import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react'
import { app } from '../../firebase/firebase.cofig';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUsers(user)
                setLoading(false)
                // ...
            } else {
                // User is signed out
                setUsers(null)
                setLoading(false)
                // ...
            }
        });
    }, [])
    const info = { createUser, loginUser, logoutUser, users, googleLogin, loading }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;