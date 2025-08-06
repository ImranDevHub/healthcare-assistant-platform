// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID or guest ID
  name: String,
  email: String,
  isGuest: { type: Boolean, default: true },
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: "SymptomSession" }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
