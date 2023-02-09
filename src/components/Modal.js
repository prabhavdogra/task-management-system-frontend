import InputTile from "./InputTile";
import '../styles/modal.scss'
import formatDate from "../utils/formatDate";

const Modal = (props) => {
    

    return ( 
        <div className="modal">
            <section className="modal-popup">
                <div className="close">
                    <div className="close-icon">
                        <button className="close-button" onClick={(e) => props.hideModal()}>⨉</button>
                    </div>
                    <div className="date">
                        {formatDate(props.modalData.date)}
                    </div>
                </div>
                <InputTile fieldData={{label: "Heading", value: props.modalData.heading, inputDivID: "heading"}} ></InputTile>
                <InputTile fieldData={{label: "Content", value: props.modalData.content, inputDivID: "content"}}></InputTile>
                <InputTile fieldData={{label: "Progress", value: props.modalData.progress, inputDivID: "progress"}}></InputTile>
                {
                    props.isModalUpdating
                    ?
                    <>Updating...</>
                    :
                    <div className="buttons">
                        <button className="update" onClick={() => {
                            props.onFormSubmit()
                        }
                        }>
                            Update Task Details
                        </button>
                        <button onClick={() => {
                            
                        }
                        }>
                            Delete Task
                        </button>
                    </div>
                }
            </section>
            <div className="overlay" onClick={(e) => props.hideModal()}></div>
        </div>
     );
}
 
export default Modal;