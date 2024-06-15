import React from "react";
import { useTodo } from "../../context/TodoContext";

function ListItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();

  const handleOnChange = (id) => {
    toggleTodo(id);
  };

  const destroyHandleClick = (id) => {
    deleteTodo(id);
  };

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleOnChange(todo.id)}
        />
        <label>{todo.text}</label>
        <button onClick={() => destroyHandleClick(todo.id)} className="destroy"></button>
      </div>
    </li>
  );
}

export default ListItem;
