import type { Todo, TodoId } from "../types.d.ts";

export async function fetchTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = (await res.json()) as { data: Todo[] };

  return data;
}

export async function createTask({ title }: Pick<Todo, "title">) {
  await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
}

export async function updateCompleted({
  id,
  completed
}: Pick<Todo, "id" | "completed">) {
  await fetch(`http://localhost:3000/api/tasks/done/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  });
}

export async function updateTitle({ id, title }: Pick<Todo, "id" | "title">) {
  await fetch(`http://localhost:3000/api/tasks/title/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
}

export async function deleteTask({ id }: TodoId) {
  await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "DELETE"
  });
}

export async function deleteCompletedTasks() {
  await fetch("http://localhost:3000/api/tasks/done/all", {
    method: "DELETE"
  });
}
