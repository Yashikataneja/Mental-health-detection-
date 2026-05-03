







// // // import { useState, useEffect, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Setting from "./Setting";
// // // import { analyzeJournal } from "../services/api";

// // // import pic from "../assets/logo pic.png";

// // // import {
// // //   FaBell,
// // //   FaSignOutAlt,
// // //   FaBars,
// // //   FaChartBar,
// // //   FaRobot,
// // //   FaUser,
// // //   FaCog,
// // //   FaHeart,
// // //   FaMicrophone,
// // //   FaStop
// // // } from "react-icons/fa";

// // // function Dashboard() {
// // //   const navigate = useNavigate();
// // //   const recognitionRef = useRef(null);

// // //   const voiceLanguages = [
// // //     { value: "en-US", label: "English" },
// // //     { value: "hi-IN", label: "Hindi" },
// // //     { value: "ur-PK", label: "Urdu" },
// // //     { value: "pa-IN", label: "Punjabi" },
// // //     { value: "ar-SA", label: "Arabic" },
// // //     { value: "bn-IN", label: "Bengali" }
// // //   ];

// // //   const [darkMode, setDarkMode] = useState(() => {
// // //     return localStorage.getItem("darkMode") === "true";
// // //   });

// // //   useEffect(() => {
// // //     if (darkMode) {
// // //       document.body.classList.add("dark");
// // //     } else {
// // //       document.body.classList.remove("dark");
// // //     }
// // //   }, [darkMode]);

// // //   const toggleDarkMode = () => {
// // //     const newMode = !darkMode;
// // //     setDarkMode(newMode);
// // //     localStorage.setItem("darkMode", newMode);
// // //   };

// // //   const [isOpen, setIsOpen] = useState(() => {
// // //     const saved = localStorage.getItem("sidebarState");
// // //     return saved === null ? true : saved === "true";
// // //   });

// // //   const [openDropdown, setOpenDropdown] = useState(false);
// // //   const [journal, setJournal] = useState("");
// // //   const [result, setResult] = useState(null);
// // //   const [streak, setStreak] = useState(0);
// // //   const [openSettings, setOpenSettings] = useState(false);
// // //   const [isRecording, setIsRecording] = useState(false);
// // //   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
// // //   const [voiceStatus, setVoiceStatus] = useState("");
// // //   const [voiceError, setVoiceError] = useState("");

// // //   const currentUserEmail =
// // //     sessionStorage.getItem("currentUser") ||
// // //     localStorage.getItem("currentUser");

// // //   const currentUserName =
// // //     sessionStorage.getItem("currentUserName") ||
// // //     localStorage.getItem(`name_${currentUserEmail}`) ||
// // //     "User";

// // //   useEffect(() => {
// // //     if (!currentUserEmail) return;
// // //     const savedStreak = localStorage.getItem(
// // //       `journalStreak_${currentUserEmail}`
// // //     );
// // //     if (savedStreak) setStreak(parseInt(savedStreak));
// // //   }, [currentUserEmail]);

// // //   useEffect(() => {
// // //     const handleClickOutside = () => setOpenDropdown(false);
// // //     document.addEventListener("click", handleClickOutside);
// // //     return () => document.removeEventListener("click", handleClickOutside);
// // //   }, []);

// // //   useEffect(() => {
// // //     return () => {
// // //       recognitionRef.current?.stop();
// // //     };
// // //   }, []);

// // //   const analyzeEmotion = async () => {
// // //     if (!journal.trim()) return;

// // //     try {
// // //       const data = await analyzeJournal(journal);
// // //       console.log("Saved:", data);

// // //       const analysis = data.analysis || {};

// // //       const emotionMap = {
// // //         happiness: { emoji: "😊", score: 9 },
// // //         joy: { emoji: "😊", score: 9 },
// // //         sadness: { emoji: "😢", score: 3 },
// // //         sad: { emoji: "😢", score: 3 },
// // //         anger: { emoji: "😠", score: 4 },
// // //         anxiety: { emoji: "😟", score: 4 },
// // //         stress: { emoji: "😣", score: 4 },
// // //         neutral: { emoji: "😐", score: 5 }
// // //       };

// // //       const emotionKey = (analysis.emotion || "neutral").toLowerCase();
// // //       const emotionMeta = emotionMap[emotionKey] || {
// // //         emoji: "😐",
// // //         score: 5
// // //       };

// // //       setResult({
// // //         emotion: analysis.emotion || "neutral",
// // //         emoji: emotionMeta.emoji,
// // //         score: analysis.riskScore
// // //           ? Math.min(10, Math.max(1, Math.round(analysis.riskScore / 10)))
// // //           : emotionMeta.score,
// // //         predicted_label: analysis.predicted_label || "Normal",
// // //         confidence: analysis.confidence || 0,
// // //         riskScore: analysis.riskScore || 0,
// // //         sentiment_score: analysis.sentiment_score || 0,
// // //         cognitive_distortions: analysis.cognitive_distortions || [],
// // //         behavioral_signals: analysis.behavioral_signals || []
// // //       });

// // //       if (!currentUserEmail) return;

// // //       const today = new Date().toDateString();
// // //       const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);

// // //       if (lastDate !== today) {
// // //         const newStreak = streak + 1;
// // //         setStreak(newStreak);

// // //         localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
// // //         localStorage.setItem(`lastDate_${currentUserEmail}`, today);
// // //       }
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   const startRecording = async () => {
// // //     const SpeechRecognition =
// // //       window.SpeechRecognition || window.webkitSpeechRecognition;

// // //     if (!SpeechRecognition) {
// // //       setVoiceError("Voice typing is not supported in this browser.");
// // //       return;
// // //     }

// // //     try {
// // //       setVoiceError("");
// // //       setVoiceStatus("Listening...");
// // //       const recognition = new SpeechRecognition();
// // //       recognitionRef.current = recognition;
// // //       recognition.lang = selectedLanguage;
// // //       recognition.interimResults = true;
// // //       recognition.continuous = true;

// // //       let finalTranscript = "";

// // //       recognition.onresult = (event) => {
// // //         let interimTranscript = "";

// // //         for (let index = event.resultIndex; index < event.results.length; index += 1) {
// // //           const transcript = event.results[index][0]?.transcript || "";

// // //           if (event.results[index].isFinal) {
// // //             finalTranscript += ` ${transcript}`;
// // //           } else {
// // //             interimTranscript += transcript;
// // //           }
// // //         }

// // //         const combinedTranscript = `${finalTranscript} ${interimTranscript}`.trim();
// // //         setJournal(combinedTranscript);
// // //       };

// // //       recognition.onerror = (event) => {
// // //         setIsRecording(false);
// // //         setVoiceStatus("");
// // //         setVoiceError(
// // //           event.error === "not-allowed"
// // //             ? "Please allow microphone access to use voice typing."
// // //             : "Voice typing failed. Please try again."
// // //         );
// // //       };

// // //       recognition.onend = () => {
// // //         setIsRecording(false);
// // //         setVoiceStatus("");
// // //       };

// // //       recognition.start();
// // //       setIsRecording(true);
// // //       setVoiceError("");
// // //     } catch (error) {
// // //       console.error(error);
// // //       setVoiceStatus("");
// // //       setVoiceError("Could not start voice typing.");
// // //     }
// // //   };

// // //   const stopRecording = () => {
// // //     recognitionRef.current?.stop();
// // //   };

// // //   return (
// // //     <div
// // //       className={`flex min-h-screen ${
// // //         darkMode
// // //           ? "bg-gray-900 text-white"
// // //           : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
// // //       }`}
// // //     >
// // //       <div
// // //         className={`${
// // //           isOpen ? "w-64" : "w-28"
// // //         } ${
// // //           darkMode ? "bg-gray-800 text-white" : "bg-white"
// // //         } shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
// // //       >
// // //         <div>
// // //           <div className="flex items-center justify-between p-4 border-b">
// // //             {isOpen ? (
// // //               <div
// // //                 onClick={() => navigate("/")}
// // //                 className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
// // //               >
// // //                 <img src={pic} className="w-16 h-16 rounded-full shadow" />

// // //                 <div>
// // //                   <h1 className="text-indigo-600 font-bold text-2xl">
// // //                     Moodly AI
// // //                   </h1>
// // //                   <p className="text-xs text-gray-400">Mental Wellness</p>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <img src={pic} className="w-12 h-12 rounded-full shadow-md" />
// // //             )}

// // //             <FaBars
// // //               className="text-xl text-indigo-600 cursor-pointer"
// // //               onClick={() => {
// // //                 const newState = !isOpen;
// // //                 setIsOpen(newState);
// // //                 localStorage.setItem("sidebarState", newState);
// // //               }}
// // //             />
// // //           </div>

// // //           <div className="p-3 space-y-4 mt-2">
// // //             <button
// // //               className={`group flex items-center ${
// // //                 isOpen
// // //                   ? "px-4 bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-white"
// // //                   : "justify-center py-4 text-gray-700 dark:text-white"
// // //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// // //             >
// // //               <FaChartBar className="text-indigo-600 dark:text-white" />
// // //               {isOpen && <span className="dark:text-white">Dashboard</span>}
// // //             </button>

// // //             <button
// // //               onClick={() => navigate("/chatbot")}
// // //               className={`group flex items-center ${
// // //                 isOpen
// // //                   ? "px-4 text-gray-700 dark:text-white"
// // //                   : "justify-center py-4 text-gray-700 dark:text-white"
// // //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// // //             >
// // //               <FaRobot className="text-gray-700 dark:text-white" />
// // //               {isOpen && <span className="dark:text-white">AI Assistant</span>}
// // //             </button>

// // //             <button
// // //               onClick={() => navigate("/profile")}
// // //               className={`group flex items-center ${
// // //                 isOpen
// // //                   ? "px-4 text-gray-700 dark:text-white"
// // //                   : "justify-center py-4 text-gray-700 dark:text-white"
// // //               } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}
// // //             >
// // //               <FaUser className="text-gray-700 dark:text-white" />
// // //               {isOpen && <span className="dark:text-white">Profile</span>}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="p-4 border-t relative">
// // //           <div
// // //             onClick={(e) => {
// // //               e.stopPropagation();
// // //               setOpenDropdown((prev) => !prev);
// // //             }}
// // //             className="flex items-center gap-3 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg"
// // //           >
// // //             <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
// // //               {currentUserName.charAt(0).toUpperCase()}
// // //             </div>

// // //             {isOpen && (
// // //               <div>
// // //                 <p className="text-sm font-semibold">{currentUserName}</p>
// // //                 <p className="text-xs text-gray-500">{currentUserEmail}</p>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {openDropdown && (
// // //             <div className="absolute bottom-16 left-2 w-52 bg-white shadow-2xl rounded-xl p-2 border z-50">
// // //               <div
// // //                 onClick={() => {
// // //                   setOpenSettings(true);
// // //                   setOpenDropdown(false);
// // //                 }}
// // //                 className="flex items-center gap-3 p-2 hover:bg-indigo-50 cursor-pointer rounded-lg transition"
// // //               >
// // //                 <FaCog className="text-gray-600" />
// // //                 <span className="text-sm">Settings</span>
// // //               </div>

// // //               <div
// // //                 onClick={() => {
// // //                   sessionStorage.clear();
// // //                   navigate("/");
// // //                 }}
// // //                 className="flex items-center gap-3 p-2 hover:bg-red-50 text-red-500 cursor-pointer rounded-lg transition"
// // //               >
// // //                 <FaSignOutAlt />
// // //                 <span className="text-sm">Logout</span>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div
// // //         className={`flex-1 p-10 ${
// // //           isOpen ? "ml-64" : "ml-28"
// // //         } transition-all duration-500`}
// // //       >
// // //         <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 px-7 rounded-2xl shadow-lg mb-10 flex items-center justify-between">
// // //           <div>
// // //             <h1 className="text-3xl font-semibold">
// // //               Welcome, {currentUserName.split(" ")[0]} 👋
// // //             </h1>
// // //             <p className="text-sm opacity-95 mt-1">
// // //               Your mental wellness dashboard 🧠
// // //             </p>
// // //           </div>

// // //           <div className="hidden md:block">
// // //             <p className="text-base md:text-lg font-medium opacity-90 text-center">
// // //               Track your mood & improve daily ✨
// // //             </p>
// // //           </div>

// // //           <div className="flex items-center gap-6">
// // //             <button
// // //               onClick={toggleDarkMode}
// // //               className="bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-semibold"
// // //             >
// // //               {darkMode ? "☀️" : "🌙"}
// // //             </button>

// // //             <button
// // //               onClick={() => document.querySelector("textarea")?.focus()}
// // //               className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
// // //             >
// // //               + New Entry
// // //             </button>

// // //             <button
// // //               onClick={() => navigate("/safe-space")}
// // //               style={{
// // //                 animation:
// // //                   "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite"
// // //               }}
// // //               className="group relative overflow-hidden rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-indigo-600"
// // //             >
// // //               <span
// // //                 style={{ animation: "safeShine 2.7s linear infinite" }}
// // //                 className="absolute top-0 -left-12 h-full w-10 rotate-12 bg-white/40 blur-[2px]"
// // //               />
// // //               <span className="relative z-10 flex items-center gap-2">
// // //                 <FaHeart className="animate-pulse text-rose-200 group-hover:text-indigo-500" />
// // //                 Safe Space
// // //                 <span className="relative flex h-2.5 w-2.5">
// // //                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-200 opacity-90" />
// // //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-100" />
// // //                 </span>
// // //               </span>
// // //             </button>

// // //             <FaBell className="text-xl cursor-pointer" />

// // //             <div
// // //               onClick={() => navigate("/profile")}
// // //               className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold cursor-pointer"
// // //             >
// // //               {currentUserName.charAt(0).toUpperCase()}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="grid md:grid-cols-3 gap-6 mb-10">
// // //           {[
// // //             {
// // //               title: "Current Emotion",
// // //               value: result ? `${result.emotion} ${result.emoji}` : "--"
// // //             },
// // //             {
// // //               title: "Mental Score",
// // //               value: result ? `${result.score}/10` : "--"
// // //             },
// // //             { title: "Streak 🔥", value: streak }
// // //           ].map((item, i) => (
// // //             <div
// // //               key={i}
// // //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow`}
// // //             >
// // //               <h3>{item.title}</h3>
// // //               <p className="text-xl mt-2">{item.value}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div
// // //           className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow max-w-3xl`}
// // //         >
// // //           <h2 className="text-lg font-semibold mb-3">
// // //             How are you feeling today?
// // //           </h2>

// // //           <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
// // //             <div className="flex items-center gap-3">
// // //               <button
// // //                 onClick={isRecording ? stopRecording : startRecording}
// // //                 className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
// // //                   isRecording
// // //                     ? "bg-red-500 hover:bg-red-600"
// // //                     : "bg-indigo-600 hover:bg-indigo-700"
// // //                 } disabled:cursor-not-allowed disabled:opacity-60`}
// // //               >
// // //                 {isRecording ? <FaStop /> : <FaMicrophone />}
// // //                 {isRecording ? "Stop recording" : "Use mic"}
// // //               </button>

// // //               <select
// // //                 value={selectedLanguage}
// // //                 onChange={(event) => setSelectedLanguage(event.target.value)}
// // //                 disabled={isRecording}
// // //                 className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none"
// // //               >
// // //                 {voiceLanguages.map((language) => (
// // //                   <option key={language.value} value={language.value}>
// // //                     {language.label}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>

// // //             <p className="text-sm text-gray-500">
// // //               {isRecording
// // //                 ? "Recording in progress..."
// // //                 : "Speak and your words will appear in the text box."}
// // //             </p>
// // //           </div>

// // //           <textarea
// // //             value={journal}
// // //             onChange={(e) => setJournal(e.target.value)}
// // //             className="w-full border p-3 rounded-lg 
// // //             bg-white text-black 
// // //             dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
// // //             placeholder-gray-400 dark:placeholder-gray-500"
// // //             placeholder="Write here..."
// // //           />

// // //           {voiceStatus && (
// // //             <p className="mt-3 text-sm text-indigo-600">{voiceStatus}</p>
// // //           )}

// // //           {voiceError && (
// // //             <p className="mt-2 text-sm text-red-500">{voiceError}</p>
// // //           )}

// // //           <button
// // //             onClick={analyzeEmotion}
// // //             className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
// // //           >
// // //             Analyze
// // //           </button>
// // //         </div>

// // //         {result && (
// // //           <div className="mt-8 max-w-3xl space-y-6">
// // //             <div
// // //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow border-l-4 border-indigo-500`}
// // //             >
// // //               <h3 className="text-lg font-semibold">
// // //                 Detected Emotion: {result.emotion} {result.emoji}
// // //               </h3>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Mental Score: {result.score}/10
// // //               </p>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Predicted Label: {result.predicted_label}
// // //               </p>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Confidence: {(result.confidence * 100).toFixed(1)}%
// // //               </p>
// // //             </div>

// // //             <div
// // //               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow`}
// // //             >
// // //               <h3 className="font-semibold mb-3">Suggestions 💡</h3>

// // //               <div className="space-y-3 text-sm">
// // //                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
// // //                   🌿 <span>Take a walk</span>
// // //                 </div>

// // //                 <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
// // //                   🎧 <span>Listen to music</span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <button
// // //               onClick={() =>
// // //                 navigate("/detailed-analysis", { state: { result, journal } })
// // //               }
// // //               className="mt-6 w-fit bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
// // //             >
// // //               View Detailed Analysis →
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {openSettings && (
// // //         <div className="fixed inset-0 z-50 flex items-center justify-center">
// // //           <div
// // //             className="absolute inset-0 bg-black/40"
// // //             onClick={() => setOpenSettings(false)}
// // //           ></div>

// // //           <div
// // //             className={`relative ${
// // //               darkMode ? "bg-gray-800 text-white" : "bg-white"
// // //             } w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50`}
// // //           >
// // //             <button
// // //               onClick={() => setOpenSettings(false)}
// // //               className="absolute top-3 right-3 text-lg"
// // //             >
// // //               ✖
// // //             </button>

// // //             <Setting />
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style>{`
// // //         @keyframes safeFloat {
// // //           0%, 100% { transform: translateY(0); }
// // //           50% { transform: translateY(-4px); }
// // //         }

// // //         @keyframes safeGlow {
// // //           0%, 100% {
// // //             box-shadow: 0 8px 18px rgba(79,70,229,0.35), 0 0 0 0 rgba(255,255,255,0.1);
// // //           }
// // //           50% {
// // //             box-shadow: 0 14px 30px rgba(99,102,241,0.6), 0 0 0 5px rgba(255,255,255,0.12);
// // //           }
// // //         }

// // //         @keyframes safeShine {
// // //           0% { transform: translateX(-120px) rotate(12deg); opacity: 0; }
// // //           20% { opacity: 1; }
// // //           100% { transform: translateX(220px) rotate(12deg); opacity: 0; }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;



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

// // import { Bar } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   Tooltip,
// //   Legend
// // } from "chart.js";

// // ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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

// //   const saveHistoryEntry = (analysisResult) => {
// //     if (!currentUserEmail) return;

// //     const historyKey = `moodHistory_${currentUserEmail}`;
// //     const storedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

// //     const historyEntry = {
// //       id: Date.now(),
// //       score: Number(analysisResult.score || 0),
// //       confidence: Number(((analysisResult.confidence || 0) * 100).toFixed(1)),
// //       riskScore: Number((analysisResult.riskScore || 0).toFixed(2)),
// //       sentimentScore: Number((analysisResult.sentiment_score || 0).toFixed(3)),
// //       emotion: analysisResult.emotion || "neutral",
// //       predictedLabel: analysisResult.predicted_label || "Normal",
// //       journal,
// //       day: new Date().toLocaleDateString("en-US", { weekday: "short" }),
// //       createdAt: new Date().toISOString()
// //     };

// //     const updatedHistory = [...storedHistory, historyEntry].slice(-10);
// //     localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
// //   };

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

// //       const normalizedResult = {
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
// //       };

// //       setResult(normalizedResult);
// //       saveHistoryEntry(normalizedResult);

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

// //         for (
// //           let index = event.resultIndex;
// //           index < event.results.length;
// //           index += 1
// //         ) {
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

// //   const emotionChartTheme = {
// //     happiness: ["#22c55e", "#4ade80", "#86efac", "#16a34a"],
// //     joy: ["#eab308", "#facc15", "#fde047", "#ca8a04"],
// //     sadness: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb"],
// //     sad: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb"],
// //     anger: ["#ef4444", "#f87171", "#fca5a5", "#dc2626"],
// //     anxiety: ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed"],
// //     stress: ["#f97316", "#fb923c", "#fdba74", "#ea580c"],
// //     neutral: ["#64748b", "#94a3b8", "#cbd5e1", "#475569"]
// //   };

// //   const activeEmotionKey = (result?.emotion || "neutral").toLowerCase();
// //   const activeTheme =
// //     emotionChartTheme[activeEmotionKey] || emotionChartTheme.neutral;

// //   const dashboardMetrics = result
// //     ? [
// //         {
// //           label: "Mental Score",
// //           value: Number(result.score || 0),
// //           displayValue: `${Number(result.score || 0)}/10`,
// //           color: activeTheme[0]
// //         },
// //         {
// //           label: "Confidence",
// //           value: Number(((result.confidence || 0) * 100).toFixed(1)),
// //           displayValue: `${Number(((result.confidence || 0) * 100).toFixed(1))}%`,
// //           color: activeTheme[1]
// //         },
// //         {
// //           label: "Risk Score",
// //           value: Number((result.riskScore || 0).toFixed(2)),
// //           displayValue: `${Number((result.riskScore || 0).toFixed(2))}`,
// //           color: activeTheme[2]
// //         },
// //         {
// //           label: "Sentiment Score",
// //           value: Number((result.sentiment_score || 0).toFixed(3)),
// //           displayValue: `${Number((result.sentiment_score || 0).toFixed(3))}`,
// //           color: activeTheme[3]
// //         }
// //       ]
// //     : [];

// //   const metricValues = dashboardMetrics.map((item) => item.value);
// //   const minMetricValue = metricValues.length ? Math.min(...metricValues, 0) : 0;
// //   const maxMetricValue = metricValues.length ? Math.max(...metricValues, 1) : 1;
// //   const axisPadding = Math.max(2, Math.ceil(maxMetricValue * 0.15));

// //   const dashboardBarData = {
// //     labels: dashboardMetrics.map(
// //       (item) => `${item.label} (${item.displayValue})`
// //     ),
// //     datasets: [
// //       {
// //         data: dashboardMetrics.map((item) => item.value),
// //         backgroundColor: dashboardMetrics.map((item) => item.color),
// //         borderRadius: 10,
// //         borderSkipped: false,
// //         barThickness: 16
// //       }
// //     ]
// //   };

// //   const dashboardBarOptions = {
// //     indexAxis: "y",
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         display: false
// //       },
// //       tooltip: {
// //         backgroundColor: darkMode ? "#111827" : "#ffffff",
// //         titleColor: darkMode ? "#f8fafc" : "#0f172a",
// //         bodyColor: darkMode ? "#e2e8f0" : "#334155",
// //         borderColor: darkMode ? "#334155" : "#e2e8f0",
// //         borderWidth: 1,
// //         callbacks: {
// //           label: (context) => ` Value: ${context.raw}`
// //         }
// //       }
// //     },
// //     scales: {
// //       x: {
// //         min: minMetricValue < 0 ? minMetricValue - axisPadding : 0,
// //         max: maxMetricValue + axisPadding,
// //         ticks: {
// //           color: darkMode ? "#cbd5e1" : "#475569"
// //         },
// //         grid: {
// //           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
// //         }
// //       },
// //       y: {
// //         ticks: {
// //           color: darkMode ? "#e2e8f0" : "#334155",
// //           font: {
// //             size: 11
// //           }
// //         },
// //         grid: {
// //           display: false
// //         }
// //       }
// //     }
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
// //               <div className="mb-4 flex items-center justify-between">
// //                 <div>
// //                   <h3 className="font-semibold text-lg">Current Analysis Overview</h3>
// //                   <p className="text-sm text-gray-500 mt-1 capitalize">
// //                     Realtime metrics for {result.emotion}
// //                   </p>
// //                 </div>
// //                 <div
// //                   className="h-3 w-3 rounded-full"
// //                   style={{ backgroundColor: activeTheme[0] }}
// //                 />
// //               </div>

// //               <div className="h-56">
// //                 <Bar data={dashboardBarData} options={dashboardBarOptions} />
// //               </div>
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
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [voiceEnabled, setVoiceEnabled] = useState(() => {
//     return localStorage.getItem("voiceEnabled") !== "false";
//   });

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
//       if (window.speechSynthesis) {
//         window.speechSynthesis.cancel();
//       }
//     };
//   }, []);

//   // Welcome voice greeting on component mount
//   useEffect(() => {
//     if (voiceEnabled && currentUserName) {
//       const welcomeTimeout = setTimeout(() => {
//         speakText(`Welcome back ${currentUserName.split(" ")[0]}! Ready to track your mood today?`);
//       }, 1500);
//       return () => clearTimeout(welcomeTimeout);
//     }
//   }, [currentUserName, voiceEnabled]);

//   const saveHistoryEntry = (analysisResult, currentJournal) => {
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
//       journal: currentJournal,
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
//       saveHistoryEntry(normalizedResult, journal);

//       // Save last detected emotion for Safe Space recommendation
//       localStorage.setItem("lastDetectedEmotion", JSON.stringify({
//         emotion: normalizedResult.emotion,
//         predicted_label: normalizedResult.predicted_label,
//         score: normalizedResult.score,
//         timestamp: new Date().toISOString()
//       }));
      
//       // Voice feedback for analysis result
//       if (voiceEnabled) {
//         setTimeout(() => {
//           const voiceMessage = getVoiceMessage(normalizedResult.emotion);
//           speakText(voiceMessage);
//         }, 1000);
//       }

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

//   // Text-to-speech function with emotion-based voice modulation
//   const speakText = (text, options = {}) => {
//     if (!voiceEnabled || !window.speechSynthesis) return;
    
//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();
    
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     // Get emotion-based voice settings
//     const getEmotionVoiceSettings = (emotion) => {
//       const emotionKey = (emotion || 'neutral').toLowerCase();
      
//       switch (emotionKey) {
//         case 'joy':
//         case 'happiness':
//           return { rate: 1.1, pitch: 1.3, volume: 0.9 }; // Faster, higher pitch, louder
//         case 'sadness':
//         case 'sad':
//           return { rate: 0.7, pitch: 0.8, volume: 0.7 }; // Slower, lower pitch, softer
//         case 'anxiety':
//           return { rate: 0.8, pitch: 1.1, volume: 0.8 }; // Slightly faster, gentle pitch
//         case 'stress':
//           return { rate: 0.75, pitch: 0.9, volume: 0.8 }; // Slower, calming
//         case 'anger':
//           return { rate: 0.8, pitch: 0.9, volume: 0.7 }; // Controlled, lower pitch
//         case 'neutral':
//         default:
//           return { rate: 0.9, pitch: 1.0, volume: 0.8 }; // Balanced
//       }
//     };
    
//     const emotionSettings = getEmotionVoiceSettings(result?.emotion);
    
//     utterance.rate = options.rate || emotionSettings.rate;
//     utterance.pitch = options.pitch || emotionSettings.pitch;
//     utterance.volume = options.volume || emotionSettings.volume;
    
//     // Try to use a pleasant voice
//     const voices = window.speechSynthesis.getVoices();
//     const preferredVoice = voices.find(voice => 
//       voice.name.includes('Female') || 
//       voice.name.includes('Samantha') ||
//       voice.name.includes('Karen') ||
//       voice.gender === 'female'
//     ) || voices[0];
    
//     if (preferredVoice) {
//       utterance.voice = preferredVoice;
//     }
    
//     utterance.onstart = () => setIsSpeaking(true);
//     utterance.onend = () => setIsSpeaking(false);
//     utterance.onerror = () => setIsSpeaking(false);
    
//     window.speechSynthesis.speak(utterance);
//   };

//   // Stop speaking
//   const stopSpeaking = () => {
//     window.speechSynthesis.cancel();
//     setIsSpeaking(false);
//   };

//   // Toggle voice feature
//   const toggleVoice = () => {
//     const newVoiceState = !voiceEnabled;
//     setVoiceEnabled(newVoiceState);
//     localStorage.setItem("voiceEnabled", newVoiceState);
    
//     if (newVoiceState) {
//       speakText("Voice assistance is now enabled! I'm here to help make your experience more engaging.");
//     } else {
//       stopSpeaking();
//     }
//   };

//   // Get encouraging voice messages based on emotion
//   const getVoiceMessage = (emotion) => {
//     const messages = {
//       joy: [
//         "That's wonderful! Your positive energy is contagious. Keep shining!",
//         "I love hearing about your happiness! You're doing amazing.",
//         "Your joy brightens the day! Keep up that beautiful spirit."
//       ],
//       happiness: [
//         "Your happiness is beautiful! Let's celebrate this wonderful moment.",
//         "I'm so glad you're feeling happy! You deserve all this joy.",
//         "Happiness looks great on you! Keep embracing these positive vibes."
//       ],
//       sadness: [
//         "I hear you, and it's okay to feel this way. You're not alone in this journey.",
//         "Your feelings are valid. Take it one step at a time, you're stronger than you know.",
//         "It's brave of you to acknowledge these feelings. Better days are coming."
//       ],
//       sad: [
//         "I'm here with you through this. Your courage to express yourself is admirable.",
//         "These feelings will pass. You're taking the right steps by tracking your mood.",
//         "Remember, it's okay to not be okay sometimes. You're doing great by staying aware."
//       ],
//       anxiety: [
//         "Take a deep breath with me. You're safe, and you're going to get through this.",
//         "Anxiety is tough, but you're tougher. Let's focus on the present moment together.",
//         "I believe in your strength. You've overcome challenges before, and you will again."
//       ],
//       stress: [
//         "Let's pause for a moment. You're handling a lot, and that takes real strength.",
//         "Stress is your mind's way of saying you care. Let's find some calm together.",
//         "You're doing your best, and that's enough. Take things one step at a time."
//       ],
//       anger: [
//         "I can sense your frustration. It's okay to feel angry - let's work through this together.",
//         "Your feelings are important. Take a moment to breathe and center yourself.",
//         "Anger shows you care deeply. Let's channel that energy into something positive."
//       ],
//       neutral: [
//         "Thanks for checking in with yourself today. Self-awareness is a superpower!",
//         "Every mood matters, including neutral ones. You're building great habits!",
//         "Consistency in tracking your emotions shows real commitment to your wellbeing."
//       ]
//     };
    
//     const emotionMessages = messages[emotion.toLowerCase()] || messages.neutral;
//     return emotionMessages[Math.floor(Math.random() * emotionMessages.length)];
//   };

//   const detectedEmotionKey = (result?.emotion || "neutral").toLowerCase();

//   const emotionBars = [
//     {
//       label: "Joy",
//       value:
//         detectedEmotionKey === "joy" || detectedEmotionKey === "happiness"
//           ? 100
//           : 12,
//       color: "#facc15"
//     },
//     {
//       label: "Sad",
//       value:
//         detectedEmotionKey === "sad" || detectedEmotionKey === "sadness"
//           ? 100
//           : 12,
//       color: "#60a5fa"
//     },
//     {
//       label: "Anxiety",
//       value: detectedEmotionKey === "anxiety" ? 100 : 12,
//       color: "#a78bfa"
//     },
//     {
//       label: "Stress",
//       value: detectedEmotionKey === "stress" ? 100 : 12,
//       color: "#fb923c"
//     },
//     {
//       label: "Neutral",
//       value: detectedEmotionKey === "neutral" ? 100 : 12,
//       color: "#94a3b8"
//     },
//     {
//       label: "Anger",
//       value:
//         detectedEmotionKey === "anger" || detectedEmotionKey === "angry"
//           ? 100
//           : 12,
//       color: "#f87171"
//     }
//   ];

//   const emotionChartData = {
//     labels: emotionBars.map((item) => item.label),
//     datasets: [
//       {
//         data: emotionBars.map((item) => item.value),
//         backgroundColor: emotionBars.map((item) => item.color),
//         borderRadius: 14,
//         borderSkipped: false,
//         barThickness: 18
//       }
//     ]
//   };

//   const emotionChartOptions = {
//     indexAxis: "y",
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         backgroundColor: darkMode ? "#0f172a" : "#ffffff",
//         titleColor: darkMode ? "#f8fafc" : "#0f172a",
//         bodyColor: darkMode ? "#e2e8f0" : "#334155",
//         borderColor: darkMode ? "#334155" : "#e2e8f0",
//         borderWidth: 1,
//         callbacks: {
//           label: (context) =>
//             context.raw === 100 ? " Active emotion" : " Inactive"
//         }
//       }
//     },
//     scales: {
//       x: {
//         min: 0,
//         max: 100,
//         ticks: {
//           stepSize: 25,
//           color: darkMode ? "#cbd5e1" : "#64748b",
//           callback: (value) => `${value}%`
//         },
//         grid: {
//           color: darkMode ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)"
//         }
//       },
//       y: {
//         ticks: {
//           color: darkMode ? "#f8fafc" : "#1e293b",
//           font: {
//             size: 12,
//             weight: "700"
//           }
//         },
//         grid: {
//           display: false
//         }
//       }
//     }
//   };

//   const getMoodSuggestions = () => {
//     const mood = detectedEmotionKey;

//     if (mood === "joy" || mood === "happiness") {
//       return [
//         "Keep doing what is making you feel light and happy.",
//         "Write one good thing about today in your journal.",
//         "Share this positive moment with someone close."
//       ];
//     }

//     if (mood === "sad" || mood === "sadness") {
//       return [
//         "Take a short walk or sit in fresh air for a few minutes.",
//         "Listen to calm music and avoid isolating yourself too much.",
//         "Talk to someone you trust, even briefly."
//       ];
//     }

//     if (mood === "anxiety") {
//       return [
//         "Try a 4-4-4 breathing exercise for one minute.",
//         "Focus only on the next small task, not everything at once.",
//         "Drink water and step away from the screen for a moment."
//       ];
//     }

//     if (mood === "stress") {
//       return [
//         "Take a short break and relax your shoulders and jaw.",
//         "Break your work into one small manageable step.",
//         "Avoid multitasking for the next few minutes."
//       ];
//     }

//     if (mood === "anger" || mood === "angry") {
//       return [
//         "Pause before reacting and take a slow breath.",
//         "Step away from the triggering situation for a moment.",
//         "Write down what upset you before responding."
//       ];
//     }

//     return [
//       "Keep tracking your mood daily for better emotional insights.",
//       "Write a few more lines if you want a clearer analysis.",
//       "Take a small pause and notice how your body feels right now."
//     ];
//   };

//   const suggestions = getMoodSuggestions();

//   // Get animated emoji based on emotion
//   const getAnimatedEmoji = (emotion) => {
//     const emotionKey = (emotion || 'neutral').toLowerCase();
    
//     const emojiMap = {
//       joy: '😊',
//       happiness: '😄',
//       sadness: '😢',
//       sad: '😔',
//       anxiety: '😰',
//       stress: '😤',
//       anger: '😠',
//       neutral: '😐'
//     };
    
//     return emojiMap[emotionKey] || '😐';
//   };
  
//   // Get emotion-based background gradient
//   const getEmotionGradient = (emotion) => {
//     const emotionKey = (emotion || 'neutral').toLowerCase();
    
//     const gradients = {
//       joy: 'from-yellow-400 via-orange-300 to-yellow-500',
//       happiness: 'from-green-400 via-emerald-300 to-green-500',
//       sadness: 'from-blue-400 via-blue-300 to-blue-500',
//       sad: 'from-gray-400 via-slate-300 to-gray-500',
//       anxiety: 'from-purple-400 via-violet-300 to-purple-500',
//       stress: 'from-orange-400 via-red-300 to-orange-500',
//       anger: 'from-red-400 via-rose-300 to-red-500',
//       neutral: 'from-gray-400 via-slate-300 to-gray-500'
//     };
    
//     return gradients[emotionKey] || gradients.neutral;
//   };

//   // Animated emoji component
//   const AnimatedEmoji = ({ emotion, size = 'text-6xl' }) => {
//     const emoji = getAnimatedEmoji(emotion);
//     const emotionKey = (emotion || 'neutral').toLowerCase();
    
//     const getAnimationClass = () => {
//       switch (emotionKey) {
//         case 'joy':
//         case 'happiness':
//           return 'animate-bounce';
//         case 'sadness':
//         case 'sad':
//           return 'animate-pulse';
//         case 'anxiety':
//           return 'animate-ping';
//         case 'stress':
//           return 'animate-pulse';
//         case 'anger':
//           return 'animate-bounce';
//         default:
//           return 'animate-pulse';
//       }
//     };
    
//     return (
//       <div className={`${size} ${getAnimationClass()} transition-all duration-500`}>
//         {emoji}
//       </div>
//     );
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
//               onClick={toggleVoice}
//               className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
//                 voiceEnabled 
//                   ? "bg-green-500 text-white hover:bg-green-600" 
//                   : "bg-white text-gray-600 hover:bg-gray-100"
//               }`}
//               title={voiceEnabled ? "Voice assistance enabled" : "Voice assistance disabled"}
//             >
//               {isSpeaking ? "🔊" : voiceEnabled ? "🎤" : "🔇"}
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

//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           {[
//             {
//               title: "Current Emotion",
//               value: result ? `${result.emotion}` : "--",
//               emoji: result ? result.emotion : null
//             },
//             {
//               title: "Mental Score",
//               value: result ? `${result.score}/10` : "--"
//             },
//             { title: "Streak 🔥", value: streak }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 ${
//                 item.emoji ? `bg-gradient-to-br ${getEmotionGradient(item.emoji)} bg-opacity-10` : ''
//               }`}
//             >
//               <h3 className="text-sm font-medium">{item.title}</h3>
//               <div className="flex items-center gap-3 mt-2">
//                 <p className="text-xl capitalize">{item.value}</p>
//                 {item.emoji && (
//                   <AnimatedEmoji emotion={item.emoji} size="text-3xl" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid xl:grid-cols-12 gap-6 items-start">
//           <div className="xl:col-span-7 space-y-6">
//             <div
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow`}
//             >
//               <h2 className="text-lg font-semibold mb-3">
//                 How are you feeling today?
//               </h2>

//               <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={isRecording ? stopRecording : startRecording}
//                     className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
//                       isRecording
//                         ? "bg-red-500 hover:bg-red-600"
//                         : "bg-indigo-600 hover:bg-indigo-700"
//                     } disabled:cursor-not-allowed disabled:opacity-60`}
//                   >
//                     {isRecording ? <FaStop /> : <FaMicrophone />}
//                     {isRecording ? "Stop recording" : "Use mic"}
//                   </button>

//                   <select
//                     value={selectedLanguage}
//                     onChange={(event) => setSelectedLanguage(event.target.value)}
//                     disabled={isRecording}
//                     className="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-indigo-400 focus:outline-none"
//                   >
//                     {voiceLanguages.map((language) => (
//                       <option key={language.value} value={language.value}>
//                         {language.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <p className="text-sm text-gray-500">
//                   {isRecording
//                     ? "Recording in progress..."
//                     : "Speak and your words will appear in the text box."}
//                 </p>
//               </div>

//               <textarea
//                 value={journal}
//                 onChange={(e) => setJournal(e.target.value)}
//                 className="w-full border p-3 rounded-lg 
//                 bg-white text-black 
//                 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
//                 placeholder-gray-400 dark:placeholder-gray-500"
//                 placeholder="Write here..."
//                 rows={5}
//               />

//               {voiceStatus && (
//                 <p className="mt-3 text-sm text-indigo-600">{voiceStatus}</p>
//               )}

//               {voiceError && (
//                 <p className="mt-2 text-sm text-red-500">{voiceError}</p>
//               )}

//               <div className="flex items-center gap-3 mt-4">
//                 <button
//                   onClick={analyzeEmotion}
//                   className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   Analyze
//                 </button>
                
//                 {voiceEnabled && (
//                   <button
//                     onClick={() => speakText("Let me read your journal entry for you: " + journal)}
//                     disabled={!journal.trim() || isSpeaking}
//                     className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                     title="Read journal aloud"
//                   >
//                     {isSpeaking ? "🔊" : "📖"}
//                     {isSpeaking ? "Speaking..." : "Read Aloud"}
//                   </button>
//                 )}
                
//                 {isSpeaking && (
//                   <button
//                     onClick={stopSpeaking}
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
//                   >
//                     ⏹️ Stop
//                   </button>
//                 )}
//               </div>
//             </div>

//             {result && (
//               <>
//                 <div
//                   className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow border-l-4 border-indigo-500 relative overflow-hidden`}
//                 >
//                   {/* Animated background based on emotion */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${getEmotionGradient(result.emotion)} opacity-5 animate-pulse`}></div>
                  
//                   <div className="relative z-10">
//                     <div className="flex items-center gap-4 mb-4">
//                       <AnimatedEmoji emotion={result.emotion} size="text-5xl" />
//                       <div>
//                         <h3 className="text-lg font-semibold capitalize">
//                           Detected Emotion: {result.emotion}
//                         </h3>
//                         <p className="text-sm text-gray-500 mt-1">
//                           Predicted Label: {result.predicted_label}
//                         </p>
//                         <p className="text-sm text-gray-500 mt-1">
//                           Mental Score: {result.score}/10
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Emotion intensity bar */}
//                     <div className="mt-4">
//                       <div className="flex justify-between text-sm text-gray-500 mb-2">
//                         <span>Emotion Intensity</span>
//                         <span>{result.score}/10</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                         <div 
//                           className={`h-full bg-gradient-to-r ${getEmotionGradient(result.emotion)} transition-all duration-1000 ease-out animate-pulse`}
//                           style={{ width: `${(result.score / 10) * 100}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-2xl shadow`}
//                 >
//                   <h3 className="font-semibold text-lg mb-3">
//                     Suggestions For You
//                   </h3>

//                   <div className="space-y-3 text-sm">
//                     {suggestions.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm transition group hover:bg-indigo-100 dark:hover:bg-gray-600"
//                       >
//                         <div className="flex items-center gap-2">
//                           <span>•</span>
//                           <span>{item}</span>
//                         </div>
//                         {voiceEnabled && (
//                           <button
//                             onClick={() => speakText(`Here's a suggestion for you: ${item}`)}
//                             disabled={isSpeaking}
//                             className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
//                             title="Read suggestion aloud"
//                           >
//                             {isSpeaking ? "🔊" : "🎵"}
//                           </button>
//                         )}
//                       </div>
//                     ))}
                    
//                     {voiceEnabled && (
//                       <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
//                               🎯 Voice Coaching Available
//                             </p>
//                             <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">
//                               Get personalized audio guidance
//                             </p>
//                           </div>
//                           <button
//                             onClick={() => {
//                               const coaching = `Let me give you some personalized coaching: Based on your ${result.emotion} mood, I recommend taking a moment to ${suggestions[0].toLowerCase()}. Remember, every emotion is valid and temporary. You're on a beautiful journey of self-discovery. Keep being kind to yourself!`;
//                               speakText(coaching, { rate: 0.8, pitch: 1.2 });
//                             }}
//                             disabled={isSpeaking}
//                             className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 text-sm flex items-center gap-1"
//                           >
//                             {isSpeaking ? "🔊" : "🎧"}
//                             {isSpeaking ? "Coaching..." : "Get Coaching"}
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex flex-wrap gap-3">
//                     <button
//                       onClick={() =>
//                         navigate("/detailed-analysis", {
//                           state: { result, journal }
//                         })
//                       }
//                       className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
//                     >
//                       View Detailed Analysis →
//                     </button>
                    
//                     {voiceEnabled && result && (
//                       <button
//                         onClick={() => {
//                           const summary = `Your analysis summary: You're feeling ${result.emotion} with a mental score of ${result.score} out of 10. Your predicted label is ${result.predicted_label} with ${(result.confidence * 100).toFixed(1)}% confidence.`;
//                           speakText(summary);
//                         }}
//                         disabled={isSpeaking}
//                         className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 disabled:opacity-50 flex items-center gap-2"
//                       >
//                         {isSpeaking ? "🔊" : "🎯"}
//                         {isSpeaking ? "Speaking..." : "Hear Summary"}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="xl:col-span-5">
//             <div
//               className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow sticky top-8`}
//             >
//               <div className="mb-4 flex items-center justify-between">
//                 <div>
//                   <h3 className="font-semibold text-lg">Realtime Emotion Graph</h3>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Colorful snapshot based on current detection
//                   </p>
//                 </div>
//                 {voiceEnabled && result && (
//                   <button
//                     onClick={() => {
//                       const chartDescription = `Looking at your emotion chart: ${result.emotion} is currently active, while other emotions like joy, sadness, anxiety, stress, neutral, and anger are in the background. Your emotional state is clearly visible in this colorful visualization.`;
//                       speakText(chartDescription);
//                     }}
//                     disabled={isSpeaking}
//                     className="text-indigo-600 hover:text-indigo-800 transition-colors disabled:opacity-50"
//                     title="Describe chart"
//                   >
//                     {isSpeaking ? "🔊" : "📊"}
//                   </button>
//                 )}
//               </div>

//               <div className="h-[340px]">
//                 <Bar data={emotionChartData} options={emotionChartOptions} />
//               </div>

//               <div
//                 className={`mt-5 rounded-xl p-4 relative overflow-hidden ${
//                   darkMode ? "bg-gray-700" : "bg-indigo-50"
//                 }`}
//               >
//                 {/* Animated background for current mood */}
//                 {result && (
//                   <div className={`absolute inset-0 bg-gradient-to-r ${getEmotionGradient(result.emotion)} opacity-10 animate-pulse`}></div>
//                 )}
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div>
//                         <p className="text-sm text-gray-500 dark:text-gray-300">
//                           Current mood
//                         </p>
//                         <p className="text-xl font-semibold capitalize mt-1">
//                           {result ? result.emotion : "No emotion detected yet"}
//                         </p>
//                       </div>
//                       {result && (
//                         <AnimatedEmoji emotion={result.emotion} size="text-4xl" />
//                       )}
//                     </div>
//                     {voiceEnabled && (
//                       <button
//                         onClick={() => {
//                           const encouragement = [
//                             "You're doing great by staying aware of your emotions!",
//                             "Self-reflection is a sign of emotional intelligence!",
//                             "Keep up the excellent work on your mental wellness journey!",
//                             "Your commitment to understanding yourself is inspiring!"
//                           ];
//                           const randomEncouragement = encouragement[Math.floor(Math.random() * encouragement.length)];
//                           speakText(randomEncouragement);
//                         }}
//                         disabled={isSpeaking}
//                         className="text-2xl hover:scale-110 transition-transform disabled:opacity-50 animate-pulse"
//                         title="Get encouragement"
//                       >
//                         {isSpeaking ? "🔊" : "💪"}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
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
import { useNavigate, useLocation } from "react-router-dom";
import { analyzeJournal } from "../services/api";
import { EMOTION_SCORE_MAP, getSuggestions } from "../utils/moodUtils";
import AppNavbar from "../Components/AppNavbar";
import { FaHeart, FaMicrophone, FaStop } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const recognitionRef = useRef(null);
  const journalRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [highlightJournal, setHighlightJournal] = useState(false);
  const [journal, setJournal] = useState("");
  const [result, setResult] = useState(null);
  const [streak, setStreak] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [journalError, setJournalError] = useState(false);
  const [analyzeError, setAnalyzeError] = useState("");
  const [showCalmPopup, setShowCalmPopup] = useState(false);
  const [calmVisited, setCalmVisited] = useState(false);
  const popupTimerRef = useRef(null);

  const currentUserEmail =
    sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
  const currentUserName =
    sessionStorage.getItem("currentUserName") ||
    localStorage.getItem(`name_${currentUserEmail}`) ||
    "User";

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", next);
    document.body.classList.toggle("dark", next);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (location.state?.highlightJournal) {
      setHighlightJournal(true);
      setTimeout(() => {
        journalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        journalRef.current?.focus();
      }, 300);
      setTimeout(() => setHighlightJournal(false), 3000);
      window.history.replaceState({}, document.title);
    }
    if (location.state?.restoreResult) {
      setResult(location.state.restoreResult);
      setJournal(location.state.restoreJournal || "");
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, []);

  // Load streak + notification
  useEffect(() => {
    if (!currentUserEmail) return;
    const saved = localStorage.getItem(`journalStreak_${currentUserEmail}`);
    if (saved) setStreak(parseInt(saved));

    fetch(`http://localhost:5000/api/user/${currentUserEmail}`)
      .then((r) => r.json())
      .then((data) => {
        const notifEnabled = data.notifications ?? true;
        const history = JSON.parse(localStorage.getItem(`moodHistory_${currentUserEmail}`)) || [];
        if (!notifEnabled || history.length === 0) return;
      })
      .catch(() => {});
  }, [currentUserEmail]);

  const saveHistoryEntry = (analysisResult, currentJournal) => {
    if (!currentUserEmail) return;
    const key = `moodHistory_${currentUserEmail}`;
    const history = JSON.parse(localStorage.getItem(key)) || [];
    const entry = {
      id: Date.now(),
      score: Number(analysisResult.score || 0),
      confidence: Number(((analysisResult.confidence || 0) * 100).toFixed(1)),
      riskScore: Number((analysisResult.riskScore || 0).toFixed(2)),
      sentimentScore: Number((analysisResult.sentiment_score || 0).toFixed(3)),
      emotion: analysisResult.emotion || "neutral",
      predictedLabel: analysisResult.predicted_label || "Normal",
      journal: currentJournal,
      day: new Date().toLocaleDateString("en-US", { weekday: "short" }),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify([...history, entry]));
    window.dispatchEvent(new Event("storage"));
  };

  const analyzeEmotion = async () => {
    if (!journal.trim()) {
      setJournalError(true);
      setTimeout(() => setJournalError(false), 3000);
      return;
    }
    setJournalError(false);
    setAnalyzeError("");
    setIsAnalyzing(true);
    try {
      const data = await analyzeJournal(journal, currentUserEmail);
      const analysis = data.analysis || {};
      const emotionMap = {
        happiness: { emoji: "😊", score: 9 },
        joy: { emoji: "😊", score: 9 },
        sadness: { emoji: "😢", score: 3 },
        sad: { emoji: "😢", score: 3 },
        anger: { emoji: "😠", score: 4 },
        anxiety: { emoji: "😟", score: 4 },
        stress: { emoji: "😣", score: 4 },
        neutral: { emoji: "😐", score: 5 },
      };
      const emotionKey = (analysis.emotion || "neutral").toLowerCase();
      const meta = emotionMap[emotionKey] || { emoji: "😐", score: 5 };
      const normalizedResult = {
        emotion: analysis.emotion || "neutral",
        emoji: meta.emoji,
        score: analysis.riskScore
          ? Math.min(10, Math.max(1, Math.round(analysis.riskScore / 10)))
          : meta.score,
        predicted_label: analysis.predicted_label || "Normal",
        confidence: analysis.confidence || 0,
        riskScore: analysis.riskScore || 0,
        sentiment_score: analysis.sentiment_score || 0,
        cognitive_distortions: analysis.cognitive_distortions || [],
        behavioral_signals: analysis.behavioral_signals || [],
        suggestions: analysis.suggestions || [],
      };
      setResult(normalizedResult);
      saveHistoryEntry(normalizedResult, journal);

      // show calm corner popup after analysis — once per session
      if (!calmVisited) {
        setTimeout(() => {
          setShowCalmPopup(true);
          popupTimerRef.current = setTimeout(() => setShowCalmPopup(false), 15000);
        }, 800);
      }

      const today = new Date().toDateString();
      const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);
      if (lastDate !== today) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
        localStorage.setItem(`lastDate_${currentUserEmail}`, today);
      }
    } catch (err) {
      console.error(err);
      setAnalyzeError("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const startRecording = async () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setVoiceError("Please use Google Chrome for voice input.");
      return;
    }
    setVoiceError("");

    // explicitly request mic permission first
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setVoiceError("Microphone access denied. Please allow microphone in your browser settings.");
      return;
    }

    try {
      const recognition = new SR();
      recognitionRef.current = recognition;
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.continuous = true;
      let finalTranscript = "";

      recognition.onresult = (e) => {
        let interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const t = e.results[i][0]?.transcript || "";
          if (e.results[i].isFinal) finalTranscript += ` ${t}`;
          else interim += t;
        }
        setJournal(`${finalTranscript} ${interim}`.trim());
      };

      recognition.onerror = (e) => {
        setIsRecording(false);
        if (e.error === "not-allowed") setVoiceError("Microphone access denied. Please allow microphone permission.");
        else if (e.error === "no-speech") setVoiceError("No speech detected. Please try again.");
        else if (e.error === "network") setVoiceError("Network error. Please check your connection.");
        else setVoiceError("Voice input failed. Please try again.");
      };

      recognition.onend = () => setIsRecording(false);
      recognition.start();
      setIsRecording(true);
    } catch {
      setIsRecording(false);
      setVoiceError("Could not start voice input. Please try again.");
    }
  };

  const stopRecording = () => recognitionRef.current?.stop();

  // Emotion snapshot chart
  const detectedKey = (result?.emotion || "neutral").toLowerCase();
  const emotionBars = [
    { label: "Joy", color: "#facc15", keys: ["joy", "happiness"] },
    { label: "Sad", color: "#60a5fa", keys: ["sad", "sadness"] },
    { label: "Anxiety", color: "#a78bfa", keys: ["anxiety"] },
    { label: "Stress", color: "#fb923c", keys: ["stress"] },
    { label: "Anger", color: "#f87171", keys: ["anger", "angry"] },
    { label: "Neutral", color: "#94a3b8", keys: ["neutral"] },
  ];

  const chartData = {
    labels: emotionBars.map((e) => e.label),
    datasets: [{
      data: emotionBars.map((e) => (e.keys.includes(detectedKey) ? 100 : 12)),
      backgroundColor: emotionBars.map((e) => e.color),
      borderRadius: 14,
      borderSkipped: false,
      barThickness: 18,
    }],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (ctx) => (ctx.raw === 100 ? " Active" : " Inactive") },
      },
    },
    scales: {
      x: { min: 0, max: 100, ticks: { color: darkMode ? "#cbd5e1" : "#64748b", callback: (v) => `${v}%` }, grid: { color: darkMode ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" } },
      y: { ticks: { color: darkMode ? "#f8fafc" : "#1e293b", font: { size: 12, weight: "700" } }, grid: { display: false } },
    },
  };

  // Mood suggestions — uses shared utility
  const detectedSuggestions = result
    ? (result.suggestions?.length ? result.suggestions : getSuggestions(detectedKey, result.predicted_label, result.riskScore, result.score))
    : [];

  // Stats from history
  const history = JSON.parse(localStorage.getItem(`moodHistory_${currentUserEmail}`)) || [];
  const totalEntries = history.length;

  const getCalmMessage = () => {
    const e = detectedKey;
    if (["sad", "sadness"].includes(e)) return { title: "Feeling low? 💙", msg: "Some soothing music or comfort notes might help lift your spirits right now." };
    if (["anxiety"].includes(e)) return { title: "Feeling anxious? 🌬️", msg: "Try a breathing exercise — just 2 minutes can calm your mind significantly." };
    if (["stress"].includes(e)) return { title: "Feeling stressed? 🎮", msg: "A quick mini game or dance break might be exactly what you need right now." };
    if (["anger", "angry"].includes(e)) return { title: "Feeling frustrated? 🎧", msg: "Step away for a moment — some calming music or meditation can help reset your mood." };
    if (["joy", "happiness"].includes(e)) return { title: "You're in a great mood! 🎵", msg: "Celebrate this feeling — some upbeat music or a fun game to keep the energy going!" };
    return { title: "Take a moment for yourself 🌿", msg: "Calm Corner has music, breathing exercises, games and more to support your wellbeing." };
  };

  const card = darkMode ? "bg-gray-800" : "bg-white/80";
  const muted = darkMode ? "text-gray-400" : "text-gray-500";
  const heading = darkMode ? "text-white" : "text-gray-800";

  // Rotating daily prompts
  const prompts = [
    "Write how you're feeling today...",
    "What's one thing on your mind right now?",
    "How did today go for you?",
    "What emotion are you experiencing?",
    "Describe your current state of mind...",
  ];
  const dailyPrompt = prompts[new Date().getDate() % prompts.length];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"}`}>
      <AppNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="pt-28 px-4 md:px-8 lg:px-16 pb-12">

        {/* GREETING */}
        <div className="mb-6">
          <h1 className={`text-5xl md:text-6xl font-extrabold ${heading}`}>
            {(() => {
              const h = new Date().getHours();
              if (h >= 6 && h < 12) return "Good morning";
              if (h >= 12 && h < 17) return "Good afternoon";
              if (h >= 17 && h < 21) return "Good evening";
              return "Hello";
            })()},{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              {currentUserName.split(" ")[0]}
            </span>{" "}
            {(() => {
              const h = new Date().getHours();
              if (h >= 6 && h < 12) return "☀️";
              if (h >= 12 && h < 17) return "🌤️";
              if (h >= 17 && h < 21) return "🌙✨";
              return "👋";
            })()}
          </h1>
          <p className={`text-base md:text-lg mt-3 ${muted}`}>
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Streak", emoji: "🔥", value: streak ? `${streak} days` : "0 days", hint: !streak ? "Start your first entry!" : null, color: "text-orange-500", iconBg: "bg-orange-100" },
            { label: "Total Entries", emoji: "📝", value: totalEntries || "0", hint: !totalEntries ? "Write your first journal" : null, color: "text-indigo-500", iconBg: "bg-indigo-100" },
            { label: "Today", emoji: "✍️", value: history.some(e => new Date(e.createdAt).toDateString() === new Date().toDateString()) ? "Done ✅" : "Not yet", color: history.some(e => new Date(e.createdAt).toDateString() === new Date().toDateString()) ? "text-green-500" : "text-rose-400", iconBg: history.some(e => new Date(e.createdAt).toDateString() === new Date().toDateString()) ? "bg-green-100" : "bg-rose-100" },
          ].map((item, i) => (
            <div key={i} className={`${card} backdrop-blur-xl p-3 rounded-2xl shadow-md flex flex-col items-center justify-between text-center min-h-[100px]`}>
              <div className={`w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center text-2xl`}>
                {item.emoji}
              </div>
              <p className={`text-xs font-extrabold ${muted}`}>{item.label}</p>
              <p className={`text-xl font-bold capitalize ${item.color}`}>{item.value}</p>
              {item.hint && <p className={`text-xs ${muted} italic`}>{item.hint}</p>}
            </div>
          ))}
        </div>


        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT — JOURNAL + RESULTS */}
          <div className="lg:col-span-3 space-y-5">

            {/* JOURNAL CARD */}
            <div ref={journalRef} className={`${card} backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-500 ${
              highlightJournal ? "ring-4 ring-indigo-400 ring-offset-2 shadow-indigo-300/50 shadow-xl" : ""
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-2xl font-extrabold ${heading}`}>💭 What's On Your Mind?</h2>
                {journal && (
                  <button
                    onClick={() => { setJournal(""); setJournalError(false); setResult(null); }}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${darkMode ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600"}`}
                  >
                    ✕ Clear
                  </button>
                )}
              </div>

              <div className="relative">
                <textarea
                  value={journal}
                  onChange={(e) => { setJournal(e.target.value.slice(0, 1000)); if (journalError) setJournalError(false); }}
                  rows={3}
                  maxLength={1000}
                  placeholder={dailyPrompt}
                  className={`w-full border-2 rounded-xl p-4 text-sm leading-relaxed focus:outline-none focus:ring-2 transition ${journalError ? "border-red-400 focus:ring-red-300" : "border-indigo-200 focus:ring-indigo-300"} ${darkMode ? "bg-gray-900 text-gray-100 placeholder-gray-500" : "bg-white text-gray-800 placeholder-gray-400"}`}
                />
                <span className={`absolute bottom-3 right-3 text-xs ${journal.length > 900 ? "text-rose-400" : muted}`}>
                  {journal.length}/1000
                </span>
              </div>
              {journalError && <p className="mt-2 text-xs text-red-500 font-medium">⚠️ Please write something before analyzing.</p>}
              {analyzeError && <p className="mt-2 text-xs text-red-500 font-medium">⚠️ {analyzeError}</p>}
              {voiceError && <p className="mt-2 text-xs text-red-500">{voiceError}</p>}

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={analyzeEmotion}
                  disabled={isAnalyzing}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {isAnalyzing && (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </button>
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-white transition ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-indigo-500 hover:bg-indigo-600"}`}
                >
                  {isRecording ? <FaStop /> : <FaMicrophone />}
                  {isRecording ? "Stop" : "Speak"}
                </button>
                {isRecording && <p className="text-xs text-indigo-500 animate-pulse">Recording...</p>}
              </div>
            </div>

            {/* RESULT + SUGGESTIONS */}
            {result && (
              <>
                {/* RESULT CARD */}
                <div className={`${card} backdrop-blur-xl p-6 rounded-2xl shadow-md border-l-4 border-indigo-500`}>
                  <h3 className={`text-base font-extrabold mb-3 ${heading}`}>🧠 Analysis Result</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Emotion", value: `${result.emotion} ${result.emoji}` },
                      ["joy", "happiness"].includes(detectedKey)
                        ? { label: "Vibe", value: result.sentiment_score >= 0.6 ? "✨ Excellent" : result.sentiment_score >= 0.3 ? "😊 Good" : "🙂 Decent" }
                        : ["sad", "sadness", "anxiety", "stress", "anger", "angry"].includes(detectedKey)
                        ? { label: "Intensity", value: result.riskScore >= 70 ? "🔴 High" : result.riskScore >= 40 ? "🟡 Moderate" : "🟢 Mild" }
                        : { label: "Risk Score", value: result.riskScore >= 70 ? `${result.riskScore.toFixed(1)} 🔴` : result.riskScore >= 40 ? `${result.riskScore.toFixed(1)} 🟡` : `${result.riskScore.toFixed(1)} 🟢` },
                      { label: "Label", value: result.predicted_label },
                      { label: "Confidence", value: `${Math.round((result.confidence || 0) * 100)}%` },
                    ].map((item, i) => (
                      <div key={i} className={`text-center p-3 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                        <p className={`text-xs ${muted}`}>{item.label}</p>
                        <p className="font-bold text-indigo-500 capitalize mt-1 text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SUGGESTIONS */}
                <div className={`${card} backdrop-blur-xl p-6 rounded-2xl shadow-md`}>
                  <h3 className={`text-base font-extrabold mb-4 ${heading}`}>💡 Suggestions For You</h3>
                  <div className="space-y-3">
                    {detectedSuggestions.map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-xl text-sm ${darkMode ? "bg-gray-700 text-gray-200" : "bg-indigo-50 text-gray-700"}`}>
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("/detailed-analysis", { state: { result, journal } })}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
                  >
                    View Detailed Analysis →
                  </button>
                  <button
                    onClick={() => {
                      setResult(null);
                      setJournal("");
                      setHighlightJournal(true);
                      setTimeout(() => {
                        journalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                        journalRef.current?.focus();
                      }, 100);
                      setTimeout(() => setHighlightJournal(false), 3000);
                    }}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold border-2 border-indigo-500 transition hover:scale-105 ${
                      darkMode ? "text-indigo-300 bg-indigo-500/15 hover:bg-indigo-500/25" : "text-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    🧠 New Analysis
                  </button>
                  {result.riskScore >= 40 && (
                    <button
                      onClick={() => navigate("/support")}
                      className={`px-6 py-2.5 rounded-xl text-sm font-semibold border transition hover:scale-105 ${darkMode ? "border-rose-400/40 bg-rose-500/10 text-rose-300" : "border-rose-200 bg-rose-50 text-rose-600"}`}
                    >
                      💙 Feeling overwhelmed? View Support →
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* RIGHT — CHART + RECENT ENTRIES */}
          <div className="lg:col-span-2 space-y-5">

            {/* EMOTION SNAPSHOT */}
            <div className={`${card} backdrop-blur-xl p-6 rounded-2xl shadow-md`}>
              <h3 className={`text-2xl font-extrabold mb-1 ${heading}`}>🎭 Emotion Pulse</h3>
              <p className={`text-xs mb-4 ${muted}`}>{result ? "Based on current detection" : "Analyze your journal to see results"}</p>
              {result ? (
                <>
                  <div className="h-[260px]">
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                  <div className={`mt-4 rounded-xl p-3 ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
                    <p className={`text-xs ${muted}`}>Current mood</p>
                    <p className={`text-base font-semibold capitalize mt-1 ${heading}`}>
                      {result.emotion} {result.emoji} · {["joy", "happiness"].includes(detectedKey) ? (result.sentiment_score >= 0.6 ? "✨ Excellent" : result.sentiment_score >= 0.3 ? "😊 Good" : "🙂 Decent") : ["sad", "sadness", "anxiety", "stress", "anger", "angry"].includes(detectedKey) ? (result.riskScore >= 70 ? "🔴 High" : result.riskScore >= 40 ? "🟡 Moderate" : "🟢 Mild") : `${result.riskScore.toFixed(1)}`}
                    </p>
                  </div>
                </>
              ) : (
                <div className={`h-[260px] flex flex-col items-center justify-center rounded-xl ${darkMode ? "bg-gray-700/50" : "bg-indigo-50/50"}`}>
                  <div className="text-6xl mb-4 opacity-40 animate-pulse">📊</div>
                  <p className={`text-sm font-medium ${heading}`}>No emotion detected yet</p>
                  <p className={`text-xs mt-2 ${muted} text-center px-6`}>Write in your journal and click Analyze to see your emotion snapshot</p>
                </div>
              )}
            </div>

            {/* WELLNESS CARD — hide risk label for positive emotions */}
            {result && !(["joy", "happiness"].includes(detectedKey)) && (() => {
              const risk = result.riskScore || 0;
              const level = risk >= 70 ? "High" : risk >= 40 ? "Moderate" : "Low";
              const color = risk >= 70 ? "text-red-500" : risk >= 40 ? "text-yellow-500" : "text-green-500";
              const barColor = risk >= 70 ? "bg-red-500" : risk >= 40 ? "bg-yellow-400" : "bg-green-500";
              const desc = risk >= 70 ? "Your current state suggests significant emotional strain. Please take care of yourself." : risk >= 40 ? "Some emotional strain detected. Consider taking a break and practicing self-care." : "Your emotional state looks stable. Keep up the good work!";
              const dot = risk >= 70 ? "🔴" : risk >= 40 ? "🟡" : "🟢";
              return (
                <div className={`${card} backdrop-blur-xl p-5 rounded-2xl shadow-md`}>
                  <h3 className={`text-sm font-extrabold mb-3 ${heading}`}>⚠️ Risk Level</h3>
                  <p className={`text-xl font-bold ${color}`}>{dot} {level} Risk</p>
                  <div className={`mt-2 h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div className={`h-2 rounded-full transition-all ${barColor}`} style={{ width: `${Math.min(risk, 100)}%` }} />
                  </div>
                  <p className={`text-xs mt-1 ${muted}`}>{risk.toFixed(1)}/100</p>
                  <p className={`text-sm mt-3 leading-relaxed ${muted}`}>{desc}</p>
                </div>
              );
            })()}

            {/* SENTIMENT METER */}
            {result && (() => {
              const s = result.sentiment_score || 0;
              const pct = Math.min(Math.abs(s) * 100, 100).toFixed(0);
              const label = s >= 0.3 ? "Strongly Positive" : s >= 0 ? "Mildly Positive" : s >= -0.3 ? "Mildly Negative" : "Strongly Negative";
              const barColor = s >= 0.3 ? "bg-green-500" : s >= 0 ? "bg-green-300" : s >= -0.3 ? "bg-orange-400" : "bg-red-500";
              return (
                <div className={`${card} backdrop-blur-xl p-5 rounded-2xl shadow-md`}>
                  <h3 className={`text-sm font-extrabold mb-3 ${heading}`}>💬 Sentiment Meter</h3>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-green-500 font-medium">😊 Positive</span>
                    <span className="text-red-400 font-medium">😔 Negative</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div className={`h-2 rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
                  </div>
                  <p className={`text-xs mt-2 ${muted}`}>Score: {s.toFixed(2)} · <span className="font-medium">{label}</span></p>
                </div>
              );
            })()}

          </div>
        </div>
      </div>

      {/* FLOATING CALM CORNER BUTTON + POPUP */}
      <div className="fixed top-28 right-8 z-40 max-w-[200px]">

        {/* BUTTON — always static with slide-in entrance */}
        <div
          onClick={() => { setCalmVisited(true); setShowCalmPopup(false); if (popupTimerRef.current) clearTimeout(popupTimerRef.current); navigate("/safe-space"); }}
          className="cursor-pointer calm-entrance"
        >
          <div className="relative overflow-hidden flex items-center gap-3 bg-indigo-600 text-white px-7 py-4 rounded-full calm-float">
            <div className="calm-shimmer" />
            <FaHeart className="text-white animate-pulse flex-shrink-0" size={20} />
            <span className="text-base font-bold tracking-wide">Calm Corner</span>
          </div>
        </div>

        {/* POPUP — absolutely positioned below button */}
        {showCalmPopup && (() => {
          const { title, msg } = getCalmMessage();
          return (
            <div className={`calm-popup absolute top-full right-0 mt-3 flex flex-col gap-3 rounded-3xl shadow-2xl border p-6 w-80 ${
              darkMode ? "bg-gray-800 border-indigo-700/50" : "bg-white border-indigo-100"
            }`}>
              {/* AUTO DISMISS PROGRESS BAR */}
              <div className={`h-1 rounded-full overflow-hidden ${ darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <div className="h-1 bg-indigo-400 rounded-full calm-progress" />
              </div>

              {/* HEADER */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <FaHeart className="text-indigo-500 animate-pulse" size={16} />
                  </div>
                  <p className={`text-base font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {title}
                  </p>
                </div>
                <button
                  onClick={() => { setShowCalmPopup(false); if (popupTimerRef.current) clearTimeout(popupTimerRef.current); }}
                  style={{ backgroundColor: "transparent" }}
                  className={`text-lg leading-none flex-shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center rounded-lg transition ${
                    darkMode ? "text-gray-400 hover:bg-gray-700 hover:text-white" : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  ✕
                </button>
              </div>

              {/* MESSAGE */}
              <p className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>{msg}</p>

              {/* FEATURE PILLS */}
              <div className="flex flex-wrap gap-2">
                {["🎧 Music", "🌬️ Breathing", "🎮 Games", "💜 Affirmations"].map((f, i) => (
                  <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium ${
                    darkMode ? "bg-indigo-900/50 text-indigo-300" : "bg-indigo-50 text-indigo-600"
                  }`}>{f}</span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => { setCalmVisited(true); setShowCalmPopup(false); if (popupTimerRef.current) clearTimeout(popupTimerRef.current); navigate("/safe-space"); }}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition hover:scale-105"
                >
                  Take me there →
                </button>
                <button
                  onClick={() => { setShowCalmPopup(false); if (popupTimerRef.current) clearTimeout(popupTimerRef.current); }}
                  style={{ backgroundColor: "transparent" }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition ${
                    darkMode ? "border-gray-600 text-gray-400 hover:bg-gray-700" : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Later
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      <style>{`
        @keyframes calmFloat {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 8px 28px rgba(79,70,229,0.45);
          }
          50% {
            transform: translateY(-7px);
            box-shadow: 0 18px 44px rgba(79,70,229,0.75);
          }
        }
        .calm-float {
          animation: calmFloat 3s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .calm-float:hover {
          animation: none;
          transform: scale(1.07);
          box-shadow: 0 12px 36px rgba(79,70,229,0.65);
        }

        @keyframes shimmerMove {
          0% { transform: translateX(-100%) rotate(20deg); }
          100% { transform: translateX(300%) rotate(20deg); }
        }
        .calm-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmerMove 2.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes calmPopup {
          0% { opacity: 0; transform: translateY(-20px) scale(0.9); }
          60% { transform: translateY(4px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .calm-popup {
          animation: calmPopup 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes calmEntrance {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .calm-entrance {
          animation: calmEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes calmProgressBar {
          0% { width: 100%; }
          100% { width: 0%; }
        }
        .calm-progress {
          animation: calmProgressBar 15s linear forwards;
        }
      `}</style>

    </div>
  );
}

export default Dashboard;