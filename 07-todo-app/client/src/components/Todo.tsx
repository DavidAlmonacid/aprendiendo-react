import { useState } from "react";
// import { updateCompleted } from "../api/tasks.ts";
import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../types.d.ts";

type Props = Todo;

export function Todo({ id, title: initialTitle, completed }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const { removeTodo, updateTodo, completeTodo } = useTodos();

  const handleRemove = () => {
    removeTodo({ id });
  };

  const handleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    completeTodo({ id, completed: event.target.checked });
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setIsEditing(false);
    updateTodo({ id, title: title });
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="view" onDoubleClick={handleUpdate}>
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            className="toggle"
            checked={completed}
            onChange={handleComplete}
          />

          <label>{title}</label>

          <button className="destroy" onClick={handleRemove}></button>
        </>
      ) : (
        <form
          className="input-container"
          onSubmit={handleSubmit}
          onBlur={handleBlur}
        >
          <input
            type="text"
            className="new-todo"
            style={{ color: "#484848" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}
