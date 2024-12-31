import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

// Middleware for request body hanlder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

export default app;
