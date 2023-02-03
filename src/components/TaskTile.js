import '../styles/tasks.scss'

const TaskTile = () => {

    // Add character limits in content
    
    return ( 
        <div className="task-tile">
            <div className="tile-container">
                <div className="date">
                    1 Nov, 2020
                </div>
                <div className="heading">
                    Web Dashboard
                </div>
                <div className="content">
                    Designing
                </div>
                <div className="progress-bar">
                    <div className="progress-color"></div>
                </div>
                <div className="progress-info">
                    <div>Progress</div>
                    <div>30%</div>
                </div>
            </div>
        </div> 
    );
}
 
export default TaskTile;