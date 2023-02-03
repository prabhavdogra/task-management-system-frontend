import InputTile from "./InputTile";
import TaskTile from "./TaskTile";

const Tasks = () => {
    
    return ( 
        <div className="all-tasks">
            <div className="all-tasks-heading">
                Ongoing Tasks
            </div>
            <div className="tasks">
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa iusto non facilis consequatur, molestias necessitatibus officiis ut voluptate, sed nostrum deserunt maiores tempora quam excepturi voluptatum dolorem pariatur fugit.", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <TaskTile taskInfo={{date: "1 Nov, 2002", heading: "Web Dashboard", content: "Designing", progress: 30}}/>
                <section className="modal">
                    <div className="close">
                        <div className="close-icon">
                            <button class="close-button">⨉</button>
                        </div>
                    </div>
                    <div className="date">1 Nov 2002</div>
                    <InputTile fieldData={{label: "Heading", value: "Web Designing"}}></InputTile>
                    <InputTile fieldData={{label: "Content", value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quidem amet, unde numquam esse velit odit vero, asperiores quis hic rem aliquid libero delectus earum ex fugiat suscipit quisquam eum."}}></InputTile>
                    <InputTile fieldData={{label: "Progress", value: "20%"}}></InputTile>
                    <button className="update">
                        Update Progress
                    </button>
                </section>
                <div className="overlay"></div>
            </div> 
        </div>
    );
}
 
export default Tasks;