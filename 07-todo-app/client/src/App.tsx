import { useEffect, useState } from "react";

import type { FilterValue } from "./types.d.ts";

import { TODO_FILTERS } from "./constants.ts";
import { useTodos } from "./hooks/useTodos.ts";

import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Todos } from "./components/Todos.tsx";

function App() {
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL);
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then(({ data }) => {
        setTodos(data);
      });
  }, [setTodos]);

  const handleFilterChange = (filter: FilterValue) => {
    setFilter(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) {
      return !todo.completed;
    }

    if (filter === TODO_FILTERS.COMPLETED) {
      return todo.completed;
    }

    return true;
  });

  return (
    <div className="todoapp">
      <Header />
      <Todos todos={filteredTodos} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        selectedFilter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
