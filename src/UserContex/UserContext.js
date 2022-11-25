import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext=createContext();

const auth=getAuth(app)

const UserContext = () => {
    return (
        <div>
            
        </div>
    );
};

export default UserContext;