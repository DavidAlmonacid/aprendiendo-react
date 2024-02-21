import { createContext, useState } from "react";
import { fetchTasks } from "../api/tasks.ts";
import type { Todo } from "../types.d.ts";

const initialTodos: Todo[] = await fetchTasks();

interface TodosContextProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const TodosContext = createContext({} as TodosContextProps);

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
