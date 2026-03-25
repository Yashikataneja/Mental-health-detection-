





// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import pic from "../assets/logo pic.png";

// function Profile() {

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
// if(savedStreak){
// setStreak(savedStreak);
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

// <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">

// {/* NAVBAR */}

// <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 backdrop-blur-md bg-white/80 shadow-sm">

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
// value={name}
// onChange={(e)=>setName(e.target.value)}
// readOnly={!isEditing}
// className="border border-gray-200 p-3 rounded-xl w-80 focus:ring-2 focus:ring-indigo-400 outline-none"
// />

// <input
// value={email}
// readOnly
// className="border border-gray-200 p-3 rounded-xl w-80 bg-gray-100"
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

// <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mt-10 border border-white/30">

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


// {/* PRIVACY */}

// <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 mt-10 border border-white/30">

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



import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import pic from "../assets/logo pic.png";
import { motion } from "framer-motion";


const ALL_BADGES = [
  { days: 1, title: "First Step", icon: "🌱" },
  { days: 3, title: "Getting Started", icon: "🎯" },
  { days: 7, title: "Consistent User", icon: "🏆" },
  { days: 14, title: "Growing Strong", icon: "🌸" },
  { days: 30, title: "Mental Warrior", icon: "🧠" },
  { days: 60, title: "Unstoppable", icon: "🔥" },
  { days: 100, title: "Master of Mind", icon: "👑" }
];

function Profile() {
    const [darkMode, setDarkMode] = useState(false);

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [profilePic,setProfilePic] = useState(null);
const [joinDate,setJoinDate] = useState("");
const [isEditing,setIsEditing] = useState(false);
const [showMenu,setShowMenu] = useState(false);

const [journalCount,setJournalCount] = useState(0);
const [streak,setStreak] = useState(0);
const [lastEmotion,setLastEmotion] = useState("neutral");

useEffect(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    setDarkMode(true);
  }
}, []);


useEffect(()=>{

    window.scrollTo(0,0);

const user = localStorage.getItem("currentUser");
if(!user) return;

setEmail(user);

const storedName = localStorage.getItem(`name_${user}`);
if(storedName){
setName(storedName);
}

const image = localStorage.getItem(`profilePic_${user}`);
if(image){
setProfilePic(image);
}

const joined = localStorage.getItem(`joinDate_${user}`);

if(joined){
setJoinDate(joined);
}else{
const today = new Date().toLocaleDateString();
setJoinDate(today);
localStorage.setItem(`joinDate_${user}`,today);
}

const count = localStorage.getItem(`journalCount_${user}`);
if(count){
setJournalCount(count);
}

const savedStreak = localStorage.getItem(`journalStreak_${user}`);
if (savedStreak) {
  setStreak(parseInt(savedStreak));
}

const emotion = localStorage.getItem(`lastEmotion_${user}`);
if(emotion){
setLastEmotion(emotion);
}

},[]);


const handleImageUpload = (e) => {

const file = e.target.files[0];
if(!file) return;

const reader = new FileReader();

reader.onloadend = () => {

const base64 = reader.result;
const user = localStorage.getItem("currentUser");

setProfilePic(base64);

/* save image */
localStorage.setItem(`profilePic_${user}`, base64);

/* notify other components */
window.dispatchEvent(new Event("profileUpdated"));

};

reader.readAsDataURL(file);

};





const deleteProfilePic=()=>{

const user=localStorage.getItem("currentUser");
setProfilePic(null);
localStorage.removeItem(`profilePic_${user}`);

};


const saveProfile=()=>{

const user = localStorage.getItem("currentUser");

localStorage.setItem(`name_${user}`,name);

alert("Profile Updated");

};


const handleLogout = () => {

localStorage.removeItem("token");
navigate("/");

};


return(

<div className={`min-h-screen ${
  darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-black"
}`}>

{/* NAVBAR */}

<nav className={`sticky top-0 z-50 flex justify-between items-center px-12 py-4 backdrop-blur-md shadow-sm ${
  darkMode ? "bg-gray-800 text-white" : "bg-white/80"
}`}>

<div
onClick={()=>navigate("/")}
className="flex items-center gap-2 text-3xl font-bold text-indigo-600 hover:scale-105 transition cursor-pointer"
>

<img
src={pic}
alt="Moodly AI Logo"
className="w-14 h-14 object-contain"
/>

Moodly AI

</div>


{/* PROFILE DROPDOWN */}

<div className="relative">

<button
onClick={()=>setShowMenu(!showMenu)}
className="flex items-center gap-3 cursor-pointer bg-white/80 px-3 py-1 rounded-full shadow hover:shadow-md transition"
>

<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-300">

{profilePic ?

<img src={profilePic} className="w-full h-full object-cover"/>

:

<div className="flex items-center justify-center h-full text-lg">
👤
</div>

}

</div>

<span className="font-medium text-gray-700">
{name || "User"}
</span>

</button>


{showMenu && (

<div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-44 py-2">

<button
onClick={handleLogout}
className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
>
🚪 Logout
</button>

</div>

)}

</div>

</nav>


<div className="max-w-5xl mx-auto p-10">


{/* PROFILE CARD */}

<div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-12 flex flex-col md:flex-row gap-14 items-center justify-center border border-white/30">


{/* PROFILE IMAGE */}

<div className="flex flex-col items-center">

<div className="relative">

<div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 border-4 border-indigo-400 shadow-lg">

{profilePic ?

<img src={profilePic} className="w-full h-full object-cover"/>

:

<div className="flex items-center justify-center h-full text-5xl">
👤
</div>

}

</div>

<input
type="file"
accept="image/*"
onChange={handleImageUpload}
className="absolute bottom-0 right-0 w-10 h-10 opacity-0 cursor-pointer"
/>

<div className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow">
📷
</div>

</div>


{profilePic && (

<button
onClick={deleteProfilePic}
className="mt-3 text-sm text-red-500 hover:underline"
>
Remove Photo
</button>

)}

</div>


{/* USER INFO */}

<div className="flex flex-col gap-5">

<h2 className="text-3xl font-bold text-indigo-700">
Profile Information
</h2>

<input
  value={name}
  onChange={(e)=>setName(e.target.value)}
  readOnly={!isEditing}
  className={`border p-3 rounded-xl w-80 outline-none ${
    darkMode
      ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300"
      : "bg-white text-black border-gray-300"
  }`}
/>

<input
  value={email}
  readOnly
  className={`border p-3 rounded-xl w-80 ${
    darkMode
      ? "bg-gray-600 text-gray-300 border-gray-500"
      : "bg-gray-100 text-gray-700 border-gray-300"
  }`}
/>

<p className="text-gray-500">
Member Since: {joinDate}
</p>


{!isEditing ? (

<button
onClick={()=>setIsEditing(true)}
className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
>
Edit Profile
</button>

) : (

<button
onClick={()=>{
saveProfile();
setIsEditing(false);
}}
className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition text-white px-6 py-2 rounded-xl w-44 shadow"
>
Save Changes
</button>

)}

</div>

</div>


{/* MOOD SUMMARY */}

<div className={`shadow-xl rounded-3xl p-8 mt-10 border ${
  darkMode
    ? "bg-gray-800 border-gray-700 text-white"
    : "bg-white/80 border-white/30"
}`}>

<h2 className="text-xl font-semibold text-indigo-700 mb-6">
Mood Summary
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-5 rounded-xl hover:scale-105 transition">

<p className="text-gray-500 text-sm">
Last Emotion
</p>

<p className="text-xl font-bold capitalize text-indigo-700">
{lastEmotion}
</p>

</div>

<div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-xl hover:scale-105 transition">

<p className="text-gray-500 text-sm">
Journal Entries
</p>

<p className="text-xl font-bold text-blue-700">
{journalCount}
</p>

</div>

<div className="bg-gradient-to-r from-orange-100 to-orange-50 p-5 rounded-xl hover:scale-105 transition">

<p className="text-gray-500 text-sm">
Current Streak
</p>

<p className="text-xl font-bold text-orange-600">
{streak} days
</p>

</div>

</div>

</div>



{/* 🏆 BADGE COLLECTION */}

<div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mt-10 border border-white/30">

  <h2 className="text-xl font-semibold text-indigo-700 mb-6">
    🏆 Achievements
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {ALL_BADGES.map((badge, index) => {
      const unlocked = streak >= badge.days;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.08 }}
          className={`p-4 rounded-2xl text-center shadow cursor-pointer ${
            unlocked
              ? "bg-gradient-to-br from-indigo-100 to-purple-100"
              : "bg-gray-100 opacity-60"
          }`}
        >

          {/* ICON */}
          <div className="text-4xl mb-2">
            {unlocked ? (
              <span className="text-yellow-500 drop-shadow-md">
                {badge.icon}
              </span>
            ) : (
              <span className="text-gray-400">🔒</span>
            )}
          </div>

          {/* TITLE */}
          <p className="font-semibold text-gray-800">
            {badge.title}
          </p>

          {/* DAYS */}
          <p className="text-sm text-gray-500">
            {badge.days} days
          </p>

        </motion.div>
      );
    })}

  </div>

  {/* PROGRESS */}
  <p className="mt-6 text-gray-600 text-center">
    You have unlocked{" "}
    <strong>
      {ALL_BADGES.filter(b => streak >= b.days).length}
    </strong>{" "}
    out of {ALL_BADGES.length} badges
  </p>

</div>

{/* PRIVACY */}

<div className={`shadow-xl rounded-3xl p-10 mt-10 border ${
  darkMode
    ? "bg-gray-800 border-gray-700 text-white"
    : "bg-white/80 border-white/30"
}`}>

<h2 className="text-xl font-semibold text-green-700 mb-4">
Privacy & Security
</h2>

<p className="text-gray-600 mb-2">
Your journal entries are completely private.
</p>

<p className="text-gray-600 mb-2">
Your emotional data is stored securely.
</p>

<p className="text-gray-600">
Track your feelings and reflect on your emotional journey safely.
</p>

</div>

</div>

</div>

)

}

export default Profile;
