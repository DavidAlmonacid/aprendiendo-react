import { Card, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useQuestionsStore } from "../stores/questions";
import type { Question as QuestionType } from "../types";

function Question({ question }: { question: QuestionType }) {
  return (
    <Card variant="outlined">
      <Typography variant="h5" component="h2">
        {question.question}
      </Typography>

      <SyntaxHighlighter language={question.language} style={gradientDark}>
        {question.code}
      </SyntaxHighlighter>
    </Card>
  );
}

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
