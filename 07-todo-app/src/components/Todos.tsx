import { useEffect } from "react";
import { initialTodos } from "../constants.ts";
import { useTodos } from "../hooks/useTodos.ts";
import { Todo } from "./Todo.tsx";

export function Todos() {
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    setTodos(initialTodos);
  }, [setTodos]);

  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          // onDoubleClick={() => { setIsEditing(todo.id) }}
          // className={`
          //   ${todo.completed ? "completed" : ""}
          //   ${isEditing === todo.id ? "editing" : ""}
          // `}
          className={`${todo.completed ? "completed" : ""}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            // setCompleted={setCompleted}
            // setTitle={setTitle}
            // isEditing={isEditing}
            // setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );
}
