import React from "react";
import useCounter from "./useCounter";
function Counter() {
  const [num, incerement, decremant, reset] = useCounter();
  return (
    <div>
      <h2>Number : {num}</h2>
      <button onClick={incerement}>Increment</button>
      <button onClick={decremant}>Decremant</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
