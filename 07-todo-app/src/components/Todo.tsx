import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../types";

type Props = Todo;

export function Todo({ id, title, completed }: Props) {
  const { removeTodo } = useTodos();

  const handleRemove = () => {
    removeTodo({ id });
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        // onChange={(e) => {
        //   setCompleted(id, e.target.checked);
        // }}
      />

      <label>{title}</label>

      <button className="destroy" onClick={handleRemove}></button>
    </div>
  );
}
