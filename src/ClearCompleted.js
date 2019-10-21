import React from "react";

const isCompleted = todos => {
  return todos.some(t => t.completed);
};

export default ({ todos, dispatch }) => {
  return (
    <div>
      {isCompleted(todos) && (
        <button
          onClick={() =>
            dispatch({
              type: "CLEAR_COMPLETED"
            })
          }
        >
          clear completed
        </button>
      )}
    </div>
  );
};
