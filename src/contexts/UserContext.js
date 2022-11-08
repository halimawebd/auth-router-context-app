import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


 export const AuthContext = createContext();

 const auth = getAuth(app)

const UserContext = ({children}) => {
 const [ user, setUser] = useState({displayName: 'AAAkash'});

 const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
       return signInWithPopup (auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }
    // why are we doing this?
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser)
        })

        return () =>{
            unsubscribe();
        }
    }, [])

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {user, createUser, signIn, logOut}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;