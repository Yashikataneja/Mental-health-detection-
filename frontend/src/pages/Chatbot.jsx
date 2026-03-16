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




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRobot } from "react-icons/fa";

function Chatbot(){

const navigate = useNavigate();

const [messages,setMessages] = useState([
{ sender:"bot", text:"Hello 👋 I'm your Mental Health Assistant. How are you feeling today?" }
]);

const [input,setInput] = useState("");

const getBotReply = (text) => {

text = text.toLowerCase();

if(text.includes("sad") || text.includes("depressed")){
return "I'm really sorry you're feeling this way. Try talking to someone you trust or writing your thoughts in your journal. I'm here with you. 💙";
}

if(text.includes("anxious") || text.includes("stress")){
return "Take a slow deep breath. Try inhaling for 4 seconds and exhaling for 4 seconds. Breathing exercises can really help calm your mind.";
}

if(text.includes("happy") || text.includes("good")){
return "That's wonderful to hear! Keep doing things that bring you joy and positivity. 😊";
}

if(text.includes("angry")){
return "It's okay to feel angry sometimes. Try taking a short walk or stepping away from the situation for a moment.";
}

return "I understand. Sometimes expressing your feelings helps a lot. Would you like to tell me more about what's on your mind?";
};

const sendMessage = () => {

if(!input.trim()) return;

const userMessage = { sender:"user", text:input };

const botReply = {
sender:"bot",
text:getBotReply(input)
};

setMessages([...messages,userMessage,botReply]);

setInput("");
};

return(

<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col">

{/* HEADER */}

<div className="bg-white shadow p-4 flex items-center gap-4">

<button onClick={()=>navigate("/dashboard")}> <FaArrowLeft className="text-xl"/> </button>

<h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
<FaRobot/> Mental Health Assistant
</h2>

</div>

{/* CHAT AREA */}

<div className="flex-1 p-6 overflow-y-auto">

{messages.map((msg,index)=>(

<div key={index} className={`mb-4 flex ${msg.sender==="user"?"justify-end":"justify-start"}`}>

<div className={`px-4 py-3 rounded-xl max-w-md ${
msg.sender==="user"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}>

{msg.text}

</div>

</div>

))}

</div>

{/* INPUT */}

<div className="bg-white p-4 flex gap-4 border-t">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Type your message..."
className="flex-1 border rounded-lg px-4 py-2"
/>

<button
onClick={sendMessage}
className="bg-blue-600 text-white px-6 py-2 rounded-lg"

>

Send </button>

</div>

</div>

);

}

export default Chatbot;
