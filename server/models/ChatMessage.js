// models/ChatMessage.js
import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  messages: [
    {
      sender: { type: String, enum: ["user", "bot"], required: true },
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  sessionType: { type: String, default: "default" }, // chatbot, symptom check, etc.
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ChatMessage", chatMessageSchema);
