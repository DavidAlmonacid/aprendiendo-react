import { useEffect } from "react";
import { INITIAL_TODOS } from "../constants.ts";
import { useTodos } from "../hooks/useTodos.ts";
import { Todo } from "./Todo.tsx";

export function Todos() {
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    setTodos(INITIAL_TODOS);
  }, [setTodos]);

  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          // className={`
          //   ${todo.completed ? "completed" : ""}
          //   ${isEditing === todo.id ? "editing" : ""}
          // `}
          // onDoubleClick={() => { setIsEditing(todo.id) }}
          className={`${todo.completed ? "completed" : ""}`}
        >
          <Todo
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
