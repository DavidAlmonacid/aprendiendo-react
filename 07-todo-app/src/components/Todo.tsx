import type { Todo } from "../types";

interface Props extends Todo {
  onRemoveTodo: (id: string) => void;
}

export function Todo({ id, title, completed, onRemoveTodo }: Props) {
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

      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id);
        }}
      ></button>
    </div>
  );
}
