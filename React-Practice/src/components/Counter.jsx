import "./Counter.css";
import { useState } from "react";

function Counter() {
    // let x = 0;
  const [x, setX] = useState(0);
//   function increase() {
//     setX(x + 1);
//     // console.log(x);
//   }
//   function dicrease() {
//     setX(x - 1);
//     // console.log(x);
//   }
//   function reset() {
//     setX(0);
//     // console.log(x);
//   }
  return (
    <>
      <div>{x}</div>
      <button onClick={()=>setX(x+1)}>Click Me For increase</button>
      <button onClick={()=>setX(0)}>Click Me For reset</button>
      <button onClick={()=>setX(x-1)}>Click Me For Dicrease</button>
    </>
  );
}
export default Counter;
