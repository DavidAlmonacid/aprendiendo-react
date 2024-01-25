export function Todo({ id, title, completed }) {
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
        // onClick={() => {
        //   removeTodo(id);
        // }}
      ></button>
    </div>
  );
}
