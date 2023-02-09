import { useEffect, useState } from "react";
import TaskTile from "./TaskTile";
import '../utils/formatDate'
import formatDate from "../utils/formatDate";
import '../styles/tasks.scss'
import '../styles/modal.scss'
import Modal from "./Modal";

const Tasks = () => {
    const [ongoingTasks, setOngoingTasks] = useState([])
    const [modalStatus, setModalStatus] = useState(false)
    const attachEventListenersToTaskTiles = () => {
        console.log(11)
        // document.querySelectorAll('.tile-container').forEach(item => {
        //     item.addEventListener('click', event => {
        //         setModalStatus(true)
        //       //handle click
        //     })
        //   })
          
        // var taskTiles = document.getElementsByClassName("task-tile")
        var taskTiles = document.getElementsByClassName("tile-container")
        // console.log(taskTiles)
        // taskTiles.forEach(taskTile => {
        //     taskTile.addEventListener('click', function handleClick(event) {
        //       console.log('taskTile clicked', event);
        //     });
        //   });
          
        for (var i = 0; i < taskTiles.length; i++) {
            taskTiles[i].addEventListener("click", () => {
                console.log("Modal status changed")
                setModalStatus(true);
            }, false)
        }
    }

    const showModal = () => {
        setModalStatus(true)
    }
    const hideModal = () => {
        setModalStatus(false)
    }

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
                        }
                        showModal = {showModal}
                        hideModal = {hideModal}
                        />
                    })
                }
            </div>
            {
                modalStatus
                ?
                <Modal hideModal={hideModal}/>
                :
                <></>
            }
        </div>
    );
}
 
export default Tasks;