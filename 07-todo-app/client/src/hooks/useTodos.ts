import { useContext } from "react";
import {
  createTask,
  deleteCompletedTasks,
  deleteTask,
  fetchTasks,
  updateCompleted,
  updateTitle
} from "../api/tasks.ts";
import { TodosContext } from "../contexts/TodosContext.tsx";
import type { Todo, TodoId } from "../types.d.ts";

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = async ({ title }: { title: string }) => {
    await createTask({ title });
    const newTodos = await fetchTasks();
    setTodos(newTodos);
  };

  const updateTodo = async ({ id, title }: Pick<Todo, "id" | "title">) => {
    await updateTitle({ id, title });
    const newTodos = await fetchTasks();
    setTodos(newTodos);
  };

  const removeTodo = async ({ id }: TodoId) => {
    await deleteTask({ id });
    const newTodos = await fetchTasks();
    setTodos(newTodos);
  };

  const removeCompletedTodos = async () => {
    await deleteCompletedTasks();
    const newTodos = await fetchTasks();
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
