import React, { Fragment } from "react";
import TodoCount from "./TodoCount";
import Filters from "./Filters";
import ClearCompleted from "./ClearCompleted";

export default ({ todos, dispatch, filter }) => {
  return (
    <Fragment>
      <TodoCount todos={todos} />
      <Filters dispatch={dispatch} filter={filter} />
      <ClearCompleted todos={todos} dispatch={dispatch} />
    </Fragment>
  );
};
