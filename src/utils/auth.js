import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Preloader';
// const AuthenticateToken = async () => {
//     const JWTtoken = localStorage.getItem('token')
//         const response = await fetch("http://localhost:3000/api/auth/authenticate", {
//             method: 'POST',
//             headers: {
//             "Content-Type": "application/json",
//             "Authorization": JWTtoken,
//             },
//             body: JSON.stringify({ })
//         });
//         console.log(response.status)
//         return response.status === 200 ? true : false;
// }


const PrivateRoute = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const JWTtoken = localStorage.getItem('token')
        fetch("http://localhost:3000/api/auth/authenticate/" + JWTtoken, {
            headers: {
                "Accept": "application/json",
            },
        }).then((response) => {
            if(response.status === 200)
                setIsAuthenticated(true)
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
