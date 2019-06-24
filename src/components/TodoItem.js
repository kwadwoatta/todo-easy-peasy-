import React from "react";
import { useActions } from 'easy-peasy';
import { Delete } from '@material-ui/icons'

const TodoItem = ({ todo }) => {
  const {remove, toggle} = useActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }))

  return (
      <div
        className="todo"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <span 
          onClick={() => toggle(todo.id)}
          style={{ cursor: "pointer" }}>
          {todo.title}
        </span>
        <Delete onClick={() => remove(todo.id)}/>
      </div>
  );
};

export default TodoItem;
