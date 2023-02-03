import '../styles/tasks.scss'

const TaskTile = (props) => {

    // Add character limits in content
    // {taskInfo={{date: "1 Nov 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}}
    return ( 
        <div className="task-tile">
            <div className="tile-container">
                <div className="date">
                    {props.taskInfo.date}
                </div>
                <div className="heading">
                    {props.taskInfo.heading}
                </div>
                <div className="content">
                    {props.taskInfo.content}
                </div>
                <div className="progress-bar">
                    <div className="progress-color"></div>
                </div>
                <div className="progress-info">
                    <div>Progress</div>
                    <div>{props.taskInfo.progress}%</div>
                </div>
            </div>
        </div> 
    );
}
 
export default TaskTile;