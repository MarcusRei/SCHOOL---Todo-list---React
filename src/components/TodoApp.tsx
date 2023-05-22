import { useReducer } from "react";
import { TodosReducer } from "../reducers/TodosReducer";
import "../styles/TodoApp.css";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { TodosContext } from "../contexts/TodosContext";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  console.log(todos);

  return (
    <div className="todo__wrapper">
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <h1>Your todo-list</h1>
          <AddTodo></AddTodo>
          <h2>Your todos</h2>
          <TodoList></TodoList>
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </div>
  );
};
