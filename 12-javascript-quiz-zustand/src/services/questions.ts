import type { Question } from "../types";

export async function getAllQuestions() {
  const response = await fetch("http://localhost:5173/data.json");
  return (await response.json()) as Question[];
}
