// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const morgan = require("morgan");
// const authRoutes = require("./routes/auth");
// //const chatRoutes = require("./routes/chat");
// const chatRoutes = require("./routes/chat");
// const safeSpaceRoutes = require("./routes/safeSpaceRoutes");


// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(morgan("dev"));
// app.use("/api/auth", authRoutes);

// app.use("/api/journal", require("./routes/journal"));
// app.use("/api/transcribe", require("./routes/transcription"));
// //app.use("/api", chatRoutes);
// app.use("/api", chatRoutes);
// app.use("/api/safe-space", safeSpaceRoutes);

// // const PORT = 5000;


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// app.get("/", (req, res) => {
//     res.send("Backend is running successfully 🚀");
//   });




require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const safeSpaceRoutes = require("./routes/safeSpaceRoutes");

const app = express();

// 🔥 Connect Database
connectDB();

// 🔥 CORS CONFIG (IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 React frontend URL
    credentials: true
  })
);

// 🔥 Middlewares
app.use(express.json());
app.use(morgan("dev"));

// 🔥 Routes
app.use("/api/auth", authRoutes);
app.use("/api/journal", require("./routes/journal"));
app.use("/api", chatRoutes);
app.use("/api/safe-space", safeSpaceRoutes);

// 🔥 Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// 🔥 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

