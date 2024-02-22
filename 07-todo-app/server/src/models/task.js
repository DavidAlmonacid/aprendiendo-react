import { pool } from "../utils/dbConnection.js";

export class TaskModel {
  static async getAll() {
    try {
      const { rows: tasks } = await pool.query(
        "SELECT id, title, completed FROM tasks ORDER BY created_at ASC"
      );

      return { success: true, data: tasks };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async updateCompleted({ id, completed }) {
    try {
      await pool.query("UPDATE tasks SET completed = $1 WHERE id = $2", [
        completed,
        id
      ]);

      return { success: true };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
}
