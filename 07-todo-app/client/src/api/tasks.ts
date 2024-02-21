export async function fetchTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = await res.json();

  return data;
}
