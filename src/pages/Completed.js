import TaskTile from "../components/TaskTile";
import '../styles/completed.scss'

const Completed = () => {
    console.log("Completed Rendered");
    return ( 
        <div className="completed">
            <div className="completed-tasks-heading">
            Completed Tasks
            </div>
            <div className="tasks">
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
                <TaskTile/>
            </div> 
        </div>
     );
}
 
export default Completed;