import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext=createContext();

const auth=getAuth(app)

const UseContext = ({children}) => {
    const [user, setUser]=useState('')

    // create User 
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

// update User 
const updateUserProfile=(name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

    // login user 
    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout User 
    const logout=()=>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=> unsubscribed();
    },[])
    const userInfo={
        user,
        createUser,
        loginUser,
        updateUserProfile,
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;