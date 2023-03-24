import { useEffect, useState } from "react";
import TaskTile from "components/TaskTile";
import 'utils/formatDate'
import formatDate from "utils/formatDate";
import 'styles/tasks.scss'
import Modal from "components/Modal";

const Tasks = (props) => {
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

    const updateTasks = () => {
        const JWTtoken = localStorage.getItem('token')
        fetch("http://localhost:3000/api/task", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": JWTtoken
            }})
            .then((response) => {
                if(response.status === 200) {
                    response.text().then((data) => {
                        const taskData = JSON.parse(data)
                        props.setOngoingTasks(taskData)
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
        }).then(() => {
            updateTasks();
        })
    }
    useEffect(() => {
        updateTasks();
    }, [])
    return ( 
        <div className="all-tasks">
            <div className="all-tasks-heading">
                Ongoing Tasks
            </div>
            <div className="tasks">
                {
                    props.ongoingTasks.map((ongoingTask) => {
                        if(ongoingTask["progress"] === 100) {
                            return null;
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
                updateNonModal={updateTasks}
                />
                :
                <></>
            }
        </div>
    );
}
 
export default Tasks;