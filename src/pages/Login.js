import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import LoginImage from "../assets/images/login.webp";
import InputTile from "../components/InputTile";
import '../styles/login.scss'
import Loading from "./Loading";

const Login = () => {
    const [ApiLog, setApiLog] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isValidatingCredentials, setIsValidatingCredentials] = useState(false)
    const PostCredentials = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        var credentials = {
            "email_id" : email,
            "password" : password
        }
        setIsValidatingCredentials(true);
        fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then((response) => {
            if(response.status === 200) {
                setApiLog("")
                response.text().then((data) => {
                    const responseData = JSON.parse(data);
                    localStorage.setItem("token", responseData["token"])
                    setIsLoggedIn(true);
                });
            } else {
                response.text().then((data) => {
                    setApiLog(data)
                });
            }
            setIsValidatingCredentials(false)
        });
    }
    return ( 
        !isLoggedIn ? 
        <div className="login">
            <img src={LoginImage} alt="" />
            <div className="container">
                <InputTile fieldData={{label: "Email ID", inputDivID: "email"}}/>
            </div>
            <div className="container">
                <InputTile fieldData={{label: "Password", inputDivID: "password"}}/>
            </div>
            <div className="container">
                {isValidatingCredentials ? 
                <Loading/>
                :
                <button onClick={PostCredentials}>
                    Log In
                </button>
                }
            </div>
            <div className="api-status">
                {ApiLog}
            </div>
            <li className="new-user">
                <Link to="/signup">
                    New user? Sign Up!
                </Link>
            </li>
        </div> 
        :
        <Navigate to="/" />
    );
}
 
export default Login;