const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

// GET /api/user/:email
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }, { password: 0, __v: 0 });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT /api/user/update — update name & notifications
router.put("/update", async (req, res) => {
  try {
    const { email, name, notifications, darkMode } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    const updateFields = {};
    if (name !== undefined) updateFields.name = name.trim();
    if (notifications !== undefined) updateFields.notifications = notifications;
    if (darkMode !== undefined) updateFields.darkMode = darkMode;

    const updated = await User.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true, select: "-password -__v" }
    );

    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Profile updated successfully", user: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT /api/user/update-password
router.put("/update-password", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    if (!email || !oldPassword || !newPassword)
      return res.status(400).json({ error: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!user.password) return res.status(400).json({ error: "Password change not available for Google accounts" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: "Current password is incorrect" });

    if (newPassword.length < 6)
      return res.status(400).json({ error: "Password must be at least 6 characters" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// DELETE /api/user/:email
router.delete("/:email", async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ email: req.params.email });
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
