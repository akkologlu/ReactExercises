import React from "react";
import { myData } from "./propstypes";

function Skills(props: myData) {
  return <div>{props.skills.year}</div>;
}

export default Skills;
