import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginImage from "assets/images/login.webp";
import InputTile from "components/InputTile";
import 'styles/signup.scss'
import Loading from "pages/Loading";
import { AUTH_SIGNUP_POST } from "urls";

const Signup = () => {
    const [ApiLog, setApiLog] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isValidatingCredentials, setIsValidatingCredentials] = useState(false)
    const PostCredentials = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneno = document.getElementById("phoneno").value;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(name === "") {
            setApiLog("Please enter a valid name")
            return;
        }
        if(email === "") {
            setApiLog("Please enter a valid email")
            return;
        }
        if(password === "") {
            setApiLog("Please enter a valid password")
            return;
        }
        if(phoneno === "") {
            setApiLog("Please enter a valid phone number")
            return;
        }
        setApiLog("")
        var credentials = {
            "name" : name,
            "email_id" : email,
            "password" : password,
            "phone_no" : phoneno
        }
        setIsValidatingCredentials(true);
        fetch(AUTH_SIGNUP_POST, {
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
        !isLoggedIn
        ?
        <div className="signup">
            <div className="login">
                <img src={LoginImage} alt="" />
                <div className="container">
                    <InputTile fieldData={{label: "Name", inputDivID: "name"}}/>
                </div>
                <div className="container">
                    <InputTile fieldData={{label: "Email ID", inputDivID: "email"}}/>
                </div>
                <div className="container">
                    <InputTile fieldData={{label: "Password", inputDivID: "password"}}/>
                </div>
                <div className="container">
                    <InputTile fieldData={{label: "Phone Number", inputDivID: "phoneno"}}/>
                </div>
                <div className="container">
                    {
                        isValidatingCredentials
                        ?
                        <Loading/>
                        :
                        <button onClick={PostCredentials}>
                            Sign Up
                        </button>
                    }
                </div>
                <div className="api-status">
                    {ApiLog}
                </div>
                <li className="old-user">
                    <Link to="/login">
                        Already a user? Sign in!
                    </Link>
                </li>
            </div> 
        </div>
        :
        <Navigate to="/" />
    );
}
 
export default Signup;