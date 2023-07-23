import React from "react";
import { useState } from "react";

function EventActions() {
  const [value, setValue] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setValue("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <button onClick={(event) => handleClick(event, 4)}>Delete</button>
      <input onChange={handleChange} value={value}></input>
      <p>{value}</p>
    </div>
  );
}

export default EventActions;
