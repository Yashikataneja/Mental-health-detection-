require("dotenv").config();
const mongoose = require("mongoose");
const SafeSpaceItem = require("../models/SafeSpaceItem");

const data = [
  // mini-games
  {
    title: "Color Match Calm",
    description: "A light focus game to gently shift your attention.",
    category: "mini-games",
    mediaType: "game",
    url: "https://www.crazygames.com/",
  },
  {
    title: "Puzzle Break",
    description: "A simple brain game for a calm mental reset.",
    category: "mini-games",
    mediaType: "game",
    url: "https://poki.com/",
  },

  // music
  {
    title: "Soft Rain Ambience",
    description: "Gentle rain sounds for calm and comfort.",
    category: "music",
    mediaType: "audio",
    duration: "10 min",
    url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
  },
  {
    title: "Piano Peace",
    description: "Slow piano tones for relaxation.",
    category: "music",
    mediaType: "audio",
    duration: "8 min",
    url: "https://www.youtube.com/results?search_query=calm+piano+music",
  },

  // breathing
  {
    title: "Box Breathing",
    description: "Inhale 4, hold 4, exhale 4, hold 4.",
    category: "breathing",
    mediaType: "text",
    duration: "3 min",
  },
  {
    title: "4-4-6 Breathing",
    description: "Inhale for 4, hold for 4, exhale for 6.",
    category: "breathing",
    mediaType: "text",
    duration: "2 min",
  },

  // affirmations (comfort notes)
  {
    title: "You are safe right now.",
    description: "Pause, breathe, and remind yourself that this feeling will pass.",
    category: "affirmations",
    mediaType: "text",
  },
  {
    title: "You are doing your best.",
    description: "Even small steps matter. You are trying, and that counts.",
    category: "affirmations",
    mediaType: "text",
  },
];

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected");

    // idempotent upsert (duplicate nahi banenge)
    const ops = data.map((item) => ({
      updateOne: {
        filter: { title: item.title, category: item.category },
        update: { $set: item },
        upsert: true,
      },
    }));

    const result = await SafeSpaceItem.bulkWrite(ops);
    console.log("Seed done:", result);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

run();
