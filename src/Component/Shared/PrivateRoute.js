import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../UserContex/UseContext';
import { Loader } from './Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    
    if (loader) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;