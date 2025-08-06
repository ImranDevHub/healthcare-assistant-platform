import express from "express";
import { connectDB } from "./config/connectDB.js"; // ✅ your connectDB file
import dotenv from "dotenv";
import cors from "cors";
import symptomRoutes from "./routes/symptomRoutes.js";

dotenv.config();
connectDB(); // ⬅️ This connects to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/symptoms", symptomRoutes);
app.get("/", (req, res) => {
  res.send("🚀 API is running. MongoDB should be connected.");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
