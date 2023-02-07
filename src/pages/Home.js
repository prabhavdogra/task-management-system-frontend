import '../styles/home.scss'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Illustration from '../components/Illustration'
import Header from '../components/Header'

const Home = () => {
    return ( 
        <>
            <Header selectedTab="header-home"/>
            <div className="home">
                <Search/>
                <Illustration/>
                <Tasks/>
            </div>
        </>
     );
}
 
export default Home;