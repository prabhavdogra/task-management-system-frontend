import '../styles/illustration.scss'
import vector from "../assets/images/vector.png";
import { useState } from 'react';
import Modal from './Modal';

const Illustration = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const [isModalUpdating, setIsModalUpdating] = useState(false);
    const modalData = {
        date: null,
        heading: "",
        content: "",
        progress: "",
    }
    const addTask = () => {
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
        console.log(taskDetails)
        fetch("http://localhost:3000/api/task/create", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": JWTtoken
            },
            body: JSON.stringify(taskDetails)
        }).then((response) => {
            if(response.status !== 200) {
                console.log("Something went wrong", response.status);
            }
            setIsModalUpdating(false);
            hideModal()
        })
    }
    const showModal = () => setModalStatus(true)
    const hideModal = () => setModalStatus(false)
    return ( 
        <div className="illustration">
            <div className="big-container">
                <div className="white-container">
                    <div className="text">
                        <div className="heading">
                            Plan Your Day!
                        </div>
                        <div className="subheading">
                            Save late night office food expenses.
                        </div>
                        <div className="add-task-btn" onClick={(e) => showModal()}>
                            <button>Add task</button>
                        </div>
                    </div>
                    <div className="illustration-image">
                        <img src={vector} alt="" />
                    </div>
                </div>
            </div>
            {
                modalStatus
                ?
                <Modal hideModal={hideModal}
                modalData={modalData}
                onFormSubmit={addTask}
                isModalUpdating={isModalUpdating}
                />
                :
                <></>
            }
        </div>
     );
}
 
export default Illustration;