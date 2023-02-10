import '../styles/home.scss'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Illustration from '../components/Illustration'
import Header from '../components/Header'
import { useState } from 'react'

const Home = () => {
    const [ongoingTasks, setOngoingTasks] = useState([])
    return ( 
        <>
            <Header selectedTab="header-home"/>
            <div className="home">
                <Search/>
                <Illustration 
                    ongoingTasks={ongoingTasks} 
                    setOngoingTasks={setOngoingTasks}
                />
                <Tasks 
                    ongoingTasks={ongoingTasks} 
                    setOngoingTasks={setOngoingTasks}
                />
            </div>
        </>
     );
}
 
export default Home;