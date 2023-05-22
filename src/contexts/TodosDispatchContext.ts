import { Dispatch, createContext } from "react";
import { Action } from "../reducers/TodosReducer";

export const TodosDispatchContext = createContext<Dispatch<Action>>(() => {
  return;
});
