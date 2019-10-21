import React, { Fragment, useState } from "react";

export default ({ addTodo, isEdit = false, todo = {}, editTodo }) => {
  const [value, setValue] = useState(() => todo.text || "");
  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (isEdit) {
            value && editTodo(value, todo.id);
          } else {
            value && addTodo(value);
          }
          setValue("");
        }}
      >
        <input
          className="add-todo"
          value={value}
          placeholder={!isEdit ? "add todo" : ""}
          onChange={e => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </Fragment>
  );
};
