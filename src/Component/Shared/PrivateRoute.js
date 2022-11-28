import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../UserContex/UseContext';
import { Loader } from './Loader';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    
    if (loader) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login'  state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;