import { TodoInput } from "./TodoInput";

export function Header() {
  return (
    <header className="header">
      <h1>Todo App</h1>

      <TodoInput />
    </header>
  );
}
