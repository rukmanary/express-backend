import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/db";
import { User } from "../models/userModel";
import { validationResult } from "express-validator";

// Registration
export const register = async (req: Request, res: Response): Promise<void> => {
  console.log("masuk sini");
  const errors = validationResult(req);
  const isError = !errors.isEmpty();

  if (isError) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Server error" });
  }
};

// Login
export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  const isError = !errors.isEmpty();

  if (isError) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    const user = (rows as User[])[0];

    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
