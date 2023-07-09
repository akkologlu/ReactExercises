import { useContext } from "react";
import {NumberContext} from "./App"
function Calculate() {
    
  const numberContext = useContext(NumberContext);
  return (
    <div>
      <div>Number = {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increase")}>Increase</button>
      <button onClick={() => numberContext.dispatch("decrease")}>Decrease</button>
      <button onClick={() => numberContext.dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Calculate;
