const express = require("express");
const axios = require("axios");
const Journal = require("../models/Journal");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// 🔹 POST - Analyze & Save (Protected)
router.post("/analyze", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Text is required"
      });
    }

    const userId = req.user.id; // 🔥 from JWT

    const aiResponse = await axios.post(
      process.env.ML_SERVICE_URL,
      { text }
    );

    const journal = new Journal({
      userId,
      text,
      analysis: aiResponse.data,
      riskScore: aiResponse.data.riskScore || 0
    });

    await journal.save();

    return res.status(201).json(journal);

  } catch (error) {
    console.error("JOURNAL ERROR:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

// 🔹 GET - Fetch logged-in user's journals
router.get("/", authMiddleware, async (req, res) => {
  try {
    const journals = await Journal.find({
      userId: req.user.id
    }).sort({ createdAt: -1 });

    return res.json(journals);

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

module.exports = router;