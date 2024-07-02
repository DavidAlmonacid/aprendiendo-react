import { Container, Stack, Typography } from "@mui/material";
import { PythonIcon } from "./components/icons";
import { StartButton } from "./components/start-button";
import { useQuestionsStore } from "./stores/questions";

export default function App() {
  const questions = useQuestionsStore((state) => state.questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={4} alignItems="center">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <PythonIcon />
            <Typography variant="h3" component="h1" fontWeight={700}>
              JavaScript Quiz
            </Typography>
          </Stack>

          {questions.length === 0 ? <StartButton /> : <div>Questions</div>}
        </Stack>
      </Container>
    </main>
  );
}
