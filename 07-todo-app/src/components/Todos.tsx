import type { ListOfTodos } from "../types.d.ts";
import { Todo } from "./Todo.tsx";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: string) => void;
}

export function Todos({ todos, onRemoveTodo }: Props) {
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
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
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
