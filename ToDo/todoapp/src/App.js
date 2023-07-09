import './App.css';
import ToDoForm from './components/ToDoForm';
import { useState,useEffect } from 'react';
import ToDoList from './components/ToDoList';
import axios from "axios"

function App() {
  
  const [task, setTask] = useState([])
  const [checked, setChecked] = useState(false)


  const onCreate = async (newTask) => {
    const response = await axios.post("http://localhost:3004/tasks",{
      newTask,
      check:checked,
    })

    const createdTask = [...task,response.data];
    setTask(createdTask);
  }

  const onCheck = (checking) => {
    setChecked(checking);
  }

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTask(response.data);
  }
  useEffect(()=>{
    fetchTask();
    
  },[])

  const deletion = async (id) =>{
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeletion=task.filter((tsk) =>{
      return tsk.id !==id;
    });
    setTask(afterDeletion);
  }
  const editTask = (id,title) => {
    const afterUpdateTasks = task.map((tsk)=>{
      if(tsk.id === id){
        return {id,tsk:title}
      }
      return tsk;
    })
    setTask(afterUpdateTasks);
  }
  return (
    
    <div className="App">
    
      <ToDoForm onCreate={onCreate}/>
      
      <ToDoList task={task} deletedId={deletion} onCheck={onCheck} onUpdate={editTask} />
    </div>
  );
}
export default App;