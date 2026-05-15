





// // import { useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import pic from "../assets/logo pic.png";

// // function Profile() {

// // const navigate = useNavigate();

// // const [name,setName] = useState("");
// // const [email,setEmail] = useState("");
// // const [profilePic,setProfilePic] = useState(null);
// // const [joinDate,setJoinDate] = useState("");
// // const [isEditing,setIsEditing] = useState(false);
// // const [showMenu,setShowMenu] = useState(false);

// // const [journalCount,setJournalCount] = useState(0);
// // const [streak,setStreak] = useState(0);
// // const [lastEmotion,setLastEmotion] = useState("neutral");

// // useEffect(()=>{

// //     window.scrollTo(0,0);

// // const user = localStorage.getItem("currentUser");
// // if(!user) return;

// // setEmail(user);

// // const storedName = localStorage.getItem(`name_${user}`);
// // if(storedName){
// // setName(storedName);
// // }

// // const image = localStorage.getItem(`profilePic_${user}`);
// // if(image){
// // setProfilePic(image);
// // }

// // const joined = localStorage.getItem(`joinDate_${user}`);

// // if(joined){
// // setJoinDate(joined);
// // }else{
// // const today = new Date().toLocaleDateString();
// // setJoinDate(today);
// // localStorage.setItem(`joinDate_${user}`,today);
// // }

// // const count = localStorage.getItem(`journalCount_${user}`);
// // if(count){
// // setJournalCount(count);
// // }

// // const savedStreak = localStorage.getItem(`journalStreak_${user}`);
// // if(savedStreak){
// // setStreak(savedStreak);
// // }

// // const emotion = localStorage.getItem(`lastEmotion_${user}`);
// // if(emotion){
// // setLastEmotion(emotion);
// // }

// // },[]);


// // const handleImageUpload = (e) => {

// // const file = e.target.files[0];
// // if(!file) return;

// // const reader = new FileReader();

// // reader.onloadend = () => {

// // const base64 = reader.result;
// // const user = localStorage.getItem("currentUser");

// // setProfilePic(base64);

// // /* save image */
// // localStorage.setItem(`profilePic_${user}`, base64);

// // /* notify other components */
// // window.dispatchEvent(new Event("profileUpdated"));

// // };

// // reader.readAsDataURL(file);

// // };





// // const deleteProfilePic=()=>{

// // const user=localStorage.getItem("currentUser");
// // setProfilePic(null);
// // localStorage.removeItem(`profilePic_${user}`);

// // };


// // const saveProfile=()=>{

// // const user = localStorage.getItem("currentUser");

// // localStorage.setItem(`name_${user}`,name);

// // alert("Profile Updated");

// // };


// // const handleLogout = () => {

// // localStorage.removeItem("token");
// // navigate("/");

// // };


// // return(

// // <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">

// // {/* NAVBAR */}

// // <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 backdrop-blur-md bg-white/80 shadow-sm">

// // <div
// // onClick={()=>navigate("/")}
// // className="flex items-center gap-2 text-3xl font-bold text-indigo-600 hover:scale-105 transition cursor-pointer"
// // >

// // <img
// // src={pic}
// // alt="Moodly AI Logo"
// // className="w-14 h-14 object-contain"
// // />

// // Moodly AI

// // </div>


// // {/* PROFILE DROPDOWN */}

// // <div className="relative">

// // <button
// // onClick={()=>setShowMenu(!showMenu)}
// // className="flex items-center gap-3 cursor-pointer bg-white/80 px-3 py-1 rounded-full shadow hover:shadow-md transition"
// // >

// // <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-300">

// // {profilePic ?

// // <img src={profilePic} className="w-full h-full object-cover"/>

// // :

// // <div className="flex items-center justify-center h-full text-lg">
// // 👤
// // </div>

// // }

// // </div>

// // <span className="font-medium text-gray-700">
// // {name || "User"}
// // </span>

// // </button>


// // {showMenu && (

// // <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-44 py-2">

// // <button
// // onClick={handleLogout}
// // className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
// // >
// // 🚪 Logout
// // </button>

// // </div>

// // )}

// // </div>

// // </nav>


// // <div className="max-w-5xl mx-auto p-10">


// // {/* PROFILE CARD */}

// // <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-12 flex flex-col md:flex-row gap-14 items-center justify-center border border-white/30">


// // {/* PROFILE IMAGE */}

// // <div className="flex flex-col items-center">

// // <div className="relative">

// // <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 border-4 border-indigo-400 shadow-lg">

// // {profilePic ?

// // <img src={profilePic} className="w-full h-full object-cover"/>

// // :

// // <div className="flex items-center justify-center h-full text-5xl">
// // 👤
// // </div>

// // }

// // </div>

// // <input
// // type="file"
// // accept="image/*"
// // onChange={handleImageUpload}
// // className="absolute bottom-0 right-0 w-10 h-10 opacity-0 cursor-pointer"
// // />

// // <div className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow">
// // 📷
// // </div>

// // </div>


// // {profilePic && (

// // <button
// // onClick={deleteProfilePic}
// // className="mt-3 text-sm text-red-500 hover:underline"
// // >
// // Remove Photo
// // </button>

// // )}

// // </div>


// // {/* USER INFO */}

// // <div className="flex flex-col gap-5">

// // <h2 className="text-3xl font-bold text-indigo-700">
// // Profile Information
// // </h2>

// // <input
// // value={name}
// // onChange={(e)=>setName(e.target.value)}
// // readOnly={!isEditing}
// // className="border border-gray-200 p-3 rounded-xl w-80 focus:ring-2 focus:ring-indigo-400 outline-none"
// // />

// // <input
// // value={email}
// // readOnly
// // className="border border-gray-200 p-3 rounded-xl w-80 bg-gray-100"
// // />

// // <p className="text-gray-500">
// // Member Since: {joinDate}
// // </p>


// // {!isEditing ? (

// // <button
// // onClick={()=>setIsEditing(true)}
// // className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
// // >
// // Edit Profile
// // </button>

// // ) : (

// // <button
// // onClick={()=>{
// // saveProfile();
// // setIsEditing(false);
// // }}
// // className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
// // >
// // Save Changes
// // </button>

// // )}

// // </div>

// // </div>


// // {/* MOOD SUMMARY */}

// // <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mt-10 border border-white/30">

// // <h2 className="text-xl font-semibold text-indigo-700 mb-6">
// // Mood Summary
// // </h2>

// // <div className="grid md:grid-cols-3 gap-6">

// // <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-5 rounded-xl hover:scale-105 transition">

// // <p className="text-gray-500 text-sm">
// // Last Emotion
// // </p>

// // <p className="text-xl font-bold capitalize text-indigo-700">
// // {lastEmotion}
// // </p>

// // </div>

// // <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-xl hover:scale-105 transition">

// // <p className="text-gray-500 text-sm">
// // Journal Entries
// // </p>

// // <p className="text-xl font-bold text-blue-700">
// // {journalCount}
// // </p>

// // </div>

// // <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-5 rounded-xl hover:scale-105 transition">

// // <p className="text-gray-500 text-sm">
// // Current Streak
// // </p>

// // <p className="text-xl font-bold text-orange-600">
// // {streak} days
// // </p>

// // </div>

// // </div>

// // </div>


// // {/* PRIVACY */}

// // <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 mt-10 border border-white/30">

// // <h2 className="text-xl font-semibold text-green-700 mb-4">
// // Privacy & Security
// // </h2>

// // <p className="text-gray-600 mb-2">
// // Your journal entries are completely private.
// // </p>

// // <p className="text-gray-600 mb-2">
// // Your emotional data is stored securely.
// // </p>

// // <p className="text-gray-600">
// // Track your feelings and reflect on your emotional journey safely.
// // </p>

// // </div>

// // </div>

// // </div>

// // )

// // }

// // export default Profile;



// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import pic from "../assets/logo pic.png";
// import { motion } from "framer-motion";


// const ALL_BADGES = [
//   { days: 1, title: "First Step", icon: "🌱" },
//   { days: 3, title: "Getting Started", icon: "🎯" },
//   { days: 7, title: "Consistent User", icon: "🏆" },
//   { days: 14, title: "Growing Strong", icon: "🌸" },
//   { days: 30, title: "Mental Warrior", icon: "🧠" },
//   { days: 60, title: "Unstoppable", icon: "🔥" },
//   { days: 100, title: "Master of Mind", icon: "👑" }
// ];

// function Profile() {
//     const [darkMode, setDarkMode] = useState(false);

// const navigate = useNavigate();

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [profilePic,setProfilePic] = useState(null);
// const [joinDate,setJoinDate] = useState("");
// const [isEditing,setIsEditing] = useState(false);
// const [showMenu,setShowMenu] = useState(false);

// const [journalCount,setJournalCount] = useState(0);
// const [streak,setStreak] = useState(0);
// const [lastEmotion,setLastEmotion] = useState("neutral");

// useEffect(() => {
//   const saved = localStorage.getItem("darkMode");
//   if (saved === "true") {
//     setDarkMode(true);
//   }
// }, []);


// useEffect(()=>{

//     window.scrollTo(0,0);

// const user = localStorage.getItem("currentUser");
// if(!user) return;

// setEmail(user);

// const storedName = localStorage.getItem(`name_${user}`);
// if(storedName){
// setName(storedName);
// }

// const image = localStorage.getItem(`profilePic_${user}`);
// if(image){
// setProfilePic(image);
// }

// const joined = localStorage.getItem(`joinDate_${user}`);

// if(joined){
// setJoinDate(joined);
// }else{
// const today = new Date().toLocaleDateString();
// setJoinDate(today);
// localStorage.setItem(`joinDate_${user}`,today);
// }

// const count = localStorage.getItem(`journalCount_${user}`);
// if(count){
// setJournalCount(count);
// }

// const savedStreak = localStorage.getItem(`journalStreak_${user}`);
// if (savedStreak) {
//   setStreak(parseInt(savedStreak));
// }

// const emotion = localStorage.getItem(`lastEmotion_${user}`);
// if(emotion){
// setLastEmotion(emotion);
// }

// },[]);


// const handleImageUpload = (e) => {

// const file = e.target.files[0];
// if(!file) return;

// const reader = new FileReader();

// reader.onloadend = () => {

// const base64 = reader.result;
// const user = localStorage.getItem("currentUser");

// setProfilePic(base64);

// /* save image */
// localStorage.setItem(`profilePic_${user}`, base64);

// /* notify other components */
// window.dispatchEvent(new Event("profileUpdated"));

// };

// reader.readAsDataURL(file);

// };





// const deleteProfilePic=()=>{

// const user=localStorage.getItem("currentUser");
// setProfilePic(null);
// localStorage.removeItem(`profilePic_${user}`);

// };


// const saveProfile=()=>{

// const user = localStorage.getItem("currentUser");

// localStorage.setItem(`name_${user}`,name);

// alert("Profile Updated");

// };


// const handleLogout = () => {

// localStorage.removeItem("token");
// navigate("/");

// };


// return(

// <div className={`min-h-screen ${
//   darkMode
//     ? "bg-gray-900 text-white"
//     : "bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-black"
// }`}>

// {/* NAVBAR */}

// <nav className={`sticky top-0 z-50 flex justify-between items-center px-12 py-4 backdrop-blur-md shadow-sm ${
//   darkMode ? "bg-gray-800 text-white" : "bg-white/80"
// }`}>

// <div
// onClick={()=>navigate("/")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 hover:scale-105 transition cursor-pointer"
// >

// <img
// src={pic}
// alt="Moodly AI Logo"
// className="w-14 h-14 object-contain"
// />

// Moodly AI

// </div>


// {/* PROFILE DROPDOWN */}

// <div className="relative">

// <button
// onClick={()=>setShowMenu(!showMenu)}
// className="flex items-center gap-3 cursor-pointer bg-white/80 px-3 py-1 rounded-full shadow hover:shadow-md transition"
// >

// <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-300">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-lg">
// 👤
// </div>

// }

// </div>

// <span className="font-medium text-gray-700">
// {name || "User"}
// </span>

// </button>


// {showMenu && (

// <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-44 py-2">

// <button
// onClick={handleLogout}
// className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
// >
// 🚪 Logout
// </button>

// </div>

// )}

// </div>

// </nav>


// <div className="max-w-5xl mx-auto p-10">


// {/* PROFILE CARD */}

// <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-12 flex flex-col md:flex-row gap-14 items-center justify-center border border-white/30">


// {/* PROFILE IMAGE */}

// <div className="flex flex-col items-center">

// <div className="relative">

// <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 border-4 border-indigo-400 shadow-lg">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-5xl">
// 👤
// </div>

// }

// </div>

// <input
// type="file"
// accept="image/*"
// onChange={handleImageUpload}
// className="absolute bottom-0 right-0 w-10 h-10 opacity-0 cursor-pointer"
// />

// <div className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow">
// 📷
// </div>

// </div>


// {profilePic && (

// <button
// onClick={deleteProfilePic}
// className="mt-3 text-sm text-red-500 hover:underline"
// >
// Remove Photo
// </button>

// )}

// </div>


// {/* USER INFO */}

// <div className="flex flex-col gap-5">

// <h2 className="text-3xl font-bold text-indigo-700">
// Profile Information
// </h2>

// <input
//   value={name}
//   onChange={(e)=>setName(e.target.value)}
//   readOnly={!isEditing}
//   className={`border p-3 rounded-xl w-80 outline-none ${
//     darkMode
//       ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300"
//       : "bg-white text-black border-gray-300"
//   }`}
// />

// <input
//   value={email}
//   readOnly
//   className={`border p-3 rounded-xl w-80 ${
//     darkMode
//       ? "bg-gray-600 text-gray-300 border-gray-500"
//       : "bg-gray-100 text-gray-700 border-gray-300"
//   }`}
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>


// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
// >
// Save Changes
// </button>

// )}

// </div>

// </div>


// {/* MOOD SUMMARY */}

// <div className={`shadow-xl rounded-3xl p-8 mt-10 border ${
//   darkMode
//     ? "bg-gray-800 border-gray-700 text-white"
//     : "bg-white/80 border-white/30"
// }`}>

// <h2 className="text-xl font-semibold text-indigo-700 mb-6">
// Mood Summary
// </h2>

// <div className="grid md:grid-cols-3 gap-6">

// <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-5 rounded-xl hover:scale-105 transition">

// <p className="text-gray-500 text-sm">
// Last Emotion
// </p>

// <p className="text-xl font-bold capitalize text-indigo-700">
// {lastEmotion}
// </p>

// </div>

// <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-xl hover:scale-105 transition">

// <p className="text-gray-500 text-sm">
// Journal Entries
// </p>

// <p className="text-xl font-bold text-blue-700">
// {journalCount}
// </p>

// </div>

// <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-5 rounded-xl hover:scale-105 transition">

// <p className="text-gray-500 text-sm">
// Current Streak
// </p>

// <p className="text-xl font-bold text-orange-600">
// {streak} days
// </p>

// </div>

// </div>

// </div>



// {/* 🏆 BADGE COLLECTION */}

// <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mt-10 border border-white/30">

//   <h2 className="text-xl font-semibold text-indigo-700 mb-6">
//     🏆 Achievements
//   </h2>

//   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//     {ALL_BADGES.map((badge, index) => {
//       const unlocked = streak >= badge.days;

//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//           whileHover={{ scale: 1.08 }}
//           className={`p-4 rounded-2xl text-center shadow cursor-pointer ${
//             unlocked
//               ? "bg-gradient-to-br from-indigo-100 to-purple-100"
//               : "bg-gray-100 opacity-60"
//           }`}
//         >

//           {/* ICON */}
//           <div className="text-4xl mb-2">
//             {unlocked ? (
//               <span className="text-yellow-500 drop-shadow-md">
//                 {badge.icon}
//               </span>
//             ) : (
//               <span className="text-gray-400">🔒</span>
//             )}
//           </div>

//           {/* TITLE */}
//           <p className="font-semibold text-gray-800">
//             {badge.title}
//           </p>

//           {/* DAYS */}
//           <p className="text-sm text-gray-500">
//             {badge.days} days
//           </p>

//         </motion.div>
//       );
//     })}

//   </div>

//   {/* PROGRESS */}
//   <p className="mt-6 text-gray-600 text-center">
//     You have unlocked{" "}
//     <strong>
//       {ALL_BADGES.filter(b => streak >= b.days).length}
//     </strong>{" "}
//     out of {ALL_BADGES.length} badges
//   </p>

// </div>

// {/* PRIVACY */}

// <div className={`shadow-xl rounded-3xl p-10 mt-10 border ${
//   darkMode
//     ? "bg-gray-800 border-gray-700 text-white"
//     : "bg-white/80 border-white/30"
// }`}>

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Track your feelings and reflect on your emotional journey safely.
// </p>

// </div>

// </div>

// </div>

// )

// }

// export default Profile;



import { useEffect, useState } from "react";
import { FaEnvelope, FaEdit } from "react-icons/fa";
import AppNavbar from "../Components/AppNavbar";
import Settings from "./Setting";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", next);
    document.body.classList.toggle("dark", next);
    window.dispatchEvent(new Event("darkModeUpdate"));
  };

  const [user, setUser] = useState({ name: "", email: "", joinedAt: "" });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const email = sessionStorage.getItem("currentUser");
      const name = sessionStorage.getItem("currentUserName");

      if (email || name) {
        setUser({ name: name || "User", email: email || "", joinedAt: "" });
      }
    };

    loadUser();

    const email = sessionStorage.getItem("currentUser");
    if (email) {
      fetch(`http://localhost:5000/api/user/${email}`)
        .then(res => res.json())
        .then(data => {
          if (data?.createdAt) {
            setUser(prev => ({
              ...prev,
              joinedAt: new Date(data.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
            }));
          }
        })
        .catch(() => {});
    }

    window.addEventListener("profileUpdate", loadUser);
    return () => window.removeEventListener("profileUpdate", loadUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {};
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [stats, setStats] = useState({
    lastEmotion: "--",
    totalEntries: 0,
    streak: 0,
    recent: []
  });

  useEffect(() => {
    const update = () => {
      const email = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
      if (!email) return;

      const history =
        JSON.parse(localStorage.getItem(`moodHistory_${email}`)) || [];
      const streak =
        localStorage.getItem(`journalStreak_${email}`) || 0;

      setStats({
        lastEmotion: history.length ? history[history.length - 1].emotion : "--",
        totalEntries: history.length,
        streak: streak,
        recent: [...history].reverse().slice(0, 5)
      });
    };

    update();
    window.addEventListener("profileUpdate", update);
    return () => window.removeEventListener("profileUpdate", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, []);

  const getHistorySuggestions = (emotion) => {
    const mood = (emotion || "").toLowerCase();
    if (mood === "joy" || mood === "happiness") return [
      "Keep doing what is making you feel light and happy.",
      "Write one good thing about today in your journal.",
      "Share this positive moment with someone close."
    ];
    if (mood === "sad" || mood === "sadness") return [
      "Take a short walk or sit in fresh air for a few minutes.",
      "Listen to calm music and avoid isolating yourself too much.",
      "Talk to someone you trust, even briefly."
    ];
    if (mood === "anxiety") return [
      "Try a 4-4-4 breathing exercise for one minute.",
      "Focus only on the next small task, not everything at once.",
      "Drink water and step away from the screen for a moment."
    ];
    if (mood === "stress") return [
      "Take a short break and relax your shoulders and jaw.",
      "Break your work into one small manageable step.",
      "Avoid multitasking for the next few minutes."
    ];
    if (mood === "anger" || mood === "angry") return [
      "Pause before reacting and take a slow breath.",
      "Step away from the triggering situation for a moment.",
      "Write down what upset you before responding."
    ];
    return [
      "Keep tracking your mood daily for better emotional insights.",
      "Write a few more lines if you want a clearer analysis.",
      "Take a small pause and notice how your body feels right now."
    ];
  };

  const [animatedWidths, setAnimatedWidths] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const email = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
      const history = JSON.parse(localStorage.getItem(`moodHistory_${email}`)) || [];
      const now = new Date();
      const thisMonth = history.filter(e => {
        const d = new Date(e.createdAt);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      });
      const emotionCount = {};
      thisMonth.forEach(e => {
        const em = (e.emotion || "neutral").toLowerCase();
        emotionCount[em] = (emotionCount[em] || 0) + 1;
      });
      const total = thisMonth.length;
      const widths = {};
      Object.entries(emotionCount).forEach(([emotion, count]) => {
        widths[emotion] = Math.round((count / total) * 100);
      });
      setAnimatedWidths(widths);
    }, 100);
    return () => clearTimeout(timer);
  }, [stats]);

  const pageBg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100";

  return (
    <div className={`min-h-screen w-full ${pageBg}`}>

      <AppNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="pt-28 px-6 lg:px-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* PROFILE CARD */}
            <div className={`${ darkMode ? "bg-gray-800" : "bg-white/80" } backdrop-blur-xl p-6 rounded-3xl shadow-xl text-center max-w-lg mx-auto`}>

              <div className="relative w-32 h-32 mx-auto">
                <div className="w-32 h-32 rounded-full border-4 border-indigo-200 bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-5xl font-extrabold shadow-lg">
                  {user.name?.charAt(0)?.toUpperCase()}
                </div>
              </div>

              <h2 className="mt-5 font-extrabold text-indigo-600 text-2xl">
                {user.name}
              </h2>
              <p className={`text-base font-medium flex justify-center gap-2 mt-1 ${ darkMode ? "text-gray-300" : "text-gray-600" }`}>
                <FaEnvelope className="mt-1" /> {user.email}
              </p>
              <p className={`text-sm font-medium mt-3 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                📅 Joined {user.joinedAt || "--"}
              </p>
              <p className={`text-sm font-medium mt-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                🔥 {stats.streak} Day Streak
              </p>
              <button
                onClick={() => setSettingsOpen(true)}
                className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition shadow-md"
              >
                <FaEdit className="inline mr-2" />
                Edit Profile
              </button>
            </div>



          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 space-y-8">

            {/* MOOD SUMMARY + LAST JOURNAL */}
            {(() => {
              const email = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
              const history = JSON.parse(localStorage.getItem(`moodHistory_${email}`)) || [];
              const now = new Date();
              const thisMonth = history.filter(e => {
                const d = new Date(e.createdAt);
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
              });
              const emotionCount = {};
              thisMonth.forEach(e => {
                const em = (e.emotion || "neutral").toLowerCase();
                emotionCount[em] = (emotionCount[em] || 0) + 1;
              });
              const sortedEmotions = Object.entries(emotionCount).sort((a, b) => b[1] - a[1]);
              const total = thisMonth.length;
              const emotionColor = (em) => {
                if (["joy","happiness"].includes(em)) return "bg-yellow-400";
                if (["sad","sadness"].includes(em)) return "bg-blue-400";
                if (em === "anxiety") return "bg-purple-400";
                if (em === "stress") return "bg-orange-400";
                if (["anger","angry"].includes(em)) return "bg-red-400";
                return "bg-indigo-400";
              };
              const lastEntry = history[history.length - 1];
              const monthName = now.toLocaleString("default", { month: "long", year: "numeric" });
              return (
                <div className="grid md:grid-cols-2 gap-6">

                  {/* MOOD SUMMARY */}
                  <div className={`p-6 rounded-2xl shadow-lg ${ darkMode ? "bg-gray-800" : "bg-white/80" } backdrop-blur-xl`}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className={`font-semibold text-base ${ darkMode ? "text-white" : "text-gray-800" }`}>📊 Mood Summary</h3>
                      <span className="text-xs text-gray-400">{monthName}</span>
                    </div>
                    {total === 0 ? (
                      <p className="text-sm text-gray-400">No entries this month yet ✍️</p>
                    ) : (
                      <div className="space-y-3">
                        {sortedEmotions.map(([emotion, count]) => (
                          <div key={emotion}>
                            <div className="flex justify-between mb-1">
                              <span className={`text-xs capitalize font-medium ${ darkMode ? "text-gray-300" : "text-gray-700" }`}>{emotion}</span>
                              <span className={`text-xs ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>{count}x</span>
                            </div>
                            <div className={`w-full h-2 rounded-full ${ darkMode ? "bg-gray-700" : "bg-gray-100" }`}>
                              <div className={`h-2 rounded-full ${emotionColor(emotion)} transition-all duration-700 ease-out`} style={{ width: `${animatedWidths[emotion] || 0}%` }} />
                            </div>
                          </div>
                        ))}
                        <p className={`text-xs mt-1 ${ darkMode ? "text-gray-500" : "text-gray-400" }`}>{total} {total === 1 ? "entry" : "entries"} this month</p>
                      </div>
                    )}
                  </div>

                  {/* LAST JOURNAL */}
                  <div className={`p-6 rounded-2xl shadow-lg ${ darkMode ? "bg-gray-800" : "bg-white/80" } backdrop-blur-xl`}>
                    <h3 className={`font-semibold text-base mb-4 ${ darkMode ? "text-white" : "text-gray-800" }`}>🗒️ Last Journal</h3>
                    {!lastEntry ? (
                      <p className="text-sm text-gray-400">No entries yet. Write your first one! ✍️</p>
                    ) : (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-xs ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                            {new Date(lastEntry.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${
                            ["joy","happiness"].includes((lastEntry.emotion||"").toLowerCase()) ? "bg-yellow-100 text-yellow-700" :
                            ["sad","sadness"].includes((lastEntry.emotion||"").toLowerCase()) ? "bg-blue-100 text-blue-700" :
                            (lastEntry.emotion||"").toLowerCase() === "anxiety" ? "bg-purple-100 text-purple-700" :
                            (lastEntry.emotion||"").toLowerCase() === "stress" ? "bg-orange-100 text-orange-700" :
                            ["anger","angry"].includes((lastEntry.emotion||"").toLowerCase()) ? "bg-red-100 text-red-700" :
                            "bg-gray-100 text-gray-600"
                          }`}>{lastEntry.emotion} {lastEntry.emoji}</span>
                        </div>
                        {lastEntry.journal && (
                          <p className={`text-sm leading-relaxed line-clamp-3 mb-3 ${ darkMode ? "text-gray-300" : "text-gray-600" }`}>
                            "{lastEntry.journal}"
                          </p>
                        )}
                        <div className="flex gap-2">
                          {[
                            { label: "Score", value: `${lastEntry.score}/10` },
                            { label: "Confidence", value: `${lastEntry.confidence}%` },
                            { label: "Risk", value: lastEntry.riskScore },
                          ].map((item, i) => (
                            <div key={i} className={`text-center p-2 rounded-xl flex-1 ${ darkMode ? "bg-gray-700" : "bg-gray-50" }`}>
                              <p className={`text-xs ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>{item.label}</p>
                              <p className="font-bold text-indigo-500">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })()}

            {/* RECENT JOURNAL ENTRIES */}
            <div className={`${ darkMode ? "bg-gray-800/80" : "bg-white/80" } backdrop-blur-xl p-6 rounded-2xl shadow-lg`}>
              <div className="flex justify-between items-center mb-3">
                <h3 className={`font-semibold text-lg ${ darkMode ? "text-white" : "" }`}>
                  📔 Recent Journal Entries
                </h3>
                <button
                  onClick={() => setHistoryOpen(true)}
                  className="text-sm text-indigo-500 hover:text-indigo-700 hover:underline transition"
                >
                  View All →
                </button>
              </div>
              {stats.recent.length === 0 ? (
                <p className="text-sm text-gray-500">No journal entries yet ✍️</p>
              ) : (
                <ul className="space-y-3 text-sm">
                  {stats.recent.map((item) => (
                    <li
                      key={item.id}
                      className={`p-3 rounded-lg flex justify-between items-center ${ darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-50" }`}
                    >
                      <span className={`${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                        {new Date(item.createdAt).toDateString()}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${
                        ["joy","happiness"].includes((item.emotion||"").toLowerCase()) ? "bg-yellow-100 text-yellow-700" :
                        ["sad","sadness"].includes((item.emotion||"").toLowerCase()) ? "bg-blue-100 text-blue-700" :
                        (item.emotion||"").toLowerCase() === "anxiety" ? "bg-purple-100 text-purple-700" :
                        (item.emotion||"").toLowerCase() === "stress" ? "bg-orange-100 text-orange-700" :
                        ["anger","angry"].includes((item.emotion||"").toLowerCase()) ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {item.emotion} {item.emoji}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* HISTORY MODAL */}
      {historyOpen && (() => {
        const email = sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
        const all = JSON.parse(localStorage.getItem(`moodHistory_${email}`)) || [];
        const sorted = [...all].reverse();
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setHistoryOpen(false)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div
              className={`relative z-10 w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col ${ darkMode ? "bg-gray-800 text-white" : "bg-white" }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`flex justify-between items-center px-6 py-4 border-b flex-shrink-0 ${ darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-100" }`}>
                <h3 className="text-lg font-bold text-indigo-600">📔 All Journal Entries</h3>
                <button
                  onClick={() => setHistoryOpen(false)}
                  className="text-gray-400 hover:bg-red-100 hover:text-red-600 w-8 h-8 flex items-center justify-center rounded-lg transition text-xl"
                >✕</button>
              </div>
              <div className="overflow-y-auto flex-1 p-6">
                {sorted.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-8">No journal entries yet ✍️</p>
                ) : (
                  <ul className="space-y-3">
                    {sorted.map((item, i) => (
                      <li key={i} className={`p-4 rounded-xl ${ darkMode ? "bg-gray-700" : "bg-gray-50" }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-xs text-gray-400">
                              {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                              {" "}
                              {new Date(item.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                            </p>
                            <p className={`text-sm font-semibold mt-1 capitalize ${ darkMode ? "text-white" : "text-gray-800" }`}>
                              {item.emotion} {item.emoji}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-400">Score</p>
                            <p className="font-bold text-indigo-500">{item.score}/10</p>
                          </div>
                        </div>
                        <div className="flex gap-3 flex-wrap mb-2">
                          {item.predictedLabel && (
                            <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full">{item.predictedLabel}</span>
                          )}
                          {item.riskScore !== undefined && (
                            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">Risk: {item.riskScore}</span>
                          )}
                          {item.confidence !== undefined && (
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">Confidence: {item.confidence}%</span>
                          )}
                        </div>
                        {item.journal && (
                          <p className={`text-xs mt-1 line-clamp-2 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                            "{item.journal}"
                          </p>
                        )}
                        <div className="mt-3 space-y-1">
                          <p className="text-xs font-semibold text-indigo-500">💡 Suggestions</p>
                          {getHistorySuggestions(item.emotion).map((s, si) => (
                            <p key={si} className={`text-xs ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>• {s}</p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* SETTINGS MODAL */}
      {settingsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSettingsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Settings onClose={() => setSettingsOpen(false)} />
          </div>
        </div>
      )}

    </div>
  );
}