import InputTile from "./InputTile";

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
                <InputTile fieldData={{label: "Heading", value: "Web Designing"}}></InputTile>
                <InputTile fieldData={{label: "Content", value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quidem amet, unde numquam esse velit odit vero, asperiores quis hic rem aliquid libero delectus earum ex fugiat suscipit quisquam eum."}}></InputTile>
                <InputTile fieldData={{label: "Progress", value: "20%"}}></InputTile>
                <button className="update">
                    Update Task Details
                </button>
            </section>
            <div className="overlay" onClick={(e) => props.hideModal()}></div>
        </div>
     );
}
 
export default Modal;