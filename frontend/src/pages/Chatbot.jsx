// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Setting from "./Setting";
// import pic from "../assets/logo pic.png";

// import {
//   FaRobot,
//   FaUser,
//   FaChartBar,
//   FaBars,
//   FaBell,
//   FaSignOutAlt,
//   FaCog,
//   FaPaperPlane,
//   FaMicrophone,
//   FaStop,
//   FaSmile,
//   FaHeart,
//   FaStar,
//   FaLeaf,
//   FaBolt,
//   FaMoon,
//   FaSun,
//   FaPlus,
//   FaTrash,
// } from "react-icons/fa";

// const QUICK_REPLIES = [
//   { label: "😔 I feel sad", text: "I feel sad today" },
//   { label: "😰 I'm anxious", text: "I'm feeling anxious" },
//   { label: "😤 I'm stressed", text: "I'm really stressed" },
//   { label: "😊 I feel good", text: "I'm feeling good today" },
//   { label: "😴 Can't sleep", text: "I can't sleep properly" },
//   { label: "😠 I'm angry", text: "I'm feeling angry" },
// ];

// const MOOD_TAGS = [
//   { emoji: "😊", label: "Happy", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
//   { emoji: "😢", label: "Sad", color: "bg-blue-100 text-blue-700 border-blue-200" },
//   { emoji: "😰", label: "Anxious", color: "bg-purple-100 text-purple-700 border-purple-200" },
//   { emoji: "😤", label: "Stressed", color: "bg-orange-100 text-orange-700 border-orange-200" },
//   { emoji: "😴", label: "Tired", color: "bg-gray-100 text-gray-700 border-gray-200" },
//   { emoji: "💪", label: "Strong", color: "bg-green-100 text-green-700 border-green-200" },
// ];

// const BOT_AVATAR_COLORS = [
//   "from-indigo-500 to-purple-600",
//   "from-blue-500 to-cyan-500",
//   "from-violet-500 to-pink-500",
// ];

// function TypingDots() {
//   return (
//     <div className="flex items-center gap-1 px-4 py-3">
//       {[0, 1, 2].map((i) => (
//         <span
//           key={i}
//           className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
//           style={{ animationDelay: `${i * 0.15}s` }}
//         />
//       ))}
//     </div>
//   );
// }

// function MessageBubble({ msg, darkMode }) {
//   const isUser = msg.sender === "user";
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setVisible(true), 50);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div
//       className={`flex gap-3 mb-5 transition-all duration-500 ${
//         isUser ? "justify-end" : "justify-start"
//       } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//     >
//       {!isUser && (
//         <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
//           <FaRobot className="text-white text-sm" />
//         </div>
//       )}

//       <div className={`max-w-[72%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
//         {!isUser && (
//           <span className="text-xs font-semibold text-indigo-500 ml-1">Mannlytics</span>
//         )}
//         <div
//           className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
//             isUser
//               ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-sm"
//               : darkMode
//               ? "bg-gray-700 text-gray-100 rounded-tl-sm"
//               : "bg-white text-gray-800 rounded-tl-sm border border-gray-100"
//           }`}
//         >
//           {msg.text}
//         </div>
//         <span className={`text-[10px] px-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
//           {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//         </span>
//       </div>

//       {isUser && (
//         <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-md">
//           <FaUser className="text-white text-sm" />
//         </div>
//       )}
//     </div>
//   );
// }

// function Chatbot() {
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(() => {
//     const saved = localStorage.getItem("sidebarState");
//     return saved === null ? true : saved === "true";
//   });

//   const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);
//   const [chats, setChats] = useState([]);
//   const [activeChatId, setActiveChatId] = useState(null);
//   const [showMoodPicker, setShowMoodPicker] = useState(false);
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [charCount, setCharCount] = useState(0);
//   const recognitionRef = useRef(null);

//   const currentUserEmail =
//     sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");

//   const currentUserName =
//     sessionStorage.getItem("currentUserName") ||
//     localStorage.getItem(`name_${currentUserEmail}`) ||
//     "User";

//   useEffect(() => {
//     if (darkMode) document.body.classList.add("dark");
//     else document.body.classList.remove("dark");
//   }, [darkMode]);

//   useEffect(() => {
//     const handleClickOutside = () => setOpenDropdown(false);
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const loadChats = async () => {
//       if (!currentUserEmail) return;
//       try {
//         const res = await fetch(`http://localhost:5000/api/chats/${currentUserEmail}`);
//         const data = await res.json();
//         setChats(data);
//         if (data.length > 0) {
//           setActiveChatId(data[0]._id);
//           setMessages(data[0].messages);
//         }
//       } catch {}
//     };
//     loadChats();
//   }, [currentUserEmail]);

//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: `Hello ${currentUserName.split(" ")[0]} 👋 I'm Mannlytics, your personal mental wellness companion. How are you feeling today?`,
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef();
//   const inputRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages, loading]);

//   const sendMessage = async (customText) => {
//     const userText = customText || input;
//     if (!userText.trim() || loading) return;

//     setInput("");
//     setCharCount(0);
//     setShowMoodPicker(false);

//     const newMessages = [...messages, { sender: "user", text: userText }];
//     setMessages(newMessages);
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userText }),
//       });

//       const data = await res.json();

//       const updatedMessages = [...newMessages, { sender: "bot", text: data.reply }];
//       setMessages(updatedMessages);

//       await fetch("http://localhost:5000/api/saveChat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           userEmail: currentUserEmail,
//           chatId: activeChatId,
//           messages: updatedMessages,
//         }),
//       });
//     } catch {
//       setMessages((prev) => [...prev, { sender: "bot", text: "I'm having trouble connecting right now. Please try again in a moment. 💙" }]);
//     }

//     setLoading(false);
//   };

//   const handleMoodSelect = (mood) => {
//     setSelectedMood(mood);
//     setShowMoodPicker(false);
//     sendMessage(`I'm feeling ${mood.label.toLowerCase()} ${mood.emoji}`);
//   };

//   const startRecording = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) return;
//     const recognition = new SpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.lang = "en-US";
//     recognition.interimResults = true;
//     recognition.continuous = false;
//     recognition.onresult = (e) => {
//       const transcript = Array.from(e.results).map((r) => r[0].transcript).join("");
//       setInput(transcript);
//       setCharCount(transcript.length);
//     };
//     recognition.onend = () => setIsRecording(false);
//     recognition.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     recognitionRef.current?.stop();
//     setIsRecording(false);
//   };

//   const bg = darkMode
//     ? "bg-gray-900 text-white"
//     : "bg-gradient-to-br from-indigo-50 via-white to-purple-50";

//   const cardBg = darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
//   const inputBg = darkMode
//     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//     : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400";
//   const sidebarBg = darkMode ? "bg-gray-800" : "bg-white";
//   const mutedText = darkMode ? "text-gray-400" : "text-gray-500";

//   return (
//     <div className={`flex min-h-screen ${bg} transition-colors duration-300`}>

//       {/* ── LEFT SIDEBAR ── */}
//       <div
//         className={`${isOpen ? "w-64" : "w-20"} ${sidebarBg} shadow-lg fixed h-screen transition-all duration-500 flex flex-col justify-between z-50`}
//       >
//         <div>
//           <div className="flex items-center justify-between p-4 border-b">
//             {isOpen ? (
//               <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
//                 <img src={pic} className="w-14 h-14 rounded-full shadow" alt="logo" />
//                 <div>
//                   <h1 className="text-indigo-600 font-bold text-xl">Mannlytics</h1>
//                   <p className={`text-xs ${mutedText}`}>Mental Wellness</p>
//                 </div>
//               </div>
//             ) : (
//               <img src={pic} className="w-10 h-10 rounded-full shadow mx-auto" alt="logo" />
//             )}
//             <FaBars
//               className="text-indigo-600 cursor-pointer flex-shrink-0"
//               onClick={() => {
//                 const s = !isOpen;
//                 setIsOpen(s);
//                 localStorage.setItem("sidebarState", s);
//               }}
//             />
//           </div>

//           <div className="p-3 space-y-2 mt-2">
//             {[
//               { icon: FaChartBar, label: "Dashboard", action: () => navigate("/dashboard"), active: false },
//               { icon: FaRobot, label: "AI Assistant", action: null, active: true },
//               { icon: FaUser, label: "Profile", action: () => navigate("/profile"), active: false },
//             ].map(({ icon: Icon, label, action, active }) => (
//               <button
//                 key={label}
//                 onClick={action || undefined}
//                 className={`flex items-center ${isOpen ? "px-4 gap-3" : "justify-center py-3"} w-full rounded-xl transition-all duration-300 hover:scale-105 ${
//                   active
//                     ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
//                     : darkMode
//                     ? "text-gray-300 hover:bg-gray-700"
//                     : "text-gray-600 hover:bg-indigo-50"
//                 } py-2.5`}
//               >
//                 <Icon className={active ? "text-white" : ""} />
//                 {isOpen && <span className="text-sm font-medium">{label}</span>}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="p-4 border-t relative">
//           <div
//             onClick={(e) => { e.stopPropagation(); setOpenDropdown((p) => !p); }}
//             className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}
//           >
//             <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
//               {currentUserName.charAt(0).toUpperCase()}
//             </div>
//             {isOpen && (
//               <div className="min-w-0">
//                 <p className="text-sm font-semibold truncate">{currentUserName}</p>
//                 <p className={`text-xs truncate ${mutedText}`}>{currentUserEmail}</p>
//               </div>
//             )}
//           </div>

//           {openDropdown && (
//             <div className={`absolute bottom-16 left-2 w-52 rounded-2xl border p-2 shadow-2xl z-50 ${cardBg}`}>
//               <button
//                 onClick={() => { setOpenSettings(true); setOpenDropdown(false); }}
//                 className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}
//               >
//                 <FaCog className="text-indigo-500" /> Settings
//               </button>
//               <button
//                 onClick={() => { sessionStorage.clear(); navigate("/"); }}
//                 className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-rose-500 transition ${darkMode ? "hover:bg-red-950/40" : "hover:bg-rose-50"}`}
//               >
//                 <FaSignOutAlt /> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ── CHAT HISTORY SIDEBAR ── */}
//       <div
//         className={`${isOpen ? "ml-64" : "ml-20"} w-64 flex-shrink-0 bg-gradient-to-b from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] text-white p-4 flex flex-col gap-4 transition-all duration-500 min-h-screen`}
//       >
//         <div>
//           <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3">AI Assistant</p>
//           <button
//             onClick={async () => {
//               try {
//                 const res = await fetch("http://localhost:5000/api/newChat", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify({ userEmail: currentUserEmail }),
//                 });
//                 const newChat = await res.json();
//                 setChats((p) => [newChat, ...p]);
//                 setActiveChatId(newChat._id);
//                 setMessages([{ sender: "bot", text: `Hello again ${currentUserName.split(" ")[0]} 👋 What's on your mind today?` }]);
//               } catch {}
//             }}
//             className="w-full flex items-center gap-2 justify-center bg-white/15 hover:bg-white/25 border border-white/20 text-white py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
//           >
//             <FaPlus className="text-xs" /> New Conversation
//           </button>
//         </div>

//         <div>
//           <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">Quick Start</p>
//           <div className="space-y-1.5">
//             {QUICK_REPLIES.map((q) => (
//               <button
//                 key={q.text}
//                 onClick={() => sendMessage(q.text)}
//                 className="w-full text-left px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition-all duration-200 hover:translate-x-1"
//               >
//                 {q.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-auto">
//           <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">Recent Chats</p>
//           <div className="space-y-1.5">
//             {chats.slice(0, 4).map((chat, i) => (
//               <button
//                 key={chat._id || i}
//                 onClick={() => { setActiveChatId(chat._id); setMessages(chat.messages || []); }}
//                 className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-200 truncate ${
//                   activeChatId === chat._id ? "bg-white/25 font-semibold" : "bg-white/10 hover:bg-white/20"
//                 }`}
//               >
//                 💬 {chat.messages?.[0]?.text?.slice(0, 28) || "New chat"}...
//               </button>
//             ))}
//             {chats.length === 0 && (
//               <p className="text-xs text-indigo-300 opacity-60 px-2">No history yet</p>
//             )}
//           </div>
//         </div>

//         <button
//           onClick={() => setDarkMode((p) => { localStorage.setItem("darkMode", !p); return !p; })}
//           className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition"
//         >
//           {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-indigo-200" />}
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>

//       {/* ── MAIN CHAT ── */}
//       <div className="flex-1 flex flex-col min-h-screen">

//         {/* Header */}
//         <div className={`sticky top-0 z-40 px-6 py-4 border-b backdrop-blur-xl flex items-center justify-between ${darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-gray-100"} shadow-sm`}>
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
//                 <FaRobot className="text-white text-lg" />
//               </div>
//               <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
//             </div>
//             <div>
//               <h2 className="font-bold text-base">Mannlytics Assistant</h2>
//               <p className={`text-xs ${mutedText}`}>
//                 {loading ? "Typing a response..." : "Online • Ready to help"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             {selectedMood && (
//               <span className={`text-xs px-3 py-1.5 rounded-full border font-medium ${selectedMood.color}`}>
//                 {selectedMood.emoji} {selectedMood.label}
//               </span>
//             )}
//             <button
//               onClick={() => setMessages([{ sender: "bot", text: `Hello ${currentUserName.split(" ")[0]} 👋 Starting fresh! How are you feeling right now?` }])}
//               className={`p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
//               title="Clear chat"
//             >
//               <FaTrash className="text-sm" />
//             </button>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto px-6 py-6">

//           {/* Welcome card when only greeting */}
//           {messages.length === 1 && (
//             <div className={`mb-8 rounded-3xl p-6 border ${darkMode ? "bg-gray-800/60 border-gray-700" : "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100"}`}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
//                   <FaHeart className="text-white text-lg" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">Welcome to your safe space</h3>
//                   <p className={`text-sm ${mutedText}`}>I'm here to listen and support you</p>
//                 </div>
//               </div>

//               <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
//                 Share how you're feeling, pick a mood, or use the quick replies on the left. Everything you share stays between us. 💙
//               </p>

//               <div className="grid grid-cols-3 gap-2">
//                 {MOOD_TAGS.map((mood) => (
//                   <button
//                     key={mood.label}
//                     onClick={() => handleMoodSelect(mood)}
//                     className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-200 hover:scale-105 ${mood.color}`}
//                   >
//                     <span className="text-base">{mood.emoji}</span>
//                     {mood.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {messages.map((msg, i) => (
//             <MessageBubble key={i} msg={msg} darkMode={darkMode} />
//           ))}

//           {loading && (
//             <div className="flex gap-3 mb-4">
//               <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
//                 <FaRobot className="text-white text-sm" />
//               </div>
//               <div className={`rounded-2xl rounded-tl-sm shadow-sm border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-100"}`}>
//                 <TypingDots />
//               </div>
//             </div>
//           )}

//           <div ref={bottomRef} />
//         </div>

//         {/* Mood picker popup */}
//         {showMoodPicker && (
//           <div className={`mx-6 mb-3 p-4 rounded-2xl border shadow-lg ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
//             <p className={`text-xs font-semibold mb-3 ${mutedText}`}>How are you feeling right now?</p>
//             <div className="flex flex-wrap gap-2">
//               {MOOD_TAGS.map((mood) => (
//                 <button
//                   key={mood.label}
//                   onClick={() => handleMoodSelect(mood)}
//                   className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all hover:scale-105 ${mood.color}`}
//                 >
//                   {mood.emoji} {mood.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Input area */}
//         <div className={`px-6 py-4 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white/90 border-gray-100"} backdrop-blur-xl`}>
//           <div className={`flex items-end gap-3 rounded-2xl border p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-400/50 ${darkMode ? "bg-gray-800 border-gray-600" : "bg-gray-50 border-gray-200"}`}>

//             <button
//               onClick={() => setShowMoodPicker((p) => !p)}
//               className={`flex-shrink-0 p-2 rounded-xl transition ${showMoodPicker ? "bg-indigo-100 text-indigo-600" : darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-400 hover:bg-gray-200"}`}
//               title="Pick a mood"
//             >
//               <FaSmile className="text-lg" />
//             </button>

//             <textarea
//               ref={inputRef}
//               value={input}
//               onChange={(e) => { setInput(e.target.value); setCharCount(e.target.value.length); }}
//               onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
//               placeholder="Share how you're feeling... (Enter to send)"
//               rows={1}
//               maxLength={500}
//               className={`flex-1 resize-none bg-transparent outline-none text-sm leading-relaxed max-h-32 ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
//               style={{ minHeight: "24px" }}
//             />

//             <div className="flex items-center gap-2 flex-shrink-0">
//               {charCount > 0 && (
//                 <span className={`text-xs ${charCount > 450 ? "text-rose-400" : mutedText}`}>
//                   {charCount}/500
//                 </span>
//               )}

//               <button
//                 onClick={isRecording ? stopRecording : startRecording}
//                 className={`p-2 rounded-xl transition ${isRecording ? "bg-rose-100 text-rose-500 animate-pulse" : darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-400 hover:bg-gray-200"}`}
//                 title={isRecording ? "Stop recording" : "Voice input"}
//               >
//                 {isRecording ? <FaStop className="text-sm" /> : <FaMicrophone className="text-sm" />}
//               </button>

//               <button
//                 onClick={() => sendMessage()}
//                 disabled={!input.trim() || loading}
//                 className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
//               >
//                 <FaPaperPlane className="text-sm" />
//               </button>
//             </div>
//           </div>

//           <p className={`text-center text-xs mt-2 ${mutedText}`}>
//             Mannlytics provides emotional support, not medical advice. 💙
//           </p>
//         </div>
//       </div>

//       {/* Settings modal */}
//       {openSettings && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpenSettings(false)} />
//           <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <button onClick={() => setOpenSettings(false)} className="absolute top-4 right-4 text-lg">✖</button>
//             <Setting />
//           </div>
//         </div>
//       )}

//       <style>{`
//         textarea { scrollbar-width: none; }
//         textarea::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// }

// export default Chatbot;



import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";
import AppNavbar from "../Components/AppNavbar";

import {
  FaRobot,
  FaUser,
  FaChartBar,
  FaBars,
  FaBell,
  FaSignOutAlt,
  FaCog,
  FaPaperPlane,
  FaMicrophone,
  FaStop,
  FaSmile,
  FaHeart,
  FaStar,
  FaLeaf,
  FaBolt,
  FaMoon,
  FaSun,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

const QUICK_REPLIES = [
  { label: "😔 I feel sad", text: "I feel sad today" },
  { label: "😰 I'm anxious", text: "I'm feeling anxious" },
  { label: "😤 I'm stressed", text: "I'm really stressed" },
  { label: "😊 I feel good", text: "I'm feeling good today" },
  { label: "😴 Can't sleep", text: "I can't sleep properly" },
  { label: "😠 I'm angry", text: "I'm feeling angry" },
];

const MOOD_TAGS = [
  { emoji: "😊", label: "Happy", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { emoji: "😢", label: "Sad", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { emoji: "😰", label: "Anxious", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { emoji: "😤", label: "Stressed", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { emoji: "😴", label: "Tired", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { emoji: "💪", label: "Strong", color: "bg-green-100 text-green-700 border-green-200" },
];

const BOT_AVATAR_COLORS = [
  "from-indigo-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-pink-500",
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg, darkMode }) {
  const isUser = msg.sender === "user";
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex gap-3 mb-5 transition-all duration-500 ${
        isUser ? "justify-end" : "justify-start"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
          <FaRobot className="text-white text-sm" />
        </div>
      )}

      <div className={`max-w-[72%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        {!isUser && (
          <span className="text-xs font-semibold text-indigo-500 ml-1">Mannlytics</span>
        )}
        <div className="group relative">
          <div
            className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
              isUser
                ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-sm"
                : darkMode
                ? "bg-gray-700 text-gray-100 rounded-tl-sm"
                : "bg-white text-gray-800 rounded-tl-sm border border-gray-100"
            }`}
          >
            {msg.text}
          </div>
          {!isUser && (
            <button
              onClick={handleCopy}
              className={`absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1.5 rounded-lg text-xs shadow-md ${
                darkMode ? "bg-gray-600 text-gray-200 hover:bg-gray-500" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
              title="Copy message"
            >
              {copied ? "✓" : "⎘"}
            </button>
          )}
        </div>
        <span className={`text-[10px] px-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
          {msg.time}
        </span>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-md">
          <FaUser className="text-white text-sm" />
        </div>
      )}
    </div>
  );
}

function Chatbot() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarState");
    return saved === null ? true : saved === "true";
  });

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [selectedLang, setSelectedLang] = useState("en-US");
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const recognitionRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const currentUserEmail =
    sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");

  const currentUserName =
    sessionStorage.getItem("currentUserName") ||
    localStorage.getItem(`name_${currentUserEmail}`) ||
    "User";

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const loadChats = async () => {
      if (!currentUserEmail) return;
      try {
        const res = await fetch(`http://localhost:5000/api/chats/${currentUserEmail}`);
        const data = await res.json();
        setChats(data);
        if (data.length > 0) {
          setActiveChatId(data[0]._id);
          setMessages(data[0].messages);
        }
      } catch {}
    };
    loadChats();
  }, [currentUserEmail]);

  const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hello ${currentUserName.split(" ")[0]} 👋 I'm Mannlytics, your personal mental wellness companion. How are you feeling today?`,
      time: now(),
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();
  const inputRef = useRef();

  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, loading]);

  const handleMessagesScroll = (e) => {
    const el = e.target;
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollBtn(distFromBottom > 200);
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollBtn(false);
  };

  const sendMessage = async (customText) => {
    const userText = customText || input;
    if (!userText.trim() || loading) return;

    setInput("");
    setCharCount(0);
    setShowMoodPicker(false);

    const newMessages = [...messages, { sender: "user", text: userText, time: now() }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          chatId: activeChatId,
          userEmail: currentUserEmail,
        }),
      });

      const data = await res.json();

      // update activeChatId if new chat was created
      if (data.chatId && !activeChatId) {
        setActiveChatId(data.chatId);
        setChats((prev) => [{ _id: data.chatId, messages: [] }, ...prev]);
      }

      const updatedMessages = [...newMessages, { sender: "bot", text: data.reply, time: now() }];
      setMessages(updatedMessages);

    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "I'm having trouble connecting right now. Please try again in a moment. 💙", time: now() }]);
    }

    setLoading(false);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowMoodPicker(false);
    sendMessage(`I'm feeling ${mood.label.toLowerCase()} ${mood.emoji}`);
  };

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = selectedLang;
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (e) => {
      const transcript = Array.from(e.results).map((r) => r[0].transcript).join("");
      setInput(transcript);
      setCharCount(transcript.length);
    };
    recognition.onend = () => setIsRecording(false);
    recognition.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  const bg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-indigo-50 via-white to-purple-50";

  const cardBg = darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const inputBg = darkMode
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400";
  const sidebarBg = darkMode ? "bg-gray-800" : "bg-white";
  const mutedText = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${bg} transition-colors duration-300`}>
      <AppNavbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((p) => { localStorage.setItem("darkMode", !p); return !p; })} />

      {/* ── MAIN CONTENT ── */}
      <div className="flex flex-1 pt-20 overflow-hidden">

      {/* ── CHAT HISTORY SIDEBAR ── */}
      <div
        className={`hidden md:flex w-64 flex-shrink-0 bg-gradient-to-b from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] text-white p-4 flex-col gap-4 transition-all duration-500 overflow-y-auto`}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3">AI Assistant</p>
          <button
            onClick={async () => {
              try {
                const res = await fetch("http://localhost:5000/api/newChat", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userEmail: currentUserEmail }),
                });
                const newChat = await res.json();
                setChats((p) => [newChat, ...p]);
                setActiveChatId(newChat._id);
                setMessages([{ sender: "bot", text: `Hello again ${currentUserName.split(" ")[0]} 👋 Starting a new conversation. What's on your mind?` }]);
                setSelectedMood(null);
              } catch {}
            }}
            className="w-full flex items-center gap-2 justify-center bg-white/15 hover:bg-white/25 border border-white/20 text-white py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <FaPlus className="text-xs" /> New Conversation
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">Quick Start</p>
          <div className="space-y-1.5">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q.text}
                onClick={() => sendMessage(q.text)}
                className="w-full text-left px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition-all duration-200 hover:translate-x-1"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">Recent Chats</p>
          <div className="space-y-1.5">
            {chats.slice(0, 6).map((chat, i) => (
              <button
                key={chat._id || i}
                onClick={() => { setActiveChatId(chat._id); setMessages(chat.messages?.length ? chat.messages : [{ sender: "bot", text: `Hello ${currentUserName.split(" ")[0]} 👋 How are you feeling?`, time: now() }]); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-200 truncate ${
                  activeChatId === chat._id ? "bg-white/25 font-semibold" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                💬 {chat.messages?.[chat.messages.length - 1]?.text?.slice(0, 28) || "New chat"}...
              </button>
            ))}
            {chats.length === 0 && (
              <p className="text-xs text-indigo-300 opacity-60 px-2">No history yet. Start chatting!</p>
            )}
          </div>
        </div>

      </div>

      {/* ── MAIN CHAT ── */}
      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* Header */}
        <div className={`sticky top-0 z-40 px-6 py-4 border-b backdrop-blur-xl flex items-center justify-between ${darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-gray-100"} shadow-sm`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <FaRobot className="text-white text-lg" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h2 className="font-bold text-base">Mannlytics Assistant</h2>
              <p className={`text-xs ${mutedText}`}>
                {loading ? "Typing a response..." : "Online • Ready to help"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selectedMood && (
              <span className={`text-xs px-3 py-1.5 rounded-full border font-medium ${selectedMood.color}`}>
                {selectedMood.emoji} {selectedMood.label}
              </span>
            )}
            <button
              onClick={() => { setMessages([{ sender: "bot", text: `Hello ${currentUserName.split(" ")[0]} 👋 Starting fresh! How are you feeling right now?` }]); setSelectedMood(null); }}
              className={`p-2 rounded-xl transition ${darkMode ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
              title="Clear chat"
            >
              <FaTrash className="text-sm" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} onScroll={handleMessagesScroll} className="flex-1 overflow-y-auto px-6 py-6 relative">

          {/* Welcome card when only greeting */}
          {messages.length === 1 && (
            <div className={`mb-8 rounded-3xl p-6 border ${darkMode ? "bg-gray-800/60 border-gray-700" : "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FaHeart className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Welcome to your safe space</h3>
                  <p className={`text-sm ${mutedText}`}>I'm here to listen and support you</p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
                Share how you're feeling, pick a mood, or use the quick replies on the left. Everything you share stays between us. 💙
              </p>

              <div className="grid grid-cols-3 gap-2">
                {MOOD_TAGS.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => handleMoodSelect(mood)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-200 hover:scale-105 ${mood.color}`}
                  >
                    <span className="text-base">{mood.emoji}</span>
                    {mood.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} darkMode={darkMode} />
          ))}

          {loading && (
            <div className="flex gap-3 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                <FaRobot className="text-white text-sm" />
              </div>
              <div className={`rounded-2xl rounded-tl-sm shadow-sm border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-100"}`}>
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Scroll to bottom button */}
        {showScrollBtn && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-24 right-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:bg-indigo-700 hover:scale-110"
            title="Scroll to latest"
          >
            ↓
          </button>
        )}

        {/* Mood picker popup */}
        {showMoodPicker && (
          <div className={`mx-6 mb-3 p-4 rounded-2xl border shadow-lg ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
            <p className={`text-xs font-semibold mb-3 ${mutedText}`}>How are you feeling right now?</p>
            <div className="flex flex-wrap gap-2">
              {MOOD_TAGS.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => handleMoodSelect(mood)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all hover:scale-105 ${mood.color}`}
                >
                  {mood.emoji} {mood.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className={`px-6 py-4 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white/90 border-gray-100"} backdrop-blur-xl`}>

          {/* Language selector */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-xs font-semibold ${mutedText}`}>🌐 Language:</span>
            {[
              { value: "en-US", label: "English" },
              { value: "hi-IN", label: "हिंदी" },
              { value: "ur-PK", label: "اردو" },
              { value: "pa-IN", label: "ਪੰਜਾਬੀ" },
              { value: "bn-IN", label: "বাংলা" },
              { value: "ar-SA", label: "العربية" },
              { value: "fr-FR", label: "Français" },
              { value: "es-ES", label: "Español" },
              { value: "de-DE", label: "Deutsch" },
              { value: "zh-CN", label: "中文" },
            ].map((lang) => (
              <button
                key={lang.value}
                type="button"
                onClick={() => setSelectedLang(lang.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  selectedLang === lang.value
                    ? "bg-indigo-600 text-white"
                    : darkMode
                    ? "bg-white/10 text-gray-300 hover:bg-white/20"
                    : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className={`flex items-end gap-3 rounded-2xl border p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-400/50 ${darkMode ? "bg-gray-800 border-gray-600" : "bg-gray-50 border-gray-200"}`}>

            <button
              onClick={() => setShowMoodPicker((p) => !p)}
              className={`flex-shrink-0 p-2 rounded-xl transition ${showMoodPicker ? "bg-indigo-100 text-indigo-600" : darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-400 hover:bg-gray-200"}`}
              title="Pick a mood"
            >
              <FaSmile className="text-lg" />
            </button>

            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => { setInput(e.target.value); setCharCount(e.target.value.length); }}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder={selectedLang === "hi-IN" ? "आप कैसा महसूस कर रहे हैं..." : selectedLang === "ur-PK" ? "آپ کیسا محسوس کر رہے ہیں..." : selectedLang === "pa-IN" ? "ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ..." : selectedLang === "ar-SA" ? "كيف تشعر الآن..." : selectedLang === "fr-FR" ? "Comment vous sentez-vous..." : selectedLang === "es-ES" ? "¿Cómo te sientes..." : selectedLang === "de-DE" ? "Wie fühlen Sie sich..." : selectedLang === "zh-CN" ? "你现在感觉怎么样..." : selectedLang === "bn-IN" ? "আপনি কেমন অনুভব করছেন..." : "Share how you're feeling... (Enter to send)"}
              rows={1}
              maxLength={500}
              className={`flex-1 resize-none bg-transparent outline-none text-sm leading-relaxed max-h-32 ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
              style={{ minHeight: "24px" }}
            />

            <div className="flex items-center gap-2 flex-shrink-0">
              {charCount > 0 && (
                <span className={`text-xs ${charCount > 450 ? "text-rose-400" : mutedText}`}>
                  {charCount}/500
                </span>
              )}

              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`p-2 rounded-xl transition ${isRecording ? "bg-rose-100 text-rose-500 animate-pulse" : darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-400 hover:bg-gray-200"}`}
                title={isRecording ? "Stop recording" : "Voice input"}
              >
                {isRecording ? <FaStop className="text-sm" /> : <FaMicrophone className="text-sm" />}
              </button>

              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>

          <p className={`text-center text-xs mt-2 ${mutedText}`}>
            Mannlytics provides emotional support, not medical advice. 💙
          </p>
        </div>
      </div>

      </div>

      {/* Settings modal */}
      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpenSettings(false)} />
          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
            <button onClick={() => setOpenSettings(false)} className="absolute top-4 right-4 text-lg">✖</button>
            <Setting />
          </div>
        </div>
      )}

      <style>{`
        textarea { scrollbar-width: none; }
        textarea::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default Chatbot;