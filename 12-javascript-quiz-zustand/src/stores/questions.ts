import { create } from "zustand";
import type { Question } from "../types";

export interface State {
  questions: Question[];
  currentQuestionIndex: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
}

export const useQuestionsStore = create<State>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  fetchQuestions: async (limit) => {
    const response = await fetch("http://localhost:5173/data.json");
    const data = (await response.json()) as Question[];

    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    set({ questions });
  },
  selectAnswer: (questionId, answerIndex) => {
    const { questions } = get();
    const newQuestions = structuredClone(questions);
    const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
    const questionInfo = newQuestions[questionIndex];
    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

    newQuestions[questionIndex] = {
      ...questionInfo,
      userSelectedAnswer: answerIndex,
      isCorrectUserAnswer
    };

    set({ questions: newQuestions });
  }
}));
