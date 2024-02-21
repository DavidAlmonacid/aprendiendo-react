import { Router } from "express";
import { TaskController } from "../controllers/tasks.js";

export const tasksRouter = Router();

tasksRouter.get("/", TaskController.getAll);
