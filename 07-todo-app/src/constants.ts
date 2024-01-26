import type { Todo } from "./types";

export const INITIAL_TODOS: Todo[] = [
  { id: "1", title: "Aprender React", completed: false },
  { id: "2", title: "Aprender TypeScript", completed: true },
  { id: "3", title: "Aprender Vite", completed: false }
];

export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed"
} as const;

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: "All",
    herf: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    label: "Active",
    herf: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    label: "Completed",
    herf: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const;
