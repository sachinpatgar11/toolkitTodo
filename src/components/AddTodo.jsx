import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice.js";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  return (
    <form onSubmit={addTodoHandler} className="todo-form">
      <input
        type="text"
        className="form-input"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="form-addButton">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
