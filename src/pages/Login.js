import { Link } from "react-router-dom";
import LoginImage from "../assets/images/login.webp";
import InputTile from "../components/InputTile";
import '../styles/login.scss'

const Login = () => {
    return ( 
    <div className="login">
        <img src={LoginImage} alt="" />
        <div className="container">
            <InputTile fieldData={{label: "Email ID"}}/>
        </div>
        <div className="container">
            <InputTile fieldData={{label: "Password"}}/>
        </div>
        <div className="container">
            <button>
                Log In
            </button>
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