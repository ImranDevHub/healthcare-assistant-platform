// models/Suggestion.js
import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  category: String, // e.g., 'Diabetes', 'General', 'Diet'
  tip: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Suggestion", suggestionSchema);
