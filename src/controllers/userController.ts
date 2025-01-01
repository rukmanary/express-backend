import { Request, Response } from "express";
import pool from "../config/db";
import { RowDataPacket } from "mysql2";
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

interface AuthRequest extends Request {
  user?: { id: number };
}

export const getProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user?.id) {
      sendClientError({
        res,
        status: ClientErrorHttpStatusCode.BAD_REQUEST_400,
        message: "User ID is required",
        error: ["User ID is required"],
      });
      return;
    }

    // Query database
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, username, email FROM users WHERE id = ?",
      [req.user.id]
    );

    if (rows.length === 0) {
      sendClientError({
        res,
        status: ClientErrorHttpStatusCode.NOT_FOUND_404,
        message: "User not found",
        error: ["User not found"],
      });
      return;
    }
    sendSuccess({ res, status: SuccessHttpStatusCode.OK_200, data: rows[0] });
  } catch (err) {
    sendServerError({
      res,
      status: ServerErrorHttpStatusCode.INTERNAL_SERVER_ERROR_500,
      error: ["Server Error"],
    });
  }
};
