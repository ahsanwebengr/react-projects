import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    let currentUser = true;

    if (!currentUser) {
        return <Navigate to={'/'} replace={true} />;
    }
    return children;
};

export default ProtectedRoute;