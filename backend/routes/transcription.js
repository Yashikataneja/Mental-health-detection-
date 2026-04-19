const express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");
const os = require("os");
const path = require("path");
const OpenAI = require("openai");

const router = express.Router();

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

function getAudioExtension(mimeType = "") {
  if (mimeType.includes("webm")) return "webm";
  if (mimeType.includes("mp4")) return "mp4";
  if (mimeType.includes("mpeg")) return "mp3";
  if (mimeType.includes("wav")) return "wav";
  if (mimeType.includes("ogg")) return "ogg";
  return "webm";
}

router.post("/", async (req, res) => {
  const { audio, mimeType, language } = req.body;

  if (!client) {
    return res.status(500).json({
      error:
        "Voice transcription is not configured yet. Add OPENAI_API_KEY to backend/.env."
    });
  }

  if (!audio) {
    return res.status(400).json({ error: "Audio is required." });
  }

  const base64Audio = audio.includes(",") ? audio.split(",")[1] : audio;
  const audioBuffer = Buffer.from(base64Audio, "base64");

  if (!audioBuffer.length) {
    return res.status(400).json({ error: "Audio payload is empty." });
  }

  const tempFilePath = path.join(
    os.tmpdir(),
    `mindscope-${Date.now()}.${getAudioExtension(mimeType)}`
  );

  try {
    await fsPromises.writeFile(tempFilePath, audioBuffer);

    const transcription = await client.audio.transcriptions.create({
      file: fs.createReadStream(tempFilePath),
      model: "whisper-1",
      response_format: "verbose_json",
      ...(language && language !== "auto" ? { language } : {})
    });

    const transcript = (transcription.text || "").trim();

    if (!transcript) {
      return res.status(422).json({
        error: "No speech was detected in the recording. Please try again."
      });
    }

    return res.json({
      transcript,
      language: transcription.language || language || "auto"
    });
  } catch (error) {
    console.error("Transcription error:", error);
    return res.status(500).json({
      error: "Unable to transcribe audio right now."
    });
  } finally {
    await fsPromises.unlink(tempFilePath).catch(() => {});
  }
});

module.exports = router;
