import React from "react";
import { useState } from "react";
import Child from "./Child";
function App() {
  const [x, setX] = useState(0);
  const handleClick = () => console.log("button clicked");
  return (
    <>
      <p>{x}</p>
      <button onClick={() => setX(x + 1)}> Click Me</button>
      <Child clickFn={handleClick}></Child>
    </>
  );
}

export default App;
