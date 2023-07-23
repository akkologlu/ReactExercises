import React from "react";

type myData = {
  skillsList: {
    name: string;
    year: number;
  }[];
};

function SkillsList(props: myData) {
  return (
    <div>
      {props.skillsList.map((item, key) => {
        return (
          <p key={key}>
            {item.name} {item.year}
          </p>
        );
      })}
    </div>
  );
}

export default SkillsList;
