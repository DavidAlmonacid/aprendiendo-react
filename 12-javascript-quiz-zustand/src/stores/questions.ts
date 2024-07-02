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
    console.log("fetchQuestions");
  }
}));
