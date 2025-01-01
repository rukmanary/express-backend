import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendClientError } from "../utils/standardResponse";
import { ClientErrorHttpStatusCode } from "../enums/httpStatusCodes";

export interface AuthRequest extends Request {
  user?: { id: number };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    sendClientError({
      res,
      status: ClientErrorHttpStatusCode.UNAUTHORIZED_401,
      message: "Access denied. No token provided.",
      error: ["Access denied. No token provided."],
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
    };
    req.user = decoded;
    next();
  } catch (err) {
    sendClientError({
      res,
      status: ClientErrorHttpStatusCode.BAD_REQUEST_400,
      message: "Invalid token.",
      error: ["Invalid token."],
    });
  }
};
