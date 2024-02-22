import { useContext } from "react";
import { fetchTasks, updateCompleted } from "../api/tasks.ts";
import { TodosContext } from "../contexts/TodosContext.tsx";
import type { Todo, TodoId } from "../types.d.ts";

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = ({ title }: { title: string }) => {
    const newTodo: Todo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const updateTodo = ({ id, title }: Pick<Todo, "id" | "title">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const removeTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const removeCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const completeTodo = async ({
    id,
    completed
  }: Pick<Todo, "id" | "completed">) => {
    await updateCompleted({ id, completed });
    const newTodos = await fetchTasks();
    setTodos(newTodos);
  };

  return {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    removeTodo,
    removeCompletedTodos,
    completeTodo
  };
}
