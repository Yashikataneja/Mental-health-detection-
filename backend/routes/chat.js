// // const express = require("express");
// // const router = express.Router();
// // const { chatWithAI } = require("../controllers/chatController");

// // router.post("/chat", chatWithAI);

// // module.exports = router;



// // const express = require("express");
// // const router = express.Router();
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // router.post("/chat", async (req, res) => {
// //   try {
// //     const { message } = req.body;

// //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// //     const result = await model.generateContent(message);
// //     const response = await result.response;
// //     const text = response.text();

// //     res.json({ reply: text });

// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "AI error" });
// //   }
// // });

// // module.exports = router;



// const express = require("express");
// const router = express.Router();
// const OpenAI = require("openai");

// const client = new OpenAI({
//   apiKey: process.env.OPENROUTER_API_KEY,
//   baseURL: "https://openrouter.ai/api/v1"
// });

// router.post("/chat", async (req, res) => {
//   try {
//     const { message } = req.body;

//     const completion = await client.chat.completions.create({
//       model: "openrouter/auto", // 🔥 AUTO MODEL (NO ERRORS)
//       messages: [
//         {
//           role: "system",
//           content: "You are a mental health assistant. Reply in short, simple, 1-2 lines."
//         },
//         {
//           role: "user",
//           content: message
//         }
//       ]
//     });

//     res.json({
//       reply: completion.choices[0].message.content
//     });

//   } catch (error) {
//     console.error("AI ERROR:", error.response?.data || error.message);
//     res.status(500).json({ error: "AI error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const Chat = require("../models/Chat"); // ✅ IMPORTANT

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});


// ✅ AI CHAT
router.post("/chat", async (req, res) => {
  try {
    const { message, chatId, userEmail } = req.body;

    const completion = await client.chat.completions.create({
      model: "openrouter/auto",
      messages: [
        { role: "system", content: "Reply in short 1-2 lines." },
        { role: "user", content: message }
      ]
    });

    const botReply = completion.choices[0].message.content;

    let chat;

    // 👉 agar chatId hai → update
    if (chatId) {
      chat = await Chat.findById(chatId);

      chat.messages.push(
        { sender: "user", text: message },
        { sender: "bot", text: botReply }
      );

      await chat.save();
    } 
    // 👉 nahi hai → new chat create
    else {
      chat = new Chat({
        userEmail,
        messages: [
          { sender: "user", text: message },
          { sender: "bot", text: botReply }
        ]
      });

      await chat.save();
    }

    res.json({
      reply: botReply,
      chatId: chat._id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
});


// ✅ NEW CHAT CREATE
router.post("/newChat", async (req, res) => {
  try {
    const { userEmail } = req.body;

    const newChat = new Chat({
      userEmail,
      messages: []
    });

    await newChat.save();

    res.json(newChat);
  } catch (err) {
    res.status(500).json({ error: "Error creating chat" });
  }
});


// ✅ SAVE CHAT
router.post("/saveChat", async (req, res) => {
  try {
    const { chatId, messages } = req.body;

    await Chat.findByIdAndUpdate(chatId, { messages });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Error saving chat" });
  }
});


// ✅ GET ALL CHATS
router.get("/chats/:email", async (req, res) => {
  try {
    const chats = await Chat.find({
      userEmail: req.params.email
    }).sort({ createdAt: -1 });

    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Error fetching chats" });
  }
});

module.exports = router;