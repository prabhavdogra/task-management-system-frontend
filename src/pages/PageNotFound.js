import { Link } from 'react-router-dom';
import '../styles/404.scss'

const PageNotFound = () => {
    return ( 
        <div className="page-not-found">
            <div className="text">
                Page Not Found! Looks like something went wrong
            </div>
            <div className="login-button">
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default PageNotFound;