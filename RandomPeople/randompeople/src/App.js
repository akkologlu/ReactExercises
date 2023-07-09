import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(10);

  const peopleNumber = (sayi) =>{
    setNum(sayi)
  }

  return (
    <div className="App">
      <Form props={peopleNumber}/>
      <UserList num={num}/>
    </div>
  );
}

export default App;
