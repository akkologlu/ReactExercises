import { useState } from "react";

function ToDoForm({ onCreate, eachTask, taskFormUpdate,onUpdate }) {
  const [task, setTask] = useState(eachTask ? eachTask.newTask : "");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(eachTask.id,task);
    }
    else{
        onCreate(task);
    }
    
    setTask("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div>
              <form onSubmit={handleClick}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    value={task}
                    onChange={handleChange}
                  />
                </div>
              </form>
        </div>
      ) : (
        <div>
          <div className="container formContainer">
            <h1 id="title">To Do App</h1>
            <div className="row formDiv">
              <form onSubmit={handleClick}>
                <div className="mb-3">
                  <label className="form-label">Enter Your Task</label>
                  <input
                    className="form-control"
                    value={task}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoForm;
