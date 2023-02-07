import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../assets/images/login.webp";
import InputTile from "../components/InputTile";
import '../styles/login.scss'

const Login = () => {
    // const [ApiLog, setApiLog] = useState("");
    // const PostCredentials = () => {
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;
    // }
    return ( 
    <div className="login">
        <img src={LoginImage} alt="" />
        <div className="container">
            <InputTile fieldData={{label: "Email ID", inputDivID: "email"}}/>
        </div>
        <div className="container">
            <InputTile fieldData={{label: "Password", inputDivID: "password"}}/>
        </div>
        <div className="container">
            <button>
                Log In
            </button>
        </div>
        <div className="api-status">
            {/* {ApiLog} */}
        </div>
        <li className="new-user">
            <Link to="/signup">
                New user? Sign Up!
            </Link>
        </li>
    </div> 
    );
}
 
export default Login;