import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/db";
import { User } from "../models/userModel";
import { validationResult } from "express-validator";
import {
  sendClientError,
  sendServerError,
  sendSuccess,
} from "../utils/standardResponse";
import {
  ClientErrorHttpStatusCode,
  ServerErrorHttpStatusCode,
  SuccessHttpStatusCode,
} from "../enums/httpStatusCodes";

// Registration
export const register = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  const isError = !errors.isEmpty();

  if (isError) {
    sendClientError({
      res,
      status: ClientErrorHttpStatusCode.BAD_REQUEST_400,
      error: errors.array(),
    });
    return;
  }

  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    sendSuccess({
      res,
      status: SuccessHttpStatusCode.CREATED_201,
      message: "User registered successfully",
    });
  } catch (error) {
    sendServerError({
      res,
      status: ServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR_500,
      error: ["Server Error"],
    });
  }
};

// Login
export const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  const isError = !errors.isEmpty();

  if (isError) {
    sendClientError({
      res,
      status: ClientErrorHttpStatusCode.BAD_REQUEST_400,
      error: errors.array(),
    });
    return;
  }

  const { email, password } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    const user = (rows as User[])[0];

    if (!user) {
      sendClientError({
        res,
        status: ClientErrorHttpStatusCode.UNAUTHORIZED_401,
        message: "Invalid email or password",
        error: ["Invalid email or password"],
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      sendClientError({
        res,
        status: ClientErrorHttpStatusCode.UNAUTHORIZED_401,
        message: "Invalid email or password",
        error: ["Invalid email or password"],
      });
      return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });
    sendSuccess({
      res,
      status: SuccessHttpStatusCode.OK_200,
      data: { token },
      message: "Success Login",
    });
  } catch (error) {
    sendServerError({
      res,
      status: ServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR_500,
      error: ["Server Error"],
    });
  }
};
