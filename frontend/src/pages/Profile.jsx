// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import pic from "../assets/logo pic.png";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Profile() {

//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [profilePic, setProfilePic] = useState(null);

//   const [streak, setStreak] = useState(0);
//   const [journalCount, setJournalCount] = useState(0);
//   const [recentEmotion, setRecentEmotion] = useState("Neutral 😐");

//   const [emotionHistory, setEmotionHistory] = useState([]);

//   useEffect(() => {

//     const user = localStorage.getItem("currentUser");

//     if(user){
//       setName(user);

//       const count = localStorage.getItem(`journalCount_${user}`);
//       const emotion = localStorage.getItem(`lastEmotion_${user}`);
//       const streakData = localStorage.getItem(`journalStreak_${user}`);
//       const image = localStorage.getItem(`profilePic_${user}`);

//       if(count) setJournalCount(parseInt(count));
//       if(emotion) setRecentEmotion(emotion);
//       if(streakData) setStreak(parseInt(streakData));
//       if(image) setProfilePic(image);

//       const history = localStorage.getItem(`emotionHistory_${user}`);

//       if(history){
//         setEmotionHistory(JSON.parse(history));
//       }else{
//         setEmotionHistory([]);
//       }
//     }

//   }, []);

//   const handleImageUpload = (e) => {

//     const file = e.target.files[0];
//     if(!file) return;

//     const reader = new FileReader();

//     reader.onloadend = () => {

//       const img = reader.result;
//       setProfilePic(img);

//       const user = localStorage.getItem("currentUser");
//       localStorage.setItem(`profilePic_${user}`, img);

//     };

//     reader.readAsDataURL(file);

//   };

//   const saveProfile = () => {

//     const oldUser = localStorage.getItem("currentUser");

//     if(name !== oldUser){

//       localStorage.setItem("currentUser", name);

//       const count = localStorage.getItem(`journalCount_${oldUser}`);
//       const emotion = localStorage.getItem(`lastEmotion_${oldUser}`);
//       const streakData = localStorage.getItem(`journalStreak_${oldUser}`);
//       const image = localStorage.getItem(`profilePic_${oldUser}`);

//       if(count) localStorage.setItem(`journalCount_${name}`, count);
//       if(emotion) localStorage.setItem(`lastEmotion_${name}`, emotion);
//       if(streakData) localStorage.setItem(`journalStreak_${name}`, streakData);
//       if(image) localStorage.setItem(`profilePic_${name}`, image);

//     }

//     alert("Profile Updated");

//   };

//   const wellnessLevel = Math.min(100, 50 + streak * 5);

//   const chartData = {
//     labels: ["Day 1","Day 2","Day 3","Day 4","Day 5"],
//     datasets: [
//       {
//         label: "Mood Score",
//         data: [5,7,4,8,6],
//         borderColor: "#4f46e5",
//         backgroundColor: "#c7d2fe"
//       }
//     ]
//   };

//   return (

//     <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

//       {/* Navbar */}
//       <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

//         <div
//           onClick={() => navigate("/dashboard")}
//           className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
//         >
//           <img src={pic} alt="logo" className="w-12 h-12"/>
//           Moodly AI
//         </div>

//         <button
//           onClick={()=>{
//             localStorage.removeItem("token");
//             navigate("/");
//           }}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>

//       </nav>


//       <div className="max-w-6xl mx-auto p-8">


//         {/* Profile Card */}
//         <div className="bg-white shadow-lg rounded-xl p-8 flex gap-8 items-center mb-10">

//           <div className="flex flex-col items-center">

//             <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">

//               {profilePic ? (
//                 <img
//                   src={profilePic}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full text-3xl">
//                   👤
//                 </div>
//               )}

//             </div>

//             <input
//               type="file"
//               onChange={handleImageUpload}
//               className="mt-3 text-sm"
//             />

//           </div>

//           <div>

//             <h2 className="text-xl font-semibold mb-2">
//               Edit Profile
//             </h2>

//             <input
//               value={name}
//               onChange={(e)=>setName(e.target.value)}
//               className="border p-2 rounded w-60"
//             />

//             <br/>

//             <button
//               onClick={saveProfile}
//               className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded"
//             >
//               Save Profile
//             </button>

//           </div>

//         </div>


//         {/* Stats */}
//         <div className="grid md:grid-cols-3 gap-6 mb-10">

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <h3 className="font-semibold text-blue-700">📖 Total Journals</h3>
//             <p className="text-3xl mt-2">{journalCount}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <h3 className="font-semibold text-orange-500">🔥 Journal Streak</h3>
//             <p className="text-3xl mt-2">{streak}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <h3 className="font-semibold text-purple-600">😊 Last Emotion</h3>
//             <p className="text-2xl mt-2">{recentEmotion}</p>
//           </div>

//         </div>


//         {/* Wellness Level */}
//         <div className="bg-white p-8 rounded-xl shadow mb-10">

//           <h2 className="text-xl font-semibold text-green-700 mb-4">
//             🌿 Wellness Level
//           </h2>

//           <div className="w-full bg-gray-200 rounded-full h-4">

//             <div
//               className="bg-green-500 h-4 rounded-full"
//               style={{width:`${wellnessLevel}%`}}
//             ></div>

//           </div>

//           <p className="mt-2 text-green-700 font-semibold">
//             {wellnessLevel}% Wellness Score
//           </p>

//         </div>


//         {/* Mood Chart */}
//         <div className="bg-white p-8 rounded-xl shadow mb-10">

//           <h2 className="text-xl font-semibold text-indigo-700 mb-6">
//             📊 Mood Trend
//           </h2>

//           <Line data={chartData}/>

//         </div>


//         {/* Emotion History */}
//         <div className="bg-white p-8 rounded-xl shadow mb-10">

//           <h2 className="text-xl font-semibold text-blue-700 mb-4">
//             🧠 Emotion History
//           </h2>

//           {emotionHistory.length === 0 ? (
//             <p className="text-gray-500">
//               No emotion records yet.
//             </p>
//           ) : (
//             <ul className="space-y-3">

//               {emotionHistory.map((emotion,index)=>(
//                 <li
//                   key={index}
//                   className="bg-blue-50 p-3 rounded"
//                 >
//                   {emotion}
//                 </li>
//               ))}

//             </ul>
//           )}

//         </div>


//       </div>

//     </div>
//   );
// }

// export default Profile;





// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Line } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// Title,
// Tooltip,
// Legend
// );

// function Profile(){

// const navigate = useNavigate();

// const [name,setName] = useState("");
// const [profilePic,setProfilePic] = useState(null);

// const [streak,setStreak] = useState(0);
// const [journalCount,setJournalCount] = useState(0);
// const [recentEmotion,setRecentEmotion] = useState("No Emotion Yet");

// const [emotionHistory,setEmotionHistory] = useState([]);
// const [aiInsight,setAiInsight] = useState("");

// useEffect(()=>{

// const user = localStorage.getItem("currentUser");

// if(user){

// setName(user);

// const count = localStorage.getItem(`journalCount_${user}`);
// const emotion = localStorage.getItem(`lastEmotion_${user}`);
// const streakData = localStorage.getItem(`journalStreak_${user}`);
// const image = localStorage.getItem(`profilePic_${user}`);
// const history = localStorage.getItem(`emotionHistory_${user}`);

// if(count) setJournalCount(parseInt(count));
// else setJournalCount(0);

// if(emotion) setRecentEmotion(emotion);
// else setRecentEmotion("No Emotion Yet");

// if(streakData) setStreak(parseInt(streakData));
// else setStreak(0);

// if(image) setProfilePic(image);

// if(history){
// setEmotionHistory(JSON.parse(history));
// generateInsight(JSON.parse(history));
// }

// }

// },[]);


// const generateInsight = (history)=>{

// if(history.length===0){
// setAiInsight("Start journaling to get AI insights about your emotions.");
// return;
// }

// let sad=0;
// let joy=0;

// history.forEach(e=>{
// if(e.toLowerCase().includes("sad")) sad++;
// if(e.toLowerCase().includes("joy")) joy++;
// });

// if(sad>joy){
// setAiInsight("You may be experiencing stress recently. Consider taking breaks and practicing relaxation.");
// }
// else{
// setAiInsight("Your emotional trend looks stable. Keep maintaining healthy journaling habits.");
// }

// }


// const handleImageUpload=(e)=>{

// const file=e.target.files[0];
// if(!file) return;

// const reader=new FileReader();

// reader.onloadend=()=>{

// const img=reader.result;
// setProfilePic(img);

// const user=localStorage.getItem("currentUser");
// localStorage.setItem(`profilePic_${user}`,img);

// };

// reader.readAsDataURL(file);

// }


// const saveProfile=()=>{

// const oldUser=localStorage.getItem("currentUser");

// if(name!==oldUser){

// localStorage.setItem("currentUser",name);

// }

// alert("Profile Updated");

// }


// const wellnessLevel = Math.min(100, 40 + streak*10 + journalCount*2);


// const moodScores = emotionHistory.map(e=>{
// if(e.includes("Joy")) return 9;
// if(e.includes("Happy")) return 8;
// if(e.includes("Neutral")) return 5;
// if(e.includes("Sad")) return 3;
// if(e.includes("Anger")) return 2;
// return 5;
// });

// const chartData = {

// labels: emotionHistory.map((_,i)=>`Entry ${i+1}`),

// datasets:[
// {
// label:"Mood Trend",
// data:moodScores,
// borderColor:"#6366f1",
// backgroundColor:"#c7d2fe",
// tension:0.4
// }
// ]

// };

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <div className="relative group">

// <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 cursor-pointer">
// 👤
// </div>

// <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition">

// <button
// onClick={()=>navigate("/profile")}
// className="block w-full text-left px-4 py-2 hover:bg-gray-100"
// >
// Profile
// </button>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
// >
// Logout
// </button>

// </div>

// </div>

// </nav>


// <div className="max-w-6xl mx-auto p-8">


// {/* PROFILE CARD */}

// <div className="bg-white shadow-lg rounded-xl p-8 flex gap-8 items-center mb-10">

// <div className="flex flex-col items-center">

// <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-3xl">
// 👤
// </div>

// }

// </div>

// <input type="file" onChange={handleImageUpload} className="mt-3 text-sm"/>

// </div>


// <div>

// <h2 className="text-xl font-semibold mb-2">
// Edit Profile
// </h2>

// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// className="border p-2 rounded w-60"
// />

// <br/>

// <button
// onClick={saveProfile}
// className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded"
// >
// Save Profile
// </button>

// </div>

// </div>


// {/* STATS */}

// <div className="grid md:grid-cols-3 gap-6 mb-10">

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-blue-700">📖 Journals</h3>
// <p className="text-3xl mt-2">{journalCount}</p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-orange-500">🔥 Streak</h3>
// <p className="text-3xl mt-2">{streak}</p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-purple-600">😊 Last Emotion</h3>
// <p className="text-2xl mt-2">{recentEmotion}</p>
// </div>

// </div>


// {/* WELLNESS */}

// <div className="bg-white p-8 rounded-xl shadow mb-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🌿 Wellness Score
// </h2>

// <div className="w-full bg-gray-200 rounded-full h-4">

// <div
// className="bg-green-500 h-4 rounded-full"
// style={{width:`${wellnessLevel}%`}}
// ></div>

// </div>

// <p className="mt-2 font-semibold text-green-700">
// {wellnessLevel}% Wellness Level
// </p>

// </div>


// {/* MOOD GRAPH */}

// <div className="bg-white p-8 rounded-xl shadow mb-10">

// <h2 className="text-xl font-semibold text-indigo-700 mb-6">
// 📊 Mood Trend
// </h2>

// {emotionHistory.length===0 ?

// <p className="text-gray-500">
// No mood data yet.
// </p>

// :

// <Line data={chartData}/>

// }

// </div>


// {/* EMOTION HISTORY */}

// <div className="bg-white p-8 rounded-xl shadow mb-10">

// <h2 className="text-xl font-semibold text-blue-700 mb-4">
// 🧠 Emotion History
// </h2>

// {emotionHistory.length===0 ?

// <p className="text-gray-500">
// No emotion records yet.
// </p>

// :

// <ul className="space-y-3">

// {emotionHistory.map((emotion,index)=>(

// <li
// key={index}
// className="bg-blue-50 p-3 rounded"
// >
// {emotion}
// </li>

// ))}

// </ul>

// }

// </div>


// {/* AI INSIGHT */}

// <div className="bg-white p-8 rounded-xl shadow">

// <h2 className="text-xl font-semibold text-purple-700 mb-4">
// 🤖 AI Insight
// </h2>

// <p className="text-gray-700">
// {aiInsight}
// </p>

// </div>


// </div>

// </div>

// );

// }

// export default Profile;


// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import pic from "../assets/logo pic.png";

// function Profile() {

// const navigate = useNavigate();

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [profilePic,setProfilePic] = useState(null);
// const [joinDate,setJoinDate] = useState("");

// useEffect(()=>{

// const user = localStorage.getItem("currentUser");
// const userEmail = localStorage.getItem(`email_${user}`);
// const image = localStorage.getItem(`profilePic_${user}`);
// const joined = localStorage.getItem(`joinDate_${user}`);

// if(user){
// setName(user);
// }

// if(userEmail){
// setEmail(userEmail);
// }

// if(image){
// setProfilePic(image);
// }

// if(joined){
// setJoinDate(joined);
// }else{
// const today = new Date().toLocaleDateString();
// setJoinDate(today);
// localStorage.setItem(`joinDate_${user}`,today);
// }

// },[]);


// const handleImageUpload=(e)=>{

// const file=e.target.files[0];
// if(!file) return;

// const reader=new FileReader();

// reader.onloadend=()=>{

// const img=reader.result;
// setProfilePic(img);

// const user=localStorage.getItem("currentUser");
// localStorage.setItem(`profilePic_${user}`,img);

// };

// reader.readAsDataURL(file);

// }


// const saveProfile=()=>{

// const oldUser=localStorage.getItem("currentUser");

// localStorage.setItem("currentUser",name);
// localStorage.setItem(`email_${name}`,email);

// alert("Profile Updated Successfully");

// }


// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="bg-red-500 text-white px-4 py-2 rounded"
// >
// Logout
// </button>

// </nav>


// <div className="max-w-4xl mx-auto p-10">

// {/* PROFILE CARD */}

// <div className="bg-white shadow-lg rounded-xl p-10 flex gap-10 items-center">

// {/* IMAGE */}

// <div className="flex flex-col items-center">

// <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-4xl">
// 👤
// </div>

// }

// </div>

// <input
// type="file"
// onChange={handleImageUpload}
// className="mt-4 text-sm"
// />

// </div>


// {/* USER INFO */}

// <div className="flex flex-col gap-4">

// <h2 className="text-2xl font-semibold text-indigo-700">
// Profile Information
// </h2>

// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// placeholder="Your Name"
// className="border p-3 rounded w-72"
// />

// <input
// value={email}
// onChange={(e)=>setEmail(e.target.value)}
// placeholder="Your Email"
// className="border p-3 rounded w-72"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>

// <button
// onClick={saveProfile}
// className="bg-indigo-600 text-white px-6 py-2 rounded w-40"
// >
// Save Changes
// </button>

// </div>

// </div>


// {/* PRIVACY SECTION */}

// <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Only you can access your mental health insights.
// </p>

// </div>


// </div>

// </div>

// );

// }

// export default Profile;



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

// useEffect(()=>{

// const user = localStorage.getItem("currentUser");

// if(!user) return;

// // load email
// setEmail(user);

// // load name
// const storedName = localStorage.getItem(`name_${user}`);
// if(storedName){
// setName(storedName);
// }

// // load profile picture
// const image = localStorage.getItem(`profilePic_${user}`);
// if(image){
// setProfilePic(image);
// }

// // load join date
// const joined = localStorage.getItem(`joinDate_${user}`);

// if(joined){
// setJoinDate(joined);
// }else{
// const today = new Date().toLocaleDateString();
// setJoinDate(today);
// localStorage.setItem(`joinDate_${user}`,today);
// }

// },[]);


// const handleImageUpload=(e)=>{

// const file=e.target.files[0];
// if(!file) return;

// const reader=new FileReader();

// reader.onloadend=()=>{

// const img=reader.result;
// setProfilePic(img);

// const user=localStorage.getItem("currentUser");
// localStorage.setItem(`profilePic_${user}`,img);

// };

// reader.readAsDataURL(file);

// };


// const saveProfile=()=>{

// const user = localStorage.getItem("currentUser");

// localStorage.setItem(`name_${user}`,name);
// localStorage.setItem(`email_${user}`,email);

// alert("Profile Updated");

// };


// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="bg-red-500 text-white px-4 py-2 rounded"
// >
// Logout
// </button>

// </nav>


// <div className="max-w-4xl mx-auto p-10">

// {/* PROFILE CARD */}

// <div className="bg-white shadow-lg rounded-xl p-10 flex gap-10 items-center">

// {/* IMAGE */}

// <div className="flex flex-col items-center">

// <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-4xl">
// 👤
// </div>

// }

// </div>

// <input
// type="file"
// onChange={handleImageUpload}
// className="mt-4 text-sm"
// />

// </div>


// {/* USER INFO */}

// <div className="flex flex-col gap-4">

// <h2 className="text-2xl font-semibold text-indigo-700">
// Profile Information
// </h2>

// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// placeholder="Your Name"
// className="border p-3 rounded w-72"
// />

// <input
// value={email}
// onChange={(e)=>setEmail(e.target.value)}
// placeholder="Your Email"
// className="border p-3 rounded w-72"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>


// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// placeholder="Your Name"
// readOnly={!isEditing}
// className="border p-3 rounded w-72"
// />


// <input
// value={email}
// readOnly
// className="border p-3 rounded w-72 bg-gray-100"
// />



// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-blue-600 text-white px-6 py-2 rounded w-40"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-indigo-600 text-white px-6 py-2 rounded w-40"
// >
// Save Changes
// </button>

// )}

// <button
// onClick={saveProfile}
// className="bg-indigo-600 text-white px-6 py-2 rounded w-40"
// >
// Save Changes
// </button>

// </div>

// </div>


// {/* PRIVACY SECTION */}

// <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Only you can access your mental health insights.
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Profile;





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

// useEffect(()=>{

// const user = localStorage.getItem("currentUser");

// if(!user) return;

// // load email
// setEmail(user);

// // load name
// const storedName = localStorage.getItem(`name_${user}`);
// if(storedName){
// setName(storedName);
// }

// // load profile picture
// const image = localStorage.getItem(`profilePic_${user}`);
// if(image){
// setProfilePic(image);
// }

// // load join date
// const joined = localStorage.getItem(`joinDate_${user}`);

// if(joined){
// setJoinDate(joined);
// }else{
// const today = new Date().toLocaleDateString();
// setJoinDate(today);
// localStorage.setItem(`joinDate_${user}`,today);
// }

// },[]);

// const handleImageUpload=(e)=>{

// const file=e.target.files[0];
// if(!file) return;

// const reader=new FileReader();

// reader.onloadend=()=>{

// const img=reader.result;
// setProfilePic(img);

// const user=localStorage.getItem("currentUser");
// localStorage.setItem(`profilePic_${user}`,img);

// };

// reader.readAsDataURL(file);

// };

// const saveProfile=()=>{

// const user = localStorage.getItem("currentUser");

// localStorage.setItem(`name_${user}`,name);

// alert("Profile Updated");

// };

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="bg-red-500 text-white px-4 py-2 rounded"
// >
// Logout
// </button>

// </nav>


// <div className="max-w-4xl mx-auto p-10">

// {/* PROFILE CARD */}

// <div className="bg-white shadow-lg rounded-xl p-10 flex gap-10 items-center">

// {/* IMAGE */}

// <div className="flex flex-col items-center">

// <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-4xl">
// 👤
// </div>

// }

// </div>

// <input
// type="file"
// onChange={handleImageUpload}
// className="mt-4 text-sm"
// />

// </div>


// {/* USER INFO */}

// <div className="flex flex-col gap-4">

// <h2 className="text-2xl font-semibold text-indigo-700">
// Profile Information
// </h2>

// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// readOnly={!isEditing}
// className="border p-3 rounded w-72"
// />

// <input
// value={email}
// readOnly
// className="border p-3 rounded w-72 bg-gray-100"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>

// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-blue-600 text-white px-6 py-2 rounded w-40"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-indigo-600 text-white px-6 py-2 rounded w-40"
// >
// Save Changes
// </button>

// )}

// </div>

// </div>


// {/* PRIVACY SECTION */}

// <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Only you can access your mental health insights.
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Profile;


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

// useEffect(()=>{

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

// },[]);


// const handleImageUpload=(e)=>{

// const file=e.target.files[0];
// if(!file) return;

// const reader=new FileReader();

// reader.onloadend=()=>{

// const img=reader.result;
// setProfilePic(img);

// const user=localStorage.getItem("currentUser");
// localStorage.setItem(`profilePic_${user}`,img);

// };

// reader.readAsDataURL(file);

// };


// const deleteProfilePic = () => {

// const user = localStorage.getItem("currentUser");

// setProfilePic(null);

// localStorage.removeItem(`profilePic_${user}`);

// };


// const saveProfile=()=>{

// const user = localStorage.getItem("currentUser");

// localStorage.setItem(`name_${user}`,name);

// alert("Profile Updated");

// };


// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="bg-red-500 text-white px-4 py-2 rounded"
// >
// Logout
// </button>

// </nav>


// <div className="max-w-4xl mx-auto p-10">

// <div className="bg-white shadow-lg rounded-xl p-10 flex gap-10 items-center">

// {/* PROFILE IMAGE */}

// <div className="flex flex-col items-center">

// <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-4xl">
// 👤
// </div>

// }

// </div>

// <div className="flex gap-2 mt-4">

// <label className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer text-sm">
// Edit
// <input
// type="file"
// onChange={handleImageUpload}
// className="hidden"
// />
// </label>

// {profilePic && (

// <button
// onClick={deleteProfilePic}
// className="bg-red-500 text-white px-3 py-1 rounded text-sm"
// >
// Delete
// </button>

// )}

// </div>

// </div>


// {/* USER INFO */}

// <div className="flex flex-col gap-4">

// <h2 className="text-2xl font-semibold text-indigo-700">
// Profile Information
// </h2>

// <input
// value={name}
// onChange={(e)=>setName(e.target.value)}
// readOnly={!isEditing}
// className="border p-3 rounded w-72"
// />

// <input
// value={email}
// readOnly
// className="border p-3 rounded w-72 bg-gray-100"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>

// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-blue-600 text-white px-6 py-2 rounded w-40"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-indigo-600 text-white px-6 py-2 rounded w-40"
// >
// Save Changes
// </button>

// )}

// </div>

// </div>


// <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Only you can access your mental health insights.
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Profile;




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

// useEffect(()=>{

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

// },[]);

// // const handleImageUpload=(e)=>{

// // const file=e.target.files[0];
// // if(!file) return;

// // const reader=new FileReader();

// // reader.onloadend=()=>{

// // const img=reader.result;
// // setProfilePic(img);

// // const user=localStorage.getItem("currentUser");
// // localStorage.setItem(`profilePic_${user}`,img);

// // };

// const handleImageUpload = (e) => {

// const file = e.target.files[0];
// if(!file) return;

// const user = localStorage.getItem("currentUser");

// const reader = new FileReader();

// reader.onload = (event) => {

// const img = event.target.result;

// setProfilePic(img);

// localStorage.setItem(`profilePic_${user}`, img);

// // IMPORTANT: reset input so same file can be selected again
// e.target.value = null;

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

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/dashboard")}
// className="flex items-center gap-2 text-3xl font-bold text-indigo-600 cursor-pointer"
// >

// <img src={pic} className="w-12 h-12"/>
// Moodly AI

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
// >
// Logout
// </button>

// </nav>


// <div className="max-w-5xl mx-auto p-10">

// {/* PROFILE CARD */}

// <div className="bg-white shadow-xl rounded-2xl p-12 flex flex-col md:flex-row gap-14 items-center justify-center">


// {/* PROFILE IMAGE */}

// <div className="flex flex-col items-center">

// <div className="relative">

// <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 border-4 border-indigo-200">

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

// <div className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full pointer-events-none">
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
// className="border p-3 rounded-lg w-80 focus:ring-2 focus:ring-indigo-400 outline-none"
// />

// <input
// value={email}
// readOnly
// className="border p-3 rounded-lg w-80 bg-gray-100"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>

// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-44"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-44"
// >
// Save Changes
// </button>

// )}

// </div>

// </div>


// {/* PRIVACY SECTION */}

// <div className="bg-white shadow-xl rounded-2xl p-10 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Track your feelings and reflect on your daily mood.
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Profile;





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

// useEffect(()=>{

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

// },[]);


// const handleImageUpload = (e) => {

// const file = e.target.files[0];
// if(!file) return;

// const user = localStorage.getItem("currentUser");

// const reader = new FileReader();

// reader.onload = (event) => {

// const img = event.target.result;

// setProfilePic(img);

// localStorage.setItem(`profilePic_${user}`, img);

// e.target.value = null;

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

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* NAVBAR */}

// <nav className="sticky top-0 flex justify-between items-center px-12 py-4 bg-white shadow-md">

// <div
// onClick={()=>navigate("/")}
// className="flex items-center gap-1 text-3xl font-bold text-indigo-600 hover:scale-105 transition cursor-pointer"
// >
// <img
// src={pic}
// alt="Moodly AI Logo"
// className="w-16 h-16 object-contain"
// />
// Moodly AI
// </div>


// {/* PROFILE DROPDOWN */}

// <div className="relative">

// <button
// onClick={()=>setShowMenu(!showMenu)}
// className="flex items-center gap-3 cursor-pointer"
// >

// <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">

// {profilePic ?

// <img src={profilePic} className="w-full h-full object-cover"/>

// :

// <div className="flex items-center justify-center h-full text-lg">
// 👤
// </div>

// }

// </div>

// <span className="font-medium text-gray-700">{name}</span>

// </button>


// {showMenu && (

// <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-40 py-2">

// <button
// onClick={()=>navigate("/profile")}
// className="block w-full text-left px-4 py-2 hover:bg-gray-100"
// >
// Profile
// </button>

// <button
// onClick={handleLogout}
// className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
// >
// Logout
// </button>

// </div>

// )}

// </div>

// </nav>


// <div className="max-w-5xl mx-auto p-10">

// {/* PROFILE CARD */}

// <div className="bg-white shadow-xl rounded-2xl p-12 flex flex-col md:flex-row gap-14 items-center justify-center">


// {/* PROFILE IMAGE */}

// <div className="flex flex-col items-center">

// <div className="relative">

// <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 border-4 border-indigo-200">

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

// <div className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full pointer-events-none">
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
// className="border p-3 rounded-lg w-80 focus:ring-2 focus:ring-indigo-400 outline-none"
// />

// <input
// value={email}
// readOnly
// className="border p-3 rounded-lg w-80 bg-gray-100"
// />

// <p className="text-gray-500">
// Member Since: {joinDate}
// </p>

// {!isEditing ? (

// <button
// onClick={()=>setIsEditing(true)}
// className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-44"
// >
// Edit Profile
// </button>

// ) : (

// <button
// onClick={()=>{
// saveProfile();
// setIsEditing(false);
// }}
// className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-44"
// >
// Save Changes
// </button>

// )}

// </div>

// </div>


// {/* PRIVACY SECTION */}

// <div className="bg-white shadow-xl rounded-2xl p-10 mt-10">

// <h2 className="text-xl font-semibold text-green-700 mb-4">
// 🔒 Privacy & Security
// </h2>

// <p className="text-gray-600 mb-2">
// Your journal entries are completely private.
// </p>

// <p className="text-gray-600 mb-2">
// Your emotional data is stored securely.
// </p>

// <p className="text-gray-600">
// Track your feelings and reflect on your daily mood.
// </p>

// </div>

// </div>

// </div>

// );

// }

// export default Profile;





import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import pic from "../assets/logo pic.png";

function Profile() {

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
if(savedStreak){
setStreak(savedStreak);
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

<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">

{/* NAVBAR */}

<nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 backdrop-blur-md bg-white/80 shadow-sm">

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
className="border border-gray-200 p-3 rounded-xl w-80 focus:ring-2 focus:ring-indigo-400 outline-none"
/>

<input
value={email}
readOnly
className="border border-gray-200 p-3 rounded-xl w-80 bg-gray-100"
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

<div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mt-10 border border-white/30">

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


{/* PRIVACY */}

<div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 mt-10 border border-white/30">

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

