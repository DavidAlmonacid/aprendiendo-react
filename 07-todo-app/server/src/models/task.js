import { pool } from "../utils/dbConnection.js";

export class TaskModel {
  static async getAll() {
    try {
      const { rows: tasks } = await pool.query(
        "SELECT id, title, completed FROM tasks"
      );

      return { success: true, data: tasks };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
}
