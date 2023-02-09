import '../styles/tasks.scss'
import formatDate from '../utils/formatDate';

const TaskTile = (props) => {
    let x = props.taskInfo.heading;
    const trim = (text) => {
        if(text.toString().length > 20)
            return x.toString().substr(0, 20) + "...";
        else
            return text;
    }
    const animateToTopAndOpenModal = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        }); 
        props.showModal(props.taskInfo)
    }
    return (
        <div className="task-tile">
            <div className="tile-container" onClick={()=>{animateToTopAndOpenModal()}}>
                <div className="date">
                    {formatDate(props.taskInfo.date)}
                </div>
                <div className="heading">
                    {trim(props.taskInfo.heading)}
                </div>
                <div className="content">
                    {trim(props.taskInfo.content)}
                </div>
                <div className="progress-bar">
                    <div className="progress-color" style={{width: `${props.taskInfo.progress}%`}}></div>
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