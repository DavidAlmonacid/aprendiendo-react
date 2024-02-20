import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export function TodoInput() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTodo({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a new todo..."
        className="new-todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        autoFocus
      />
    </form>
  );
}
