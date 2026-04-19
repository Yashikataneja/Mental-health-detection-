







// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Setting from "./Setting";
// // import { analyzeJournal } from "../services/api";

// // import pic from "../assets/logo pic.png";

// // import {
// //   FaBell,
// //   FaSignOutAlt,
// //   FaBars,
// //   FaChartBar,
// //   FaRobot,
// //   FaUser,
// //   FaCog,
// //   FaHeart,
// //   FaMicrophone,
// //   FaStop
// // } from "react-icons/fa";

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const recognitionRef = useRef(null);

// //   const voiceLanguages = [
// //     { value: "en-US", label: "English" },
// //     { value: "hi-IN", label: "Hindi" },
// //     { value: "ur-PK", label: "Urdu" },
// //     { value: "pa-IN", label: "Punjabi" },
// //     { value: "ar-SA", label: "Arabic" },
// //     { value: "bn-IN", label: "Bengali" }
// //   ];

// //   const [darkMode, setDarkMode] = useState(() => {
// //     return localStorage.getItem("darkMode") === "true";
// //   });

// //   useEffect(() => {
// //     if (darkMode) {
// //       document.body.classList.add("dark");
// //     } else {
// //       document.body.classList.remove("dark");
// //     }
// //   }, [darkMode]);

// //   const toggleDarkMode = () => {
// //     const newMode = !darkMode;
// //     setDarkMode(newMode);
// //     localStorage.setItem("darkMode", newMode);
// //   };

// //   const [isOpen, setIsOpen] = useState(() => {
// //     const saved = localStorage.getItem("sidebarState");
// //     return saved === null ? true : saved === "true";
// //   });

// //   const [openDropdown, setOpenDropdown] = useState(false);
// //   const [journal, setJournal] = useState("");
// //   const [result, setResult] = useState(null);
// //   const [streak, setStreak] = useState(0);
// //   const [openSettings, setOpenSettings] = useState(false);
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
// //   const [voiceStatus, setVoiceStatus] = useState("");
// //   const [voiceError, setVoiceError] = useState("");

// //   const currentUserEmail =
// //     sessionStorage.getItem("currentUser") ||
// //     localStorage.getItem("currentUser");

// //   const currentUserName =
// //     sessionStorage.getItem("currentUserName") ||
// //     localStorage.getItem(`name_${currentUserEmail}`) ||
// //     "User";

// //   useEffect(() => {
// //     if (!currentUserEmail) return;
// //     const savedStreak = localStorage.getItem(
// //       `journalStreak_${currentUserEmail}`
// //     );
// //     if (savedStreak) setStreak(parseInt(savedStreak));
// //   }, [currentUserEmail]);

// //   useEffect(() => {
// //     const handleClickOutside = () => setOpenDropdown(false);
// //     document.addEventListener("click", handleClickOutside);
// //     return () => document.removeEventListener("click", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     return () => {
// //       recognitionRef.current?.stop();
// //     };
// //   }, []);

// //   const analyzeEmotion = async () => {
// //     if (!journal.trim()) return;

// //     try {
// //       const data = await analyzeJournal(journal);
// //       console.log("Saved:", data);

// //       const analysis = data.analysis || {};

// //       const emotionMap = {
// //         happiness: { emoji: "😊", score: 9 },
// //         joy: { emoji: "😊", score: 9 },
// //         sadness: { emoji: "😢", score: 3 },
// //         sad: { emoji: "😢", score: 3 },
// //         anger: { emoji: "😠", score: 4 },
// //         anxiety: { emoji: "😟", score: 4 },
// //         stress: { emoji: "😣", score: 4 },
// //         neutral: { emoji: "😐", score: 5 }
// //       };

// //       const emotionKey = (analysis.emotion || "neutral").toLowerCase();
// //       const emotionMeta = emotionMap[emotionKey] || {
// //         emoji: "😐",
// //         score: 5
// //       };

// //       setResult({
// //         emotion: analysis.emotion || "neutral",
// //         emoji: emotionMeta.emoji,
// //         score: analysis.riskScore
// //           ? Math.min(10, Math.max(1, Math.round(analysis.riskScore / 10)))
// //           : emotionMeta.score,
// //         predicted_label: analysis.predicted_label || "Normal",
// //         confidence: analysis.confidence || 0,
// //         riskScore: analysis.riskScore || 0,
// //         sentiment_score: analysis.sentiment_score || 0,
// //         cognitive_distortions: analysis.cognitive_distortions || [],
// //         behavioral_signals: analysis.behavioral_signals || []
// //       });

// //       if (!currentUserEmail) return;

// //       const today = new Date().toDateString();
// //       const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);

// //       if (lastDate !== today) {
// //         const newStreak = streak + 1;
// //         setStreak(newStreak);

// //         localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
// //         localStorage.setItem(`lastDate_${currentUserEmail}`, today);
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const startRecording = async () => {
// //     const SpeechRecognition =
// //       window.SpeechRecognition || window.webkitSpeechRecognition;

// //     if (!SpeechRecognition) {
// //       setVoiceError("Voice typing is not supported in this browser.");
// //       return;
// //     }

// //     try {
// //       setVoiceError("");
// //       setVoiceStatus("Listening...");
// //       const recognition = new SpeechRecognition();
// //       recognitionRef.current = recognition;
// //       recognition.lang = selectedLanguage;
// //       recognition.interimResults = true;
// //       recognition.continuous = true;

// //       let finalTranscript = "";

// //       recognition.onresult = (event) => {
// //         let interimTranscript = "";

// //         for (let index = event.resultIndex; index < event.results.length; index += 1) {
// //           const transcript = event.results[index][0]?.transcript || "";

// //           if (event.results[index].isFinal) {
// //             finalTranscript += ` ${transcript}`;
// //           } else {
// //             interimTranscript += transcript;
// //           }
// //         }

// //         const combinedTranscript = `${finalTranscript} ${interimTranscript}`.trim();
// //         setJournal(combinedTranscript);
// //       };

// //       recognition.onerror = (event) => {
// //         setIsRecording(false);
// //         setVoiceStatus("");
// //         setVoiceError(
// //           event.error === "not-allowed"
// //             ? "Please allow microphone access to use voice typing."
// //             : "Voice typing failed. Please try again."
// //         );
// //       };

// //       recognition.onend = () => {
// //         setIsRecording(false);
// //         setVoiceStatus("");
// //       };

// //       recognition.start();
// //       setIsRecording(true);
// //       setVoiceError("");
// //     } catch (error) {
// //       console.error(error);
// //       setVoiceStatus("");
// //       setVoiceError("Could not start voice typing.");
// //     }
// //   };

// //   const stopRecording = () => {
// //     recognitionRef.current?.stop();
// //   };

// //   return (
// //     <div
// //       className={`flex min-h-screen ${
// //         darkMode
// //           ? "bg-gray-900 text-white"
// //           : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
// //       }`}
// //     >
// //       <div
// //         className={`${
// //           isOpen ? "w-64" : "w-28"
// //         } ${
// //           darkMode ? "bg-gray-800 text-white" : "bg-white"
// //         } shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
// //       >
// //         <div>
// //           <div className="flex items-center justify-between p-4 border-b">
// //             {isOpen ? (
// //               <div
// //                 onClick={() => navigate("/")}
// //                 className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
// //               >
// //                 <img src={pic} className="w-16 h-16 rounded-full shadow" />

// //                 <div>
// //                   <h1 className="text-indigo-600 font-bold text-2xl">
// //                     Moodly AI
// //                   </h1>
// //                   <p className="text-xs text-gray-400">Mental Wellness</p>
// //                 </div>
// //               </div>
// //             ) : (
// //               <img src={pic} className="w-12 h-12 rounded-full shadow-md" />
// //             )}

// //             <FaBars
// //               className="text-xl text-indigo-600 cursor-pointer"
// //               onClick={() => {
// //                 const newState = !isOpen;
// //                 setIsOpen(newState);
// //                 localStorage.setItem("sidebarState", newState);
// //               }}
// //             />
// //           </div>

// //           <div className="p-3 space-y-4 mt-2">
// //             <button
// //               className={`group flex items-center ${
// //                 isOpen
// //                   ? "px-4 bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-white"
// //                   : "justify-center py-4 text-gray-700 dark:text-white"
// //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// //             >
// //               <FaChartBar className="text-indigo-600 dark:text-white" />
// //               {isOpen && <span className="dark:text-white">Dashboard</span>}
// //             </button>

// //             <button
// //               onClick={() => navigate("/chatbot")}
// //               className={`group flex items-center ${
// //                 isOpen
// //                   ? "px-4 text-gray-700 dark:text-white"
// //                   : "justify-center py-4 text-gray-700 dark:text-white"
// //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// //             >
// //               <FaRobot className="text-gray-700 dark:text-white" />
// //               {isOpen && <span className="dark:text-white">AI Assistant</span>}
// //             </button>

// //             <button
// //               onClick={() => navigate("/profile")}
// //               className={`group flex items-center ${
// //                 isOpen
// //                   ? "px-4 text-gray-700 dark:text-white"
// //                   : "justify-center py-4 text-gray-700 dark:text-white"
// //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// //             >
// //               <FaUser className="text-gray-700 dark:text-white" />
// //               {isOpen && <span className="dark:text-white">Profile</span>}
// //             </button>
// //           </div>
// //         </div>

// //         <div className="p-4 border-t relative">
// //           <div
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               setOpenDropdown((prev) => !prev);
// //             }}
// //             className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg"
// //           >
// //             <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
// //               {currentUserName.charAt(0).toUpperCase()}
// //             </div>

// //             {isOpen && (
// //               <div>
// //                 <p className="text-sm font-semibold">{currentUserName}</p>
// //                 <p className="text-xs text-gray-500">{currentUserEmail}</p>
// //               </div>
// //             )}
// //           </div>

// //           {openDropdown && (
// //             <div className="absolute bottom-16 left-2 w-52 bg-white shadow-2xl rounded-xl p-2 border z-50">
// //               <div
// //                 onClick={() => {
// //                   setOpenSettings(true);
// //                   setOpenDropdown(false);
// //                 }}
// //                 className="flex items-center gap-3 p-2 hover:bg-indigo-50 cursor-pointer rounded-lg transition"
// //               >
// //                 <FaCog className="text-gray-600" />
// //                 <span className="text-sm">Settings</span>
// //               </div>

// //               <div
// //                 onClick={() => {
// //                   sessionStorage.clear();
// //                   navigate("/");
// //                 }}
// //                 className="flex items-center gap-3 p-2 hover:bg-red-50 text-red-500 cursor-pointer rounded-lg transition"
// //               >
// //                 <FaSignOutAlt />
// //                 <span className="text-sm">Logout</span>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       <div
// //         className={`flex-1 p-10 ${
// //           isOpen ? "ml-64" : "ml-28"
// //         } transition-all duration-500`}
// //       >
// //         <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 px-7 rounded-2xl shadow-lg mb-10 flex items-center justify-between">
// //           <div>
// //             <h1 className="text-3xl font-semibold">
// //               Welcome, {currentUserName.split(" ")[0]} 👋
// //             </h1>
// //             <p className="text-sm opacity-95 mt-1">
// //               Your mental wellness dashboard 🧠
// //             </p>
// //           </div>

// //           <div className="hidden md:block">
// //             <p className="text-base md:text-lg font-medium opacity-90 text-center">
// //               Track your mood & improve daily ✨
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-6">
// //             <button
// //               onClick={toggleDarkMode}
// //               className="bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-semibold"
// //             >
// //               {darkMode ? "☀️" : "🌙"}
// //             </button>

// //             <button
// //               onClick={() => document.querySelector("textarea")?.focus()}
// //               className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
// //             >
// //               + New Entry
// //             </button>

// //             <button
// //               onClick={() => navigate("/safe-space")}
// //               style={{
// //                 animation:
// //                   "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite"
// //               }}
// //               className="group relative overflow-hidden rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-indigo-600"
// //             >
// //               <span
// //                 style={{ animation: "safeShine 2.7s linear infinite" }}
// //                 className="absolute top-0 -left-12 h-full w-10 rotate-12 bg-white/40 blur-[2px]"
// //               />
// //               <span className="relative z-10 flex items-center gap-2">
// //                 <FaHeart className="animate-pulse text-rose-200 group-hover:text-indigo-500" />
// //                 Safe Space
// //                 <span className="relative flex h-2.5 w-2.5">
// //                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-200 opacity-90" />
// //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-100" />
// //                 </span>
// //               </span>
// //             </button>

// //             <FaBell className="text-xl cursor-pointer" />

// //             <div
// //               onClick={() => navigate("/profile")}
// //               className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold cursor-pointer"
// //             >
// //               {currentUserName.charAt(0).toUpperCase()}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-6 mb-10">
// //           {[
// //             {
// //               title: "Current Emotion",
// //               value: result ? `${result.emotion} ${result.emoji}` : "--"
// //             },
// //             {
// //               title: "Mental Score",
// //               value: result ? `${result.score}/10` : "--"
// //             },
// //             { title: "Streak 🔥", value: streak }
// //           ].map((item, i) => (
// //             <div
// //               key={i}
// //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow`}
// //             >
// //               <h3>{item.title}</h3>
// //               <p className="text-xl mt-2">{item.value}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div
// //           className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow max-w-3xl`}
// //         >
// //           <h2 className="text-lg font-semibold mb-3">
// //             How are you feeling today?
// //           </h2>

// //           <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
// //             <div className="flex items-center gap-3">
// //               <button
// //                 onClick={isRecording ? stopRecording : startRecording}
// //                 className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
// //                   isRecording
// //                     ? "bg-red-500 hover:bg-red-600"
// //                     : "bg-indigo-600 hover:bg-indigo-700"
// //                 } disabled:cursor-not-allowed disabled:opacity-60`}
// //               >
// //                 {isRecording ? <FaStop /> : <FaMicrophone />}
// //                 {isRecording ? "Stop recording" : "Use mic"}
// //               </button>

// //               <select
// //                 value={selectedLanguage}
// //                 onChange={(event) => setSelectedLanguage(event.target.value)}
// //                 disabled={isRecording}
// //                 className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none"
// //               >
// //                 {voiceLanguages.map((language) => (
// //                   <option key={language.value} value={language.value}>
// //                     {language.label}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <p className="text-sm text-gray-500">
// //               {isRecording
// //                 ? "Recording in progress..."
// //                 : "Speak and your words will appear in the text box."}
// //             </p>
// //           </div>

// //           <textarea
// //             value={journal}
// //             onChange={(e) => setJournal(e.target.value)}
// //             className="w-full border p-3 rounded-lg 
// //             bg-white text-black 
// //             dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
// //             placeholder-gray-400 dark:placeholder-gray-500"
// //             placeholder="Write here..."
// //           />

// //           {voiceStatus && (
// //             <p className="mt-3 text-sm text-indigo-600">{voiceStatus}</p>
// //           )}

// //           {voiceError && (
// //             <p className="mt-2 text-sm text-red-500">{voiceError}</p>
// //           )}

// //           <button
// //             onClick={analyzeEmotion}
// //             className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
// //           >
// //             Analyze
// //           </button>
// //         </div>

// //         {result && (
// //           <div className="mt-8 max-w-3xl space-y-6">
// //             <div
// //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow border-l-4 border-indigo-500`}
// //             >
// //               <h3 className="text-lg font-semibold">
// //                 Detected Emotion: {result.emotion} {result.emoji}
// //               </h3>
// //               <p className="text-sm text-gray-500 mt-1">
// //                 Mental Score: {result.score}/10
// //               </p>
// //               <p className="text-sm text-gray-500 mt-1">
// //                 Predicted Label: {result.predicted_label}
// //               </p>
// //               <p className="text-sm text-gray-500 mt-1">
// //                 Confidence: {(result.confidence * 100).toFixed(1)}%
// //               </p>
// //             </div>

// //             <div
// //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow`}
// //             >
// //               <h3 className="font-semibold mb-3">Suggestions 💡</h3>

// //               <div className="space-y-3 text-sm">
// //                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
// //                   🌿 <span>Take a walk</span>
// //                 </div>

// //                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
// //                   🎧 <span>Listen to music</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <button
// //               onClick={() =>
// //                 navigate("/detailed-analysis", { state: { result, journal } })
// //               }
// //               className="mt-6 w-fit bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
// //             >
// //               View Detailed Analysis →
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //       {openSettings && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center">
// //           <div
// //             className="absolute inset-0 bg-black/40"
// //             onClick={() => setOpenSettings(false)}
// //           ></div>

// //           <div
// //             className={`relative ${
// //               darkMode ? "bg-gray-800 text-white" : "bg-white"
// //             } w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50`}
// //           >
// //             <button
// //               onClick={() => setOpenSettings(false)}
// //               className="absolute top-3 right-3 text-lg"
// //             >
// //               ✖
// //             </button>

// //             <Setting />
// //           </div>
// //         </div>
// //       )}

// //       <style>{`
// //         @keyframes safeFloat {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-4px); }
// //         }

// //         @keyframes safeGlow {
// //           0%, 100% {
// //             box-shadow: 0 8px 18px rgba(79,70,229,0.35), 0 0 0 0 rgba(255,255,255,0.1);
// //           }
// //           50% {
// //             box-shadow: 0 14px 30px rgba(99,102,241,0.6), 0 0 0 5px rgba(255,255,255,0.12);
// //           }
// //         }

// //         @keyframes safeShine {
// //           0% { transform: translateX(-120px) rotate(12deg); opacity: 0; }
// //           20% { opacity: 1; }
// //           100% { transform: translateX(220px) rotate(12deg); opacity: 0; }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Dashboard;



// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Setting from "./Setting";
// import { analyzeJournal } from "../services/api";

// import pic from "../assets/logo pic.png";

// import {
//   FaBell,
//   FaSignOutAlt,
//   FaBars,
//   FaChartBar,
//   FaRobot,
//   FaUser,
//   FaCog,
//   FaHeart,
//   FaMicrophone,
//   FaStop
// } from "react-icons/fa";

// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// function Dashboard() {
//   const navigate = useNavigate();
//   const recognitionRef = useRef(null);

//   const voiceLanguages = [
//     { value: "en-US", label: "English" },
//     { value: "hi-IN", label: "Hindi" },
//     { value: "ur-PK", label: "Urdu" },
//     { value: "pa-IN", label: "Punjabi" },
//     { value: "ar-SA", label: "Arabic" },
//     { value: "bn-IN", label: "Bengali" }
//   ];

//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("darkMode", newMode);
//   };

//   const [isOpen, setIsOpen] = useState(() => {
//     const saved = localStorage.getItem("sidebarState");
//     return saved === null ? true : saved === "true";
//   });

//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);
//   const [streak, setStreak] = useState(0);
//   const [openSettings, setOpenSettings] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   const [voiceStatus, setVoiceStatus] = useState("");
//   const [voiceError, setVoiceError] = useState("");

//   const currentUserEmail =
//     sessionStorage.getItem("currentUser") ||
//     localStorage.getItem("currentUser");

//   const currentUserName =
//     sessionStorage.getItem("currentUserName") ||
//     localStorage.getItem(`name_${currentUserEmail}`) ||
//     "User";

//   useEffect(() => {
//     if (!currentUserEmail) return;
//     const savedStreak = localStorage.getItem(
//       `journalStreak_${currentUserEmail}`
//     );
//     if (savedStreak) setStreak(parseInt(savedStreak));
//   }, [currentUserEmail]);

//   useEffect(() => {
//     const handleClickOutside = () => setOpenDropdown(false);
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     return () => {
//       recognitionRef.current?.stop();
//     };
//   }, []);

//   const saveHistoryEntry = (analysisResult) => {
//     if (!currentUserEmail) return;

//     const historyKey = `moodHistory_${currentUserEmail}`;
//     const storedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

//     const historyEntry = {
//       id: Date.now(),
//       score: Number(analysisResult.score || 0),
//       confidence: Number(((analysisResult.confidence || 0) * 100).toFixed(1)),
//       riskScore: Number((analysisResult.riskScore || 0).toFixed(2)),
//       sentimentScore: Number((analysisResult.sentiment_score || 0).toFixed(3)),
//       emotion: analysisResult.emotion || "neutral",
//       predictedLabel: analysisResult.predicted_label || "Normal",
//       journal,
//       day: new Date().toLocaleDateString("en-US", { weekday: "short" }),
//       createdAt: new Date().toISOString()
//     };

//     const updatedHistory = [...storedHistory, historyEntry].slice(-10);
//     localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
//   };

//   const analyzeEmotion = async () => {
//     if (!journal.trim()) return;

//     try {
//       const data = await analyzeJournal(journal);
//       console.log("Saved:", data);

//       const analysis = data.analysis || {};

//       const emotionMap = {
//         happiness: { emoji: "😊", score: 9 },
//         joy: { emoji: "😊", score: 9 },
//         sadness: { emoji: "😢", score: 3 },
//         sad: { emoji: "😢", score: 3 },
//         anger: { emoji: "😠", score: 4 },
//         anxiety: { emoji: "😟", score: 4 },
//         stress: { emoji: "😣", score: 4 },
//         neutral: { emoji: "😐", score: 5 }
//       };

//       const emotionKey = (analysis.emotion || "neutral").toLowerCase();
//       const emotionMeta = emotionMap[emotionKey] || {
//         emoji: "😐",
//         score: 5
//       };

//       const normalizedResult = {
//         emotion: analysis.emotion || "neutral",
//         emoji: emotionMeta.emoji,
//         score: analysis.riskScore
//           ? Math.min(10, Math.max(1, Math.round(analysis.riskScore / 10)))
//           : emotionMeta.score,
//         predicted_label: analysis.predicted_label || "Normal",
//         confidence: analysis.confidence || 0,
//         riskScore: analysis.riskScore || 0,
//         sentiment_score: analysis.sentiment_score || 0,
//         cognitive_distortions: analysis.cognitive_distortions || [],
//         behavioral_signals: analysis.behavioral_signals || []
//       };

//       setResult(normalizedResult);
//       saveHistoryEntry(normalizedResult);

//       if (!currentUserEmail) return;

//       const today = new Date().toDateString();
//       const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);

//       if (lastDate !== today) {
//         const newStreak = streak + 1;
//         setStreak(newStreak);

//         localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
//         localStorage.setItem(`lastDate_${currentUserEmail}`, today);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const startRecording = async () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       setVoiceError("Voice typing is not supported in this browser.");
//       return;
//     }

//     try {
//       setVoiceError("");
//       setVoiceStatus("Listening...");
//       const recognition = new SpeechRecognition();
//       recognitionRef.current = recognition;
//       recognition.lang = selectedLanguage;
//       recognition.interimResults = true;
//       recognition.continuous = true;

//       let finalTranscript = "";

//       recognition.onresult = (event) => {
//         let interimTranscript = "";

//         for (
//           let index = event.resultIndex;
//           index < event.results.length;
//           index += 1
//         ) {
//           const transcript = event.results[index][0]?.transcript || "";

//           if (event.results[index].isFinal) {
//             finalTranscript += ` ${transcript}`;
//           } else {
//             interimTranscript += transcript;
//           }
//         }

//         const combinedTranscript = `${finalTranscript} ${interimTranscript}`.trim();
//         setJournal(combinedTranscript);
//       };

//       recognition.onerror = (event) => {
//         setIsRecording(false);
//         setVoiceStatus("");
//         setVoiceError(
//           event.error === "not-allowed"
//             ? "Please allow microphone access to use voice typing."
//             : "Voice typing failed. Please try again."
//         );
//       };

//       recognition.onend = () => {
//         setIsRecording(false);
//         setVoiceStatus("");
//       };

//       recognition.start();
//       setIsRecording(true);
//       setVoiceError("");
//     } catch (error) {
//       console.error(error);
//       setVoiceStatus("");
//       setVoiceError("Could not start voice typing.");
//     }
//   };

//   const stopRecording = () => {
//     recognitionRef.current?.stop();
//   };

//   const emotionChartTheme = {
//     happiness: ["#22c55e", "#4ade80", "#86efac", "#16a34a"],
//     joy: ["#eab308", "#facc15", "#fde047", "#ca8a04"],
//     sadness: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb"],
//     sad: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb"],
//     anger: ["#ef4444", "#f87171", "#fca5a5", "#dc2626"],
//     anxiety: ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed"],
//     stress: ["#f97316", "#fb923c", "#fdba74", "#ea580c"],
//     neutral: ["#64748b", "#94a3b8", "#cbd5e1", "#475569"]
//   };

//   const activeEmotionKey = (result?.emotion || "neutral").toLowerCase();
//   const activeTheme =
//     emotionChartTheme[activeEmotionKey] || emotionChartTheme.neutral;

//   const dashboardMetrics = result
//     ? [
//         {
//           label: "Mental Score",
//           value: Number(result.score || 0),
//           displayValue: `${Number(result.score || 0)}/10`,
//           color: activeTheme[0]
//         },
//         {
//           label: "Confidence",
//           value: Number(((result.confidence || 0) * 100).toFixed(1)),
//           displayValue: `${Number(((result.confidence || 0) * 100).toFixed(1))}%`,
//           color: activeTheme[1]
//         },
//         {
//           label: "Risk Score",
//           value: Number((result.riskScore || 0).toFixed(2)),
//           displayValue: `${Number((result.riskScore || 0).toFixed(2))}`,
//           color: activeTheme[2]
//         },
//         {
//           label: "Sentiment Score",
//           value: Number((result.sentiment_score || 0).toFixed(3)),
//           displayValue: `${Number((result.sentiment_score || 0).toFixed(3))}`,
//           color: activeTheme[3]
//         }
//       ]
//     : [];

//   const metricValues = dashboardMetrics.map((item) => item.value);
//   const minMetricValue = metricValues.length ? Math.min(...metricValues, 0) : 0;
//   const maxMetricValue = metricValues.length ? Math.max(...metricValues, 1) : 1;
//   const axisPadding = Math.max(2, Math.ceil(maxMetricValue * 0.15));

//   const dashboardBarData = {
//     labels: dashboardMetrics.map(
//       (item) => `${item.label} (${item.displayValue})`
//     ),
//     datasets: [
//       {
//         data: dashboardMetrics.map((item) => item.value),
//         backgroundColor: dashboardMetrics.map((item) => item.color),
//         borderRadius: 10,
//         borderSkipped: false,
//         barThickness: 16
//       }
//     ]
//   };

//   const dashboardBarOptions = {
//     indexAxis: "y",
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         backgroundColor: darkMode ? "#111827" : "#ffffff",
//         titleColor: darkMode ? "#f8fafc" : "#0f172a",
//         bodyColor: darkMode ? "#e2e8f0" : "#334155",
//         borderColor: darkMode ? "#334155" : "#e2e8f0",
//         borderWidth: 1,
//         callbacks: {
//           label: (context) => ` Value: ${context.raw}`
//         }
//       }
//     },
//     scales: {
//       x: {
//         min: minMetricValue < 0 ? minMetricValue - axisPadding : 0,
//         max: maxMetricValue + axisPadding,
//         ticks: {
//           color: darkMode ? "#cbd5e1" : "#475569"
//         },
//         grid: {
//           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
//         }
//       },
//       y: {
//         ticks: {
//           color: darkMode ? "#e2e8f0" : "#334155",
//           font: {
//             size: 11
//           }
//         },
//         grid: {
//           display: false
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className={`flex min-h-screen ${
//         darkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
//       }`}
//     >
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-28"
//         } ${
//           darkMode ? "bg-gray-800 text-white" : "bg-white"
//         } shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
//       >
//         <div>
//           <div className="flex items-center justify-between p-4 border-b">
//             {isOpen ? (
//               <div
//                 onClick={() => navigate("/")}
//                 className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
//               >
//                 <img src={pic} className="w-16 h-16 rounded-full shadow" />

//                 <div>
//                   <h1 className="text-indigo-600 font-bold text-2xl">
//                     Moodly AI
//                   </h1>
//                   <p className="text-xs text-gray-400">Mental Wellness</p>
//                 </div>
//               </div>
//             ) : (
//               <img src={pic} className="w-12 h-12 rounded-full shadow-md" />
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

//           <div className="p-3 space-y-4 mt-2">
//             <button
//               className={`group flex items-center ${
//                 isOpen
//                   ? "px-4 bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-white"
//                   : "justify-center py-4 text-gray-700 dark:text-white"
//               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
//             >
//               <FaChartBar className="text-indigo-600 dark:text-white" />
//               {isOpen && <span className="dark:text-white">Dashboard</span>}
//             </button>

//             <button
//               onClick={() => navigate("/chatbot")}
//               className={`group flex items-center ${
//                 isOpen
//                   ? "px-4 text-gray-700 dark:text-white"
//                   : "justify-center py-4 text-gray-700 dark:text-white"
//               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
//             >
//               <FaRobot className="text-gray-700 dark:text-white" />
//               {isOpen && <span className="dark:text-white">AI Assistant</span>}
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className={`group flex items-center ${
//                 isOpen
//                   ? "px-4 text-gray-700 dark:text-white"
//                   : "justify-center py-4 text-gray-700 dark:text-white"
//               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
//             >
//               <FaUser className="text-gray-700 dark:text-white" />
//               {isOpen && <span className="dark:text-white">Profile</span>}
//             </button>
//           </div>
//         </div>

//         <div className="p-4 border-t relative">
//           <div
//             onClick={(e) => {
//               e.stopPropagation();
//               setOpenDropdown((prev) => !prev);
//             }}
//             className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg"
//           >
//             <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
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
//             <div className="absolute bottom-16 left-2 w-52 bg-white shadow-2xl rounded-xl p-2 border z-50">
//               <div
//                 onClick={() => {
//                   setOpenSettings(true);
//                   setOpenDropdown(false);
//                 }}
//                 className="flex items-center gap-3 p-2 hover:bg-indigo-50 cursor-pointer rounded-lg transition"
//               >
//                 <FaCog className="text-gray-600" />
//                 <span className="text-sm">Settings</span>
//               </div>

//               <div
//                 onClick={() => {
//                   sessionStorage.clear();
//                   navigate("/");
//                 }}
//                 className="flex items-center gap-3 p-2 hover:bg-red-50 text-red-500 cursor-pointer rounded-lg transition"
//               >
//                 <FaSignOutAlt />
//                 <span className="text-sm">Logout</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div
//         className={`flex-1 p-10 ${
//           isOpen ? "ml-64" : "ml-28"
//         } transition-all duration-500`}
//       >
//         <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 px-7 rounded-2xl shadow-lg mb-10 flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-semibold">
//               Welcome, {currentUserName.split(" ")[0]} 👋
//             </h1>
//             <p className="text-sm opacity-95 mt-1">
//               Your mental wellness dashboard 🧠
//             </p>
//           </div>

//           <div className="hidden md:block">
//             <p className="text-base md:text-lg font-medium opacity-90 text-center">
//               Track your mood & improve daily ✨
//             </p>
//           </div>

//           <div className="flex items-center gap-6">
//             <button
//               onClick={toggleDarkMode}
//               className="bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-semibold"
//             >
//               {darkMode ? "☀️" : "🌙"}
//             </button>

//             <button
//               onClick={() => document.querySelector("textarea")?.focus()}
//               className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
//             >
//               + New Entry
//             </button>

//             <button
//               onClick={() => navigate("/safe-space")}
//               style={{
//                 animation:
//                   "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite"
//               }}
//               className="group relative overflow-hidden rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-indigo-600"
//             >
//               <span
//                 style={{ animation: "safeShine 2.7s linear infinite" }}
//                 className="absolute top-0 -left-12 h-full w-10 rotate-12 bg-white/40 blur-[2px]"
//               />
//               <span className="relative z-10 flex items-center gap-2">
//                 <FaHeart className="animate-pulse text-rose-200 group-hover:text-indigo-500" />
//                 Safe Space
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-200 opacity-90" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-100" />
//                 </span>
//               </span>
//             </button>

//             <FaBell className="text-xl cursor-pointer" />

//             <div
//               onClick={() => navigate("/profile")}
//               className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold cursor-pointer"
//             >
//               {currentUserName.charAt(0).toUpperCase()}
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-10">
//           {[
//             {
//               title: "Current Emotion",
//               value: result ? `${result.emotion} ${result.emoji}` : "--"
//             },
//             {
//               title: "Mental Score",
//               value: result ? `${result.score}/10` : "--"
//             },
//             { title: "Streak 🔥", value: streak }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow`}
//             >
//               <h3>{item.title}</h3>
//               <p className="text-xl mt-2">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         <div
//           className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow max-w-3xl`}
//         >
//           <h2 className="text-lg font-semibold mb-3">
//             How are you feeling today?
//           </h2>

//           <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={isRecording ? stopRecording : startRecording}
//                 className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
//                   isRecording
//                     ? "bg-red-500 hover:bg-red-600"
//                     : "bg-indigo-600 hover:bg-indigo-700"
//                 } disabled:cursor-not-allowed disabled:opacity-60`}
//               >
//                 {isRecording ? <FaStop /> : <FaMicrophone />}
//                 {isRecording ? "Stop recording" : "Use mic"}
//               </button>

//               <select
//                 value={selectedLanguage}
//                 onChange={(event) => setSelectedLanguage(event.target.value)}
//                 disabled={isRecording}
//                 className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none"
//               >
//                 {voiceLanguages.map((language) => (
//                   <option key={language.value} value={language.value}>
//                     {language.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <p className="text-sm text-gray-500">
//               {isRecording
//                 ? "Recording in progress..."
//                 : "Speak and your words will appear in the text box."}
//             </p>
//           </div>

//           <textarea
//             value={journal}
//             onChange={(e) => setJournal(e.target.value)}
//             className="w-full border p-3 rounded-lg 
//             bg-white text-black 
//             dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
//             placeholder-gray-400 dark:placeholder-gray-500"
//             placeholder="Write here..."
//           />

//           {voiceStatus && (
//             <p className="mt-3 text-sm text-indigo-600">{voiceStatus}</p>
//           )}

//           {voiceError && (
//             <p className="mt-2 text-sm text-red-500">{voiceError}</p>
//           )}

//           <button
//             onClick={analyzeEmotion}
//             className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
//           >
//             Analyze
//           </button>
//         </div>

//         {result && (
//           <div className="mt-8 max-w-3xl space-y-6">
//             <div
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow border-l-4 border-indigo-500`}
//             >
//               <h3 className="text-lg font-semibold">
//                 Detected Emotion: {result.emotion} {result.emoji}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 Mental Score: {result.score}/10
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Predicted Label: {result.predicted_label}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Confidence: {(result.confidence * 100).toFixed(1)}%
//               </p>
//             </div>

//             <div
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow`}
//             >
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h3 className="font-semibold text-lg">Current Analysis Overview</h3>
//                   <p className="text-sm text-gray-500 mt-1 capitalize">
//                     Realtime metrics for {result.emotion}
//                   </p>
//                 </div>
//                 <div
//                   className="h-3 w-3 rounded-full"
//                   style={{ backgroundColor: activeTheme[0] }}
//                 />
//               </div>

//               <div className="h-56">
//                 <Bar data={dashboardBarData} options={dashboardBarOptions} />
//               </div>
//             </div>

//             <div
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow`}
//             >
//               <h3 className="font-semibold mb-3">Suggestions 💡</h3>

//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
//                   🌿 <span>Take a walk</span>
//                 </div>

//                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
//                   🎧 <span>Listen to music</span>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() =>
//                 navigate("/detailed-analysis", { state: { result, journal } })
//               }
//               className="mt-6 w-fit bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
//             >
//               View Detailed Analysis →
//             </button>
//           </div>
//         )}
//       </div>

//       {openSettings && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setOpenSettings(false)}
//           ></div>

//           <div
//             className={`relative ${
//               darkMode ? "bg-gray-800 text-white" : "bg-white"
//             } w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50`}
//           >
//             <button
//               onClick={() => setOpenSettings(false)}
//               className="absolute top-3 right-3 text-lg"
//             >
//               ✖
//             </button>

//             <Setting />
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes safeFloat {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-4px); }
//         }

//         @keyframes safeGlow {
//           0%, 100% {
//             box-shadow: 0 8px 18px rgba(79,70,229,0.35), 0 0 0 0 rgba(255,255,255,0.1);
//           }
//           50% {
//             box-shadow: 0 14px 30px rgba(99,102,241,0.6), 0 0 0 5px rgba(255,255,255,0.12);
//           }
//         }

//         @keyframes safeShine {
//           0% { transform: translateX(-120px) rotate(12deg); opacity: 0; }
//           20% { opacity: 1; }
//           100% { transform: translateX(220px) rotate(12deg); opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Dashboard;





import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";
import { analyzeJournal } from "../services/api";

import pic from "../assets/logo pic.png";

import {
  FaBell,
  FaSignOutAlt,
  FaBars,
  FaChartBar,
  FaRobot,
  FaUser,
  FaCog,
  FaHeart,
  FaMicrophone,
  FaStop
} from "react-icons/fa";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  const voiceLanguages = [
    { value: "en-US", label: "English" },
    { value: "hi-IN", label: "Hindi" },
    { value: "ur-PK", label: "Urdu" },
    { value: "pa-IN", label: "Punjabi" },
    { value: "ar-SA", label: "Arabic" },
    { value: "bn-IN", label: "Bengali" }
  ];

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarState");
    return saved === null ? true : saved === "true";
  });

  const [openDropdown, setOpenDropdown] = useState(false);
  const [journal, setJournal] = useState("");
  const [result, setResult] = useState(null);
  const [streak, setStreak] = useState(0);
  const [openSettings, setOpenSettings] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [voiceStatus, setVoiceStatus] = useState("");
  const [voiceError, setVoiceError] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(() => {
    return localStorage.getItem("voiceEnabled") !== "false";
  });

  const currentUserEmail =
    sessionStorage.getItem("currentUser") ||
    localStorage.getItem("currentUser");

  const currentUserName =
    sessionStorage.getItem("currentUserName") ||
    localStorage.getItem(`name_${currentUserEmail}`) ||
    "User";

  useEffect(() => {
    if (!currentUserEmail) return;
    const savedStreak = localStorage.getItem(
      `journalStreak_${currentUserEmail}`
    );
    if (savedStreak) setStreak(parseInt(savedStreak));
  }, [currentUserEmail]);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Welcome voice greeting on component mount
  useEffect(() => {
    if (voiceEnabled && currentUserName) {
      const welcomeTimeout = setTimeout(() => {
        speakText(`Welcome back ${currentUserName.split(" ")[0]}! Ready to track your mood today?`);
      }, 1500);
      return () => clearTimeout(welcomeTimeout);
    }
  }, [currentUserName, voiceEnabled]);

  const saveHistoryEntry = (analysisResult, currentJournal) => {
    if (!currentUserEmail) return;

    const historyKey = `moodHistory_${currentUserEmail}`;
    const storedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

    const historyEntry = {
      id: Date.now(),
      score: Number(analysisResult.score || 0),
      confidence: Number(((analysisResult.confidence || 0) * 100).toFixed(1)),
      riskScore: Number((analysisResult.riskScore || 0).toFixed(2)),
      sentimentScore: Number((analysisResult.sentiment_score || 0).toFixed(3)),
      emotion: analysisResult.emotion || "neutral",
      predictedLabel: analysisResult.predicted_label || "Normal",
      journal: currentJournal,
      day: new Date().toLocaleDateString("en-US", { weekday: "short" }),
      createdAt: new Date().toISOString()
    };

    const updatedHistory = [...storedHistory, historyEntry].slice(-10);
    localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
  };

  const analyzeEmotion = async () => {
    if (!journal.trim()) return;

    try {
      const data = await analyzeJournal(journal);
      console.log("Saved:", data);

      const analysis = data.analysis || {};

      const emotionMap = {
        happiness: { emoji: "😊", score: 9 },
        joy: { emoji: "😊", score: 9 },
        sadness: { emoji: "😢", score: 3 },
        sad: { emoji: "😢", score: 3 },
        anger: { emoji: "😠", score: 4 },
        anxiety: { emoji: "😟", score: 4 },
        stress: { emoji: "😣", score: 4 },
        neutral: { emoji: "😐", score: 5 }
      };

      const emotionKey = (analysis.emotion || "neutral").toLowerCase();
      const emotionMeta = emotionMap[emotionKey] || {
        emoji: "😐",
        score: 5
      };

      const normalizedResult = {
        emotion: analysis.emotion || "neutral",
        emoji: emotionMeta.emoji,
        score: analysis.riskScore
          ? Math.min(10, Math.max(1, Math.round(analysis.riskScore / 10)))
          : emotionMeta.score,
        predicted_label: analysis.predicted_label || "Normal",
        confidence: analysis.confidence || 0,
        riskScore: analysis.riskScore || 0,
        sentiment_score: analysis.sentiment_score || 0,
        cognitive_distortions: analysis.cognitive_distortions || [],
        behavioral_signals: analysis.behavioral_signals || []
      };

      setResult(normalizedResult);
      saveHistoryEntry(normalizedResult, journal);
      
      // Voice feedback for analysis result
      if (voiceEnabled) {
        setTimeout(() => {
          const voiceMessage = getVoiceMessage(normalizedResult.emotion);
          speakText(voiceMessage);
        }, 1000);
      }

      if (!currentUserEmail) return;

      const today = new Date().toDateString();
      const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);

      if (lastDate !== today) {
        const newStreak = streak + 1;
        setStreak(newStreak);

        localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
        localStorage.setItem(`lastDate_${currentUserEmail}`, today);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startRecording = async () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError("Voice typing is not supported in this browser.");
      return;
    }

    try {
      setVoiceError("");
      setVoiceStatus("Listening...");
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = selectedLanguage;
      recognition.interimResults = true;
      recognition.continuous = true;

      let finalTranscript = "";

      recognition.onresult = (event) => {
        let interimTranscript = "";

        for (
          let index = event.resultIndex;
          index < event.results.length;
          index += 1
        ) {
          const transcript = event.results[index][0]?.transcript || "";

          if (event.results[index].isFinal) {
            finalTranscript += ` ${transcript}`;
          } else {
            interimTranscript += transcript;
          }
        }

        const combinedTranscript = `${finalTranscript} ${interimTranscript}`.trim();
        setJournal(combinedTranscript);
      };

      recognition.onerror = (event) => {
        setIsRecording(false);
        setVoiceStatus("");
        setVoiceError(
          event.error === "not-allowed"
            ? "Please allow microphone access to use voice typing."
            : "Voice typing failed. Please try again."
        );
      };

      recognition.onend = () => {
        setIsRecording(false);
        setVoiceStatus("");
      };

      recognition.start();
      setIsRecording(true);
      setVoiceError("");
    } catch (error) {
      console.error(error);
      setVoiceStatus("");
      setVoiceError("Could not start voice typing.");
    }
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
  };

  // Text-to-speech function with emotion-based voice modulation
  const speakText = (text, options = {}) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get emotion-based voice settings
    const getEmotionVoiceSettings = (emotion) => {
      const emotionKey = (emotion || 'neutral').toLowerCase();
      
      switch (emotionKey) {
        case 'joy':
        case 'happiness':
          return { rate: 1.1, pitch: 1.3, volume: 0.9 }; // Faster, higher pitch, louder
        case 'sadness':
        case 'sad':
          return { rate: 0.7, pitch: 0.8, volume: 0.7 }; // Slower, lower pitch, softer
        case 'anxiety':
          return { rate: 0.8, pitch: 1.1, volume: 0.8 }; // Slightly faster, gentle pitch
        case 'stress':
          return { rate: 0.75, pitch: 0.9, volume: 0.8 }; // Slower, calming
        case 'anger':
          return { rate: 0.8, pitch: 0.9, volume: 0.7 }; // Controlled, lower pitch
        case 'neutral':
        default:
          return { rate: 0.9, pitch: 1.0, volume: 0.8 }; // Balanced
      }
    };
    
    const emotionSettings = getEmotionVoiceSettings(result?.emotion);
    
    utterance.rate = options.rate || emotionSettings.rate;
    utterance.pitch = options.pitch || emotionSettings.pitch;
    utterance.volume = options.volume || emotionSettings.volume;
    
    // Try to use a pleasant voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Female') || 
      voice.name.includes('Samantha') ||
      voice.name.includes('Karen') ||
      voice.gender === 'female'
    ) || voices[0];
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  // Stop speaking
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Toggle voice feature
  const toggleVoice = () => {
    const newVoiceState = !voiceEnabled;
    setVoiceEnabled(newVoiceState);
    localStorage.setItem("voiceEnabled", newVoiceState);
    
    if (newVoiceState) {
      speakText("Voice assistance is now enabled! I'm here to help make your experience more engaging.");
    } else {
      stopSpeaking();
    }
  };

  // Get encouraging voice messages based on emotion
  const getVoiceMessage = (emotion) => {
    const messages = {
      joy: [
        "That's wonderful! Your positive energy is contagious. Keep shining!",
        "I love hearing about your happiness! You're doing amazing.",
        "Your joy brightens the day! Keep up that beautiful spirit."
      ],
      happiness: [
        "Your happiness is beautiful! Let's celebrate this wonderful moment.",
        "I'm so glad you're feeling happy! You deserve all this joy.",
        "Happiness looks great on you! Keep embracing these positive vibes."
      ],
      sadness: [
        "I hear you, and it's okay to feel this way. You're not alone in this journey.",
        "Your feelings are valid. Take it one step at a time, you're stronger than you know.",
        "It's brave of you to acknowledge these feelings. Better days are coming."
      ],
      sad: [
        "I'm here with you through this. Your courage to express yourself is admirable.",
        "These feelings will pass. You're taking the right steps by tracking your mood.",
        "Remember, it's okay to not be okay sometimes. You're doing great by staying aware."
      ],
      anxiety: [
        "Take a deep breath with me. You're safe, and you're going to get through this.",
        "Anxiety is tough, but you're tougher. Let's focus on the present moment together.",
        "I believe in your strength. You've overcome challenges before, and you will again."
      ],
      stress: [
        "Let's pause for a moment. You're handling a lot, and that takes real strength.",
        "Stress is your mind's way of saying you care. Let's find some calm together.",
        "You're doing your best, and that's enough. Take things one step at a time."
      ],
      anger: [
        "I can sense your frustration. It's okay to feel angry - let's work through this together.",
        "Your feelings are important. Take a moment to breathe and center yourself.",
        "Anger shows you care deeply. Let's channel that energy into something positive."
      ],
      neutral: [
        "Thanks for checking in with yourself today. Self-awareness is a superpower!",
        "Every mood matters, including neutral ones. You're building great habits!",
        "Consistency in tracking your emotions shows real commitment to your wellbeing."
      ]
    };
    
    const emotionMessages = messages[emotion.toLowerCase()] || messages.neutral;
    return emotionMessages[Math.floor(Math.random() * emotionMessages.length)];
  };

  const detectedEmotionKey = (result?.emotion || "neutral").toLowerCase();

  const emotionBars = [
    {
      label: "Joy",
      value:
        detectedEmotionKey === "joy" || detectedEmotionKey === "happiness"
          ? 100
          : 12,
      color: "#facc15"
    },
    {
      label: "Sad",
      value:
        detectedEmotionKey === "sad" || detectedEmotionKey === "sadness"
          ? 100
          : 12,
      color: "#60a5fa"
    },
    {
      label: "Anxiety",
      value: detectedEmotionKey === "anxiety" ? 100 : 12,
      color: "#a78bfa"
    },
    {
      label: "Stress",
      value: detectedEmotionKey === "stress" ? 100 : 12,
      color: "#fb923c"
    },
    {
      label: "Neutral",
      value: detectedEmotionKey === "neutral" ? 100 : 12,
      color: "#94a3b8"
    },
    {
      label: "Anger",
      value:
        detectedEmotionKey === "anger" || detectedEmotionKey === "angry"
          ? 100
          : 12,
      color: "#f87171"
    }
  ];

  const emotionChartData = {
    labels: emotionBars.map((item) => item.label),
    datasets: [
      {
        data: emotionBars.map((item) => item.value),
        backgroundColor: emotionBars.map((item) => item.color),
        borderRadius: 14,
        borderSkipped: false,
        barThickness: 18
      }
    ]
  };

  const emotionChartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: darkMode ? "#0f172a" : "#ffffff",
        titleColor: darkMode ? "#f8fafc" : "#0f172a",
        bodyColor: darkMode ? "#e2e8f0" : "#334155",
        borderColor: darkMode ? "#334155" : "#e2e8f0",
        borderWidth: 1,
        callbacks: {
          label: (context) =>
            context.raw === 100 ? " Active emotion" : " Inactive"
        }
      }
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: darkMode ? "#cbd5e1" : "#64748b",
          callback: (value) => `${value}%`
        },
        grid: {
          color: darkMode ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)"
        }
      },
      y: {
        ticks: {
          color: darkMode ? "#f8fafc" : "#1e293b",
          font: {
            size: 12,
            weight: "700"
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  const getMoodSuggestions = () => {
    const mood = detectedEmotionKey;

    if (mood === "joy" || mood === "happiness") {
      return [
        "Keep doing what is making you feel light and happy.",
        "Write one good thing about today in your journal.",
        "Share this positive moment with someone close."
      ];
    }

    if (mood === "sad" || mood === "sadness") {
      return [
        "Take a short walk or sit in fresh air for a few minutes.",
        "Listen to calm music and avoid isolating yourself too much.",
        "Talk to someone you trust, even briefly."
      ];
    }

    if (mood === "anxiety") {
      return [
        "Try a 4-4-4 breathing exercise for one minute.",
        "Focus only on the next small task, not everything at once.",
        "Drink water and step away from the screen for a moment."
      ];
    }

    if (mood === "stress") {
      return [
        "Take a short break and relax your shoulders and jaw.",
        "Break your work into one small manageable step.",
        "Avoid multitasking for the next few minutes."
      ];
    }

    if (mood === "anger" || mood === "angry") {
      return [
        "Pause before reacting and take a slow breath.",
        "Step away from the triggering situation for a moment.",
        "Write down what upset you before responding."
      ];
    }

    return [
      "Keep tracking your mood daily for better emotional insights.",
      "Write a few more lines if you want a clearer analysis.",
      "Take a small pause and notice how your body feels right now."
    ];
  };

  const suggestions = getMoodSuggestions();

  // Get animated emoji based on emotion
  const getAnimatedEmoji = (emotion) => {
    const emotionKey = (emotion || 'neutral').toLowerCase();
    
    const emojiMap = {
      joy: '😊',
      happiness: '😄',
      sadness: '😢',
      sad: '😔',
      anxiety: '😰',
      stress: '😤',
      anger: '😠',
      neutral: '😐'
    };
    
    return emojiMap[emotionKey] || '😐';
  };
  
  // Get emotion-based background gradient
  const getEmotionGradient = (emotion) => {
    const emotionKey = (emotion || 'neutral').toLowerCase();
    
    const gradients = {
      joy: 'from-yellow-400 via-orange-300 to-yellow-500',
      happiness: 'from-green-400 via-emerald-300 to-green-500',
      sadness: 'from-blue-400 via-blue-300 to-blue-500',
      sad: 'from-gray-400 via-slate-300 to-gray-500',
      anxiety: 'from-purple-400 via-violet-300 to-purple-500',
      stress: 'from-orange-400 via-red-300 to-orange-500',
      anger: 'from-red-400 via-rose-300 to-red-500',
      neutral: 'from-gray-400 via-slate-300 to-gray-500'
    };
    
    return gradients[emotionKey] || gradients.neutral;
  };

  // Animated emoji component
  const AnimatedEmoji = ({ emotion, size = 'text-6xl' }) => {
    const emoji = getAnimatedEmoji(emotion);
    const emotionKey = (emotion || 'neutral').toLowerCase();
    
    const getAnimationClass = () => {
      switch (emotionKey) {
        case 'joy':
        case 'happiness':
          return 'animate-bounce';
        case 'sadness':
        case 'sad':
          return 'animate-pulse';
        case 'anxiety':
          return 'animate-ping';
        case 'stress':
          return 'animate-pulse';
        case 'anger':
          return 'animate-bounce';
        default:
          return 'animate-pulse';
      }
    };
    
    return (
      <div className={`${size} ${getAnimationClass()} transition-all duration-500`}>
        {emoji}
      </div>
    );
  };

  return (
    <div
      className={`flex min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
      }`}
    >
      <div
        className={`${
          isOpen ? "w-64" : "w-28"
        } ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        } shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
      >
        <div>
          <div className="flex items-center justify-between p-4 border-b">
            {isOpen ? (
              <div
                onClick={() => navigate("/")}
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

          <div className="p-3 space-y-4 mt-2">
            <button
              className={`group flex items-center ${
                isOpen
                  ? "px-4 bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-white"
                  : "justify-center py-4 text-gray-700 dark:text-white"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
            >
              <FaChartBar className="text-indigo-600 dark:text-white" />
              {isOpen && <span className="dark:text-white">Dashboard</span>}
            </button>

            <button
              onClick={() => navigate("/chatbot")}
              className={`group flex items-center ${
                isOpen
                  ? "px-4 text-gray-700 dark:text-white"
                  : "justify-center py-4 text-gray-700 dark:text-white"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
            >
              <FaRobot className="text-gray-700 dark:text-white" />
              {isOpen && <span className="dark:text-white">AI Assistant</span>}
            </button>

            <button
              onClick={() => navigate("/profile")}
              className={`group flex items-center ${
                isOpen
                  ? "px-4 text-gray-700 dark:text-white"
                  : "justify-center py-4 text-gray-700 dark:text-white"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
            >
              <FaUser className="text-gray-700 dark:text-white" />
              {isOpen && <span className="dark:text-white">Profile</span>}
            </button>
          </div>
        </div>

        <div className="p-4 border-t relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown((prev) => !prev);
            }}
            className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg"
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

      <div
        className={`flex-1 p-10 ${
          isOpen ? "ml-64" : "ml-28"
        } transition-all duration-500`}
      >
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 px-7 rounded-2xl shadow-lg mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">
              Welcome, {currentUserName.split(" ")[0]} 👋
            </h1>
            <p className="text-sm opacity-95 mt-1">
              Your mental wellness dashboard 🧠
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-base md:text-lg font-medium opacity-90 text-center">
              Track your mood & improve daily ✨
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={toggleVoice}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                voiceEnabled 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              title={voiceEnabled ? "Voice assistance enabled" : "Voice assistance disabled"}
            >
              {isSpeaking ? "🔊" : voiceEnabled ? "🎤" : "🔇"}
            </button>

            <button
              onClick={() => document.querySelector("textarea")?.focus()}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              + New Entry
            </button>

            <button
              onClick={() => navigate("/safe-space")}
              style={{
                animation:
                  "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite"
              }}
              className="group relative overflow-hidden rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-indigo-600"
            >
              <span
                style={{ animation: "safeShine 2.7s linear infinite" }}
                className="absolute top-0 -left-12 h-full w-10 rotate-12 bg-white/40 blur-[2px]"
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaHeart className="animate-pulse text-rose-200 group-hover:text-indigo-500" />
                Safe Space
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-200 opacity-90" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-100" />
                </span>
              </span>
            </button>

            <FaBell className="text-xl cursor-pointer" />

            <div
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold cursor-pointer"
            >
              {currentUserName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Current Emotion",
              value: result ? `${result.emotion}` : "--",
              emoji: result ? result.emotion : null
            },
            {
              title: "Mental Score",
              value: result ? `${result.score}/10` : "--"
            },
            { title: "Streak 🔥", value: streak }
          ].map((item, i) => (
            <div
              key={i}
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 ${
                item.emoji ? `bg-gradient-to-br ${getEmotionGradient(item.emoji)} bg-opacity-10` : ''
              }`}
            >
              <h3 className="text-sm font-medium">{item.title}</h3>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-xl capitalize">{item.value}</p>
                {item.emoji && (
                  <AnimatedEmoji emotion={item.emoji} size="text-3xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow`}
            >
              <h2 className="text-lg font-semibold mb-3">
                How are you feeling today?
              </h2>

              <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
                      isRecording
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    {isRecording ? <FaStop /> : <FaMicrophone />}
                    {isRecording ? "Stop recording" : "Use mic"}
                  </button>

                  <select
                    value={selectedLanguage}
                    onChange={(event) => setSelectedLanguage(event.target.value)}
                    disabled={isRecording}
                    className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none"
                  >
                    {voiceLanguages.map((language) => (
                      <option key={language.value} value={language.value}>
                        {language.label}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="text-sm text-gray-500">
                  {isRecording
                    ? "Recording in progress..."
                    : "Speak and your words will appear in the text box."}
                </p>
              </div>

              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                className="w-full border p-3 rounded-lg 
                bg-white text-black 
                dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
                placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Write here..."
                rows={5}
              />

              {voiceStatus && (
                <p className="mt-3 text-sm text-indigo-600">{voiceStatus}</p>
              )}

              {voiceError && (
                <p className="mt-2 text-sm text-red-500">{voiceError}</p>
              )}

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={analyzeEmotion}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Analyze
                </button>
                
                {voiceEnabled && (
                  <button
                    onClick={() => speakText("Let me read your journal entry for you: " + journal)}
                    disabled={!journal.trim() || isSpeaking}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    title="Read journal aloud"
                  >
                    {isSpeaking ? "🔊" : "📖"}
                    {isSpeaking ? "Speaking..." : "Read Aloud"}
                  </button>
                )}
                
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                  >
                    ⏹️ Stop
                  </button>
                )}
              </div>
            </div>

            {result && (
              <>
                <div
                  className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow border-l-4 border-indigo-500 relative overflow-hidden`}
                >
                  {/* Animated background based on emotion */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getEmotionGradient(result.emotion)} opacity-5 animate-pulse`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <AnimatedEmoji emotion={result.emotion} size="text-5xl" />
                      <div>
                        <h3 className="text-lg font-semibold capitalize">
                          Detected Emotion: {result.emotion}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Predicted Label: {result.predicted_label}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Mental Score: {result.score}/10
                        </p>
                      </div>
                    </div>
                    
                    {/* Emotion intensity bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Emotion Intensity</span>
                        <span>{result.score}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getEmotionGradient(result.emotion)} transition-all duration-1000 ease-out animate-pulse`}
                          style={{ width: `${(result.score / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-2xl shadow`}
                >
                  <h3 className="font-semibold text-lg mb-3">
                    Suggestions For You
                  </h3>

                  <div className="space-y-3 text-sm">
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm transition group hover:bg-indigo-100 dark:hover:bg-gray-600"
                      >
                        <div className="flex items-center gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </div>
                        {voiceEnabled && (
                          <button
                            onClick={() => speakText(`Here's a suggestion for you: ${item}`)}
                            disabled={isSpeaking}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
                            title="Read suggestion aloud"
                          >
                            {isSpeaking ? "🔊" : "🎵"}
                          </button>
                        )}
                      </div>
                    ))}
                    
                    {voiceEnabled && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                              🎯 Voice Coaching Available
                            </p>
                            <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">
                              Get personalized audio guidance
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              const coaching = `Let me give you some personalized coaching: Based on your ${result.emotion} mood, I recommend taking a moment to ${suggestions[0].toLowerCase()}. Remember, every emotion is valid and temporary. You're on a beautiful journey of self-discovery. Keep being kind to yourself!`;
                              speakText(coaching, { rate: 0.8, pitch: 1.2 });
                            }}
                            disabled={isSpeaking}
                            className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 text-sm flex items-center gap-1"
                          >
                            {isSpeaking ? "🔊" : "🎧"}
                            {isSpeaking ? "Coaching..." : "Get Coaching"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        navigate("/detailed-analysis", {
                          state: { result, journal }
                        })
                      }
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                    >
                      View Detailed Analysis →
                    </button>
                    
                    {voiceEnabled && result && (
                      <button
                        onClick={() => {
                          const summary = `Your analysis summary: You're feeling ${result.emotion} with a mental score of ${result.score} out of 10. Your predicted label is ${result.predicted_label} with ${(result.confidence * 100).toFixed(1)}% confidence.`;
                          speakText(summary);
                        }}
                        disabled={isSpeaking}
                        className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 disabled:opacity-50 flex items-center gap-2"
                      >
                        {isSpeaking ? "🔊" : "🎯"}
                        {isSpeaking ? "Speaking..." : "Hear Summary"}
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="xl:col-span-5">
            <div
              className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow sticky top-8`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Realtime Emotion Graph</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Colorful snapshot based on current detection
                  </p>
                </div>
                {voiceEnabled && result && (
                  <button
                    onClick={() => {
                      const chartDescription = `Looking at your emotion chart: ${result.emotion} is currently active, while other emotions like joy, sadness, anxiety, stress, neutral, and anger are in the background. Your emotional state is clearly visible in this colorful visualization.`;
                      speakText(chartDescription);
                    }}
                    disabled={isSpeaking}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors disabled:opacity-50"
                    title="Describe chart"
                  >
                    {isSpeaking ? "🔊" : "📊"}
                  </button>
                )}
              </div>

              <div className="h-[340px]">
                <Bar data={emotionChartData} options={emotionChartOptions} />
              </div>

              <div
                className={`mt-5 rounded-xl p-4 relative overflow-hidden ${
                  darkMode ? "bg-gray-700" : "bg-indigo-50"
                }`}
              >
                {/* Animated background for current mood */}
                {result && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${getEmotionGradient(result.emotion)} opacity-10 animate-pulse`}></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Current mood
                        </p>
                        <p className="text-xl font-semibold capitalize mt-1">
                          {result ? result.emotion : "No emotion detected yet"}
                        </p>
                      </div>
                      {result && (
                        <AnimatedEmoji emotion={result.emotion} size="text-4xl" />
                      )}
                    </div>
                    {voiceEnabled && (
                      <button
                        onClick={() => {
                          const encouragement = [
                            "You're doing great by staying aware of your emotions!",
                            "Self-reflection is a sign of emotional intelligence!",
                            "Keep up the excellent work on your mental wellness journey!",
                            "Your commitment to understanding yourself is inspiring!"
                          ];
                          const randomEncouragement = encouragement[Math.floor(Math.random() * encouragement.length)];
                          speakText(randomEncouragement);
                        }}
                        disabled={isSpeaking}
                        className="text-2xl hover:scale-110 transition-transform disabled:opacity-50 animate-pulse"
                        title="Get encouragement"
                      >
                        {isSpeaking ? "🔊" : "💪"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenSettings(false)}
          ></div>

          <div
            className={`relative ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            } w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50`}
          >
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

      <style>{`
        @keyframes safeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes safeGlow {
          0%, 100% {
            box-shadow: 0 8px 18px rgba(79,70,229,0.35), 0 0 0 0 rgba(255,255,255,0.1);
          }
          50% {
            box-shadow: 0 14px 30px rgba(99,102,241,0.6), 0 0 0 5px rgba(255,255,255,0.12);
          }
        }

        @keyframes safeShine {
          0% { transform: translateX(-120px) rotate(12deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(220px) rotate(12deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;

