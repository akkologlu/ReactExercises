import React from "react";
import { todoType } from "../appTypes";
type propsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};
function TodoItem({ task, deleteTask }: propsType) {
  return (
    <div>
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
