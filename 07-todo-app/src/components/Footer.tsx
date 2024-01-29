import type { FilterValue } from "../types.d.ts";
import { Filters } from "./Filters.tsx";

interface Props {
  activeCount: number;
  completedCount: number;
  selectedFilter: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

export function Footer({
  activeCount = 0,
  completedCount = 0,
  selectedFilter,
  onClearCompleted,
  handleFilterChange
}: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} tareas pendientes</strong>
      </span>

      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
    </footer>
  );
}
