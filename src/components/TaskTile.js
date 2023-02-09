import '../styles/tasks.scss'

const TaskTile = (props) => {
    let x = props.taskInfo.heading;
    const trim = (text) => {
        if(text.toString().length > 20)
            return x.toString().substr(0, 20) + "...";
        else
            return text;
    }
    return ( 
        <div className="task-tile">
            <div className="tile-container" onClick={(e)=>{props.showModal()}}>
                <div className="date">
                    {props.taskInfo.date}
                </div>
                <div className="heading">
                    {trim(props.taskInfo.heading)}
                </div>
                <div className="content">
                    {trim(props.taskInfo.content)}
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