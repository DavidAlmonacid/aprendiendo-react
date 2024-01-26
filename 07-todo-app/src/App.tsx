import { Todos } from "./components/Todos.tsx";
import { TodosProvider } from "./contexts/TodosContext.tsx";

function App() {
  return (
    <TodosProvider>
      <div className="todoapp">
        <Todos />
      </div>
    </TodosProvider>
  );
}

export default App;
