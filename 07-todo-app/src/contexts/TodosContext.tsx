import { createContext, useState } from "react";
import { INITIAL_TODOS } from "../constants.ts";
import type { Todo } from "../types.d.ts";

interface TodosContextProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const TodosContext = createContext({} as TodosContextProps);

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
