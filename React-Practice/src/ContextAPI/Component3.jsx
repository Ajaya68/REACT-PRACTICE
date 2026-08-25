// import React from 'react'

import { useContext } from "react";
import { ThemeContext } from "../main";

function Component3() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className="border border-black"
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: theme == "light" ? "dark" : "light",
      }}
    >
      My Theme Is {theme}
    </div>
  );
}

export default Component3;
