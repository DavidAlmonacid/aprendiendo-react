import { TaskModel } from "../models/task.js";

export class TaskController {
  static async getAll(req, res) {
    const data = await TaskModel.getAll();

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    return res.json(data);
  }
}
