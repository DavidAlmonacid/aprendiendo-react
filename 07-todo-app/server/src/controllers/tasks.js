import { TaskModel } from "../models/task.js";

export class TaskController {
  static async getAll(req, res) {
    const data = await TaskModel.getAll();

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    return res.json(data);
  }

  static async updateCompleted(req, res) {
    const { id } = req.params;
    const { completed } = req.body;
    const data = await TaskModel.updateCompleted({ id, completed });

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    return res.json(data);
  }

  static async updateTitle(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const data = await TaskModel.updateTitle({ id, title });

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    return res.json(data);
  }

  static async create(req, res) {
    const { title } = req.body;
    const data = await TaskModel.create({ title });

    if (data.error) {
      return res.status(500).json({ error: data.message });
    }

    return res.json(data);
  }
}
