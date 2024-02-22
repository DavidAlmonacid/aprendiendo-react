import { Router } from "express";
import { TaskController } from "../controllers/tasks.js";

export const tasksRouter = Router();

// Get all tasks
tasksRouter.get("/", TaskController.getAll);

// Update a completed task
tasksRouter.patch("/:id", TaskController.updateCompleted);

// Update a title task
// tasksRouter.patch("/:id", TaskController.updateTitle);
