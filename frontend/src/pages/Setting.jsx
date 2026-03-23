import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [streak, setStreak] = useState(0);
  const [lastActivity, setLastActivity] = useState("");

  // LOAD USER
  useEffect(() => {
  const email =
    sessionStorage.getItem("currentUser") ||
    localStorage.getItem("currentUser");

  if (!email) return;

  // 🔥 BACKEND DATA LOAD
  fetch(`http://localhost:5000/api/user/${email}`)
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name || "",
        email: data.email || "",
        password: "",
      });

      setDarkMode(data.darkMode ?? false);
      setNotifications(data.notifications ?? true);
    })
    .catch(err => console.error(err));

  // ✅ streak (local)
  const savedStreak = localStorage.getItem(`journalStreak_${email}`);
  if (savedStreak) {
    setStreak(parseInt(savedStreak));
  }

  // ✅ last activity
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  setLastActivity(new Date().toLocaleString("en-IN", options));

}, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
    }),
  })
    .then(res => res.json())
    .then(() => {
      alert("Changes saved successfully 🎉");
    })
    .catch(() => {
      alert("Error saving ❌");
    });
};

  return (
    <div className="w-full">

      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600">
              Settings ⚙️
            </h1>
            <p className="text-gray-500 text-sm">
              Manage your account & preferences
            </p>
          </div>

         
        </div>

        {/* PROFILE SECTION */}
        <div className="mb-8 p-5 border rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            👤 Profile Information
          </h2>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* SECURITY SECTION */}
        <div className="mb-8 p-5 border rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            🔐 Security
          </h2>
  <div className="space-y-3">
    <input
      type="password"
      name="oldPassword"
      placeholder="Current Password"
      className="w-full p-3 border rounded-lg"
    />

    <input
      type="password"
      name="password"
      value={user.password}
      onChange={handleChange}
      placeholder="New Password"
      className="w-full p-3 border rounded-lg"
    />

    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm New Password"
      className="w-full p-3 border rounded-lg"
    />
  </div>

  <div className="flex justify-between items-center mt-3">
    <p className="text-xs text-gray-400">
      Make sure password is strong 🔒
    </p>

    <button className="text-sm text-indigo-600 hover:underline">
      Forgot Password?
    </button>
  </div>
   </div>

        {/* PREFERENCES */}
        <div className="mb-8 p-5 border rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-indigo-600">
            🎨 Preferences
          </h2>

          <div className="flex justify-between items-center mb-4">
            <span>Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-1 rounded-full text-sm ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              {darkMode ? "ON" : "OFF"}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span>Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`px-4 py-1 rounded-full text-sm ${
                notifications
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              {notifications ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* EXTRA SECTION (NEW) */}
        <div className="mb-8 p-5 border rounded-xl">
  <h2 className="text-lg font-semibold mb-4 text-indigo-600">
    📊 Account Info
  </h2>

  <div className="grid md:grid-cols-2 gap-4 text-sm">

    {/* Email */}
    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-gray-500">Account Email</p>
      <p className="font-medium text-gray-700">{user.email}</p>
    </div>

    {/* Status */}
    <div className="bg-gray-50 p-3 rounded-lg">
  <p className="text-gray-500">Account Health</p>
  <p className="font-medium text-green-600">Good 💚</p>
</div>

    {/* Joined */}
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-500">Mood Streak</p>
      <p className="font-medium">{streak} days 🔥</p>
    </div>

    {/* Security */}
    <div className="bg-gray-50 p-3 rounded-lg">
  <p className="text-gray-500">Last Activity</p>
  <p className="font-medium text-indigo-600">{lastActivity}</p>
</div>

  </div>

  {/* small note */}
  <p className="text-xs text-gray-400 mt-4">
    🔒 Your data is securely stored and protected.
  </p>
</div>

<div className="mb-8 p-5 border border-red-200 rounded-xl bg-red-50">
 

  <p className="text-sm text-gray-600 mb-4">
    Deleting your account will permanently remove all your data.
    This action cannot be undone.
  </p>

  <button
    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
    onClick={() => {
  const confirmDelete = window.confirm("Are you sure?");
  if (confirmDelete) {
    alert("Account Deleted");
  }
}}
  >
    Delete Account
  </button>
</div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center mt-8 border-t pt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Back
          </button>

          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}