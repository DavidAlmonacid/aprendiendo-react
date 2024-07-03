import { Box, Card, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useQuestionsStore } from "../stores/questions";
import type { Question as QuestionType } from "../types";

function Question({ question }: { question: QuestionType }) {
  return (
    <Card variant="outlined">
      <Typography
        variant="h6"
        component="h2"
        lineHeight={1.5}
        padding={1}
        marginBottom={1}
      >
        {question.question}
      </Typography>

      <Box fontSize={14}>
        <SyntaxHighlighter language={question.language} style={gradientDark}>
          {question.code}
        </SyntaxHighlighter>
      </Box>
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
