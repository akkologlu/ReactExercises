import React from "react";
import { person } from "./propstypes";

function Home(props: person) {
  return (
    <div>
      {props.name} Front end developer. I'm {props.age} years old.
      {props.isActive ? <p>True</p> : <p>False</p>}
    </div>
  );
}

export default Home;
