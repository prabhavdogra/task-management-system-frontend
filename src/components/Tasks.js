import TaskTile from "./TaskTile";

const Tasks = () => {
    return ( 
        <div className="all-tasks">
            <div className="all-tasks-heading">
            Ongoing Tasks
            </div>
            <div className="tasks">
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
 
export default Tasks;