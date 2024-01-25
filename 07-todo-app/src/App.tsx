import { useState } from "react";
import { Todos } from "./components/Todos.tsx";

const mockTodos = [
  { id: "1", title: "Aprender React", completed: false },
  { id: "2", title: "Aprender TypeScript", completed: true },
  { id: "3", title: "Aprender Vite", completed: false }
];

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
}

export default App;
