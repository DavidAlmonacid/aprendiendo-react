import type { Todo as ITodo } from "../types.d.ts";
import { Todo } from "./Todo.tsx";

interface Props {
  todos: ITodo[];
}

export function Todos({ todos }: Props) {
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
