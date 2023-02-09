import '../styles/illustration.scss'
import vector from "../assets/images/vector.png";
import { useState } from 'react';
import Modal from './Modal';

const Illustration = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const modalData = {
        date: "",
        heading: "",
        content: "",
        progress: "",
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
                onFormSubmit={() => {}}
                />
                :
                <></>
            }
        </div>
     );
}
 
export default Illustration;