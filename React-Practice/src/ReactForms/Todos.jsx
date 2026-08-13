import { useState } from "react";
function Todos() {
  const [inputValue, setInputValue] = useState("");
  // const [todoItems, setTodoItems] = useState([]);
  // let temp = [];
  const addTodo = () => {
    // setTodoItems([...todoItems,{text}])
  };

  return (
    <div className=" d-flex justify-content-center mt-3 h-100">
      <div className=" d-flex p-3 border  w-50 justify-content-between">
        <input
          type="text"
          required
          placeholder="Enter Todo Here"
          className="form-control mx-3 "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="Enter Date"
          required
          className="form-control"
        />
        <button
          className="btn btn-primary mx-3 "
          style={{
            minWidth: "120px",
            maxWidth: "250px",
          }}
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
      <p>{inputValue}</p>
    </div>
  );
}

export default Todos;
