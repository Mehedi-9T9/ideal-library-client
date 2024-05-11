import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react'
import { app } from '../../firebase/firebase.cofig';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUsers(user)
                // ...
            } else {
                // User is signed out
                setUsers(null)
                // ...
            }
        });
    }, [])
    const info = { createUser, loginUser, logoutUser, users, googleLogin }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;