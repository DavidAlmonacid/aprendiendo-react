import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Question } from "../types";

export interface State {
  questions: Question[];
  currentQuestionIndex: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goPreviousQuestion: () => void;
  goNextQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
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
        const questionIndex = newQuestions.findIndex(
          (q) => q.id === questionId
        );
        const questionInfo = newQuestions[questionIndex];
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

        newQuestions[questionIndex] = {
          ...questionInfo,
          userSelectedAnswer: answerIndex,
          isCorrectUserAnswer
        };

        set({ questions: newQuestions });
      },
      goPreviousQuestion: () => {
        const { currentQuestionIndex } = get();
        const previousIndex = currentQuestionIndex - 1;

        if (previousIndex >= 0) {
          set({ currentQuestionIndex: previousIndex });
        }
      },
      goNextQuestion: () => {
        const { currentQuestionIndex, questions } = get();
        const nextIndex = currentQuestionIndex + 1;

        if (nextIndex < questions.length) {
          set({ currentQuestionIndex: nextIndex });
        }
      },
      reset: () => {
        set({ currentQuestionIndex: 0, questions: [] });
      }
    }),
    {
      name: "javascript_quiz_questions"
    }
  )
);
