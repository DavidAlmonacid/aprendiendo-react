import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import type { Todo } from "../types";

type Props = Todo;

export function Todo({ id, title, completed }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsEditing(false);
    updateTodo({ id, title: newTitle });
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

          <label>{newTitle || title}</label>

          <button className="destroy" onClick={handleRemove}></button>
        </>
      ) : (
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="new-todo"
            style={{ color: "#484848" }}
            value={newTitle || title}
            onChange={(event) => setNewTitle(event.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}
