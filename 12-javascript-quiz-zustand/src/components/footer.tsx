import { Box, Button } from "@mui/material";
import { useQuestionsStore } from "../stores/questions";

export function Footer() {
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <Box
      component="footer"
      sx={{ display: "flex", justifyContent: "center", marginTop: "28px" }}
    >
      <Button variant="outlined" onClick={reset}>
        Resetear Quiz
      </Button>
    </Box>
  );
}
