// models/Conversation.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ["user", "bot"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const conversationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false, // allow guest users
  },
  messages: [messageSchema],
});

export default mongoose.model("Conversation", conversationSchema);
