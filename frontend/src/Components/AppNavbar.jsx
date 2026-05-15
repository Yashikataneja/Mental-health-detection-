// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FaMoon, FaSun, FaBell, FaBars, FaTimes } from "react-icons/fa";
// import pic from "../assets/logo pic.png";
// import Setting from "../pages/Setting";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "Dashboard", path: "/dashboard" },
//   { label: "AI Assistant", path: "/chatbot" },
//   { label: "Library", path: "/library" },
//   { label: "Support", path: "/support" },
// ];

// export default function AppNavbar({ darkMode, toggleDarkMode, showGetStarted = false, showDarkModeBtn = false }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dropdownRef = useRef(null);
//   const bellRef = useRef(null);

//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openSettings, setOpenSettings] = useState(false);
//   const [bellOpen, setBellOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationToast, setShowNotificationToast] = useState(false);
//   const [latestNotification, setLatestNotification] = useState(null);

//   const [currentUserEmail, setCurrentUserEmail] = useState(
//     () => sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser") || ""
//   );
//   const [currentUserName, setCurrentUserName] = useState(
//     () => sessionStorage.getItem("currentUserName") ||
//     localStorage.getItem(`name_${sessionStorage.getItem("currentUser")}`) ||
//     "User"
//   );

//   const currentUserEmailForPic = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser") || "";
//   const [profilePic, setProfilePic] = useState(localStorage.getItem(`profilePic_${currentUserEmailForPic}`) || "");

//   useEffect(() => {
//     const sync = () => setProfilePic(localStorage.getItem(`profilePic_${currentUserEmailForPic}`) || "");
//     window.addEventListener("profileUpdate", sync);
//     return () => window.removeEventListener("profileUpdate", sync);
//   }, []);

//   useEffect(() => {
//     if (!currentUserEmail) return;

//     const isDashboard = location.pathname === '/dashboard';

//     // Real notifications from history
//     fetch(`http://localhost:5000/api/user/${currentUserEmail}`)
//       .then(r => r.json())
//       .then(data => {
//         const notifEnabled = data.notifications ?? true;
//         const history = JSON.parse(localStorage.getItem(`moodHistory_${currentUserEmail}`)) || [];
//         const streak = parseInt(localStorage.getItem(`journalStreak_${currentUserEmail}`) || "0");
//         const lastEntry = history[history.length - 1];
//         const lastEmotion = (lastEntry?.emotion || "").toLowerCase();
//         const daysSinceLast = lastEntry
//           ? Math.floor((Date.now() - new Date(lastEntry.createdAt)) / 86400000)
//           : null;

//         const msgs = [];
//         if (notifEnabled) {
//           msgs.push({ id: 1, text: "Hope you're doing okay. Want to share how you feel today? 🌿" });
//           if (["joy", "happiness"].includes(lastEmotion))
//             msgs.push({ id: 2, text: "You seem in a good place lately 🌟 Keep it up!" });
//           else if (["sad", "sadness"].includes(lastEmotion))
//             msgs.push({ id: 3, text: "Feeling low is okay. Be gentle with yourself today 💜" });
//           else if (["anxiety", "stress"].includes(lastEmotion))
//             msgs.push({ id: 4, text: "Try a slow deep breath right now. You've got this 🌬️" });
//           if (daysSinceLast !== null && daysSinceLast >= 4)
//             msgs.push({ id: 5, text: "It's been a while. We're here if you need to talk 💚" });
//           if (streak >= 7)
//             msgs.push({ id: 6, text: `${streak}-day streak! You're building a powerful habit 🔥` });
//           else if (streak >= 3)
//             msgs.push({ id: 7, text: `${streak} days in a row 🌟 You're doing great!` });
//         }
//         setNotifications(msgs);

//         // Show welcome toast ONLY ONCE per day on dashboard
//         if (isDashboard && msgs.length > 0) {
//           const lastToastDate = localStorage.getItem(`navToastDate_${currentUserEmail}`);
//           const today = new Date().toDateString();
//           if (lastToastDate !== today) {
//             localStorage.setItem(`navToastDate_${currentUserEmail}`, today);
//             setTimeout(() => {
//               setLatestNotification(msgs[0]);
//               setShowNotificationToast(true);
//               setTimeout(() => setShowNotificationToast(false), 4000);
//             }, 1200);
//           }
//         }
//       })
//       .catch(() => {});
//   }, [currentUserEmail, location.pathname]);

//   useEffect(() => {
//     const handleOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(false);
//       if (bellRef.current && !bellRef.current.contains(e.target)) setBellOpen(false);
//     };
    
//     const handleEmotionNotification = (event) => {
//       const { text, emotion, emoji } = event.detail;
//       setLatestNotification({ id: Date.now(), text: `${emoji} ${text}`, emotion });
//       setShowNotificationToast(true);
//       setTimeout(() => setShowNotificationToast(false), 5000);
//     };
    
//     document.addEventListener("mousedown", handleOutside);
//     window.addEventListener('showEmotionNotification', handleEmotionNotification);
    
//     return () => {
//       document.removeEventListener("mousedown", handleOutside);
//       window.removeEventListener('showEmotionNotification', handleEmotionNotification);
//     };
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => { 
//     setMobileMenuOpen(false); 
//   }, [location.pathname]);

//   const handleLogout = () => {
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("currentUser");
//     sessionStorage.removeItem("currentUserName");
//     setCurrentUserEmail("");
//     setCurrentUserName("User");
//     setProfilePic("");
//     setOpenDropdown(false);
//     setMobileMenuOpen(false);
//     window.dispatchEvent(new Event("userLogout"));
//     navigate("/");
//   };

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-indigo-100"}`}>
//         <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-14 py-3">

//           {/* LOGO */}
//           <div className="flex items-center gap-3">
//             {/* CHATBOT DROPDOWN - exactly like ChatGPT */}
//             {location.pathname === '/chatbot' && (
//               <div className="relative">
//                 <button
//                   className={`md:hidden p-2 rounded-md transition ${darkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-600"}`}
//                   onClick={() => {
//                     if (window.setSidebarOpen) {
//                       window.setSidebarOpen(prev => !prev);
//                     }
//                   }}
//                 >
//                   <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
//                     <rect x="0" y="2" width="18" height="2" rx="1" fill="currentColor"/>
//                     <rect x="0" y="8" width="12" height="2" rx="1" fill="currentColor"/>
//                   </svg>
//                 </button>
//               </div>
//             )}
            
//             <Link to="/" className="flex items-center gap-2 group transition duration-300">
//               <img src={pic} className="h-12 w-12 rounded-2xl object-contain shadow-sm transition duration-300 group-hover:scale-110" />
//               <div className="transition duration-300 group-hover:scale-105">
//                 <p className="text-lg font-bold text-indigo-600 tracking-wide">Mannlytics</p>
//                 <p className={`text-xs hidden sm:block ${darkMode ? "text-gray-400" : "text-gray-500"}`}>AI-Powered Emotional Intelligence</p>
//               </div>
//             </Link>
//           </div>

//           {/* NAV LINKS — desktop only */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={(e) => {
//                     if ((link.label === "Dashboard" || link.label === "Library") && !currentUserEmail) {
//                       e.preventDefault();
//                       navigate("/login", { state: { from: link.path } });
//                     }
//                   }}
//                   className={`group relative text-base font-semibold transition duration-300 ${isActive ? "text-indigo-600" : darkMode ? "text-white hover:text-indigo-400" : "text-slate-800 hover:text-indigo-600"}`}
//                 >
//                   <span className="inline-block group-hover:-translate-y-0.5 transition">{link.label}</span>
//                   <span className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-2">

//             {/* BELL — all devices */}
//             {currentUserEmail && (
//               <div className="relative" ref={bellRef}>
//                 <button
//                   onClick={() => setBellOpen(p => !p)}
//                   className={`relative h-10 w-10 flex items-center justify-center rounded-full border transition text-lg ${darkMode ? "bg-gray-800 border-gray-600 text-gray-300 hover:text-white" : "bg-white border-indigo-200 text-indigo-600"}`}
//                 >
//                   🔔
//                   {notifications.length > 0 && <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-rose-500 border-2 border-white" />}
//                 </button>
//                 {bellOpen && (
//                   <div className={`absolute right-0 mt-3 w-72 sm:w-80 rounded-2xl shadow-2xl border p-3 z-50 ${darkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-indigo-100 text-gray-800"}`}>
//                     <div className="flex items-center justify-between mb-3">
//                       <p className={`text-xs font-semibold uppercase tracking-widest px-1 ${darkMode ? "text-gray-400" : "text-gray-400"}`}>Notifications</p>
//                       <span className="text-indigo-500">🔔</span>
//                     </div>
//                     {notifications.length === 0 ? (
//                       <p className="text-sm text-gray-400 px-1 py-2">No notifications yet.</p>
//                     ) : (
//                       <ul className="space-y-2 max-h-64 overflow-y-auto">
//                         {notifications.map(n => (
//                           <li key={n.id} className={`text-sm px-3 py-2.5 rounded-xl leading-relaxed ${darkMode ? "bg-gray-700/60" : "bg-indigo-50"}`}>{n.text}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* DARK MODE */}
//             <button
//               onClick={() => toggleDarkMode && toggleDarkMode()}
//               className={`h-10 w-10 flex items-center justify-center rounded-full border transition text-lg ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-indigo-200"}`}
//             >
//               {darkMode ? "☀️" : "🌙"}
//             </button>

//             {/* AVATAR — desktop only */}
//             {currentUserEmail && (
//               <div className="relative hidden md:block" ref={dropdownRef}>
//                 <div
//                   onClick={() => setOpenDropdown(p => !p)}
//                   className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-md overflow-hidden"
//                   style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}
//                 >
//                   {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : currentUserName?.charAt(0)?.toUpperCase()}
//                 </div>
//                 {openDropdown && (
//                   <div className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl border p-2 ${darkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-indigo-100 text-gray-800"}`}>
//                     <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
//                       <p className="font-semibold text-sm">{currentUserName}</p>
//                       <p className="text-xs opacity-70 truncate">{currentUserEmail}</p>
//                     </div>
//                     <div className="py-2 space-y-1">
//                       <button onClick={() => { setOpenDropdown(false); navigate("/profile"); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}>👤 Profile</button>
//                       <button onClick={() => { setOpenDropdown(false); setOpenSettings(true); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}>⚙️ Settings</button>
//                     </div>
//                     <div className={`border-t pt-2 ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
//                       <button onClick={handleLogout} style={{ backgroundColor: "transparent" }} className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-red-500 rounded-lg ${darkMode ? "hover:bg-red-900/30" : "hover:bg-red-50"}`}>🚪 Logout</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* HAMBURGER — mobile only */}
//             <button
//               className={`md:hidden h-10 w-10 flex items-center justify-center rounded-full border transition text-lg ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-indigo-200 text-indigo-600"}`}
//               onClick={() => setMobileMenuOpen(p => !p)}
//             >
//               {mobileMenuOpen ? "✕" : "☰"}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU DRAWER */}
//         {mobileMenuOpen && (
//           <div className={`md:hidden border-t px-4 py-4 space-y-1 ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-indigo-100"}`}>
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={(e) => {
//                     if ((link.label === "Dashboard" || link.label === "Library") && !currentUserEmail) {
//                       e.preventDefault();
//                       navigate("/login", { state: { from: link.path } });
//                     }
//                     setMobileMenuOpen(false);
//                   }}
//                   className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition ${isActive ? "bg-indigo-600 text-white" : darkMode ? "text-gray-200 hover:bg-gray-800" : "text-slate-700 hover:bg-indigo-50"}`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}

//             {/* MOBILE NOTIFICATIONS */}
//             {currentUserEmail && (
//               <div className={`mt-3 pt-3 border-t space-y-1 ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
//                 <button 
//                   onClick={() => { setBellOpen(p => !p); setMobileMenuOpen(false); }} 
//                   style={{ backgroundColor: "transparent" }} 
//                   className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-medium ${darkMode ? "text-gray-200 hover:bg-gray-800" : "text-slate-700 hover:bg-indigo-50"}`}
//                 >
//                   🔔 Notifications {notifications.length > 0 && <span className="ml-auto bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">{notifications.length}</span>}
//                 </button>
//                 <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${darkMode ? "bg-gray-800" : "bg-indigo-50"}`}>
//                   <div className="h-9 w-9 rounded-full flex items-center justify-center text-white font-bold overflow-hidden flex-shrink-0" style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}>
//                     {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : currentUserName?.charAt(0)?.toUpperCase()}
//                   </div>
//                   <div className="min-w-0">
//                     <p className={`text-sm font-semibold truncate ${darkMode ? "text-white" : "text-slate-800"}`}>{currentUserName}</p>
//                     <p className={`text-xs truncate ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{currentUserEmail}</p>
//                   </div>
//                 </div>
//                 <button onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-medium ${darkMode ? "text-gray-200 hover:bg-gray-800" : "text-slate-700 hover:bg-indigo-50"}`}>👤 Profile</button>
//                 <button onClick={() => { setOpenSettings(true); setMobileMenuOpen(false); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-medium ${darkMode ? "text-gray-200 hover:bg-gray-800" : "text-slate-700 hover:bg-indigo-50"}`}>⚙️ Settings</button>
//                 <button onClick={handleLogout} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-medium text-red-500 ${darkMode ? "hover:bg-red-900/30" : "hover:bg-red-50"}`}>🚪 Logout</button>
//               </div>
//             )}

//             {!currentUserEmail && (
//               <div className={`mt-3 pt-3 border-t flex gap-2 ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
//                 <button onClick={() => { navigate("/login"); setMobileMenuOpen(false); }} className="flex-1 py-2.5 rounded-xl text-sm font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition">Login</button>
//                 <button onClick={() => { navigate("/signup"); setMobileMenuOpen(false); }} className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition">Sign Up</button>
//               </div>
//             )}
//           </div>
//         )}
//       </nav>

//       {/* NOTIFICATION TOAST */}
//       {showNotificationToast && latestNotification && (
//         <div className="fixed top-20 right-4 z-60 animate-bounce">
//           <div className={`max-w-sm rounded-2xl border shadow-2xl p-4 ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-indigo-100 text-gray-800"}`}>
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center animate-pulse">
//                   🔔
//                 </div>
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-xs font-semibold text-indigo-500 mb-1">Emotion Detected</p>
//                 <p className="text-sm leading-relaxed">{latestNotification.text}</p>
//               </div>
//               <button
//                 onClick={() => setShowNotificationToast(false)}
//                 className={`flex-shrink-0 p-1 rounded-lg transition ${darkMode ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* SETTINGS MODAL */}
//       {openSettings && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSettings(false)} />
//           <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl z-50 overflow-hidden ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <Setting onClose={() => setOpenSettings(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBell, FaTimes } from "react-icons/fa";
import pic from "../assets/logo pic.png";
import Setting from "../pages/Setting";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "AI Assistant", path: "/chatbot" },
  { label: "Library", path: "/library" },
  { label: "Support", path: "/support" },
];

export default function AppNavbar({ darkMode, toggleDarkMode, showGetStarted = false, minimal = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const bellRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [currentUserEmail, setCurrentUserEmail] = useState(() => {
    const val = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser") || "";
    try { JSON.parse(val); return ""; } catch { return val; }
  });
  const [currentUserName, setCurrentUserName] = useState(
    () => sessionStorage.getItem("currentUserName") ||
    localStorage.getItem(`name_${sessionStorage.getItem("currentUser")}`) ||
    "User"
  );

  const currentUserEmailForPic = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser") || "";
  const [profilePic, setProfilePic] = useState(localStorage.getItem(`profilePic_${currentUserEmailForPic}`) || "");

  useEffect(() => {
    const sync = () => setProfilePic(localStorage.getItem(`profilePic_${currentUserEmailForPic}`) || "");
    window.addEventListener("profileUpdate", sync);
    return () => window.removeEventListener("profileUpdate", sync);
  }, []);

  useEffect(() => {
    if (!currentUserEmail) return;
    fetch(`http://localhost:5000/api/user/${currentUserEmail}`)
      .then(r => r.json())
      .then(data => {
        const notifEnabled = data.notifications ?? true;
        const history = JSON.parse(localStorage.getItem(`moodHistory_${currentUserEmail}`)) || [];
        if (!notifEnabled || history.length === 0) return;
        const lastEntry = history[history.length - 1];
        const lastEmotion = (lastEntry?.emotion || "").toLowerCase();
        const streak = parseInt(localStorage.getItem(`journalStreak_${currentUserEmail}`) || "0");
        const daysSinceLast = lastEntry ? Math.floor((Date.now() - new Date(lastEntry.createdAt)) / 86400000) : null;
        const msgs = [];
        msgs.push({ id: 1, text: "Hope you're doing okay. Want to share how you feel today? 🌿" });
        if (["joy", "happiness"].includes(lastEmotion)) msgs.push({ id: 2, text: "You seem in a good place lately 🌟 Keep it up!" });
        else if (["sad", "sadness"].includes(lastEmotion)) msgs.push({ id: 3, text: "Feeling low is okay. Be gentle with yourself today 💜" });
        else if (["anxiety", "stress"].includes(lastEmotion)) msgs.push({ id: 4, text: "Try a slow deep breath right now. You've got this 🌬️" });
        if (daysSinceLast !== null && daysSinceLast >= 4) msgs.push({ id: 5, text: "It's been a while. We're here if you need to talk 💚" });
        if (streak >= 7) msgs.push({ id: 6, text: `${streak}-day streak! You're building a powerful habit 🔥` });
        else if (streak >= 3) msgs.push({ id: 7, text: `${streak} days in a row 🌟 You're doing great!` });
        setNotifications(msgs);
      })
      .catch(() => {});
  }, [currentUserEmail]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(false);
      if (bellRef.current && !bellRef.current.contains(e.target)) setBellOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-indigo-100"}`}>
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-14 py-4">

          {/* LEFT — hamburger (mobile) + logo */}
          <div className="flex items-center gap-3">
            {/* HAMBURGER — mobile only */}
            <button
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8"
              onClick={() => setMobileMenuOpen(p => !p)}
            >
              {mobileMenuOpen ? (
                <FaTimes style={{ color: darkMode ? "#ffffff" : "#1e293b", fontSize: "22px" }} />
              ) : (
                <>
                  <span style={{ display: "block", height: "3px", width: "28px", borderRadius: "9999px", backgroundColor: darkMode ? "#ffffff" : "#1e293b" }} />
                  <span style={{ display: "block", height: "3px", width: "20px", borderRadius: "9999px", backgroundColor: darkMode ? "#ffffff" : "#1e293b" }} />
                  <span style={{ display: "block", height: "3px", width: "28px", borderRadius: "9999px", backgroundColor: darkMode ? "#ffffff" : "#1e293b" }} />
                </>
              )}
            </button>

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group transition duration-300">
              <img src={pic} className="h-12 w-12 rounded-2xl object-contain shadow-sm transition duration-300 group-hover:scale-110" />
              <div className="transition duration-300 group-hover:scale-105">
                <p className="text-xl font-bold text-indigo-600 tracking-wide">Mannlytics</p>
                <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>AI-Powered Mental Health Analytics</p>
              </div>
            </Link>
          </div>

          {/* NAV LINKS — desktop */}
          <div className={`hidden md:flex items-center gap-14 ${minimal ? "!hidden" : ""}`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    if ((link.label === "Dashboard" || link.label === "Library") && !currentUserEmail) {
                      e.preventDefault();
                      navigate("/login", { state: { from: link.path } });
                    }
                  }}
                  className={`group relative text-[18px] font-semibold transition duration-300 ${isActive ? "text-indigo-600" : darkMode ? "text-white hover:text-indigo-400" : "text-slate-800 hover:text-indigo-600"}`}
                >
                  <span className="inline-block group-hover:-translate-y-0.5 transition">{link.label}</span>
                  <span className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>

          {/* RIGHT — bell + dark mode + avatar */}
          <div className={`flex items-center gap-3 ${minimal ? "!hidden" : ""}`}>
            {currentUserEmail && (
              <div className="relative" ref={bellRef}>
                <button
                  onClick={() => setBellOpen(p => !p)}
                  className={`relative h-14 w-14 flex items-center justify-center rounded-full border transition ${darkMode ? "bg-gray-800 border-gray-600 text-gray-300 hover:text-white" : "bg-white border-indigo-200 text-indigo-600"}`}
                >
                  <FaBell size={22} />
                  {notifications.length > 0 && <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-rose-500" />}
                </button>
                {bellOpen && (
                  <div className={`absolute right-0 mt-3 w-80 rounded-2xl shadow-2xl border p-3 z-50 ${darkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-indigo-100 text-gray-800"}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-1 text-gray-400">Notifications</p>
                    {notifications.length === 0 ? (
                      <p className="text-sm text-gray-400 px-1 py-2">No notifications yet.</p>
                    ) : (
                      <ul className="space-y-2 max-h-72 overflow-y-auto">
                        {notifications.map(n => (
                          <li key={n.id} className={`text-sm px-3 py-2.5 rounded-xl leading-relaxed ${darkMode ? "bg-gray-700/60" : "bg-indigo-50"}`}>{n.text}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className={`h-14 w-14 flex items-center justify-center rounded-full border transition ${darkMode ? "bg-gray-800 border-gray-600 text-yellow-300" : "bg-white border-indigo-200 text-indigo-600"}`}
            >
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            {/* AVATAR */}
            {currentUserEmail && (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setOpenDropdown(p => !p)}
                  className="h-14 w-14 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-md overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}
                >
                  {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : currentUserName?.charAt(0)?.toUpperCase()}
                </div>
                {openDropdown && (
                  <div className={`absolute right-0 mt-3 w-60 rounded-2xl shadow-2xl border p-2 ${darkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-indigo-100 text-gray-800"}`}>
                    <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
                      <p className="font-semibold text-sm">{currentUserName}</p>
                      <p className="text-xs opacity-70 truncate">{currentUserEmail}</p>
                    </div>
                    <div className="py-2 space-y-1">
                      <button onClick={() => { setOpenDropdown(false); navigate("/profile"); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}>👤 Profile</button>
                      <button onClick={() => { setOpenDropdown(false); setOpenSettings(true); }} style={{ backgroundColor: "transparent" }} className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"}`}>⚙️ Settings</button>
                    </div>
                    <div className={`border-t pt-2 ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
                      <button
                        onClick={() => {
                          sessionStorage.removeItem("token");
                          sessionStorage.removeItem("currentUser");
                          sessionStorage.removeItem("currentUserName");
                          localStorage.removeItem("currentUser");
                          localStorage.removeItem("currentUserName");
                          setCurrentUserEmail("");
                          setCurrentUserName("User");
                          setProfilePic("");
                          setOpenDropdown(false);
                          window.dispatchEvent(new Event("userLogout"));
                          navigate("/");
                        }}
                        style={{ backgroundColor: "transparent" }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-red-500 rounded-lg ${darkMode ? "hover:bg-red-900/30" : "hover:bg-red-50"}`}
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} ${darkMode ? "bg-gray-900 text-white" : "bg-white text-slate-800"}`}
      >
        <div className={`flex items-center justify-between px-6 py-5 border-b ${darkMode ? "border-gray-700" : "border-indigo-100"}`}>
          <div className="flex items-center gap-3">
            <img src={pic} className="h-10 w-10 rounded-xl object-contain" />
            <p className="text-lg font-bold text-indigo-600">Mannlytics</p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaTimes style={{ color: darkMode ? "#ffffff" : "#1e293b", fontSize: "20px" }} />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if ((link.label === "Dashboard" || link.label === "Library") && !currentUserEmail) {
                    navigate("/login", { state: { from: link.path } });
                  }
                }}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition ${isActive ? "bg-indigo-50 text-indigo-600" : darkMode ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* SETTINGS MODAL */}
      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSettings(false)} />
          <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl z-50 overflow-hidden ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
            <Setting onClose={() => setOpenSettings(false)} />
          </div>
        </div>
      )}
    </>
  );
}