import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);
  const incerement = () => {
    setNum((prevNum) => prevNum + 1);
  };
  const decremant = () => {
    setNum((prevNum) => prevNum - 1);
  };
  const reset = () => {
    setNum(0);
  };
  return [num, incerement, decremant, reset];
}

export default useCounter;
