import {
  ChangeEvent,
  FormEvent,
  useContext,
  useReducer,
  useState,
} from "react";
import { TodosReducer, actionType } from "../reducers/TodosReducer";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";

export const AddTodo = () => {
  const [userInput, setUserinput] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    dispatch({ type: actionType.ADDED, payload: userInput });

    setUserinput("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserinput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button>Lägg till</button>
    </form>
  );
};
