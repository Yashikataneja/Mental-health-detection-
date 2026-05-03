import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBell } from "react-icons/fa";
import pic from "../assets/logo pic.png";
import Setting from "../pages/Setting";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "AI Assistant", path: "/chatbot" },
  { label: "Library", path: "/library" },
  { label: "Support", path: "/support" },
];

export default function AppNavbar({ darkMode, toggleDarkMode, showGetStarted = false, showDarkModeBtn = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const bellRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [currentUserEmail, setCurrentUserEmail] = useState(
    () => sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser") || ""
  );
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

  // Load notifications from history
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
        const daysSinceLast = lastEntry
          ? Math.floor((Date.now() - new Date(lastEntry.createdAt)) / 86400000)
          : null;

        const msgs = [];
        msgs.push({ id: 1, text: "Hope you're doing okay. Want to share how you feel today? 🌿" });

        if (["joy", "happiness"].includes(lastEmotion))
          msgs.push({ id: 2, text: "You seem in a good place lately 🌟 Keep it up!" });
        else if (["sad", "sadness"].includes(lastEmotion))
          msgs.push({ id: 3, text: "Feeling low is okay. Be gentle with yourself today 💜" });
        else if (["anxiety", "stress"].includes(lastEmotion))
          msgs.push({ id: 4, text: "Try a slow deep breath right now. You've got this 🌬️" });

        if (daysSinceLast !== null && daysSinceLast >= 4)
          msgs.push({ id: 5, text: "It's been a while. We're here if you need to talk 💚" });

        if (streak >= 7)
          msgs.push({ id: 6, text: `${streak}-day streak! You're building a powerful habit 🔥` });
        else if (streak >= 3)
          msgs.push({ id: 7, text: `${streak} days in a row 🌟 You're doing great!` });

        setNotifications(msgs);
      })
      .catch(() => {});
  }, [currentUserEmail]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpenDropdown(false);
      if (bellRef.current && !bellRef.current.contains(e.target))
        setBellOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl ${
          darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-indigo-100"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-14 py-3">

          {/* LOGO — smaller */}
          <Link to="/" className="flex items-center gap-3 group transition duration-300">
            <img
              src={pic}
              className="h-16 w-16 rounded-2xl object-contain shadow-sm transition duration-300 group-hover:scale-110"
            />
            <div className="transition duration-300 group-hover:scale-105">
              <p className="text-xl font-bold text-indigo-600 tracking-wide">Mannlytics</p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                AI-Powered Emotional Intelligence
              </p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-14">
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
                  className={`group relative text-[18px] font-semibold transition duration-300 ${
                    isActive
                      ? "text-indigo-600"
                      : darkMode
                      ? "text-white hover:text-indigo-400"
                      : "text-slate-800 hover:text-indigo-600"
                  }`}
                >
                  <span className="inline-block group-hover:-translate-y-0.5 transition">
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE — bell + dark mode + avatar */}
          <div className="flex items-center gap-3">

            {currentUserEmail && <div className="relative" ref={bellRef}>
              <button
                onClick={() => setBellOpen(p => !p)}
                className={`relative h-14 w-14 flex items-center justify-center rounded-full border transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-gray-300 hover:text-white"
                    : "bg-white border-indigo-200 text-indigo-600"
                }`}
              >
                <FaBell size={22} />
                {notifications.length > 0 && (
                  <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-rose-500" />
                )}
              </button>

              {bellOpen && (
                <div
                  className={`absolute right-0 mt-3 w-80 rounded-2xl shadow-2xl border p-3 z-50 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200"
                      : "bg-white border-indigo-100 text-gray-800"
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 px-1 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}>
                    Notifications
                  </p>
                  {notifications.length === 0 ? (
                    <p className="text-sm text-gray-400 px-1 py-2">No notifications yet.</p>
                  ) : (
                    <ul className="space-y-2 max-h-72 overflow-y-auto">
                      {notifications.map(n => (
                        <li
                          key={n.id}
                          className={`text-sm px-3 py-2.5 rounded-xl leading-relaxed ${
                            darkMode ? "bg-gray-700/60" : "bg-indigo-50"
                          }`}
                        >
                          {n.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>}

            {/* DARK MODE — only on homepage */}
            {showDarkModeBtn && (
              <button
                onClick={toggleDarkMode}
                className={`h-14 w-14 flex items-center justify-center rounded-full border transition ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-yellow-300"
                    : "bg-white border-indigo-200 text-indigo-600"
                }`}
              >
                {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
              </button>
            )}

            {/* AVATAR DROPDOWN — only when logged in */}
            {currentUserEmail && <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setOpenDropdown(p => !p)}
                className="h-14 w-14 rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-md overflow-hidden"
                style={{ background: "linear-gradient(135deg, #4f46e5, #06b6d4)" }}
              >
                {profilePic ? (
                  <img src={profilePic} className="w-full h-full object-cover" />
                ) : (
                  currentUserName?.charAt(0)?.toUpperCase()
                )}
              </div>

              {openDropdown && (
                <div
                  className={`absolute right-0 mt-3 w-60 rounded-2xl shadow-2xl border p-2 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-gray-200"
                      : "bg-white border-indigo-100 text-gray-800"
                  }`}
                >
                  <div className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
                    <p className="font-semibold text-sm">{currentUserName}</p>
                    <p className="text-xs opacity-70 truncate">{currentUserEmail}</p>
                  </div>
                  <div className="py-2 space-y-1">
                    <button
                      onClick={() => { setOpenDropdown(false); navigate("/profile"); }}
                      style={{ backgroundColor: "transparent" }}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"
                      }`}
                    >
                      👤 Profile
                    </button>
                    <button
                      onClick={() => { setOpenDropdown(false); setOpenSettings(true); }}
                      style={{ backgroundColor: "transparent" }}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left text-sm ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"
                      }`}
                    >
                      ⚙️ Settings
                    </button>
                  </div>
                  <div className={`border-t pt-2 ${darkMode ? "border-gray-700" : "border-gray-100"}`}>
                    <button
                      onClick={() => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("currentUserName");
      setCurrentUserEmail("");
      setCurrentUserName("User");
      setProfilePic("");
      setOpenDropdown(false);
      window.dispatchEvent(new Event("userLogout"));
      navigate("/");
    }}
                      style={{ backgroundColor: "transparent" }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-red-500 rounded-lg ${
                        darkMode ? "hover:bg-red-900/30" : "hover:bg-red-50"
                      }`}
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>}
          </div>
        </div>
      </nav>

      {/* SETTINGS MODAL */}
      {openSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSettings(false)} />
          <div
            className={`relative w-full max-w-3xl rounded-2xl shadow-2xl z-50 overflow-hidden ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          >
            <Setting onClose={() => setOpenSettings(false)} />
          </div>
        </div>
      )}
    </>
  );
}