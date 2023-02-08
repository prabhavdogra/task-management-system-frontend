import { useEffect, useState } from "react";
import InputTile from "./InputTile";
import TaskTile from "./TaskTile";
import '../utils/formatDate'
import formatDate from "../utils/formatDate";
import '../styles/tasks.scss'
import '../styles/modal.scss'

const Tasks = () => {
    const [ongoingTasks, setOngoingTasks] = useState([])
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
                        // console.log(taskData)
                    });
                } else {
                    response.text().then((data) => {
                        // setApiLog(data)
                    });
                }
                // setIsValidatingCredentials(false)
            });
    }, [])
    
    return ( 
        <div className="all-tasks">
            <div className="all-tasks-heading">
                Ongoing Tasks
            </div>
            <div className="tasks">
                {
                    ongoingTasks.map((ongoingTask) => {
                        if(ongoingTask["progress"] === 100) {
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
                }

                <section className="modal">
                    <div className="close">
                        <div className="close-icon">
                            <button class="close-button">⨉</button>
                        </div>
                    </div>
                    <div className="date">1 Nov 2002</div>
                    <InputTile fieldData={{label: "Heading", value: "Web Designing"}}></InputTile>
                    <InputTile fieldData={{label: "Content", value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quidem amet, unde numquam esse velit odit vero, asperiores quis hic rem aliquid libero delectus earum ex fugiat suscipit quisquam eum."}}></InputTile>
                    <InputTile fieldData={{label: "Progress", value: "20%"}}></InputTile>
                    <button className="update">
                        Update Progress
                    </button>
                </section>
                <div className="overlay"></div>
            </div> 
        </div>
    );
}
 
export default Tasks;