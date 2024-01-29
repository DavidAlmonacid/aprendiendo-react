import type { TODO_FILTERS } from "./constants.ts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
