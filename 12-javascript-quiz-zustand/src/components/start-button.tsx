import { Button } from "@mui/material";
import { useQuestionsStore } from "../stores/questions";

export function StartButton() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(5);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      ¡Comenzar!
    </Button>
  );
}
