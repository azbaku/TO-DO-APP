import React from "react";
import { useTodo } from "../../context/TodoContext";
import ListItem from "./ListItem";

let filtered = null;

function List() {
  const { todos, filter } = useTodo();

  filtered = todos;

  if (filter !== "all") {
    filtered = todos.filter((todo) => 
      filter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
    console.log(filtered);
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default List;
