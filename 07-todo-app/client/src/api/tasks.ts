import type { Todo } from "../types.d.ts";

export async function fetchTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = (await res.json()) as { data: Todo[] };

  return data;
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
