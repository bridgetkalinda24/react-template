import React, { useState } from "react";
import TodoList from "./TodoList";

 const Todo = (props) => {
   return (
     <div>
       <h3 className="todo-title">{props.title}</h3>
      <p className="todo-done">Done: {props.done}</p>
     </div>
  )
}

export default Todo;