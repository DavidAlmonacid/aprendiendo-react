import { useState } from "react";
import { Todos } from "./components/Todos.tsx";

const mockTodos = [
  { id: "1", text: "Aprender React", completed: false },
  { id: "2", text: "Aprender TypeScript", completed: true },
  { id: "3", text: "Aprender Vite", completed: false }
];

function App() {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <>
      <Todos todos={todos} />
    </>
  );
}

export default App;
