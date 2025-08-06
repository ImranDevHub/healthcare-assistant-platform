// routes/symptomRoutes.js
import express from "express";
import {
  createSymptomSession,
  getUserSymptoms,
} from "../controllers/symptomController.js";

const router = express.Router();

router.post("/", createSymptomSession); // POST /api/symptoms
router.get("/:userId", getUserSymptoms); // GET /api/symptoms/:userId

export default router;
