import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { useQuestionsStore } from "../stores/questions";
import { Question } from "./question";

export function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestionIndex = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box sx={{ margin: "0 !important" }}>
      <Stack direction="row" justifyContent="center" marginY="8px">
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowBackIosNew sx={{ paddingRight: "3px" }} />
        </IconButton>

        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <ArrowBackIosNew sx={{ paddingRight: "3px", rotate: "180deg" }} />
        </IconButton>
      </Stack>

      <Question question={currentQuestion} />
    </Box>
  );
}
