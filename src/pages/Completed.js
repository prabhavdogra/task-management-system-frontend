import { useEffect, useState } from "react";
import Header from "../components/Header";
import NoTasksCompleted from "../components/NoTasksCompleted";
import TaskTile from "../components/TaskTile";
import '../styles/completed.scss'
import formatDate from "../utils/formatDate";
import Loading from "./Loading";

const Completed = (props) => {
    const [isLoading, setIsLoading] = useState(true);
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
                    console.log("Something went wrong!", response.status)
                }
                setIsLoading(false);
            });
    })
    return ( 
        <>
            <Header selectedTab="header-completed"/>
            {
            isLoading
            ?
            <Loading/>
            :
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
            }
        </>
     );
}
 
export default Completed;