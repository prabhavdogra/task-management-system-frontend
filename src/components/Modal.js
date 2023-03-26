import InputTile from "components/InputTile";
import 'styles/modal.scss'
import { TASK_BY_ID_DELETE } from "urls";
import formatDate from "utils/formatDate";

const Modal = (props) => {
    const deleteTask = (id) => {
        const JWTtoken = localStorage.getItem('token')
        fetch(TASK_BY_ID_DELETE(id), { 
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                "Authorization": JWTtoken
            }
        })
        .then((response) => {
            if(response.status !== 200) {
                console.log("Something went wrong")
            }
            props.hideModal()
            props.updateNonModal()
        });
    }
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
                    props.modalError
                    ?
                    <div className="modal-error">{props.modalError}</div>
                    :
                    <></>
                }
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
                        {
                            props.modalData.id
                            ?
                            <button onClick={() => deleteTask(props.modalData.id)
                            }>
                                Delete Task
                            </button>
                            :
                            <></>
                        }
                    </div>
                }
            </section>
            <div className="overlay" onClick={(e) => props.hideModal()}></div>
        </div>
     );
}
 
export default Modal;