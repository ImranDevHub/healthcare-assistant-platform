// models/SymptomSession.js
import mongoose from "mongoose";

const symptomSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  responses: [
    {
      question: String,
      answer: String,
    },
  ],
  result: String, // e.g., "Possible Flu"
  recommendedAction: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("SymptomSession", symptomSessionSchema);
