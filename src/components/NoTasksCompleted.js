import vector from "../assets/images/complete-tasks.png";
import '../styles/no-tasks-completed.scss'

const NoTasksCompleted = () => {
    return ( 
        <div className="no-tasks-completed">
            <div className="sad-illustration">
                <img src={vector} alt="" />
            </div>
            <div className="text">
                You are a noob! You have 0 completed tasks!
            </div>
        </div>
     );
}
 
export default NoTasksCompleted;