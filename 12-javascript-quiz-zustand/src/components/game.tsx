import { useQuestionsStore } from "../stores/questions";
import { Question } from "./question";

export function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestionIndex = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Question question={currentQuestion} />
    </div>
  );
}
