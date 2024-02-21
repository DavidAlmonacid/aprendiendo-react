import { useTodos } from "../hooks/useTodos.ts";
import type { FilterValue } from "../types.d.ts";
import { Filters } from "./Filters.tsx";

interface Props {
  activeCount: number;
  completedCount: number;
  selectedFilter: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}

export function Footer({
  activeCount = 0,
  completedCount,
  selectedFilter,
  handleFilterChange
}: Props) {
  const { removeCompletedTodos } = useTodos();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} pending tasks</strong>
      </span>

      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={removeCompletedTodos}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
