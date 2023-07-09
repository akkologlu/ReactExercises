import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  //const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);
  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const inputRef = useRef();
  useEffect(() => {
    //setRenderCount(renderCount+1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim adım {name}</div>
      <div>{renderCount.current} defa render oldu.</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
