import { useEffect, useState } from "react";
import Header from "components/HeaderComponent";
import Modal from "components/Modal";
import NoTasksCompleted from "components/NoTasksCompleted";
import TaskTile from "components/TaskTile";
import "styles/completed.scss"
import formatDate from "utils/formatDate";
import Loading from "pages/Loading";
import { TASK_GET, TASK_UPDATE_POST } from "urls";

const Completed = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [ongoingTasks, setOngoingTasks] = useState([])
    const [countOfCompletedTasks, setCountOfCompletedTasks] = useState(0);
    const [modalStatus, setModalStatus] = useState(false)
    const [isModalUpdating, setIsModalUpdating] = useState(false);
    const [modalData, setModalData] = useState(null)
    const [modalError, setModalError] = useState(null)
    const updateTasks = () => {
        setIsLoading(true)
        setCountOfCompletedTasks(0)
        const JWTtoken = localStorage.getItem('token')
        fetch(TASK_GET, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": JWTtoken
            }})
            .then((response) => {
                if(response.status === 200) {
                    response.text().then((data) => {
                        const taskData = JSON.parse(data)
                        setOngoingTasks(taskData)
                        taskData.forEach((ongoingTasks) => {
                            if(ongoingTasks["progress"] === 100) {
                                setCountOfCompletedTasks(countOfCompletedTasks + 1)
                            }
                        })
                        setIsModalUpdating(false);
                        hideModal()
                    })
                } else {
                    console.log("Something went wrong", response.status);
                    setIsModalUpdating(false);
                    hideModal()
                }
                setIsLoading(false);
            })
    }

    const showModal = (props) => {
        setModalStatus(true)
        setModalData(props)
    }

    const hideModal = () => {
        setModalStatus(false)
        setModalError(null)
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
        setIsModalUpdating(true);
        setModalError(null);
        if(heading === "") {
            setIsModalUpdating(false);
            setModalError("Heading can't be empty")
            return;
        }
        if(content === "") {
            setIsModalUpdating(false);
            setModalError("Content can't be empty")
            return;
        }
        if(isNaN(progress) || Number(progress) > 100 || Number(progress) < 0) {
            setIsModalUpdating(false);
            setModalError("Progress must be an integer between 1 and 100")
            return;
        }
        fetch(TASK_UPDATE_POST, {
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
            setIsModalUpdating(false)
            setModalStatus(false)
            updateTasks();
        })
    }

    useEffect(() => {
        const JWTtoken = localStorage.getItem('token')
        fetch(TASK_GET, {
            headers: {
                "Accept": "application/json",
                "Authorization": JWTtoken
            },
        }).then((response) => {
            if(response.status === 200) {
                response.text().then((data) => {
                    const taskData = JSON.parse(data);
                    setOngoingTasks(taskData)
                    taskData.forEach((ongoingTask) => {
                        if(ongoingTask["progress"] === 100) {
                            setCountOfCompletedTasks(countOfCompletedTasks + 1);
                            console.log(1)
                        }
                    })
                });
            } else {
                console.log("Something went wrong!", response.status)
            }
            setIsLoading(false);
            console.log(countOfCompletedTasks)
        });
    }, [])

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
                    (countOfCompletedTasks > 0)
                    ?
                    ongoingTasks.map((ongoingTask) => {
                        if(ongoingTask["progress"] !== 100) {
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
                    :
                    <NoTasksCompleted/>
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
                modalError={modalError}
                />
                :
                <></>
            }
            </div>
            }
        </>
    );
}
 
export default Completed;