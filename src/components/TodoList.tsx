import { useContext, useReducer } from "react";
import { TodosReducer, actionType } from "../reducers/TodosReducer";
import { TodosContext } from "../contexts/TodosContext";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";

export const TodoList = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodosDispatchContext);

  return (
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
  );
};
