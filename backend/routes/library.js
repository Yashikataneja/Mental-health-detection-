const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const LibraryBookmark = require("../models/LibraryBookmark");

// GET /api/library/saved — fetch all saved condition IDs for logged-in user
router.get("/saved", authMiddleware, async (req, res) => {
  try {
    const bookmarks = await LibraryBookmark.find({ userId: req.user.id });
    res.json({ saved: bookmarks.map((b) => b.conditionId) });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/library/saved/toggle — save or unsave a condition
router.post("/saved/toggle", authMiddleware, async (req, res) => {
  try {
    const { conditionId } = req.body;
    if (!conditionId) return res.status(400).json({ message: "conditionId required" });

    const existing = await LibraryBookmark.findOne({ userId: req.user.id, conditionId });

    if (existing) {
      await existing.deleteOne();
      return res.json({ saved: false, conditionId });
    }

    await LibraryBookmark.create({ userId: req.user.id, conditionId });
    return res.json({ saved: true, conditionId });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
