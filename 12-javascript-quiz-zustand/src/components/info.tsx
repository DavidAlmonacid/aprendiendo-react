import { Chip, Stack } from "@mui/material";

import { useQuestionsData } from "../hooks/use-questions-data";
import type { Question } from "../types";

interface Props {
  language: string;
  level: Question["level"];
}

export function Info({ language, level }: Props) {
  const { correctAnswers, incorrectAnswers } = useQuestionsData();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack
        direction="row"
        alignItems="center"
        fontSize="14px"
        columnGap="16px"
      >
        <span>✅ {correctAnswers}</span>
        <span>❌ {incorrectAnswers}</span>
      </Stack>

      <Stack direction="row" justifyContent="flex-end" columnGap="12px">
        <Chip
          label={`Dificultad: ${level}`}
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
          label={`Lenguaje: ${language}`}
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
    </Stack>
  );
}
