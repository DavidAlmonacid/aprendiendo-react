import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.tsx";
import type { TodoId } from "../types";

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const removeTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // const addTodo = (todo: Todo) => {
  //   setTodos([...todos, todo]);
  // };

  // const editTodo = (todo: Todo) => {
  //   const newTodos = todos.map((t) => (t.id === todo.id ? todo : t));
  //   setTodos(newTodos);
  // };

  return { todos, setTodos, removeTodo };
}
