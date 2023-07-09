import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

function EachToDo({ eachTask, deletedId, onCheck,onUpdate }) {
  const [checking, setChecking] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    deletedId(eachTask.id);
  };

  const handleCheck = () => {
    setChecking(!checking);
    onCheck(checking);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleUpdate = (id,title) => {
    setShowEdit(false);
    onUpdate(id,title);
  }

  return (
    <div>
      {showEdit ? (
        <ToDoForm eachTask={eachTask} taskFormUpdate = {true} onUpdate={handleUpdate}/>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <ul className="list-group">
                <li className="list-group-item" id="listItem">
                  <div className="titleDiv">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={handleCheck}
                    />
                    {checking ? (
                      <div className="checked">{eachTask.newTask}</div>
                    ) : (
                      <div>{eachTask.newTask}</div>
                    )}
                  </div>

                  <div>
                    <button onClick={handleDelete} className="btn">
                      <AiOutlineDelete />
                    </button>
                    <button onClick={handleEdit} className="btn">
                      <FiEdit2 />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default EachToDo;
