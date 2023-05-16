import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { TodosReducer, actionType } from "../reducers/TodosReducer";
import "../styles/TodoApp.css";

export const TodoApp = () => {
  const [userInput, setUserinput] = useState("");
  const [todos, dispatch] = useReducer(TodosReducer, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserinput(e.target.value);
  }

  function handleClick() {
    dispatch({ type: actionType.ADDED, payload: userInput });

    setUserinput("");
  }

  return (
    <div className="todo__wrapper">
      <h1>Your todo-list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button onClick={handleClick}>Lägg till</button>
      </form>
      <h2>Your todos</h2>
      <ul className="todo__list">
        {todos.map((todo) => {
          return (
            <li
              className="todo"
              onClick={() =>
                dispatch({ type: actionType.TOGGLED, payload: todo.id })
              }
            >
              <input type="checkbox" checked={todo.isDone} />
              <h2 className={todo.isDone ? "done" : ""}>{todo.text}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
