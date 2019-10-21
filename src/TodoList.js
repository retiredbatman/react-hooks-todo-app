import React, { useReducer } from "react";
import shortId from "short-id";
import TodoForm from "./TodoForm";
import Footer from "./Footer";
import Todo from "./Todo";

const initialState = {
  todos: [],
  filter: "all"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const todos = [
        ...state.todos,
        {
          text: action.payload,
          completed: false,
          id: shortId.generate(),
          edit: false
        }
      ];
      return { ...state, todos };
    case "FILTER":
      return { ...state, filter: action.payload };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.payload) {
            return { ...t, completed: !t.completed };
          }
          return t;
        })
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter(t => !t.completed) };
    case "TOGGLE_EDIT":
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.payload) {
            return { ...t, edit: !t.edit };
          }
          return t;
        })
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.payload.id) {
            return { ...t, text: action.payload.value };
          }
          return t;
        })
      };
    default:
      return state;
  }
};

export default () => {
  const [{ todos, filter }, dispatch] = useReducer(reducer, initialState);
  const addTodo = value => {
    dispatch({
      type: "ADD_TODO",
      payload: value
    });
  };
  let renderTodos = todos;
  if (filter === "active") {
    renderTodos = renderTodos.filter(t => !t.completed);
  }
  if (filter === "completed") {
    renderTodos = renderTodos.filter(t => t.completed);
  }
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul className="list">
        {renderTodos.map(t => (
          <Todo
            key={t.id}
            todo={t}
            toggleTodo={() => {
              dispatch({
                type: "TOGGLE_TODO",
                payload: t.id
              });
            }}
            deleteTodo={() => {
              dispatch({
                type: "DELETE_TODO",
                payload: t.id
              });
            }}
            toggleEdit={() => {
              dispatch({
                type: "TOGGLE_EDIT",
                payload: t.id
              });
            }}
            editTodo={value => {
              dispatch({
                type: "EDIT_TODO",
                payload: { id: t.id, value }
              });
              dispatch({
                type: "TOGGLE_EDIT",
                payload: t.id
              });
            }}
          />
        ))}
      </ul>
      <Footer todos={todos} dispatch={dispatch} filter={filter} />
    </div>
  );
};
