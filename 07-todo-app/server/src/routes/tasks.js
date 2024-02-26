import { Router } from "express";
import { TaskController } from "../controllers/tasks.js";

export const tasksRouter = Router();

// Get all tasks
tasksRouter.get("/", TaskController.getAll);

// Create a task
tasksRouter.post("/", TaskController.create);

// Delete a task
tasksRouter.delete("/:id", TaskController.delete);

// Update a completed task
tasksRouter.patch("/done/:id", TaskController.updateCompleted);

// Delete all completed tasks
tasksRouter.delete("/done/all", TaskController.deleteAllCompleted);

// Update a title task
tasksRouter.patch("/title/:id", TaskController.updateTitle);
