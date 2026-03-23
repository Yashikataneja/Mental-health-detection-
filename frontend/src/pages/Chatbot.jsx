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




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaRobot } from "react-icons/fa";

// function Chatbot(){

// const navigate = useNavigate();

// const [messages,setMessages] = useState([
// { sender:"bot", text:"Hello 👋 I'm your Mental Health Assistant. How are you feeling today?" }
// ]);

// const [input,setInput] = useState("");

// const getBotReply = (text) => {

// text = text.toLowerCase();

// if(text.includes("sad") || text.includes("depressed")){
// return "I'm really sorry you're feeling this way. Try talking to someone you trust or writing your thoughts in your journal. I'm here with you. 💙";
// }

// if(text.includes("anxious") || text.includes("stress")){
// return "Take a slow deep breath. Try inhaling for 4 seconds and exhaling for 4 seconds. Breathing exercises can really help calm your mind.";
// }

// if(text.includes("happy") || text.includes("good")){
// return "That's wonderful to hear! Keep doing things that bring you joy and positivity. 😊";
// }

// if(text.includes("angry")){
// return "It's okay to feel angry sometimes. Try taking a short walk or stepping away from the situation for a moment.";
// }

// return "I understand. Sometimes expressing your feelings helps a lot. Would you like to tell me more about what's on your mind?";
// };

// const sendMessage = async () => {

// if(!input.trim()) return;

// // user message add
// const userMessage = { sender:"user", text:input };
// setMessages(prev => [...prev, userMessage]);

// try {

//   const res = await fetch("http://localhost:5000/api/chat", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ message: input })
//   });

//   const data = await res.json();

//   const botReply = {
//     sender: "bot",
//     text: data.reply
//   };

//   setMessages(prev => [...prev, botReply]);

// } catch (error) {

//   setMessages(prev => [
//     ...prev,
//     { sender:"bot", text:"AI connection error 😢" }
//   ]);

// }

// setInput("");
// };

// return(

// <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col">

// {/* HEADER */}

// <div className="bg-white shadow p-4 flex items-center gap-4">

// <button onClick={()=>navigate("/dashboard")}> <FaArrowLeft className="text-xl"/> </button>

// <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
// <FaRobot/> Mental Health Assistant
// </h2>

// </div>

// {/* CHAT AREA */}

// <div className="flex-1 p-6 overflow-y-auto">

// {messages.map((msg,index)=>(

// <div key={index} className={`mb-4 flex ${msg.sender==="user"?"justify-end":"justify-start"}`}>

// <div className={`px-4 py-3 rounded-xl max-w-md ${
// msg.sender==="user"
// ? "bg-blue-600 text-white"
// : "bg-white shadow"
// }`}>

// {msg.text}

// </div>

// </div>

// ))}

// </div>

// {/* INPUT */}

// <div className="bg-white p-4 flex gap-4 border-t">

// <input
// value={input}
// onChange={(e)=>setInput(e.target.value)}
// placeholder="Type your message..."
// className="flex-1 border rounded-lg px-4 py-2"
// />

// <button
// onClick={sendMessage}
// className="bg-blue-600 text-white px-6 py-2 rounded-lg"

// >

// Send </button>

// </div>

// </div>

// );

// }

// export default Chatbot;




// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaRobot } from "react-icons/fa";

// function Chatbot(){

// const navigate = useNavigate();

// const [messages,setMessages] = useState([
// { sender:"bot", text:"Hello 👋 I'm your Mental Health Assistant. How are you feeling today?" }
// ]);

// const [input,setInput] = useState("");
// const [loading,setLoading] = useState(false);

// const bottomRef = useRef();

// // auto scroll
// useEffect(()=>{
//   bottomRef.current?.scrollIntoView({ behavior:"smooth" });
// },[messages]);

// const sendMessage = async () => {

// if(!input.trim()) return;

// const userText = input;   // save first
// setInput("");             // 🔥 instant clear

// const userMessage = { sender:"user", text:userText };
// setMessages(prev => [...prev, userMessage]);

// setLoading(true);

// try {
//   const res = await fetch("http://localhost:5000/api/chat", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ message: userText })
//   });

//   const data = await res.json();

//   setLoading(false); // 🔥 stop typing FIRST

//   const botReply = {
//     sender: "bot",
//     text: data.reply
//   };

//   setMessages(prev => [...prev, botReply]);

// } catch (error) {

//   setLoading(false);

//   setMessages(prev => [
//     ...prev,
//     { sender:"bot", text:"AI connection error 😢" }
//   ]);

// }
// };
// return(

// <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col">

// {/* HEADER */}

// <div className="bg-white shadow p-4 flex items-center gap-4">

// <button onClick={()=>navigate("/dashboard")}>
//  <FaArrowLeft className="text-xl"/>
// </button>

// <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
// <FaRobot/> Mental Health Assistant
// </h2>

// </div>

// {/* CHAT AREA */}

// <div className="flex-1 p-6 overflow-y-auto">

// {messages.map((msg,index)=>(

// <div key={index} className={`mb-4 flex ${msg.sender==="user"?"justify-end":"justify-start"}`}>

// <div className={`px-4 py-3 rounded-xl max-w-lg ${
// msg.sender==="user"
// ? "bg-blue-600 text-white"
// : "bg-white shadow"
// }`}>

// {msg.text}

// </div>

// </div>

// ))}

// {/* 🔥 Typing indicator */}
// {loading && (
// <div className="flex justify-start mb-4">
//   <div className="bg-white shadow px-4 py-2 rounded-xl text-gray-500">
//     AI is typing...
//   </div>
// </div>
// )}

// <div ref={bottomRef}></div>

// </div>

// {/* INPUT */}

// <div className="bg-white p-4 flex gap-4 border-t">

// <input
// value={input}
// onChange={(e)=>setInput(e.target.value)}
// placeholder="Type your message..."
// className="flex-1 border rounded-lg px-4 py-2"
// />

// <button
// onClick={sendMessage}
// className="bg-blue-600 text-white px-6 py-2 rounded-lg"
// >

// Send

// </button>

// </div>

// </div>

// );

// }

// export default Chatbot;



// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaRobot } from "react-icons/fa";

// function Chatbot(){

// const navigate = useNavigate();

// const [messages,setMessages] = useState([
// { sender:"bot", text:"Hello 👋 I'm your Mental Health Assistant. How are you feeling today?" }
// ]);

// const [input,setInput] = useState("");
// const [loading,setLoading] = useState(false);

// const bottomRef = useRef();

// // ✅ smooth auto scroll (fixed)
// useEffect(()=>{
//   setTimeout(() => {
//     bottomRef.current?.scrollIntoView({ behavior:"smooth" });
//   },100);
// },[messages, loading]);

// const sendMessage = async () => {

//   if (!input.trim() || loading) return;  // 🔥 stop double call

//   const userText = input;
//   setInput("");

//   const userMessage = { sender: "user", text: userText };
//   setMessages(prev => [...prev, userMessage]);

//   setLoading(true);

//   try {
//     const res = await fetch("http://localhost:5000/api/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ message: userText })
//     });

//     const data = await res.json();

//     setLoading(false);

//     setMessages(prev => [
//       ...prev,
//       { sender: "bot", text: data.reply }
//     ]);

//   } catch (error) {
//     setLoading(false);

//     setMessages(prev => [
//       ...prev,
//       { sender: "bot", text: "AI connection error 😢" }
//     ]);
//   }
// };

// return(

// <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col">

// {/* HEADER */}
// <div className="bg-white shadow p-4 flex items-center gap-4">
// <button onClick={()=>navigate("/dashboard")}>
//  <FaArrowLeft className="text-xl"/>
// </button>

// <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
// <FaRobot/> Mental Health Assistant
// </h2>
// </div>

// {/* CHAT AREA */}
// <div className="flex-1 p-6 overflow-y-auto">

// {messages.map((msg,index)=>(

// <div key={index} className={`mb-4 flex ${msg.sender==="user"?"justify-end":"justify-start"}`}>

// <div className={`px-4 py-3 rounded-xl max-w-lg ${
// msg.sender==="user"
// ? "bg-blue-600 text-white"
// : "bg-white shadow"
// }`}>

// {msg.text}

// </div>

// </div>

// ))}

// {/* 🔥 Typing indicator (clean) */}
// {loading && (
//   <div className="flex justify-start mb-4">
//     <div className="bg-white shadow px-4 py-2 rounded-xl text-gray-500">
//       AI is typing...
//     </div>
//   </div>
// )}

// <div ref={bottomRef}></div>

// </div>

// {/* INPUT */}
// <div className="bg-white p-4 flex gap-4 border-t">

// <input
// value={input}
// onChange={(e)=>setInput(e.target.value)}
// placeholder="Type your message..."
// className="flex-1 border rounded-lg px-4 py-2"
// onKeyDown={(e)=> e.key === "Enter" && sendMessage()} // ✅ enter send
// />

// <button
//   onClick={sendMessage}
//   disabled={loading}   // 🔥 important
//   className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
// >
//   Send
// </button>

// </div>

// </div>

// );

// }

// export default Chatbot;


// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaRobot } from "react-icons/fa";

// function Chatbot() {
//   const navigate = useNavigate();

//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const bottomRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages, loading]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     const userText = input;
//     setInput("");

//     setMessages((prev) => [...prev, { sender: "user", text: userText }]);

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: data.reply }
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "AI connection error 😢" }
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 flex items-center gap-4 shadow">

//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-white/20 p-2 rounded-lg"
//         >
//           <FaArrowLeft />
//         </button>

//         <h2 className="text-lg font-semibold flex items-center gap-2">
//           <FaRobot /> MindScope Assistant
//         </h2>

//       </div>

//       {/* CHAT AREA */}
//       <div className="flex-1 overflow-y-auto px-6 py-4">

//         {/* CENTER EMPTY UI */}
//         {messages.length === 1 && (
//           <div className="flex flex-col items-center justify-center h-full text-gray-400">
//             <FaRobot className="text-4xl mb-3" />
//             <p className="text-lg">Start a conversation</p>
//             <p className="text-sm">
//               I'm here to support your mental health 💙
//             </p>
//           </div>
//         )}

//         {/* CHAT MESSAGES */}
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-4 flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`px-4 py-3 rounded-2xl max-w-md text-sm ${
//                 msg.sender === "user"
//                   ? "bg-indigo-500 text-white"
//                   : "bg-white shadow"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {/* TYPING */}
//         {loading && (
//           <div className="flex justify-start mb-4">
//             <div className="bg-white shadow px-4 py-2 rounded-xl text-gray-500 animate-pulse">
//               Typing...
//             </div>
//           </div>
//         )}

//         <div ref={bottomRef}></div>

//       </div>

//       {/* INPUT */}
//       <div className="p-4 bg-white border-t flex gap-3">

//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />

//         <button
//           onClick={sendMessage}
//           disabled={loading}
//           className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 disabled:opacity-50"
//         >
//           Send
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Chatbot;



// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaRobot, FaUser, FaPlus } from "react-icons/fa";

// function Chatbot() {

//   const navigate = useNavigate();

//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async (customText) => {

//     const userText = customText || input;

//     if (!userText.trim() || loading) return;

//     setInput("");

//     setMessages(prev => [...prev, { sender: "user", text: userText }]);

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: data.reply }
//       ]);

//     } catch (error) {
//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: "AI connection error 😢" }
//       ]);
//     }

//     setLoading(false);
//   };

//   const startNewChat = () => {
//     setMessages([
//       {
//         sender: "bot",
//         text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//       }
//     ]);
//   };

//   return (

//     <div className="h-screen flex bg-gray-100">

//       {/* SIDEBAR */}
//       <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">

//         <button
//           onClick={startNewChat}
//           className="flex items-center gap-2 bg-indigo-500 px-4 py-2 rounded-lg mb-4"
//         >
//           <FaPlus /> New Chat
//         </button>

//         <div className="text-gray-400 text-sm">
//           <p className="mb-2">Recent Chats</p>
//           <p className="text-xs">No history yet</p>
//         </div>

//       </div>

//       {/* MAIN CHAT */}
//       <div className="flex-1 flex flex-col">

//         {/* HEADER */}
//         <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 flex items-center gap-4 shadow">

//           <button onClick={() => navigate("/dashboard")} className="bg-white/20 p-2 rounded-lg">
//             <FaArrowLeft />
//           </button>

//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <FaRobot /> MindScope Assistant
//           </h2>

//         </div>

//         {/* CHAT AREA */}
//         <div className="flex-1 overflow-y-auto px-6 py-4">

//           {/* EMPTY STATE */}
//           {messages.length === 1 && (
//             <div className="flex flex-col items-center justify-center h-full text-gray-400">

//               <FaRobot className="text-5xl mb-4" />

//               <p className="text-lg font-medium">Start a conversation</p>
//               <p className="text-sm mb-4">I'm here to support your mental health 💙</p>

//               {/* QUICK SUGGESTIONS */}
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {[
//                   "I feel stressed",
//                   "I feel sad",
//                   "I can't sleep",
//                   "I feel anxious"
//                 ].map((text, i) => (
//                   <button
//                     key={i}
//                     onClick={() => sendMessage(text)}
//                     className="bg-white border px-3 py-1 rounded-full text-sm hover:bg-gray-100"
//                   >
//                     {text}
//                   </button>
//                 ))}
//               </div>

//             </div>
//           )}

//           {/* MESSAGES */}
//           {messages.map((msg, index) => (

//             <div
//               key={index}
//               className={`mb-4 flex gap-2 ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >

//               {/* BOT AVATAR */}
//               {msg.sender === "bot" && (
//                 <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-full">
//                   <FaRobot size={14} />
//                 </div>
//               )}

//               <div
//                 className={`px-4 py-3 rounded-2xl max-w-md text-sm ${
//                   msg.sender === "user"
//                     ? "bg-indigo-500 text-white"
//                     : "bg-white shadow"
//                 }`}
//               >
//                 {msg.text}
//               </div>

//               {/* USER AVATAR */}
//               {msg.sender === "user" && (
//                 <div className="w-8 h-8 bg-gray-400 text-white flex items-center justify-center rounded-full">
//                   <FaUser size={14} />
//                 </div>
//               )}

//             </div>
//           ))}

//           {/* TYPING */}
//           {loading && (
//             <div className="flex items-center gap-2 mb-4">

//               <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-full">
//                 <FaRobot size={14} />
//               </div>

//               <div className="bg-white shadow px-4 py-2 rounded-xl flex gap-1">
//                 <span className="animate-bounce">.</span>
//                 <span className="animate-bounce delay-100">.</span>
//                 <span className="animate-bounce delay-200">.</span>
//               </div>

//             </div>
//           )}

//           <div ref={bottomRef}></div>

//         </div>

//         {/* INPUT */}
//         <div className="p-4 bg-white border-t flex gap-3">

//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />

//           <button
//             onClick={() => sendMessage()}
//             disabled={loading}
//             className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 disabled:opacity-50"
//           >
//             Send
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Chatbot;



// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
//   FaBars,
//   FaRobot,
//   FaUser,
//   FaChartBar,
//   FaPlus
// } from "react-icons/fa";

// function Chatbot() {

//   const navigate = useNavigate();

//   // ✅ LEFT SIDEBAR (dashboard style)
//   const [isOpen, setIsOpen] = useState(true);

//   // ✅ CHAT STATE
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   // ✅ SEND MESSAGE
//   const sendMessage = async (customText) => {

//     const userText = customText || input;
//     if (!userText.trim() || loading) return;

//     setInput("");
//     setMessages(prev => [...prev, { sender: "user", text: userText }]);
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: data.reply }
//       ]);

//     } catch {
//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: "Error 😢" }
//       ]);
//     }

//     setLoading(false);
//   };

//   // ✅ NEW CHAT
//   const startNewChat = () => {
//     setMessages([
//       {
//         sender: "bot",
//         text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//       }
//     ]);
//   };

//   return (
//   <div className="flex h-screen bg-gray-100">

//     {/* ✅ 1. DASHBOARD SIDEBAR */}
//     <div className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-lg flex flex-col`}>
      
//       <div className="flex items-center justify-between p-4 border-b">
//         <img src={pic} className="w-10 h-10 rounded-full" />
//         <FaBars onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
//       </div>

//       <div className="p-3 space-y-4">
//         <button onClick={()=>navigate("/dashboard")} className="flex items-center gap-3 p-2 rounded hover:bg-indigo-100">
//           <FaChartBar /> {isOpen && "Dashboard"}
//         </button>

//         <button className="flex items-center gap-3 p-2 rounded bg-indigo-100">
//           <FaRobot /> {isOpen && "AI Assistant"}
//         </button>

//         <button onClick={()=>navigate("/profile")} className="flex items-center gap-3 p-2 rounded hover:bg-indigo-100">
//           <FaUser /> {isOpen && "Profile"}
//         </button>
//       </div>
//     </div>

//     {/* ✅ 2. CHAT SIDEBAR (DARK LIKE PIC) */}
//     <div className="w-72 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-4">

//       <button
//         onClick={startNewChat}
//         className="w-full bg-white text-indigo-600 py-2 rounded-lg font-semibold mb-4"
//       >
//         + New Chat
//       </button>

//       <p className="text-sm opacity-80 mb-3">Recent Chats</p>

//       <div className="space-y-2 text-sm">
//         <div className="bg-white/20 p-2 rounded-lg">I feel stressed</div>
//         <div className="bg-white/20 p-2 rounded-lg">Feeling anxious</div>
//         <div className="bg-white/20 p-2 rounded-lg">Sleep issues</div>
//       </div>
//     </div>

//     {/* ✅ 3. CHAT AREA (FIXED LIKE 2nd PIC) */}
//     <div className="flex-1 flex items-center justify-center p-6">

//       {/* 🔥 MAIN CHAT CARD */}
//       <div className="w-full max-w-5xl h-full bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

//         {/* HEADER */}
//         <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 flex justify-between items-center">
//           <p className="font-semibold">MindScope Assistant</p>
//           <div className="flex gap-3 items-center">
//             <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm">
//               U
//             </div>
//           </div>
//         </div>

//         {/* CHAT BODY */}
//         <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-white to-indigo-50">

//           {messages.length === 1 && (
//             <div className="text-center text-gray-400 mt-20">
//               <FaRobot className="text-5xl mx-auto mb-3" />
//               <p className="text-lg">Start a conversation</p>
//               <p className="text-sm">I'm here to support your mental health 💙</p>
//             </div>
//           )}

//           {messages.map((msg, i) => (
//             <div
//               key={i}
//               className={`mb-4 flex ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div className={`px-4 py-3 rounded-xl max-w-md ${
//                 msg.sender === "user"
//                   ? "bg-indigo-500 text-white"
//                   : "bg-white shadow"
//               }`}>
//                 {msg.text}
//               </div>
//             </div>
//           ))}

//           {loading && <p className="text-gray-400">Typing...</p>}
//           <div ref={bottomRef}></div>
//         </div>

//         {/* INPUT */}
//         <div className="p-4 border-t flex gap-3 bg-white">
//           <input
//             value={input}
//             onChange={(e)=>setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 border rounded-full px-4 py-2"
//             onKeyDown={(e)=> e.key==="Enter" && sendMessage()}
//           />

//           <button
//             onClick={()=>sendMessage()}
//             className="bg-indigo-500 text-white px-6 py-2 rounded-full"
//           >
//             Send
//           </button>
//         </div>

//       </div>
//     </div>

//   </div>
// );
// }

// export default Chatbot;



// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaRobot,
//   FaUser,
//   FaPlus,
//   FaChartBar,
//   FaUserCircle,
//   FaBell,
//   FaBars,
//   FaCog,
//   FaSignOutAlt
// } from "react-icons/fa";

// import pic from "../assets/logo pic.png";

// function Chatbot() {
//   const navigate = useNavigate();

//   // ✅ ADD THESE STATES
//   const [isOpen, setIsOpen] = useState(true);
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);

//   const currentUserName = "Simran";
//   const currentUserEmail = "simran@gmail.com";

//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async (customText) => {
//     const userText = customText || input;
//     if (!userText.trim() || loading) return;

//     setInput("");
//     setMessages(prev => [...prev, { sender: "user", text: userText }]);

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);
//     } catch {
//       setMessages(prev => [...prev, { sender: "bot", text: "AI error 😢" }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex h-screen bg-[#f5f6fa]">

//       {/* ✅ DASHBOARD SIDEBAR (FIXED WIDTH NO POSITION FIXED) */}
//       <div className="w-64 bg-white shadow-lg flex flex-col justify-between">

//         {/* TOP */}
//         <div>
//           <div className="flex items-center justify-between p-4 border-b">
//             <div className="flex items-center gap-2">
//               <img src={pic} className="w-12 h-12 rounded-full" />
//               <div>
//                 <h1 className="text-indigo-600 font-bold">Moodly AI</h1>
//                 <p className="text-xs text-gray-400">Mental Wellness</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-3 space-y-3">
//             <button onClick={() => navigate("/dashboard")} className="w-full text-left p-2 hover:bg-gray-100 rounded">
//               Dashboard
//             </button>

//             <button className="w-full text-left p-2 bg-indigo-100 text-indigo-600 rounded">
//               AI Assistant
//             </button>

//             <button onClick={() => navigate("/profile")} className="w-full text-left p-2 hover:bg-gray-100 rounded">
//               Profile
//             </button>
//           </div>
//         </div>

//         {/* USER */}
//         <div className="p-4 border-t flex gap-2">
//           <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
//             S
//           </div>
//           <div>
//             <p className="text-sm font-semibold">{currentUserName}</p>
//             <p className="text-xs text-gray-400">{currentUserEmail}</p>
//           </div>
//         </div>
//       </div>

//       {/* ✅ CHAT SIDEBAR */}
//       <div className="w-72 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-4">

//         <button className="w-full bg-white text-indigo-600 py-2 rounded-lg mb-4 font-medium">
//           + New Chat
//         </button>

//         <p className="text-sm opacity-80 mb-2">Recent Chats</p>

//         <div className="space-y-2 text-sm">
//           <div className="bg-white/20 p-2 rounded">I feel stressed</div>
//           <div className="bg-white/20 p-2 rounded">Feeling anxious</div>
//           <div className="bg-white/20 p-2 rounded">Sleep issues</div>
//         </div>
//       </div>

//       {/* ✅ MAIN CHAT */}
//       <div className="flex-1 flex items-center justify-center p-6">

//         <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 flex justify-between">
//             <h2>MindScope Assistant</h2>
//             <FaBell />
//           </div>

//           {/* CHAT */}
//           <div className="flex-1 overflow-y-auto bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">

//             {messages.map((msg, i) => (
//               <div key={i} className={`mb-4 ${msg.sender === "user" ? "text-right" : ""}`}>
//                 <div className={`inline-block px-4 py-2 rounded-xl ${
//                   msg.sender === "user" ? "bg-indigo-500 text-white" : "bg-white shadow"
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}

//             {loading && <p>Typing...</p>}

//             <div ref={bottomRef}></div>
//           </div>

//           {/* INPUT */}
//           <div className="p-4 border-t flex gap-3">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className="flex-1 border rounded-full px-4 py-2"
//               placeholder="Type..."
//             />

//             <button
//               onClick={() => sendMessage()}
//               className="bg-indigo-500 text-white px-6 py-2 rounded-full"
//             >
//               Send
//             </button>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Chatbot;




// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaRobot,
//   FaUser,
//   FaPlus,
//   FaChartBar,
//   FaUserCircle,
//   FaBell,
//   FaBars,
//   FaSignOutAlt,
//   FaCog
// } from "react-icons/fa";

// import pic from "../assets/logo pic.png";

// function Chatbot() {
//   const navigate = useNavigate();

//   // ✅ SIDEBAR STATES
//   const [isOpen, setIsOpen] = useState(true);
//   const [openDropdown, setOpenDropdown] = useState(false);

//   const currentUserEmail =
//     sessionStorage.getItem("currentUser") ||
//     localStorage.getItem("currentUser");

//   const currentUserName =
//     sessionStorage.getItem("currentUserName") ||
//     localStorage.getItem(`name_${currentUserEmail}`) ||
//     "User";

//   // ✅ CHAT STATES
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async (customText) => {
//     const userText = customText || input;
//     if (!userText.trim() || loading) return;

//     setInput("");
//     setMessages(prev => [...prev, { sender: "user", text: userText }]);

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: data.reply }
//       ]);
//     } catch {
//       setMessages(prev => [
//         ...prev,
//         { sender: "bot", text: "AI connection error 😢" }
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex h-screen bg-[#f5f6fa]">

//       {/* ✅ LEFT MAIN SIDEBAR (Dashboard style) */}
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-28"
//         } bg-white shadow-lg fixed h-screen transition-all duration-500 flex flex-col justify-between`}
//       >
//         {/* TOP */}
//         <div>
//           {/* LOGO */}
//           <div className="flex items-center justify-between p-4 border-b">
//             {isOpen ? (
//               <div
//                 onClick={() => navigate("/dashboard")}
//                 className="flex items-center gap-2 cursor-pointer"
//               >
//                 <img src={pic} className="w-14 h-14 rounded-full shadow" />
//                 <div>
//                   <h1 className="text-indigo-600 font-bold text-xl">
//                     Moodly AI
//                   </h1>
//                   <p className="text-xs text-gray-400">Mental Wellness</p>
//                 </div>
//               </div>
//             ) : (
//               <img src={pic} className="w-10 h-10 rounded-full" />
//             )}

//             <FaBars
//               className="text-indigo-600 cursor-pointer"
//               onClick={() => setIsOpen(!isOpen)}
//             />
//           </div>

//           {/* NAV */}
//           <div className="p-3 space-y-4 mt-2">
//             <button
//               onClick={() => navigate("/dashboard")}
//               className="flex items-center gap-3 w-full px-4 py-2 rounded-xl hover:bg-indigo-100"
//             >
//               <FaChartBar />
//               {isOpen && "Dashboard"}
//             </button>

//             <button
//               className="flex items-center gap-3 w-full px-4 py-2 rounded-xl bg-indigo-100 text-indigo-600"
//             >
//               <FaRobot />
//               {isOpen && "AI Assistant"}
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className="flex items-center gap-3 w-full px-4 py-2 rounded-xl hover:bg-indigo-100"
//             >
//               <FaUser />
//               {isOpen && "Profile"}
//             </button>
//           </div>
//         </div>

//         {/* USER */}
//         <div className="p-4 border-t">
//           <div
//             onClick={() => setOpenDropdown(!openDropdown)}
//             className="flex items-center gap-3 cursor-pointer"
//           >
//             <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
//               {currentUserName.charAt(0).toUpperCase()}
//             </div>

//             {isOpen && (
//               <div>
//                 <p className="text-sm font-semibold">{currentUserName}</p>
//                 <p className="text-xs text-gray-500">{currentUserEmail}</p>
//               </div>
//             )}
//           </div>

//           {openDropdown && (
//             <div className="mt-3 bg-white shadow rounded-lg p-2">
//               <div className="flex gap-2 p-2 hover:bg-gray-100 cursor-pointer">
//                 <FaCog />
//                 <span>Settings</span>
//               </div>

//               <div
//                 onClick={() => {
//                   sessionStorage.clear();
//                   navigate("/");
//                 }}
//                 className="flex gap-2 p-2 text-red-500 hover:bg-red-50 cursor-pointer"
//               >
//                 <FaSignOutAlt />
//                 <span>Logout</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ RIGHT SIDE */}
//       <div className={`flex-1 ${isOpen ? "ml-64" : "ml-28"} flex`}>

//         {/* ✅ CHAT LEFT PANEL */}
//         <div className="w-72 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-4">
//           <button className="w-full bg-white text-indigo-600 py-2 rounded-lg mb-4 font-medium">
//             + New Chat
//           </button>

//           <p className="text-sm opacity-80 mb-2">Recent Chats</p>

//           <div className="space-y-2 text-sm">
//             <div className="bg-white/20 p-2 rounded">I feel stressed</div>
//             <div className="bg-white/20 p-2 rounded">Feeling anxious</div>
//             <div className="bg-white/20 p-2 rounded">Sleep issues</div>
//           </div>
//         </div>

//         {/* ✅ MAIN CHAT */}
//         <div className="flex-1 flex items-center justify-center p-6">

//           <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">

//             {/* HEADER */}
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 flex justify-between items-center">
//               <h2 className="font-semibold">MindScope Assistant</h2>

//               <div className="flex items-center gap-4">
//                 <FaBell />
//                 <div className="w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center">
//                   {currentUserName.charAt(0).toUpperCase()}
//                 </div>
//               </div>
//             </div>

//             {/* CHAT AREA */}
//             <div className="flex-1 overflow-y-auto bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">

//               {messages.length === 1 && (
//                 <div className="text-center text-gray-400 mt-10">
//                   <FaRobot className="mx-auto text-4xl mb-2" />
//                   <p className="font-medium">Start a conversation</p>
//                   <p className="text-sm mb-3">
//                     I'm here to support your mental health 💙
//                   </p>

//                   <div className="flex justify-center gap-2 flex-wrap">
//                     {["I feel stressed", "I feel sad", "I can't sleep", "I feel anxious"].map((t, i) => (
//                       <button
//                         key={i}
//                         onClick={() => sendMessage(t)}
//                         className="bg-white px-3 py-1 rounded-full border text-sm"
//                       >
//                         {t}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   className={`flex mb-4 ${
//                     msg.sender === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`px-4 py-2 rounded-xl max-w-md ${
//                       msg.sender === "user"
//                         ? "bg-indigo-500 text-white"
//                         : "bg-white shadow"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}

//               {loading && <p className="text-gray-400">Typing...</p>}

//               <div ref={bottomRef}></div>
//             </div>

//             {/* INPUT */}
//             <div className="p-4 border-t flex gap-3 bg-white">
//               <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 border rounded-full px-4 py-2 outline-none"
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />

//               <button
//                 onClick={() => sendMessage()}
//                 className="bg-indigo-500 text-white px-6 py-2 rounded-full"
//               >
//                 Send
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;




// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
//   FaRobot,
//   FaUser,
//   FaChartBar,
//   FaBars,
//   FaBell,
//   FaSignOutAlt,
//   FaCog
// } from "react-icons/fa";

// function Chatbot() {
//   const navigate = useNavigate();

//   // ✅ SIDEBAR STATE (same as dashboard)
//   const [isOpen, setIsOpen] = useState(() => {
//     const saved = localStorage.getItem("sidebarState");
//     return saved === null ? true : saved === "true";
//   });

//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);

//   // ✅ USER DATA
//   const currentUserEmail =
//     sessionStorage.getItem("currentUser") ||
//     localStorage.getItem("currentUser");

//   const currentUserName =
//     sessionStorage.getItem("currentUserName") ||
//     localStorage.getItem(`name_${currentUserEmail}`) ||
//     "User";

//   useEffect(() => {
//     const handleClickOutside = () => setOpenDropdown(false);
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // ✅ CHAT STATES
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
//     }
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async (customText) => {
//     const userText = customText || input;
//     if (!userText.trim() || loading) return;

//     setInput("");
//     setMessages(prev => [...prev, { sender: "user", text: userText }]);

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userText })
//       });

//       const data = await res.json();

//       setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);
//     } catch {
//       setMessages(prev => [...prev, { sender: "bot", text: "AI error 😢" }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex h-screen bg-[#f5f6fa]">

//       {/* ✅ SIDEBAR (EXACT SAME AS DASHBOARD) */}
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-28"
//         } bg-white shadow-lg fixed h-screen transition-all duration-500 flex flex-col justify-between`}
//       >
//         {/* TOP */}
//         <div>
//           {/* LOGO */}
//           <div className="flex items-center justify-between p-4 border-b">
//             {isOpen ? (
//               <div
//                 onClick={() => navigate("/dashboard")}
//                 className="flex items-center gap-2 cursor-pointer hover:scale-105"
//               >
//                 <img src={pic} className="w-16 h-16 rounded-full" />
//                 <div>
//                   <h1 className="text-indigo-600 font-bold text-2xl">
//                     Moodly AI
//                   </h1>
//                   <p className="text-xs text-gray-400">Mental Wellness</p>
//                 </div>
//               </div>
//             ) : (
//               <img src={pic} className="w-12 h-12 rounded-full" />
//             )}

//             <FaBars
//               className="text-xl text-indigo-600 cursor-pointer"
//               onClick={() => {
//                 const newState = !isOpen;
//                 setIsOpen(newState);
//                 localStorage.setItem("sidebarState", newState);
//               }}
//             />
//           </div>

//           {/* NAV */}
//           <div className="p-3 space-y-4 mt-2">
//             <button
//               onClick={() => navigate("/dashboard")}
//               className={`flex items-center ${
//                 isOpen ? "px-4" : "justify-center py-4"
//               } gap-3 w-full rounded-xl hover:bg-indigo-100`}
//             >
//               <FaChartBar />
//               {isOpen && "Dashboard"}
//             </button>

//             <button
//               className={`flex items-center ${
//                 isOpen ? "px-4 bg-indigo-100 text-indigo-600" : "justify-center py-4"
//               } gap-3 w-full rounded-xl`}
//             >
//               <FaRobot />
//               {isOpen && "AI Assistant"}
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className={`flex items-center ${
//                 isOpen ? "px-4" : "justify-center py-4"
//               } gap-3 w-full rounded-xl hover:bg-indigo-100`}
//             >
//               <FaUser />
//               {isOpen && "Profile"}
//             </button>
//           </div>
//         </div>

//         {/* USER */}
//         <div className="p-4 border-t relative">
//           <div
//             onClick={(e) => {
//               e.stopPropagation();
//               setOpenDropdown(prev => !prev);
//             }}
//             className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg"
//           >
//             <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full">
//               {currentUserName.charAt(0).toUpperCase()}
//             </div>

//             {isOpen && (
//               <div>
//                 <p className="text-sm font-semibold">{currentUserName}</p>
//                 <p className="text-xs text-gray-500">{currentUserEmail}</p>
//               </div>
//             )}
//           </div>

//           {openDropdown && (
//             <div className="absolute bottom-16 left-2 w-52 bg-white shadow-xl rounded-xl p-2">
//               <div
//                 onClick={() => {
//                   setOpenSettings(true);
//                   setOpenDropdown(false);
//                 }}
//                 className="p-2 hover:bg-indigo-50 rounded cursor-pointer"
//               >
//                 ⚙ Settings
//               </div>

//               <div
//                 onClick={() => {
//                   sessionStorage.clear();
//                   navigate("/");
//                 }}
//                 className="p-2 hover:bg-red-50 text-red-500 rounded cursor-pointer"
//               >
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ CHAT SIDEBAR */}
//       <div className={`w-72 ml-${isOpen ? "64" : "28"} bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-4`}>
//         <button className="w-full bg-white text-indigo-600 py-2 rounded-lg mb-4">
//           + New Chat
//         </button>

//         <p className="text-sm mb-2">Recent Chats</p>

//         <div className="space-y-2">
//           <div className="bg-white/20 p-2 rounded">I feel stressed</div>
//           <div className="bg-white/20 p-2 rounded">Feeling anxious</div>
//           <div className="bg-white/20 p-2 rounded">Sleep issues</div>
//         </div>
//       </div>

//       {/* ✅ MAIN CHAT */}
//       <div className="flex-1 flex items-center justify-center p-6">

//         <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">

//           {/* HEADER */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 flex justify-between">
//             <h2>MindScope Assistant</h2>
//             <div className="flex gap-4 items-center">
//               <FaBell />
//               <div className="w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center">
//                 {currentUserName.charAt(0).toUpperCase()}
//               </div>
//             </div>
//           </div>

//           {/* CHAT AREA */}
//           <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">

//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex mb-4 ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div className={`px-4 py-2 rounded-xl max-w-md ${
//                   msg.sender === "user"
//                     ? "bg-indigo-500 text-white"
//                     : "bg-white shadow"
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}

//             <div ref={bottomRef}></div>
//           </div>

//           {/* INPUT */}
//           <div className="p-4 border-t flex gap-3">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className="flex-1 border rounded-full px-4 py-2"
//               placeholder="Type your message..."
//             />

//             <button
//               onClick={() => sendMessage()}
//               className="bg-indigo-500 text-white px-6 py-2 rounded-full"
//             >
//               Send
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;



import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";
import pic from "../assets/logo pic.png";

import {
  FaRobot,
  FaUser,
  FaChartBar,
  FaBars,
  FaBell,
  FaSignOutAlt,
  FaCog
} from "react-icons/fa";

function Chatbot() {
  const navigate = useNavigate();

  // ✅ EXACT SAME SIDEBAR STATE
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarState");
    return saved === null ? true : saved === "true";
  });

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [chats, setChats] = useState([]);
const [activeChatId, setActiveChatId] = useState(null);

  // ✅ USER DATA (SAME)
  const currentUserEmail =
    sessionStorage.getItem("currentUser") ||
    localStorage.getItem("currentUser");

  const currentUserName =
    sessionStorage.getItem("currentUserName") ||
    localStorage.getItem(`name_${currentUserEmail}`) ||
    "User";

  // ✅ CLICK OUTSIDE (SAME)
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);



  useEffect(() => {
  const loadChats = async () => {
    if (!currentUserEmail) return;

    const res = await fetch(`http://localhost:5000/api/chats/${currentUserEmail}`);
    const data = await res.json();

    setChats(data);

    if (data.length > 0) {
      setActiveChatId(data[0]._id);
      setMessages(data[0].messages);
    }
  };

  loadChats();
}, [currentUserEmail]);

  // ✅ CHAT STATES
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm your Mental Health Assistant. How are you feeling today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (customText) => {
  const userText = customText || input;
  if (!userText.trim() || loading) return;

  setInput("");

  const newMessages = [...messages, { sender: "user", text: userText }];
  setMessages(newMessages);

  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText })
    });

    const data = await res.json();

    const updatedMessages = [
      ...newMessages,
      { sender: "bot", text: data.reply }
    ];

    setMessages(updatedMessages);

    // ✅ SAVE TO DB
    await fetch("http://localhost:5000/api/saveChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail: currentUserEmail,
        chatId: activeChatId,
        messages: updatedMessages
      })
    });

  } catch {
    setMessages(prev => [...prev, { sender: "bot", text: "AI error 😢" }]);
  }

  setLoading(false);
};

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">

      {/* ✅ SIDEBAR (100% SAME AS DASHBOARD) */}
      <div
        className={`${
          isOpen ? "w-64" : "w-28"
        } bg-white shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
      >
        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="flex items-center justify-between p-4 border-b">
            {isOpen ? (
              <div
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <img src={pic} className="w-16 h-16 rounded-full shadow" />

                <div>
                  <h1 className="text-indigo-600 font-bold text-2xl">
                    Moodly AI
                  </h1>
                  <p className="text-xs text-gray-400">Mental Wellness</p>
                </div>
              </div>
            ) : (
              <img src={pic} className="w-12 h-12 rounded-full shadow-md" />
            )}

            <FaBars
              className="text-xl text-indigo-600 cursor-pointer"
              onClick={() => {
                const newState = !isOpen;
                setIsOpen(newState);
                localStorage.setItem("sidebarState", newState);
              }}
            />
          </div>

          {/* NAV */}
          <div className="p-3 space-y-4 mt-2">

            <button
              onClick={() => navigate("/dashboard")}
              className={`group flex items-center ${
                isOpen
                  ? "px-4"
                  : "justify-center py-4"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}
            >
              <FaChartBar />
              {isOpen && "Dashboard"}
            </button>

            <button
              className={`group flex items-center ${
                isOpen
                  ? "px-4 bg-indigo-100 text-indigo-600"
                  : "justify-center py-4"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}
            >
              <FaRobot />
              {isOpen && "AI Assistant"}
            </button>

            <button
              onClick={() => navigate("/profile")}
              className={`group flex items-center ${
                isOpen
                  ? "px-4"
                  : "justify-center py-4"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}
            >
              <FaUser />
              {isOpen && "Profile"}
            </button>

          </div>
        </div>

        {/* USER (WITH HOVER + DROPDOWN SAME) */}
        <div className="p-4 border-t relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown((prev) => !prev);
            }}
            className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg transition"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              {currentUserName.charAt(0).toUpperCase()}
            </div>

            {isOpen && (
              <div>
                <p className="text-sm font-semibold">{currentUserName}</p>
                <p className="text-xs text-gray-500">{currentUserEmail}</p>
              </div>
            )}
          </div>

          {openDropdown && (
            <div className="absolute bottom-16 left-2 w-52 bg-white shadow-2xl rounded-xl p-2 border z-50">

              {/* SETTINGS */}
              <div
                onClick={() => {
                  setOpenSettings(true);
                  setOpenDropdown(false);
                }}
                className="flex items-center gap-3 p-2 hover:bg-indigo-50 cursor-pointer rounded-lg transition"
              >
                <FaCog className="text-gray-600" />
                <span className="text-sm">Settings</span>
              </div>

              {/* LOGOUT */}
              <div
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
                className="flex items-center gap-3 p-2 hover:bg-red-50 text-red-500 cursor-pointer rounded-lg transition"
              >
                <FaSignOutAlt />
                <span className="text-sm">Logout</span>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* ✅ CHAT SIDEBAR */}
      <div className={`w-72 ${isOpen ? "ml-64" : "ml-28"} bg-gradient-to-b from-[#2c314e] via-[#2a2f4a] to-[#1f2336] text-white p-4 transition-all duration-500`}>

        <button
  onClick={async () => {
    const res = await fetch("http://localhost:5000/api/newChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userEmail: currentUserEmail })
    });

    const newChat = await res.json();

    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat._id);
    setMessages([]);
  }}
  className="w-full bg-white text-indigo-600 py-2 rounded-lg mb-4 font-medium"
>
  + New Chat
</button>

        <p className="text-sm opacity-80 mb-2">Recent Chats</p>

        <div className="space-y-2 text-sm">
          <div className="bg-white/20 p-2 rounded">I feel stressed</div>
          <div className="bg-white/20 p-2 rounded">Feeling anxious</div>
          <div className="bg-white/20 p-2 rounded">Sleep issues</div>
        </div>
      </div>

      {/* ✅ MAIN CHAT */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 flex justify-between items-center">
            <h2 className="font-semibold">MindScope Assistant</h2>

            <div className="flex items-center gap-4">
              <FaBell />
              <div className="w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center">
                {currentUserName.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto p-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-xl ${msg.sender === "user" ? "bg-indigo-500 text-white" : "bg-white shadow"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          {/* INPUT */}
          <div className="p-4 border-t flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-full px-4 py-2"
              placeholder="Type your message..."
            />

            <button
              onClick={() => sendMessage()}
              className="bg-indigo-500 text-white px-6 py-2 rounded-full"
            >
              Send
            </button>
          </div>

        </div>
      </div>

      {/* ✅ SETTINGS MODAL (SAME) */}
      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenSettings(false)}
          ></div>

          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50">
            <button
              onClick={() => setOpenSettings(false)}
              className="absolute top-3 right-3 text-lg"
            >
              ✖
            </button>

            <Setting />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;