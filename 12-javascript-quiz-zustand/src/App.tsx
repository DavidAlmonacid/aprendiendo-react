import { Box, Container, Stack, Typography } from "@mui/material";

import { Game } from "./components/game";
import { PythonIcon } from "./components/icons";
import { StartButton } from "./components/start-button";
import { useQuestionsStore } from "./stores/questions";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: questions.length === 0 ? "center" : "flex-start",
        padding: "40px",
        height: "100vh"
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="column" spacing={4} alignItems="center">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ scale: questions.length === 0 ? "1" : "0.72" }}
          >
            <PythonIcon />
            <Typography variant="h3" component="h1" fontWeight={700}>
              JavaScript Quiz
            </Typography>
          </Stack>

          {questions.length === 0 ? <StartButton /> : <Game />}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
