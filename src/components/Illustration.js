import '../styles/illustration.scss'
import vector from "../assets/images/vector.png";

const Illustration = () => {
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
                        <div className="add-task-btn">
                            <button>Add task</button>
                        </div>
                    </div>
                    <div className="illustration-image">
                        <img src={vector} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Illustration;