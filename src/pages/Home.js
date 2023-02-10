import '../styles/home.scss'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Illustration from '../components/Illustration'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

const Home = () => {
    const [ongoingTasks, setOngoingTasks] = useState([])
    const filterSearchResults = () => {
        const newSearchString = document.getElementById("search").value;
        const JWTtoken = localStorage.getItem('token')
        fetch("http://localhost:3000/api/task", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": JWTtoken
            }})
            .then((response) => {
                if(response.status === 200) {
                    response.text().then((data) => {
                        const allTasks = JSON.parse(data);    
                        var newOngoingTasks = [];
                        allTasks.forEach((ongoingTask) => {
                            if(ongoingTask["heading"].toLowerCase().startsWith(newSearchString.toLowerCase()))  {
                                newOngoingTasks.push(ongoingTask);
                            }
                        })
                        setOngoingTasks(newOngoingTasks)
                    })
                }
            })
    }
    return ( 
        <>
            <Header selectedTab="header-home"/>
            <div className="home">
                <Search
                    filterSearchResults={filterSearchResults}
                />
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