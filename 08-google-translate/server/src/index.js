import "dotenv/config";
import express from "express";
import { translateRouter } from "./routes/translate.js";

const app = express();
app.use(express.json());
app.use("/api/translate", translateRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
