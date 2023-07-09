import './App.css';
import React, {  useReducer} from "react";
import Calculate from './Calculate';


export const NumberContext = React.createContext();

const initialValue = 0;

const reducer = (state, action) => {
  switch(action){
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;

  }
}


function App() {



const [count, dispatch] =  useReducer(reducer,initialValue)




  return (
    <div className="App">
      <NumberContext.Provider value={{count:count, dispatch:dispatch}}>
        <Calculate/>
      </NumberContext.Provider>
      
    </div>
  );
}

export default App;