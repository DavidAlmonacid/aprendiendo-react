import "dotenv/config";
import pg from "pg";

export const pool = new pg.Pool();
