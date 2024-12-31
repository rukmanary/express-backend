import { Router } from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/authController";
import multer from "multer";

const router: Router = Router();
const upload = multer();

router.post(
  "/register",
  upload.none(), // Menangani multipart/form-data tanpa file
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 8 })
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
      .withMessage(
        "Password must be at least 8 characters with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol"
      ),
  ],
  register
);

router.post(
  "/login",
  upload.none(),
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login
);

export default router;
