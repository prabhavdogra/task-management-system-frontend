import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from 'pages/Loading';
import { AUTH_AUTHENTICATE_POST } from 'urls';

const PrivateRoute = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const JWTtoken = localStorage.getItem('token')
        fetch(AUTH_AUTHENTICATE_POST, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": JWTtoken
            },
            
            body: JSON.stringify({})
        })
        .then((response) => {
            if(response.status === 200) {
                setIsAuthenticated(true)
            }
            else {
                setIsAuthenticated(false)
            }
            setIsLoading(false)
        })
    })
    return (
        isLoading 
        ? 
        <Loading/> 
        :
        (isAuthenticated ? children : <Navigate to="/login" />)
    );
};
export default PrivateRoute;