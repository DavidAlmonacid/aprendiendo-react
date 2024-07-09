import { useQuestionsStore } from "../stores/questions";

export function useQuestionsData() {
  const questions = useQuestionsStore((state) => state.questions);

  let correctAnswers = 0;
  let incorrectAnswers = 0;

  questions
    .filter(({ isCorrectUserAnswer }) => isCorrectUserAnswer != null)
    .forEach(({ isCorrectUserAnswer }) => {
      isCorrectUserAnswer ? correctAnswers++ : incorrectAnswers++;
    });

  return { correctAnswers, incorrectAnswers };
}
