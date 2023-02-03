import '../styles/home.scss'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Illustration from '../components/Illustration'

const Home = () => {
    console.log("Home Rendered");
    return ( 
        <div className="home">
            <Search/>
            <Illustration/>
            <Tasks/>
        </div>
     );
}
 
export default Home;