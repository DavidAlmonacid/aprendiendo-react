import cors from "cors";
import express from "express";

import { translateRouter } from "./routes/translate.js";

import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/translate", translateRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
