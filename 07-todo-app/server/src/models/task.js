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

  static async updateTitle({ id, title }) {
    try {
      await pool.query("UPDATE tasks SET title = $1 WHERE id = $2", [
        title,
        id
      ]);

      return { success: true };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async create({ title }) {
    try {
      await pool.query("INSERT INTO tasks (title) VALUES ($1)", [title]);

      return { success: true };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  static async delete({ id }) {
    try {
      await pool.query("DELETE FROM tasks WHERE id = $1", [id]);

      return { success: true };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
}
