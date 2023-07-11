import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function Personalnfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Name</label>
          <input
            type="text"
            //   value={firstName}
            //     onChange={(e) => setFirstName(e.target.value)
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            //   value={lastName}
            //     onChange={(e) => setLastName(e.target.value)
            {...bindLastName}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Personalnfo;
