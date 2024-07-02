import { Button } from "@mui/material";
import { useQuestionsStore } from "../stores/questions";

const LIMIT_QUESTIONS = 10;

export function StartButton() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      ¡Comenzar!
    </Button>
  );
}
