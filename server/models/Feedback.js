// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  message: String,
  rating: { type: Number, min: 1, max: 5 },
  type: {
    type: String,
    enum: ["chatbot", "symptom", "suggestion"],
    default: "chatbot",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);
