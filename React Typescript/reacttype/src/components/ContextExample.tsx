import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextExample() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.primary.main }}>ContextExample</div>
  );
}

export default ContextExample;
