import InputTile from "./InputTile";
import '../styles/modal.scss'

const Modal = (props) => {
    

    return ( 
        <div className="modal">
            <section className="modal-popup">
                <div className="close">
                    <div className="close-icon">
                        <button className="close-button" onClick={(e) => props.hideModal()}>⨉</button>
                    </div>
                </div>
                <div className="date">1 Nov 2002</div>
                <InputTile fieldData={{label: "Heading", value: props.modalData.heading, inputDivID: "heading"}} ></InputTile>
                <InputTile fieldData={{label: "Content", value: props.modalData.content, inputDivID: "content"}}></InputTile>
                <InputTile fieldData={{label: "Progress", value: props.modalData.progress, inputDivID: "progress"}}></InputTile>
                {
                    props.isModalUpdating
                    ?
                    <>Updating...</>
                    :
                    <button className="update" onClick={(e) => {
                        props.onFormSubmit()
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