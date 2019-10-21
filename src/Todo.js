import React, { Fragment } from "react";
import TodoForm from "./TodoForm";

export default ({ todo, toggleTodo, deleteTodo, toggleEdit, editTodo }) => {
  return (
    <li
      className={(todo.completed ? "Strike" : "", "list-item")}
      onDoubleClick={toggleEdit}
    >
      {!todo.edit ? (
        <Fragment>
          <div>
            <input
              type="checkbox"
              value={todo.completed}
              onChange={toggleTodo}
            />
            {todo.text}
          </div>
          <button onClick={deleteTodo}>X</button>
        </Fragment>
      ) : (
        <TodoForm editTodo={editTodo} todo={todo} isEdit={true} />
      )}
    </li>
  );
};
