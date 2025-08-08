import Conversation from "../models/Conversation.js";

export const sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const userMessage = { sender: "user", text: message };

    // basic dummy bot response (replace later with AI logic)
    const botResponse = {
      sender: "bot",
      text: `You said: "${message}". How can I help further?`,
    };

    // Fetch or create a conversation
    let conversation;
    if (userId) {
      conversation = await Conversation.findOne({ userId });
      if (!conversation) {
        conversation = new Conversation({
          userId,
          messages: [userMessage, botResponse],
        });
      } else {
        conversation.messages.push(userMessage, botResponse);
      }
    } else {
      // For guest users
      conversation = new Conversation({ messages: [userMessage, botResponse] });
    }

    await conversation.save();

    res.json({ response: botResponse.text });
  } catch (err) {
    console.error("Chatbot error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
