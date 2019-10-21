import React from "react";

const activeTodos = todos => {
  return todos.filter(t => !t.completed).length;
};

export default ({ todos }) => {
  return <div>{`${activeTodos(todos)} items left`}</div>;
};
