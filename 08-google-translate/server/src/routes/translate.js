import { Router } from "express";
import { translate } from "../controllers/translate.js";

export const translateRouter = Router();

translateRouter.get("/", translate);
