import EachToDo from "./EachToDo";

function ToDoList({task , deletedId, onCheck,onUpdate}) {
    return ( 
    <div id="listDiv">
        <div className="container">
            <div className="row">
               
            </div>
        </div>
     
        {task.map((eachTask,index) => {
           return <EachToDo eachTask={eachTask} key={index} deletedId={deletedId} onCheck={onCheck} onUpdate={onUpdate}/>
        })}
    </div> 
    );
}

export default ToDoList;