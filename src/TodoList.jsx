import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const URL = `http://todoServer.com/tagged/${props.tag}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
  const URL = `http://todoServer.com/tagged/${props.tag}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => setTodos(data));
}, [props.tag]);


  return (
    <>
      <h2>Todos List:</h2>
      <div className="todo-list">
        {todos.map((todoData) => (
          <Todo data={todoData} />
        ))}
      </div>
    </>
  );
};


export default TodoList;