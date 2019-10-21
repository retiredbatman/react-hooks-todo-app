import React from "react";

export default ({ dispatch, filter }) => {
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "FILTER",
            payload: "all"
          })
        }
        className={filter === "all" ? "FilterActive" : ""}
      >
        all
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "FILTER",
            payload: "active"
          })
        }
        className={filter === "active" ? "FilterActive" : ""}
      >
        active
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "FILTER",
            payload: "completed"
          })
        }
        className={filter === "completed" ? "FilterActive" : ""}
      >
        completed
      </button>
    </div>
  );
};
