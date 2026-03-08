require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
//const chatRoutes = require("./routes/chat");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);

app.use("/api/journal", require("./routes/journal"));
//app.use("/api", chatRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
  });



