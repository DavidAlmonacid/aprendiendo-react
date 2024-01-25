import { Todo } from "./Todo.tsx";

export function Todos({ todos }) {
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
            // setCompleted={setCompleted}
            // setTitle={setTitle}
            // removeTodo={removeTodo}
            // isEditing={isEditing}
            // setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );
}
