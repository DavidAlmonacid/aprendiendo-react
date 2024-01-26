import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.tsx";
import type { Todo, TodoId } from "../types";

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const removeTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = ({ id, completed }: Pick<Todo, "id" | "completed">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return { todos, setTodos, removeTodo, completeTodo };
}
