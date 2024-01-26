import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext.tsx";

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const removeTodo = (id: string) => {
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
