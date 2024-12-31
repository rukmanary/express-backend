import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket } from "mysql2";

interface AuthRequest extends Request {
  user?: { id: number };
}

export const getProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user?.id) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }

    // Query database
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, username, email FROM users WHERE id = ?",
      [req.user.id]
    );

    if (rows.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
