import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../types";

type Props = Todo;

export function Todo({ id, title, completed }: Props) {
  const { removeTodo, completeTodo } = useTodos();

  const handleRemove = () => {
    removeTodo({ id });
  };

  const handleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    completeTodo({ id, completed: event.target.checked });
  };

  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleComplete}
      />

      <label>{title}</label>

      <button className="destroy" onClick={handleRemove}></button>
    </div>
  );
}
