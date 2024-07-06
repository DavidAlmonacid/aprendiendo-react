import {
  Box,
  Card,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useQuestionsStore } from "../stores/questions";
import type { Question as QuestionType } from "../types";

const setAnswerColor = (question: QuestionType, index: number): string => {
  const { userSelectedAnswer, correctAnswer, isCorrectUserAnswer } = question;

  if (userSelectedAnswer == null) {
    return "transparent";
  }

  if (index === userSelectedAnswer) {
    return isCorrectUserAnswer ? green[700] : red[500];
  }

  if (index === correctAnswer) {
    return green[700];
  }

  return "transparent";
};

export function Question({ question }: { question: QuestionType }) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const currentQuestion = question.question;
  const currentQuestionSplit = currentQuestion.includes("`")
    ? currentQuestion.split("`")
    : null;

  let currentLanguage = question.language;

  if (currentLanguage === "javascript") {
    currentLanguage = "JavaScript";
  } else if (currentLanguage === "sql") {
    currentLanguage = "SQL";
  } else if (currentLanguage === "cpp") {
    currentLanguage = "C++";
  }

  const handleAnswerClick = (answerIndex: number) => {
    selectAnswer(question.id, answerIndex);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: "#222831" }}>
      <Stack direction="column" rowGap="16px" padding="16px">
        <Stack direction="row" justifyContent="flex-end" columnGap="12px">
          <Chip
            label={`Dificultad: ${question.level}`}
            variant="outlined"
            sx={{
              height: "fit-content",
              textTransform: "capitalize",
              fontSize: "12px",
              fontWeight: 500,
              padding: "4px"
            }}
            color="warning"
          />

          <Chip
            label={`Lenguaje: ${currentLanguage}`}
            variant="outlined"
            sx={{
              height: "fit-content",
              textTransform: "capitalize",
              fontSize: "12px",
              fontWeight: 500,
              padding: "4px"
            }}
            color="info"
          />
        </Stack>

        <Typography variant="h6" component="h2" lineHeight={1.5}>
          {currentQuestionSplit != null ? (
            <>
              {currentQuestionSplit[0]}
              <Box
                component="code"
                sx={{
                  display: "inline-block",
                  bgcolor: "#31363F",
                  padding: "0 8px",
                  borderRadius: "4px"
                }}
              >
                {currentQuestionSplit[1]}
              </Box>
              {currentQuestionSplit[2]}
            </>
          ) : (
            currentQuestion
          )}
        </Typography>

        <Box
          fontSize={14.5}
          borderRadius="8px"
          marginBottom="12px"
          overflow="hidden"
        >
          <SyntaxHighlighter language={question.language} style={gradientDark}>
            {question.code}
          </SyntaxHighlighter>
        </Box>

        <List sx={{ bgcolor: "#31363F" }} disablePadding>
          {question.answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton
                sx={{
                  bgcolor: setAnswerColor(question, index),
                  "&:hover": {
                    bgcolor: setAnswerColor(question, index)
                  }
                }}
                onClick={() => {
                  handleAnswerClick(index);
                }}
              >
                <ListItemText primary={answer} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Card>
  );
}
