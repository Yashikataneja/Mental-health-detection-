




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

export default function Settings({ onClose }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // apply on mount
    document.body.classList.toggle("dark", localStorage.getItem("darkMode") === "true");

    // sync when profile page toggles dark mode
    const handleDarkModeSync = () => {
      const isDark = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDark);
      document.body.classList.toggle("dark", isDark);
    };

    window.addEventListener("darkModeUpdate", handleDarkModeSync);
    return () => window.removeEventListener("darkModeUpdate", handleDarkModeSync);
  }, []);
  const [notifications, setNotifications] = useState(true);
const [isEditing, setIsEditing] = useState(false);
  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // LOAD USER
  useEffect(() => {
 const storedUser =
  sessionStorage.getItem("currentUser") ||
  localStorage.getItem("currentUser");

if (!storedUser) return;

let email = storedUser;

// 🔥 FIX: if object stored
try {
  const parsed = JSON.parse(storedUser);
  email = parsed.email;
} catch {
  email = storedUser;
}

  // 🔥 BACKEND DATA LOAD
  fetch(`http://localhost:5000/api/user/${email}`)
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name || "",
        email: data.email || "",
        password: "",
        profilePic: localStorage.getItem("profilePic") || "",
      });
      setNotifications(data.notifications ?? true);
    })
    .catch(err => console.error(err));

  // 🔥 real-time profile pic update
  const handleProfileUpdate = () => {
    setUser(prev => ({
      ...prev,
      profilePic: localStorage.getItem("profilePic") || "",
      name: sessionStorage.getItem("currentUserName") || prev.name,
    }));
  };

  window.addEventListener("profileUpdate", handleProfileUpdate);
  return () => window.removeEventListener("profileUpdate", handleProfileUpdate);

}, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordSave = async () => {
    if (!oldPassword || !user.password || !confirmPassword) {
      return alert("Please fill in all password fields");
    }
    if (user.password !== confirmPassword) {
      return alert("New passwords do not match ❌");
    }
    if (user.password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/update-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          oldPassword,
          newPassword: user.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed ❌");
      alert("Password updated successfully ✅");
      setOldPassword("");
      setUser(prev => ({ ...prev, password: "" }));
      setConfirmPassword("");
    } catch {
      alert("Error updating password ❌");
    }
  };

  const handleToggleNotifications = (value) => {
    setNotifications(value);
    if (!user.email) return;
    fetch("http://localhost:5000/api/user/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, notifications: value }),
    }).catch(() => {});
  };

  const handleSave = () => {
  if (!user.email) return;

  // 🔥 BACKEND API CALL
  fetch("http://localhost:5000/api/user/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      name: user.name,
      darkMode: darkMode,
      notifications: notifications,
      ...(user.password && { password: user.password }),
    }),
  })
    .then(res => res.json())
    .then(() => {
      sessionStorage.setItem("currentUserName", user.name);
      window.dispatchEvent(new Event("profileUpdate"));
      setIsEditing(false);
      alert("Changes saved successfully 🎉");
    })
    .catch(() => {
      alert("Error saving ❌");
    });
};

  return (
    <div className={`w-full ${ darkMode ? "bg-gray-800 text-white" : "bg-white" } rounded-3xl flex flex-col max-h-[90vh]`}>

        {/* HEADER — sticky, never scrolls */}
        <div className={`flex justify-between items-center px-8 pt-8 pb-4 border-b flex-shrink-0 ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-white"
        } rounded-t-3xl`}>
          <div>
            <h1 className="text-3xl font-bold text-indigo-600">Settings ⚙️</h1>
            <p className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
              Manage your account & preferences
            </p>
          </div>
          <button
            onClick={() => onClose ? onClose() : navigate("/profile")}
            className="text-gray-400 hover:bg-red-100 hover:text-red-600 text-xl transition w-9 h-9 flex items-center justify-center rounded-lg"
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE CONTENT ONLY */}
        <div className="px-8 py-6 space-y-6 overflow-y-auto flex-1">

        {/* MINI PROFILE CARD */}
        <div className={`flex items-center gap-4 p-4 rounded-2xl ${ darkMode ? "bg-gray-700" : "bg-indigo-50" }`}>
          <div className="w-14 h-14 rounded-full border-2 border-indigo-200 bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            {user.name?.charAt(0)?.toUpperCase()}
          </div>
          <div>
            <p className={`font-semibold ${ darkMode ? "text-white" : "text-gray-800" }`}>{user.name}</p>
            <p className={`text-sm ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>{user.email}</p>
          </div>
        </div>

        {/* PROFILE SECTION */}
        <div className={`p-5 border rounded-2xl ${ darkMode ? "border-gray-600" : "border-gray-100" }`}>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-base font-bold text-indigo-600">👤 Profile Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                isEditing
                  ? darkMode ? "bg-gray-600 text-gray-300 hover:bg-gray-500" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
              }`}
            >
              {isEditing ? "Cancel" : "✏️ Edit"}
            </button>
          </div>

          <div className="space-y-4">
            {/* NAME */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>Display Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition ${
                  isEditing
                    ? darkMode
                      ? "bg-gray-700 border-indigo-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                      : "bg-white border-indigo-400 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300"
                    : darkMode
                    ? "bg-gray-700/50 border-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                Email <span className={`normal-case font-normal ${ darkMode ? "text-gray-500" : "text-gray-400" }`}>— cannot be changed</span>
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-gray-400"
                    : "bg-gray-50 border-gray-200 text-gray-400"
                }`}
              />
            </div>
          </div>

          {isEditing && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSave}
                className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-semibold transition shadow-sm"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* SECURITY SECTION */}
        <div className={`p-5 border rounded-2xl ${ darkMode ? "border-gray-600" : "border-gray-100" }`}>
          <h2 className="text-base font-bold mb-5 text-indigo-600">🔐 Security</h2>
          <div className="space-y-4">

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>Current Password</label>
              <div className="relative">
                <input
                  type={showOldPw ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter current password"
                  className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm outline-none transition focus:ring-2 focus:ring-indigo-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                  }`}
                />
                <button type="button" onClick={() => setShowOldPw(!showOldPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                  {showOldPw ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>New Password</label>
              <div className="relative">
                <input
                  type={showNewPw ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm outline-none transition focus:ring-2 focus:ring-indigo-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                  }`}
                />
                <button type="button" onClick={() => setShowNewPw(!showNewPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                  {showNewPw ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmPw ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm outline-none transition focus:ring-2 focus:ring-indigo-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                  }`}
                />
                <button type="button" onClick={() => setShowConfirmPw(!showConfirmPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                  {showConfirmPw ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center mt-4">
            <p className={`text-xs ${ darkMode ? "text-gray-500" : "text-gray-400" }`}>🔒 Min 6 characters</p>
            <button
              className="text-xs text-indigo-500 hover:text-indigo-700 font-semibold transition"
              onClick={async () => {
                if (!user.email) return alert("Email not found");
                try {
                  await sendPasswordResetEmail(auth, user.email);
                  alert("Reset link sent to your email ✅");
                } catch (err) {
                  alert(err.message);
                }
              }}
            >
              Forgot Password?
            </button>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handlePasswordSave}
              className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-semibold transition shadow-sm"
            >
              Update Password
            </button>
          </div>
        </div>


        {/* NOTIFICATION PREFERENCES */}
        <div className={`p-5 border rounded-2xl ${ darkMode ? "border-gray-600" : "border-gray-100" }`}>
          <h2 className="text-base font-bold mb-1 text-indigo-600">🔔 Notifications</h2>
          <p className={`text-xs mb-4 ${ darkMode ? "text-gray-500" : "text-gray-400" }`}>Gentle check-ins and well-being reminders 💜</p>
          <div className={`flex items-center justify-between p-4 rounded-xl ${ darkMode ? "bg-gray-700" : "bg-gray-50" }`}>
            <div>
              <p className={`text-sm font-semibold ${ darkMode ? "text-gray-200" : "text-gray-700" }`}>Enable Notifications</p>
              <p className={`text-xs mt-0.5 ${ darkMode ? "text-gray-500" : "text-gray-400" }`}>Mood-based reminders and streak alerts</p>
            </div>
            <div
              onClick={() => handleToggleNotifications(!notifications)}
              className={`w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 flex items-center px-1 ${
                notifications ? "bg-indigo-500" : darkMode ? "bg-gray-600" : "bg-gray-300"
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                notifications ? "translate-x-5" : "translate-x-0"
              }`} />
            </div>
          </div>
        </div>

        <div className={`p-5 border rounded-2xl ${ darkMode ? "border-red-900/40 bg-red-900/10" : "border-red-100 bg-red-50" }`}>
  <h2 className="text-lg font-semibold mb-3 text-red-500">⚠️ Delete Account</h2>

  <p className={`text-sm mb-4 ${ darkMode ? "text-gray-300" : "text-gray-600" }`}>
    Deleting your account will permanently remove all your data.
    This action cannot be undone.
  </p>

  <button
    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
    onClick={async () => {
      const confirmDelete = window.confirm("Are you sure? This will permanently delete your account and all data.");
      if (!confirmDelete) return;

      try {
        const res = await fetch(`http://localhost:5000/api/user/${user.email}`, {
          method: "DELETE",
        });

        if (!res.ok) throw new Error();

        // clear all local data
        sessionStorage.clear();
        localStorage.removeItem(`moodHistory_${user.email}`);
        localStorage.removeItem(`journalStreak_${user.email}`);
        localStorage.removeItem(`lastDate_${user.email}`);
        localStorage.removeItem(`profilePic`);

        window.dispatchEvent(new Event("profileUpdate"));
        if (onClose) onClose();
        navigate("/");
      } catch {
        alert("Failed to delete account ❌");
      }
    }}
  >
    Delete Account
  </button>
</div>

        {/* BUTTONS */}

        </div>
    </div>
  );
}