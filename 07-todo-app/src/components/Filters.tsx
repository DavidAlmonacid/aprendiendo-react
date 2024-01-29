import { FILTER_BUTTONS } from "../constants.ts";
import type { FilterValue } from "../types.d.ts";

interface Props {
  selectedFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export function Filters({ selectedFilter, onFilterChange }: Props) {
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([key, { label, href }]) => {
        const isSelected = selectedFilter === key;

        return (
          <li key={key}>
            <a
              href={href}
              className={isSelected ? "selected" : ""}
              // onClick={() => onFilterChange(key)}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
