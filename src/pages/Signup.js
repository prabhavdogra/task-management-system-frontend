import { Link } from "react-router-dom";
import LoginImage from "../assets/images/login.webp";
import InputTile from "../components/InputTile";
import '../styles/signup.scss'

const Signup = () => {
    return ( 
        <div className="signup">
            <div className="login">
        <img src={LoginImage} alt="" />
        <div className="container">
            <InputTile fieldData={{label: "Name"}}/>
        </div>
        <div className="container">
            <InputTile fieldData={{label: "Email ID"}}/>
        </div>
        <div className="container">
            <InputTile fieldData={{label: "Password"}}/>
        </div>
        <div className="container">
            <button>
                Sign Up
            </button>
        </div>

        <li className="old-user">
            <Link to="/login">
                Already a user? Sign in!
            </Link>
        </li>
    </div> 
        </div>
    );
}
 
export default Signup;