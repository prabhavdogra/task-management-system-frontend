import { useEffect, useState } from "react";
import TaskTile from "./TaskTile";
import '../utils/formatDate'
import formatDate from "../utils/formatDate";
import '../styles/tasks.scss'
import Modal from "./Modal";

const Tasks = () => {
    const [ongoingTasks, setOngoingTasks] = useState([])
    const [isModalUpdating, setIsModalUpdating] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [modalData, setModalData] = useState(null)

    const showModal = (props) => {
        setModalStatus(true)
        setModalData(props)
    }
    const hideModal = () => {
        setModalStatus(false)
        setModalData(null)
    }

    const updateTaskDetails = () => {
        const heading = document.getElementById("heading").value;
        const content = document.getElementById("content").value;
        const progress = document.getElementById("progress").value;
        const JWTtoken = localStorage.getItem('token')
        var taskDetails = {
            "id" : modalData.id,
            "heading" : heading,
            "content" : content,
            "progress" : Number(progress),
        }
        console.log(taskDetails);
        setIsModalUpdating(true);

        fetch("http://localhost:3000/api/task/update", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : JWTtoken
            },
            body: JSON.stringify(taskDetails)
        }).then((response) => {
            if(response.status !== 200) {
                console.log("Something went wrong", response.status);
            }
        });

        fetch("http://localhost:3000/api/task", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": JWTtoken
            },
        }).then((response) => {
            if(response.status === 200) {
                response.text().then((data) => {
                    const taskData = JSON.parse(data)
                    setOngoingTasks(taskData)
                    setIsModalUpdating(false);
                    hideModal()
                })
            } else {
                console.log("Something went wrong", response.status);
                setIsModalUpdating(false);
                hideModal()
            }
        })
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
                    });
                }
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
                <Modal hideModal={hideModal}
                modalData={modalData}
                onFormSubmit={updateTaskDetails}
                isModalUpdating={isModalUpdating}
                />
                :
                <></>
            }
        </div>
    );
}
 
export default Tasks;