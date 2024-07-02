import { create } from "zustand";
import type { Question } from "../types";

export interface State {
  questions: Question[];
  currentQuestionIndex: number;
  fetchQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<State>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  fetchQuestions: async (limit) => {
    const response = await fetch("http://localhost:5173/data.json");
    const data = (await response.json()) as Question[];

    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    set({ questions });
  }
}));
