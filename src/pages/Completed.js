import TaskTile from "../components/TaskTile";
import '../styles/completed.scss'

const Completed = () => {
    return ( 
        <div className="completed">
            <div className="completed-tasks-heading">
            Completed Tasks
            </div>
            <div className="tasks">
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
            </div> 
        </div>
     );
}
 
export default Completed;