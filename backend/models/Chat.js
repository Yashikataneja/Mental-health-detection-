// import mongoose from "mongoose";

// const ChatSchema = new mongoose.Schema({

// userMessage:String,

// botReply:String,

// createdAt:{
// type:Date,
// default:Date.now
// }

// });

// export default mongoose.model("Chat",ChatSchema);



const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userEmail: String,
  messages: [
    {
      sender: String,
      text: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);