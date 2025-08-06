// controllers/symptomController.js
import SymptomSession from "../models/SymptomSession.js";

export const createSymptomSession = async (req, res) => {
  try {
    const { userId, responses } = req.body;

    // Simple evaluation logic (you can expand this)
    let result = "Unknown";
    let recommendedAction = "Please consult a doctor.";

    const answerTexts = responses.map((r) => r.answer.toLowerCase());

    if (answerTexts.includes("fever") && answerTexts.includes("cough")) {
      result = "Possible Flu";
      recommendedAction = "Take rest, stay hydrated, monitor temperature.";
    }

    const session = await SymptomSession.create({
      user: userId,
      responses,
      result,
      recommendedAction,
    });

    res.status(201).json(session);
  } catch (error) {
    console.error("Symptom creation failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserSymptoms = async (req, res) => {
  try {
    const { userId } = req.params;
    const sessions = await SymptomSession.find({ user: userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving sessions" });
  }
};
