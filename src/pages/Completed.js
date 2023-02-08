import { useEffect, useState } from "react";
import Header from "../components/Header";
import NoTasksCompleted from "../components/NoTasksCompleted";
import TaskTile from "../components/TaskTile";
import '../styles/completed.scss'

const Completed = (props) => {
    const [ongoingTasks, setOngoingTasks] = useState([])
    const [countOfCompletedTasks, setCountOfCompletedTasks] = useState(0)
    useEffect(() => {
        const JWTtoken = localStorage.getItem('token')
        fetch("http://localhost:3000/api/task", {
            headers: {
                "Accept": "application/json",
                "Authorization": JWTtoken
            },
        }).then((response) => {
                if(response.status === 200) {
                    response.text().then((data) => {
                        const taskData = JSON.parse(data);
                        setOngoingTasks(taskData)
                        ongoingTasks.forEach((ongoingTask) => {
                            if(ongoingTask["progress"] === 100) {
                                setCountOfCompletedTasks(setCountOfCompletedTasks + 1);
                            }
                        })
                    });
                } else {
                    response.text().then((data) => {
                        // setApiLog(data)
                    });
                }
                // setIsValidatingCredentials(false)
            });
    }, [])

    const formatDate = (date) => {
        date = date.substring(0, 10)
        let res = new Date( Date.parse(date) );
        res = res.toString()
        res = res.substring(4, 10) + ", " + res.substring(11, 16)
        return res
    }
    return ( 
        <>
            <Header selectedTab="header-completed"/>
            <div className="completed">
                <div className="completed-tasks-heading">
                Completed Tasks
                </div>
                <div className="tasks">
                {
                    countOfCompletedTasks
                    ?
                    ongoingTasks.map((ongoingTask) => {
                        if(ongoingTask["progress"] !== 100) {
                            return <></>
                        }
                        return <TaskTile key={ongoingTask["id"]} taskInfo={
                            {
                                id: ongoingTask["id"],
                                date: formatDate(ongoingTask["time"]),
                                heading: ongoingTask["heading"], 
                                content: ongoingTask["content"],
                                progress: ongoingTask["progress"]
                            }
                        }/>
                    })
                    :
                    <NoTasksCompleted/>
                }
                </div> 
            </div>
        </>
     );
}
 
export default Completed;