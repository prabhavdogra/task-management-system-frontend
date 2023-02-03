import TaskTile from "./TaskTile";

const Tasks = () => {
    return ( 
        <div className="all-tasks">
            <div className="all-tasks-heading">
            Ongoing Tasks
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
 
export default Tasks;