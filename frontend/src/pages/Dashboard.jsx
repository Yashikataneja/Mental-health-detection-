



















// import { useState, useEffect } from "react";
// import { FaHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Setting from "./Setting";

// import pic from "../assets/logo pic.png";

// import {
//   FaSignOutAlt,
//   FaBars,
//   FaChartBar,
//   FaRobot,
//   FaUser,
//   FaCog,
// } from "react-icons/fa";

// function Dashboard() {
//   const navigate = useNavigate();

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

//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (text.includes("happy") || text.includes("good")) {
//       return { emotion: "joy", emoji: "😊", score: 9 };
//     }
//     if (text.includes("sad")) {
//       return { emotion: "sadness", emoji: "😢", score: 3 };
//     }
//     if (text.includes("angry")) {
//       return { emotion: "anger", emoji: "😠", score: 4 };
//     }

//     return { emotion: "neutral", emoji: "😐", score: 5 };
//   };

//   const analyzeEmotion = async () => {
//     if (!journal) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/journal/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: journal }),
//       });

//       const data = await res.json();
//       console.log("Saved:", data);

//       const emotionRes = detectEmotion(journal);
//       setResult(emotionRes);

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
//                   "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite",
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
//               value: result ? `${result.emotion} ${result.emoji}` : "--",
//             },
//             {
//               title: "Mental Score",
//               value: result ? `${result.score}/10` : "--",
//             },
//             { title: "Streak 🔥", value: streak },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-6 rounded-xl shadow`}
//             >
//               <h3>{item.title}</h3>
//               <p className="text-xl mt-2">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         <div
//           className={`${
//             darkMode ? "bg-gray-800" : "bg-white"
//           } p-6 rounded-xl shadow max-w-3xl`}
//         >
//           <h2 className="text-lg font-semibold mb-3">
//             How are you feeling today?
//           </h2>

//           <textarea
//             value={journal}
//             onChange={(e) => setJournal(e.target.value)}
//             className="w-full border p-3 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500"
//             placeholder="Write here..."
//           />

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
//               className={`${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-5 rounded-xl shadow border-l-4 border-indigo-500`}
//             >
//               <h3 className="text-lg font-semibold">
//                 Detected Emotion: {result.emotion} {result.emoji}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 Mental Score: {result.score}/10
//               </p>
//             </div>

//             <div
//               className={`${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-5 rounded-xl shadow`}
//             >
//               <h3 className="font-semibold mb-3">Suggestions 💡</h3>

//               <div className="space-y-2 text-sm">
//                 <div className="p-2 bg-indigo-50 rounded">🌿 Take a walk</div>
//                 <div className="p-2 bg-indigo-50 rounded">
//                   🎧 Listen to music
//                 </div>
//               </div>
//             </div>
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

















































import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";

import pic from "../assets/logo pic.png";

import {
  FaBell,
  FaSignOutAlt,
  FaBars,
  FaChartBar,
  FaRobot,
  FaUser,
  FaCog,
  FaHeart
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

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

  const detectEmotion = (text) => {
    text = text.toLowerCase();

    if (text.includes("happy") || text.includes("good")) {
      return { emotion: "joy", emoji: "😊", score: 9 };
    }
    if (text.includes("sad")) {
      return { emotion: "sadness", emoji: "😢", score: 3 };
    }
    if (text.includes("angry")) {
      return { emotion: "anger", emoji: "😠", score: 4 };
    }

    return { emotion: "neutral", emoji: "😐", score: 5 };
  };

  const analyzeEmotion = async () => {
    if (!journal) return;

    try {
      const res = await fetch("http://localhost:5000/api/journal/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: journal })
      });

      const data = await res.json();
      console.log("Saved:", data);

      const emotionRes = detectEmotion(journal);
      setResult(emotionRes);

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

  return (
    <div className={`flex min-h-screen ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
    }`}>

      {/* sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-28"
        } ${darkMode ? "bg-gray-800 text-white" : "bg-white"} shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
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

            <button className={`group flex items-center ${
  isOpen
    ? "px-4 bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-white"
    : "justify-center py-4 text-gray-700 dark:text-white"
} gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105`}>
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

      {/* MAIN */}
      <div className={`flex-1 p-10 ${isOpen ? "ml-64" : "ml-28"} transition-all duration-500`}>

        {/* TOP NAVBAR */}
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
              onClick={() => document.querySelector("textarea")?.focus()}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              + New Entry
            </button>

            <button
              onClick={() => navigate("/safe-space")}
              style={{
                animation:
                  "safeFloat 3s ease-in-out infinite, safeGlow 2.2s ease-in-out infinite",
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

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[ 
            { title: "Current Emotion", value: result ? `${result.emotion} ${result.emoji}` : "--" },
            { title: "Mental Score", value: result ? `${result.score}/10` : "--" },
            { title: "Streak 🔥", value: streak }
          ].map((item, i) => (
            <div key={i} className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow`}>
              <h3>{item.title}</h3>
              <p className="text-xl mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* JOURNAL */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow max-w-3xl`}>
          <h2 className="text-lg font-semibold mb-3">
            How are you feeling today?
          </h2>

          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            className="w-full border p-3 rounded-lg 
            bg-white text-black 
            dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 
            placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Write here..."
          />

          <button
            onClick={analyzeEmotion}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Analyze
          </button>
        </div>

        {result && (
  <div className="mt-8 max-w-3xl space-y-6">

    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow border-l-4 border-indigo-500`}>
      <h3 className="text-lg font-semibold">
        Detected Emotion: {result.emotion} {result.emoji}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Mental Score: {result.score}/10
      </p>
    </div>

    <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-5 rounded-xl shadow`}>
      <h3 className="font-semibold mb-3">Suggestions 💡</h3>

      <div className="space-y-3 text-sm">

  <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
    🌿 <span>Take a walk</span>
  </div>

  <div className="flex items-center gap-2 p-3 bg-indigo-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm hover:scale-[1.02] transition">
    🎧 <span>Listen to music</span>
  </div>

</div>
    </div>

    <button
  onClick={() =>
    navigate("/detailed-analysis", { state: { result, journal } })
  }
  className="mt-6 w-fit bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
>
  View Detailed Analysis →
</button>

  </div>
)}

      </div>

      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenSettings(false)}
          ></div>

          <div className={`relative ${darkMode ? "bg-gray-800 text-white" : "bg-white"} w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50`}>

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
