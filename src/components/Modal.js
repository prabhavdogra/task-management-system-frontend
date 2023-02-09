import { useState } from "react";
import InputTile from "./InputTile";
import '../styles/modal.scss'

const Modal = (props) => {
    const [heading, setHeading] = useState(props.modalData.heading)
    const [content, setContent] = useState(props.modalData.content)
    const [progress, setProgress] = useState(props.modalData.progress)

    const [isUpdating, setIsUpdating] = useState(false)
    
    const updateTaskDetails = () => {
        // const heading;
        // const content;
        // const progress;
    }
    return ( 
        <div className="modal">
            <section className="modal-popup">
                <div className="close">
                    <div className="close-icon">
                        <button className="close-button" onClick={(e) => props.hideModal()}>⨉</button>
                    </div>
                </div>
                <div className="date">1 Nov 2002</div>
                <InputTile fieldData={{label: "Heading", value: props.modalData.heading}} setFieldText = {setHeading} ></InputTile>
                <InputTile fieldData={{label: "Content", value: props.modalData.content}} setFieldText = {setContent}></InputTile>
                <InputTile fieldData={{label: "Progress", value: props.modalData.progress}} setFieldText = {setProgress}></InputTile>
                {
                    isUpdating
                    ?
                    <>Updating...</>
                    :
                    <button className="update" onClick={(e) => {
                        updateTaskDetails()
                    }
                    }>
                        Update Task Details
                    </button>
                }
            </section>
            <div className="overlay" onClick={(e) => props.hideModal()}></div>
        </div>
     );
}
 
export default Modal;