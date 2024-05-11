import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useProvider from '../../Provider/useProvider';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useProvider()
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (!users) {
        return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
    }
    return children

};

export default PrivateRoute;