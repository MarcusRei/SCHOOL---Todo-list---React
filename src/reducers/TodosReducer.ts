import { Todo } from "../models/Todo";

export enum actionType {
  ADDED,
  TOGGLED,
  REMOVED,
}

export interface Action {
  type: actionType;
  payload: any;
}

export const TodosReducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case actionType.ADDED:
      return [...todos, new Todo(new Date().getTime(), action.payload, false)];

    case actionType.TOGGLED:
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    case actionType.REMOVED:
      return todos.filter((todo) => todo.id.toString() !== action.payload);
  }
};
