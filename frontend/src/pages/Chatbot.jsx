// import { useState } from "react";
// import axios from "axios";
// import ChatMessage from "./ChatMessage";
// import "../styles/support.css";

// function Chatbot() {

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {

//     if (!input.trim()) return;

//     const userMessage = {
//       sender: "user",
//       text: input
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     try {

//       const res = await axios.post("http://localhost:5000/chat", {
//         message: input
//       });

//       const botMessage = {
//         sender: "bot",
//         text: res.data.reply
//       };

//       setMessages((prev) => [...prev, botMessage]);

//     } catch (error) {

//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: "Sorry, something went wrong."
//         }
//       ]);
//     }

//     setInput("");
//   };

//   return (

//     <div className="chatbot-container">

//       <div className="chat-window">

//         {messages.map((msg, index) => (
//           <ChatMessage
//             key={index}
//             sender={msg.sender}
//             text={msg.text}
//           />
//         ))}

//       </div>

//       <div className="chat-input-box">

//         <input
//           type="text"
//           placeholder="Share how you're feeling..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />

//         <button onClick={sendMessage}>
//           Send
//         </button>

//       </div>

//     </div>
//   );
// }

// export default Chatbot;