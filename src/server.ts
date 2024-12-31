import dotenv from "dotenv";
import app from "./app";

// Load configuration from .env file
dotenv.config();

// Port Configuration
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
