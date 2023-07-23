import React from "react";
import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import SkillsList from "./components/SkillsList";
import Request from "./components/Request";
import EventActions from "./components/EventActions";
import LoginCheck from "./components/LoginCheck";
import ContextExample from "./components/ContextExample";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {
  const skills = {
    name: "Typescript",
    year: 2023,
  };
  const skillsList = [
    {
      name: "Typescript",
      year: 2023,
    },
    {
      name: "JavaScript",
      year: 2022,
    },
    {
      name: "React",
      year: 2023,
    },
    {
      name: "Python",
      year: 2020,
    },
  ];
  return (
    <div className="App">
      {/* <Home name="Abdullah Akkoloğlu" age={23} isActive={true} />
      <Skills skills={skills} />
      <SkillsList skillsList={skillsList} />
      <Request status="loading" />
      <EventActions /> */}
      {/* <LoginCheck /> */}
      <ThemeContextProvider>
        <ContextExample />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
