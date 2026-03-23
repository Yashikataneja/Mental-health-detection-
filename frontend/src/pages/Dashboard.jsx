// import { useState } from "react";
// import api from "../utils/axios";

// function Dashboard() {
//   const [text, setText] = useState("");

//   const handleSubmit = async () => {
//     try {
//       const res = await api.post("/journal/analyze", { text });
//       alert("Emotion: " + res.data.analysis.emotion);
//     } catch (error) {
//       alert("Error submitting journal");
//     }
//   };

//   return (
//     <div>
//       <h2>Journal Entry</h2>
//       <textarea
//         placeholder="How are you feeling?"
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Analyze</button>
//     </div>
//   );
// }

// export default Dashboard;




// import { useState } from "react";
// import api from "../utils/axios";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// function Dashboard() {

// const [journal, setJournal] = useState("");
// const [result, setResult] = useState(null);

// const analyzeEmotion = async () => {

// try {

//   const response = await api.post("/journal/analyze", { text: journal });
// setResult(response.data);

// } catch (error) {
// console.log(error);
// alert("Error analyzing emotion");
// }

// };

// const emotionData = {

// labels: Object.keys(result?.scores || {}),

// datasets: [
// {
// label: "Emotion Probability",
// data: Object.values(result?.scores || {}),
// backgroundColor: [
// "#ff6b6b",
// "#ffa94d",
// "#74c0fc",
// "#69db7c",
// "#b197fc"
// ]
// }
// ]

// };

// const moodTrend = {

// labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

// datasets: [
// {
// label: "Mood Score",
// data: [3,4,2,3,5,4,3],
// borderColor: "#4dabf7",
// fill: false
// }
// ]

// };

// return (

// <div className="min-h-screen bg-gray-100 p-8">

// <h1 className="text-3xl font-bold text-center mb-8">
// Mental Health Dashboard
// </h1>

// {/* Journal Input */}

// <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">

// <h2 className="text-xl font-semibold mb-4">
// Daily Journal
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write how you are feeling today..."
// className="w-full border p-3 rounded-lg h-32"
// />

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
// > 
// AnalyzeEmotion
// </button>

// </div>

// {/* Emotion Results */}

// {result && (

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

// {/* Emotion Card */}

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">
// Emotion Analysis
// </h2>

// <p>
// <strong>Detected Emotion:</strong> {result.emotion}
// </p>

// <p>
// <strong>Confidence:</strong> {result.confidence}%
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// {/* Risk Alert */}

// {result.risk === "HIGH" && (

// <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
// ⚠ High Mental Health Risk Detected
// </div>

// )}

// {result.risk === "MEDIUM" && (

// <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
// ⚠ Medium Risk
// </div>

// )}

// {result.risk === "LOW" && (

// <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
// ✔ Low Risk
// </div>

// )}

// </div>

// {/* Emotion Graph */}

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">
// Emotion Distribution
// </h2>

// <Bar data={emotionData} />

// </div>

// </div>

// )}

// {/* Weekly Mood Trend */}

// <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-6xl mx-auto">

// <h2 className="text-xl font-semibold mb-4">
// Weekly Mood Trend
// </h2>

// <Line data={moodTrend} />

// </div>

// {/* AI Suggestions */}

// {result && (

// <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-3xl mx-auto">

// <h2 className="text-xl font-semibold mb-4">
// AI Suggestions
// </h2>

// {result.emotion === "sadness" && (

// <ul className="list-disc ml-6">
// <li>Try speaking to someone you trust</li>
// <li>Write more about your feelings</li>
// <li>Practice deep breathing</li>
// </ul>

// )}

// {result.emotion === "anger" && (

// <ul className="list-disc ml-6">
// <li>Take a short break</li>
// <li>Try meditation</li>
// </ul>

// )}

// {result.emotion === "joy" && (

// <ul className="list-disc ml-6">
// <li>Keep doing what makes you happy</li>
// <li>Share positivity with others</li>
// </ul>

// )}

// </div>

// )}

// </div>

// );

// }

// export default Dashboard;




// import { useState } from "react";
// import api from "../utils/axios";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// function Dashboard() {

// const [journal, setJournal] = useState("");
// const [result, setResult] = useState(null);

// const detectEmotion = (text) => {

// text = text.toLowerCase();

// if(text.includes("happy") || text.includes("good") || text.includes("great") || text.includes("love")){
// return {
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{
// joy:0.9,
// sadness:0.02,
// anger:0.02,
// fear:0.03,
// neutral:0.03
// }
// };
// }

// if(text.includes("sad") || text.includes("cry") || text.includes("depressed") || text.includes("bad")){
// return {
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{
// joy:0.05,
// sadness:0.85,
// anger:0.03,
// fear:0.04,
// neutral:0.03
// }
// };
// }

// if(text.includes("angry") || text.includes("hate") || text.includes("mad")){
// return {
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{
// joy:0.05,
// sadness:0.1,
// anger:0.8,
// fear:0.02,
// neutral:0.03
// }
// };
// }

// return {
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{
// joy:0.2,
// sadness:0.2,
// anger:0.1,
// fear:0.1,
// neutral:0.4
// }
// };

// };

// const analyzeEmotion = () => {

// const prediction = detectEmotion(journal);

// setResult(prediction);

// };

// const emotionData = {

// labels: Object.keys(result?.scores || {}),

// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores || {}),
// backgroundColor:[
// "#51cf66",
// "#ff6b6b",
// "#fcc419",
// "#845ef7",
// "#74c0fc"
// ]
// }
// ]

// };

// const moodTrend = {

// labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

// datasets:[
// {
// label:"Mood Score",
// data:[3,4,2,3,5,4,3],
// borderColor:"#4dabf7",
// fill:false
// }
// ]

// };

// return (

// <div className="min-h-screen bg-gray-100 p-8">

// <h1 className="text-3xl font-bold text-center mb-8">
// Mental Health Dashboard
// </h1>

// <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">

// <h2 className="text-xl font-semibold mb-4">
// Daily Journal
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write how you are feeling today..."
// className="w-full border p-3 rounded-lg h-32"
// />

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
// >
// Analyze Emotion
// </button>

// </div>

// {result && (

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">
// Emotion Analysis
// </h2>

// <p>
// <strong>Detected Emotion:</strong> {result.emotion} {result.emoji}
// </p>

// <p>
// <strong>Confidence:</strong> {result.confidence}%
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// {result.risk === "HIGH" && (
// <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
// ⚠ High Mental Health Risk Detected
// </div>
// )}

// {result.risk === "MEDIUM" && (
// <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
// ⚠ Medium Risk
// </div>
// )}

// {result.risk === "LOW" && (
// <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
// ✔ Low Risk
// </div>
// )}

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">
// Emotion Distribution
// </h2>

// <Bar data={emotionData} />

// </div>

// </div>

// )}

// <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-6xl mx-auto">

// <h2 className="text-xl font-semibold mb-4">
// Weekly Mood Trend
// </h2>

// <Line data={moodTrend} />

// </div>

// </div>

// );

// }

// export default Dashboard;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);
//   const navigate = useNavigate();

//   // Improved emotion detection function
//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (
//       text.includes("happy") ||
//       text.includes("good") ||
//       text.includes("great") ||
//       text.includes("love")
//     ) {
//       return {
//         emotion: "joy",
//         emoji: "😊",
//         confidence: 92,
//         score: 9,
//         risk: "LOW",
//         scores: {
//           joy: 0.9,
//           sadness: 0.02,
//           anger: 0.02,
//           fear: 0.03,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("sad") ||
//       text.includes("cry") ||
//       text.includes("depressed") ||
//       text.includes("bad")
//     ) {
//       return {
//         emotion: "sadness",
//         emoji: "😢",
//         confidence: 88,
//         score: 3,
//         risk: "HIGH",
//         scores: {
//           joy: 0.05,
//           sadness: 0.85,
//           anger: 0.03,
//           fear: 0.04,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("angry") ||
//       text.includes("hate") ||
//       text.includes("mad")
//     ) {
//       return {
//         emotion: "anger",
//         emoji: "😠",
//         confidence: 90,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.8,
//           fear: 0.02,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("afraid") ||
//       text.includes("scared") ||
//       text.includes("fear") ||
//       text.includes("nervous") ||
//       text.includes("panic") ||
//       text.includes("dark") // optional: detecting fear in dark
//     ) {
//       return {
//         emotion: "fear",
//         emoji: "😨",
//         confidence: 85,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.05,
//           fear: 0.7,
//           neutral: 0.1
//         }
//       };
//     }

//     // Default neutral
//     return {
//       emotion: "neutral",
//       emoji: "😐",
//       confidence: 70,
//       score: 5,
//       risk: "LOW",
//       scores: {
//         joy: 0.2,
//         sadness: 0.2,
//         anger: 0.1,
//         fear: 0.1,
//         neutral: 0.4
//       }
//     };
//   };

//   const analyzeEmotion = () => {
//     const prediction = detectEmotion(journal);
//     setResult(prediction);
//   };

//   const emotionData = {
//     labels: Object.keys(result?.scores || {}),
//     datasets: [
//       {
//         label: "Emotion Probability",
//         data: Object.values(result?.scores || {}),
//         backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
//       }
//     ]
//   };

//   // const moodTrend = {
//   //   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//   //   datasets: [
//   //     {
//   //       label: "Mood Score",
//   //       data: [3, 4, 2, 3, 5, 4, 3],
//   //       borderColor: "#4dabf7",
//   //       fill: false
//   //     }
//   //   ]
//   // };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Mental Health Dashboard
//       </h1>

      

//       <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Daily Journal</h2>
//         <textarea
//           value={journal}
//           onChange={(e) => setJournal(e.target.value)}
//           placeholder="Write how you are feeling today..."
//           className="w-full border p-3 rounded-lg h-32"
//         />
//         <button
//           onClick={analyzeEmotion}
//           className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
//         >
//           Analyze Emotion
//         </button>
//       </div>

//       {result && (
//         <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>
//             <p>
//               <strong>Detected Emotion:</strong> {result.emotion} {result.emoji}
//             </p>
//             <p>
//               <strong>Confidence:</strong> {result.confidence}%
//             </p>
//             <p>
//               <strong>Mental Health Score:</strong> {result.score}/10
//             </p>

//             {result.risk === "HIGH" && (
//               <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
//                 ⚠ High Mental Health Risk Detected
//               </div>
//             )}

//             {result.risk === "MEDIUM" && (
//               <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
//                 ⚠ Medium Risk
//               </div>
//             )}

//             {result.risk === "LOW" && (
//               <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
//                 ✔ Low Risk
//               </div>
//             )}
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
//             <Bar data={emotionData} />
//           </div>
//         </div>
//       )}

//       {/* <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-6xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Weekly Mood Trend</h2>
//         <Line data={moodTrend} />
//       </div> */}
//     </div>
//   );
// }

// export default Dashboard;






































// import { useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);

//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (
//       text.includes("happy") ||
//       text.includes("good") ||
//       text.includes("great") ||
//       text.includes("love")
//     ) {
//       return {
//         emotion: "joy",
//         emoji: "😊",
//         confidence: 92,
//         score: 9,
//         risk: "LOW",
//         scores: {
//           joy: 0.9,
//           sadness: 0.02,
//           anger: 0.02,
//           fear: 0.03,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("sad") ||
//       text.includes("cry") ||
//       text.includes("depressed") ||
//       text.includes("bad")
//     ) {
//       return {
//         emotion: "sadness",
//         emoji: "😢",
//         confidence: 88,
//         score: 3,
//         risk: "HIGH",
//         scores: {
//           joy: 0.05,
//           sadness: 0.85,
//           anger: 0.03,
//           fear: 0.04,
//           neutral: 0.03
//         }
//       };
//     }

//     if (text.includes("angry") || text.includes("hate") || text.includes("mad")) {
//       return {
//         emotion: "anger",
//         emoji: "😠",
//         confidence: 90,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.8,
//           fear: 0.02,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("afraid") ||
//       text.includes("scared") ||
//       text.includes("fear") ||
//       text.includes("panic")
//     ) {
//       return {
//         emotion: "fear",
//         emoji: "😨",
//         confidence: 85,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.05,
//           fear: 0.7,
//           neutral: 0.1
//         }
//       };
//     }

//     return {
//       emotion: "neutral",
//       emoji: "😐",
//       confidence: 70,
//       score: 5,
//       risk: "LOW",
//       scores: {
//         joy: 0.2,
//         sadness: 0.2,
//         anger: 0.1,
//         fear: 0.1,
//         neutral: 0.4
//       }
//     };
//   };

//   const analyzeEmotion = () => {
//     const prediction = detectEmotion(journal);
//     setResult(prediction);
//   };

//   const emotionData = {
//     labels: Object.keys(result?.scores || {}),
//     datasets: [
//       {
//         label: "Emotion Probability",
//         data: Object.values(result?.scores || {}),
//         backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 p-8">

//       {/* HERO SECTION */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-blue-800">
//           MindScope Mental Health Dashboard
//         </h1>
//         <p className="text-gray-600 mt-2">
//           AI powered emotional analysis and mental wellness tracking
//         </p>
//       </div>

//       {/* STATS CARDS */}
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">

//         <div className="bg-white p-5 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-700">AI Emotion Detection</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Analyze emotional tone from daily journal entries using AI logic.
//           </p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-700">Mental Health Score</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Understand your mental wellness level through mood scoring.
//           </p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-700">Emotion Insights</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Visual representation of emotional distribution.
//           </p>
//         </div>

//       </div>

//       {/* JOURNAL INPUT */}
//       <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Daily Journal</h2>

//         <textarea
//           value={journal}
//           onChange={(e) => setJournal(e.target.value)}
//           placeholder="Write how you are feeling today..."
//           className="w-full border p-3 rounded-lg h-32"
//         />

//         <button
//           onClick={analyzeEmotion}
//           className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Analyze Emotion
//         </button>
//       </div>

//       {/* RESULT */}
//       {result && (
//         <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

//             <p><strong>Detected Emotion:</strong> {result.emotion} {result.emoji}</p>
//             <p><strong>Confidence:</strong> {result.confidence}%</p>
//             <p><strong>Mental Health Score:</strong> {result.score}/10</p>

//             {result.risk === "HIGH" && (
//               <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
//                 ⚠ High Mental Health Risk Detected
//               </div>
//             )}

//             {result.risk === "MEDIUM" && (
//               <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
//                 ⚠ Medium Risk
//               </div>
//             )}

//             {result.risk === "LOW" && (
//               <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
//                 ✔ Low Risk
//               </div>
//             )}

//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
//             <Bar data={emotionData} />
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Dashboard;























// import { useState, useEffect } from "react";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);
//   const [streak, setStreak] = useState(0);

//   useEffect(() => {
//     const savedStreak = localStorage.getItem("journalStreak");
//     if (savedStreak) {
//       setStreak(parseInt(savedStreak));
//     }
//   }, []);

//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (
//       text.includes("happy") ||
//       text.includes("good") ||
//       text.includes("great") ||
//       text.includes("love")
//     ) {
//       return {
//         emotion: "joy",
//         emoji: "😊",
//         confidence: 92,
//         score: 9,
//         risk: "LOW",
//         scores: {
//           joy: 0.9,
//           sadness: 0.02,
//           anger: 0.02,
//           fear: 0.03,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("sad") ||
//       text.includes("cry") ||
//       text.includes("depressed") ||
//       text.includes("bad")
//     ) {
//       return {
//         emotion: "sadness",
//         emoji: "😢",
//         confidence: 88,
//         score: 3,
//         risk: "HIGH",
//         scores: {
//           joy: 0.05,
//           sadness: 0.85,
//           anger: 0.03,
//           fear: 0.04,
//           neutral: 0.03
//         }
//       };
//     }

//     if (text.includes("angry") || text.includes("hate") || text.includes("mad")) {
//       return {
//         emotion: "anger",
//         emoji: "😠",
//         confidence: 90,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.8,
//           fear: 0.02,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("afraid") ||
//       text.includes("scared") ||
//       text.includes("fear") ||
//       text.includes("panic")
//     ) {
//       return {
//         emotion: "fear",
//         emoji: "😨",
//         confidence: 85,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.05,
//           fear: 0.7,
//           neutral: 0.1
//         }
//       };
//     }

//     return {
//       emotion: "neutral",
//       emoji: "😐",
//       confidence: 70,
//       score: 5,
//       risk: "LOW",
//       scores: {
//         joy: 0.2,
//         sadness: 0.2,
//         anger: 0.1,
//         fear: 0.1,
//         neutral: 0.4
//       }
//     };
//   };

//   const analyzeEmotion = () => {
//     const prediction = detectEmotion(journal);
//     setResult(prediction);

//     const today = new Date().toDateString();
//     const lastDate = localStorage.getItem("lastJournalDate");

//     let newStreak = streak;

//     if (lastDate !== today) {
//       newStreak = streak + 1;
//       setStreak(newStreak);

//       localStorage.setItem("journalStreak", newStreak);
//       localStorage.setItem("lastJournalDate", today);
//     }
//   };

//   const emotionData = {
//     labels: Object.keys(result?.scores || {}),
//     datasets: [
//       {
//         label: "Emotion Probability",
//         data: Object.values(result?.scores || {}),
//         backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
//       }
//     ]
//   };

//   const tip =
//     "Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white p-8">

//       {/* HEADER */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-blue-800">
//           MindScope Mental Health Dashboard
//         </h1>
//         <p className="text-gray-600 mt-2">
//           AI-powered emotional insight and wellness monitoring
//         </p>
//       </div>

//       {/* FEATURE CARDS */}
//       <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-blue-700">🧠 AI Emotion Detection</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Our AI analyzes text to detect emotional states.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-blue-700">📊 Mental Health Score</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Get a quick insight into your emotional wellbeing.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-blue-700">📈 Emotion Insights</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Visual charts help understand emotional patterns.
//           </p>
//         </div>

//         {/* STREAK CARD */}
//         <div className="bg-white p-6 rounded-xl shadow text-center">
//           <h3 className="font-semibold text-blue-700">🔥 Journaling Streak</h3>
//           <p className="text-3xl font-bold text-orange-500 mt-2">{streak}</p>
//           <p className="text-sm text-gray-500">Days in a row</p>
//         </div>

//       </div>

//       {/* JOURNAL */}
//       <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Daily Journal</h2>

//         <textarea
//           value={journal}
//           onChange={(e) => setJournal(e.target.value)}
//           placeholder="Write how you are feeling today..."
//           className="w-full border p-3 rounded-lg h-32"
//         />

//         <button
//           onClick={analyzeEmotion}
//           className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
//         >
//           Analyze Emotion
//         </button>
//       </div>

//       {/* TIP */}
//       <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//         <p className="text-sm text-blue-800">{tip}</p>
//       </div>

//       {/* RESULT */}
//       {result && (
//         <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

//             <p>
//               <strong>Detected Emotion:</strong> {result.emotion} {result.emoji}
//             </p>
//             <p>
//               <strong>Confidence:</strong> {result.confidence}%
//             </p>
//             <p>
//               <strong>Mental Health Score:</strong> {result.score}/10
//             </p>

//             {result.risk === "HIGH" && (
//               <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
//                 ⚠ High Mental Health Risk Detected
//               </div>
//             )}

//             {result.risk === "MEDIUM" && (
//               <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
//                 ⚠ Medium Risk
//               </div>
//             )}

//             {result.risk === "LOW" && (
//               <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
//                 ✔ Low Risk
//               </div>
//             )}

//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
//             <Bar data={emotionData} />
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;



// import { useState, useEffect } from "react";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const getSuggestions = (emotion) => {
//   switch (emotion) {
//     case "joy":
//       return [
//         "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
//         "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
//         "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
//         "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸",
//         "Take time to appreciate your achievements and reward yourself in small ways today. 🏆",
//         "Call or message someone you care about to spread positivity and brighten their day. 💌",
//         "Enjoy a fun activity outside or in nature to keep your good mood flowing. 🌳"
//       ];
//     case "sadness":
//       return [
//         "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
//         "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
//         "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
//         "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶‍♂️",
//         "Engage in a hobby or small activity you enjoy to distract and comfort yourself. 🎨",
//         "Spend time with loved ones or friends to feel warmth and emotional support. 👨‍👩‍👧‍👦",
//         "Focus on small things that make you happy or grateful each day. 🌷"
//       ];
//     case "fear":
//       return [
//         "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
//         "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️",
//         "Write down your fears and then think of ways to face them gradually and calmly. 📝",
//         "Focus on small positive actions you can do today to feel more in control. 🌟",
//         "Visualize yourself handling scary situations successfully to boost confidence and calm your mind. 🦸",
//         "Take short steps towards what worries you instead of avoiding it completely. 👣",
//         "Do grounding exercises or notice your surroundings to stay present and reduce fear. 🌳"
//       ];
//     case "anger":
//       return [
//         "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
//         "Write about what makes you angry to understand your feelings and release tension. ✍️",
//         "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️",
//         "Listen to calming music to help your mind relax and reduce irritability. 🎶",
//         "Try to laugh or find humor in small things to lighten your mood. 😄",
//         "Do something creative like drawing, cooking, or crafting to redirect your strong emotions. 🎨",
//         "Talk to someone you trust about what’s bothering you to feel understood. 💬"
//       ];
//     case "neutral":
//     default:
//       return [
//         "Keep a balanced routine today with small breaks and enjoyable activities to stay calm. ⚖️",
//         "Spend a few moments doing something you love to add a positive spark to your day. 🎨",
//         "Reflect on small achievements or happy moments to stay motivated and content. 🌅",
//         "Connect with loved ones to strengthen bonds and enjoy a sense of comfort. 👨‍👩‍👧‍👦",
//         "Take short breaks during work or study to rest and refresh your mind. ☕",
//         "Write down three things you are thankful for to maintain positivity and gratitude. 📖",
//         "Set small goals and celebrate them to feel productive and happy. 🌱"
//       ];
//   }
// };

// function Dashboard() {
//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);
//   const [streak, setStreak] = useState(0);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const savedStreak = localStorage.getItem("journalStreak");
//     if (savedStreak) {
//       setStreak(parseInt(savedStreak));
//     }
//   }, []);

//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (
//   text.includes("happy") ||
//   text.includes("good") ||
//   text.includes("great") ||
//   text.includes("love") ||
//   text.includes("amazing") ||
//   text.includes("wonderful") ||
//   text.includes("excited") ||
//   text.includes("proud")
// ) {
//       return {
//         emotion: "joy",
//         emoji: "😊",
//         confidence: 92,
//         score: 9,
//         risk: "LOW",
//         scores: {
//           joy: 0.9,
//           sadness: 0.02,
//           anger: 0.02,
//           fear: 0.03,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//   text.includes("sad") ||
//   text.includes("cry") ||
//   text.includes("depressed") ||
//   text.includes("bad") ||
//   text.includes("lonely") ||
//   text.includes("upset") ||
//   text.includes("tired") ||
//   text.includes("hopeless")
// ) {
//       return {
//         emotion: "sadness",
//         emoji: "😢",
//         confidence: 88,
//         score: 3,
//         risk: "HIGH",
//         scores: {
//           joy: 0.05,
//           sadness: 0.85,
//           anger: 0.03,
//           fear: 0.04,
//           neutral: 0.03
//         }
//       };
//     }

//     if (text.includes("angry") || text.includes("hate") || text.includes("mad")) {
//       return {
        
//         emotion: "anger",
//         emoji: "😠",
//         confidence: 90,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.8,
//           fear: 0.02,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("afraid") ||
//       text.includes("scared") ||
//       text.includes("fear") ||
//       text.includes("panic")
//     ) {
//       return {
//         emotion: "fear",
//         emoji: "😨",
//         confidence: 85,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.05,
//           fear: 0.7,
//           neutral: 0.1
//         }
//       };
//     }

//     return {
//       emotion: "neutral",
//       emoji: "😐",
//       confidence: 70,
//       score: 5,
//       risk: "LOW",
//       scores: {
//         joy: 0.2,
//         sadness: 0.2,
//         anger: 0.1,
//         fear: 0.1,
//         neutral: 0.4
//       }
//     };
//   };

//   const analyzeEmotion = () => {
//     const prediction = detectEmotion(journal);
//     setResult(prediction);

//     const tips = getSuggestions(prediction.emotion);
//     setSuggestions(tips);

//     const today = new Date().toDateString();
//     const lastDate = localStorage.getItem("lastJournalDate");

//     let newStreak = streak;

//     if (lastDate !== today) {
//       newStreak = streak + 1;
//       setStreak(newStreak);

//       localStorage.setItem("journalStreak", newStreak);
//       localStorage.setItem("lastJournalDate", today);
//     }
//   };

//   const emotionData = {
//     labels: Object.keys(result?.scores || {}),
//     datasets: [
//       {
//         label: "Emotion Probability",
//         data: Object.values(result?.scores || {}),
//         backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
//       }
//     ]
//   };

//   const tip =
//     "Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

//   return (
    
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white p-8">

//     {/* Navbar */}
//     <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 bg-white shadow-md mb-8">

//       <h2 className="text-2xl font-bold text-blue-700">
//         MindScope
//       </h2>

//       <div className="flex items-center space-x-4">

//         <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
//           Profile
//         </button>

//         <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
//           Logout
//         </button>

//       </div>

//     </nav>
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const getSuggestions = (emotion) => {
//   switch (emotion) {
//     case "joy":
//       return [
//         "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
//         "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
//         "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
//         "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸",
//         "Take time to appreciate your achievements and reward yourself in small ways today. 🏆",
//         "Call or message someone you care about to spread positivity and brighten their day. 💌",
//         "Enjoy a fun activity outside or in nature to keep your good mood flowing. 🌳"
//       ];
//     case "sadness":
//       return [
//         "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
//         "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
//         "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
//         "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶‍♂️",
//         "Engage in a hobby or small activity you enjoy to distract and comfort yourself. 🎨",
//         "Spend time with loved ones or friends to feel warmth and emotional support. 👨‍👩‍👧‍👦",
//         "Focus on small things that make you happy or grateful each day. 🌷"
//       ];
//     case "fear":
//       return [
//         "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
//         "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️",
//         "Write down your fears and then think of ways to face them gradually and calmly. 📝",
//         "Focus on small positive actions you can do today to feel more in control. 🌟",
//         "Visualize yourself handling scary situations successfully to boost confidence and calm your mind. 🦸",
//         "Take short steps towards what worries you instead of avoiding it completely. 👣",
//         "Do grounding exercises or notice your surroundings to stay present and reduce fear. 🌳"
//       ];
//     case "anger":
//       return [
//         "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
//         "Write about what makes you angry to understand your feelings and release tension. ✍️",
//         "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️",
//         "Listen to calming music to help your mind relax and reduce irritability. 🎶",
//         "Try to laugh or find humor in small things to lighten your mood. 😄",
//         "Do something creative like drawing, cooking, or crafting to redirect your strong emotions. 🎨",
//         "Talk to someone you trust about what’s bothering you to feel understood. 💬"
//       ];
//     case "neutral":
//     default:
//       return [
//         "Keep a balanced routine today with small breaks and enjoyable activities to stay calm. ⚖️",
//         "Spend a few moments doing something you love to add a positive spark to your day. 🎨",
//         "Reflect on small achievements or happy moments to stay motivated and content. 🌅",
//         "Connect with loved ones to strengthen bonds and enjoy a sense of comfort. 👨‍👩‍👧‍👦",
//         "Take short breaks during work or study to rest and refresh your mind. ☕",
//         "Write down three things you are thankful for to maintain positivity and gratitude. 📖",
//         "Set small goals and celebrate them to feel productive and happy. 🌱"
//       ];
//   }
// };

// function Dashboard() {

//   const navigate = useNavigate();

//   const [journal, setJournal] = useState("");
//   const [result, setResult] = useState(null);
//   const [streak, setStreak] = useState(0);
//   const [suggestions, setSuggestions] = useState([]);

// const currentUser = localStorage.getItem("currentUser");


//    useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
//     if (savedStreak) {
//       setStreak(parseInt(savedStreak));
//     }
//   }, []);

//   const detectEmotion = (text) => {
//     text = text.toLowerCase();

//     if (
//       text.includes("happy") ||
//       text.includes("good") ||
//       text.includes("great") ||
//       text.includes("love") ||
//       text.includes("amazing") ||
//       text.includes("wonderful") ||
//       text.includes("excited") ||
//       text.includes("proud")
//     ) {
//       return {
//         emotion: "joy",
//         emoji: "😊",
//         confidence: 92,
//         score: 9,
//         risk: "LOW",
//         scores: {
//           joy: 0.9,
//           sadness: 0.02,
//           anger: 0.02,
//           fear: 0.03,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("sad") ||
//       text.includes("cry") ||
//       text.includes("depressed") ||
//       text.includes("bad") ||
//       text.includes("lonely") ||
//       text.includes("upset") ||
//       text.includes("tired") ||
//       text.includes("hopeless")
//     ) {
//       return {
//         emotion: "sadness",
//         emoji: "😢",
//         confidence: 88,
//         score: 3,
//         risk: "HIGH",
//         scores: {
//           joy: 0.05,
//           sadness: 0.85,
//           anger: 0.03,
//           fear: 0.04,
//           neutral: 0.03
//         }
//       };
//     }

//     if (text.includes("angry") || text.includes("hate") || text.includes("mad")) {
//       return {
//         emotion: "anger",
//         emoji: "😠",
//         confidence: 90,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.8,
//           fear: 0.02,
//           neutral: 0.03
//         }
//       };
//     }

//     if (
//       text.includes("afraid") ||
//       text.includes("scared") ||
//       text.includes("fear") ||
//       text.includes("panic")
//     ) {
//       return {
//         emotion: "fear",
//         emoji: "😨",
//         confidence: 85,
//         score: 4,
//         risk: "MEDIUM",
//         scores: {
//           joy: 0.05,
//           sadness: 0.1,
//           anger: 0.05,
//           fear: 0.7,
//           neutral: 0.1
//         }
//       };
//     }

//     return {
//       emotion: "neutral",
//       emoji: "😐",
//       confidence: 70,
//       score: 5,
//       risk: "LOW",
//       scores: {
//         joy: 0.2,
//         sadness: 0.2,
//         anger: 0.1,
//         fear: 0.1,
//         neutral: 0.4
//       }
//     };
//   };

//   // const analyzeEmotion = () => {
//   //   const prediction = detectEmotion(journal);
//   //   setResult(prediction);

//   //   const tips = getSuggestions(prediction.emotion);
//   //   setSuggestions(tips);

//   //   const today = new Date().toDateString();
//   //   const lastDate = localStorage.getItem("lastJournalDate");

//   //   let newStreak = streak;

//   //   if (lastDate !== today) {
//   //     newStreak = streak + 1;
//   //     setStreak(newStreak);

//   //     localStorage.setItem("journalStreak", newStreak);
//   //     localStorage.setItem("lastJournalDate", today);
//   //   }
//   // };
//   const analyzeEmotion = () => {

//   const prediction = detectEmotion(journal);
//   setResult(prediction);

//   const tips = getSuggestions(prediction.emotion);
//   setSuggestions(tips);

//   const today = new Date().toDateString();
//   const lastDate = localStorage.getItem(`lastJournalDate_${currentUser}`);

//   let newStreak = streak;

//   if (lastDate !== today) {

//     newStreak = streak + 1;
//     setStreak(newStreak);

//     localStorage.setItem(`journalStreak_${currentUser}`, newStreak);
//     localStorage.setItem(`lastJournalDate_${currentUser}`, today);

//   }

//   // ⭐ USER SPECIFIC DATA SAVE
//   const prevCount = localStorage.getItem(`journalCount_${currentUser}`) || 0;
//   const newCount = Number(prevCount) + 1;

//   localStorage.setItem(`journalCount_${currentUser}`, newCount);
//   localStorage.setItem(`lastEmotion_${currentUser}`, prediction.emotion);

// };

//   const emotionData = {
//     labels: Object.keys(result?.scores || {}),
//     datasets: [
//       {
//         label: "Emotion Probability",
//         data: Object.values(result?.scores || {}),
//         backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
//       }
//     ]
//   };

//   const tip =
//     "Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

//   return (
    
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

//     {/* <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 bg-white shadow-md mb-8">

//       <h2 className="text-2xl font-bold text-blue-700">
//         MindScope
//       </h2>

//       <div className="flex items-center space-x-4">

//         <button onClick={() => navigate("/profile")} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
//           Profile
//         </button>

//         <button onClick={() => {localStorage.removeItem("token"); navigate("/");}} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
//           Logout
//         </button>

//       </div>

//     </nav> */}

// {/* <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 bg-white shadow-md">

//       <h2 className="flex items-center gap-1 text-3xl font-bold text-indigo-600 hover:scale-105 transition">
//         <img src={pic} alt="Moodly AI Logo" className="w-12 h-12 object-contain" />
//         Moodly AI
//       </h2>

//       <div className="flex items-center space-x-4">

//         <button onClick={() => navigate("/profile")} className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
//           Profile
//         </button>

//         <button onClick={() => {localStorage.removeItem("token"); navigate("/");}} className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
//           Logout
//         </button>

//       </div>

//     </nav> */}

//     <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-12 py-4 bg-white shadow-md mb-8">

//   {/* Logo */}
//   <div
//     onClick={() => navigate("/")}
//     className="flex items-center gap-2 text-3xl font-bold text-indigo-600 hover:scale-105 transition cursor-pointer"
//   >
//     <img src={pic} alt="Moodly AI Logo" className="w-14 h-14 object-contain" />
//     Moodly AI
//   </div>

//   {/* Right Side */}
//   <div className="relative group">

//     {/* Profile Icon */}
//     <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 cursor-pointer hover:bg-indigo-200 transition">
//       👤
//     </div>

//     {/* Dropdown */}
//     <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">

//       <button
//         onClick={() => navigate("/profile")}
//         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//       >
//         Profile
//       </button>

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           navigate("/");
//         }}
//         className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
//       >
//         Logout
//       </button>

//     </div>

//   </div>

// </nav>
// <div className="p-8">
    


//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-blue-800">
//           MindScope Mental Health Dashboard
//         </h1>
//         <p className="text-gray-600 mt-2">
//           AI-powered emotional insight and wellness monitoring
//         </p>
//       </div>

//       <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
//           <h3 className="font-semibold text-blue-700">🧠 AI Emotion Detection</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Our AI analyzes text to detect emotional states.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
//           <h3 className="font-semibold text-blue-700">📊 Mental Health Score</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Get a quick insight into your emotional wellbeing.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
//           <h3 className="font-semibold text-blue-700">📈 Emotion Insights</h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Visual charts help understand emotional patterns.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
//           <h3 className="font-semibold text-blue-700">🔥 Journaling Streak</h3>
//           <p className="text-3xl font-bold text-orange-500 mt-2">{streak}</p>
//           <p className="text-sm text-gray-500">Days in a row</p>
//         </div>

//       </div>

//       <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Daily Journal</h2>

//         <textarea
//           value={journal}
//           onChange={(e) => setJournal(e.target.value)}
//           placeholder="Write how you are feeling today..."
//           className="w-full border border-gray-300 p-4 rounded-xl h-32 focus:ring-2 focus:ring-blue-400 outline-none"
//         />

//         <button
//           onClick={analyzeEmotion}
//           className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition text-white px-6 py-2 rounded-lg"
//         >
//           Analyze Emotion
//         </button>
//       </div>

//       <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//         <p className="text-sm text-blue-800">{tip}</p>
//       </div>

//       {result && (
//         <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//             <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

//             <p className="text-lg">
// <strong>Detected Emotion:</strong> 
// <span className="text-indigo-600 font-bold ml-2 capitalize">
// {result.emotion} {result.emoji}
// </span>
// </p>
//             <p className="mt-2">
// <strong>Confidence:</strong> 
// <span className="text-green-600 font-semibold ml-1">
// {result.confidence}%
// </span>
// </p>
//             <p>
//               <strong>Mental Health Score:</strong> {result.score}/10
//             </p>

//             {result.risk === "HIGH" && (
//               <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
//                 ⚠ High Mental Health Risk Detected
//               </div>
//             )}

//             {result.risk === "MEDIUM" && (
//               <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
//                 ⚠ Medium Risk
//               </div>
//             )}

//             {result.risk === "LOW" && (
//               <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
//                 ✔ Low Risk
//               </div>
//             )}

//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
//             <Bar data={emotionData} />
//           </div>

//         </div>
//       )}

//       {suggestions.length > 0 && (
//         <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
//           <h2 className="text-2xl font-bold mb-4 text-indigo-700">
// 💡 AI Wellness Suggestions
// </h2>

//           <ul className="space-y-3">
//             {suggestions.map((item, index) => (
//               <li className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg text-gray-700 hover:shadow-md transition">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//     </div>
//     </div>
//   );
// }

// export default Dashboard;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {
// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸",
// "Take time to appreciate your achievements and reward yourself in small ways today. 🏆",
// "Call or message someone you care about to spread positivity and brighten their day. 💌",
// "Enjoy a fun activity outside or in nature to keep your good mood flowing. 🌳"
// ];
// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶‍♂️",
// "Engage in a hobby or small activity you enjoy to distract and comfort yourself. 🎨",
// "Spend time with loved ones or friends to feel warmth and emotional support. 👨‍👩‍👧‍👦",
// "Focus on small things that make you happy or grateful each day. 🌷"
// ];
// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️",
// "Write down your fears and then think of ways to face them gradually and calmly. 📝",
// "Focus on small positive actions you can do today to feel more in control. 🌟",
// "Visualize yourself handling scary situations successfully to boost confidence and calm your mind. 🦸",
// "Take short steps towards what worries you instead of avoiding it completely. 👣",
// "Do grounding exercises or notice your surroundings to stay present and reduce fear. 🌳"
// ];
// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Write about what makes you angry to understand your feelings and release tension. ✍️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️",
// "Listen to calming music to help your mind relax and reduce irritability. 🎶",
// "Try to laugh or find humor in small things to lighten your mood. 😄",
// "Do something creative like drawing, cooking, or crafting to redirect your strong emotions. 🎨",
// "Talk to someone you trust about what’s bothering you to feel understood. 💬"
// ];
// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities to stay calm. ⚖️",
// "Spend a few moments doing something you love to add a positive spark to your day. 🎨",
// "Reflect on small achievements or happy moments to stay motivated and content. 🌅",
// "Connect with loved ones to strengthen bonds and enjoy a sense of comfort. 👨‍👩‍👧‍👦",
// "Take short breaks during work or study to rest and refresh your mind. ☕",
// "Write down three things you are thankful for to maintain positivity and gratitude. 📖",
// "Set small goals and celebrate them to feel productive and happy. 🌱"
// ];
// }
// };

// function Dashboard() {

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);

// const [profilePic,setProfilePic] = useState(null);

// const currentUser = localStorage.getItem("currentUser");




// useEffect(()=>{
// window.scrollTo(0,0);
// },[]);

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// useEffect(() => {

// const loadProfilePic = () => {

// const user = localStorage.getItem("currentUser");

// if(user){

// const img = localStorage.getItem(`profilePic_${user}`);

// if(img){
// setProfilePic(img);
// }

// }

// };

// /* load first time */
// loadProfilePic();

// /* listen for update */
// window.addEventListener("profileUpdated", loadProfilePic);

// return () => {
// window.removeEventListener("profileUpdated", loadProfilePic);
// };

// }, []);
// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);
// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);
// setSuggestions(tips);

// const today=new Date().toDateString();
// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;
// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);
// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;
// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);
// localStorage.setItem(`lastEmotion_${currentUser}`,prediction.emotion);

// };

// const emotionData={
// labels:Object.keys(result?.scores||{}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores||{}),
// backgroundColor:["#51cf66","#ff6b6b","#fcc419","#845ef7","#74c0fc"]
// }
// ]
// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";
// const [showMenu,setShowMenu] = useState(false);

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-12 py-4 bg-white shadow-md mb-8">

// {/* LOGO */}

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

// {/* PROFILE */}

// <div className="relative">

// <button
// onClick={()=>setShowMenu(!showMenu)}
// className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-300 cursor-pointer hover:scale-105 transition"
// >

// {profilePic ? (

// <img
// src={profilePic}
// alt="profile"
// className="w-full h-full object-cover"
// />

// ) : (

// <div className="w-full h-full flex items-center justify-center bg-indigo-100">
// 👤
// </div>

// )}


// </button>
// {/* DROPDOWN */}

// {showMenu && (

// <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2">

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
// className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
// >
// Logout
// </button>

// </div>

// )}

// </div>

// </nav>








// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {
// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸",
// "Take time to appreciate your achievements and reward yourself in small ways today. 🏆",
// "Call or message someone you care about to spread positivity and brighten their day. 💌",
// "Enjoy a fun activity outside or in nature to keep your good mood flowing. 🌳"
// ];
// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶‍♂️",
// "Engage in a hobby or small activity you enjoy to distract and comfort yourself. 🎨",
// "Spend time with loved ones or friends to feel warmth and emotional support. 👨‍👩‍👧‍👦",
// "Focus on small things that make you happy or grateful each day. 🌷"
// ];
// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️",
// "Write down your fears and then think of ways to face them gradually and calmly. 📝",
// "Focus on small positive actions you can do today to feel more in control. 🌟",
// "Visualize yourself handling scary situations successfully to boost confidence and calm your mind. 🦸",
// "Take short steps towards what worries you instead of avoiding it completely. 👣",
// "Do grounding exercises or notice your surroundings to stay present and reduce fear. 🌳"
// ];
// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Write about what makes you angry to understand your feelings and release tension. ✍️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️",
// "Listen to calming music to help your mind relax and reduce irritability. 🎶",
// "Try to laugh or find humor in small things to lighten your mood. 😄",
// "Do something creative like drawing, cooking, or crafting to redirect your strong emotions. 🎨",
// "Talk to someone you trust about what’s bothering you to feel understood. 💬"
// ];
// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities to stay calm. ⚖️",
// "Spend a few moments doing something you love to add a positive spark to your day. 🎨",
// "Reflect on small achievements or happy moments to stay motivated and content. 🌅",
// "Connect with loved ones to strengthen bonds and enjoy a sense of comfort. 👨‍👩‍👧‍👦",
// "Take short breaks during work or study to rest and refresh your mind. ☕",
// "Write down three things you are thankful for to maintain positivity and gratitude. 📖",
// "Set small goals and celebrate them to feel productive and happy. 🌱"
// ];
// }
// };

// function Dashboard() {

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);
// const [profilePic,setProfilePic] = useState(null);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(() => {

// const loadProfilePic = () => {

// const user = localStorage.getItem("currentUser");

// if(user){

// const img = localStorage.getItem(`profilePic_${user}`);

// if(img){
// setProfilePic(img);
// }

// }

// };

// loadProfilePic();

// window.addEventListener("focus", loadProfilePic);

// /* NEW LISTENER FOR PROFILE UPDATE */
// window.addEventListener("profileUpdated", loadProfilePic);

// return () => {
// window.removeEventListener("focus", loadProfilePic);
// window.removeEventListener("profileUpdated", loadProfilePic);
// };

// }, []);

// useEffect(()=>{
// window.scrollTo(0,0);
// },[]);

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);
// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);
// setSuggestions(tips);

// const today=new Date().toDateString();
// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;
// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);
// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;
// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);
// localStorage.setItem(`lastEmotion_${currentUser}`,prediction.emotion);

// };

// const emotionData={
// labels:Object.keys(result?.scores||{}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores||{}),
// backgroundColor:["#51cf66","#ff6b6b","#fcc419","#845ef7","#74c0fc"]
// }
// ]
// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";
// const [showMenu,setShowMenu] = useState(false);

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-12 py-4 bg-white shadow-md mb-8">

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

// <div className="relative">

// <button
// onClick={()=>setShowMenu(!showMenu)}
// className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-300 cursor-pointer hover:scale-105 transition"
// >

// {profilePic ? (

// <img
// src={profilePic}
// alt="profile"
// className="w-full h-full object-cover"
// />

// ) : (

// <div className="w-full h-full flex items-center justify-center bg-indigo-100">
// 👤
// </div>

// )}

// </button>

// {showMenu && (

// <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2">

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
// className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
// >
// Logout
// </button>

// </div>

// )}

// </div>

// </nav>

// <div className="p-8">

// <div className="text-center mb-10">
// <h1 className="text-4xl font-bold text-blue-800">
// MindScope Mental Health Dashboard
// </h1>
// <p className="text-gray-600 mt-2">
// AI-powered emotional insight and wellness monitoring
// </p>
// </div>

// {/* STATS CARDS */}

// <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">😊 Current Emotion</h3>
// <p className="text-2xl font-bold mt-2 capitalize">
// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">📊 Mental Health Score</h3>
// <p className="text-3xl font-bold text-green-600 mt-2">
// {result ? `${result.score}/10` : "--"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">📝 Journal Entries</h3>
// <p className="text-3xl font-bold text-blue-600 mt-2">
// {localStorage.getItem(`journalCount_${currentUser}`)||0}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">🔥 Journaling Streak</h3>
// <p className="text-3xl font-bold text-orange-500 mt-2">{streak}</p>
// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">

// <h2 className="text-2xl font-semibold mb-4 text-center">
// How are you feeling today?
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write your thoughts and emotions here..."
// className="w-full border border-gray-300 p-4 rounded-xl h-36 focus:ring-2 focus:ring-indigo-400 outline-none"
// />

// <div className="text-center">

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition text-white px-8 py-3 rounded-lg"
// >
// Analyze Emotion
// </button>

// </div>

// </div>

// <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
// <p className="text-sm text-blue-800">{tip}</p>
// </div>

// {result && (

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

// <p className="text-lg">
// <strong>Detected Emotion:</strong>
// <span className="text-indigo-600 font-bold ml-2 capitalize">
// {result.emotion} {result.emoji}
// </span>
// </p>

// <p className="mt-2">
// <strong>Confidence:</strong>
// <span className="text-green-600 font-semibold ml-1">
// {result.confidence}%
// </span>
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
// <Bar data={emotionData}/>
// </div>

// </div>

// )}

// {suggestions.length>0 &&(

// <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

// <h2 className="text-2xl font-bold mb-4 text-indigo-700">
// 💡 AI Wellness Suggestions
// </h2>

// <ul className="space-y-3">

// {suggestions.map((item,index)=>(
// <li key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg text-gray-700 hover:shadow-md transition">
// {item}
// </li>
// ))}

// </ul>

// </div>

// )}

// </div>
// </div>
// );

// }

// export default Dashboard;




// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {
// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸",
// "Take time to appreciate your achievements and reward yourself in small ways today. 🏆",
// "Call or message someone you care about to spread positivity and brighten their day. 💌",
// "Enjoy a fun activity outside or in nature to keep your good mood flowing. 🌳"
// ];
// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶‍♂️",
// "Engage in a hobby or small activity you enjoy to distract and comfort yourself. 🎨",
// "Spend time with loved ones or friends to feel warmth and emotional support. 👨‍👩‍👧‍👦",
// "Focus on small things that make you happy or grateful each day. 🌷"
// ];
// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️",
// "Write down your fears and then think of ways to face them gradually and calmly. 📝",
// "Focus on small positive actions you can do today to feel more in control. 🌟",
// "Visualize yourself handling scary situations successfully to boost confidence and calm your mind. 🦸",
// "Take short steps towards what worries you instead of avoiding it completely. 👣",
// "Do grounding exercises or notice your surroundings to stay present and reduce fear. 🌳"
// ];
// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Write about what makes you angry to understand your feelings and release tension. ✍️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️",
// "Listen to calming music to help your mind relax and reduce irritability. 🎶",
// "Try to laugh or find humor in small things to lighten your mood. 😄",
// "Do something creative like drawing, cooking, or crafting to redirect your strong emotions. 🎨",
// "Talk to someone you trust about what’s bothering you to feel understood. 💬"
// ];
// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities to stay calm. ⚖️",
// "Spend a few moments doing something you love to add a positive spark to your day. 🎨",
// "Reflect on small achievements or happy moments to stay motivated and content. 🌅",
// "Connect with loved ones to strengthen bonds and enjoy a sense of comfort. 👨‍👩‍👧‍👦",
// "Take short breaks during work or study to rest and refresh your mind. ☕",
// "Write down three things you are thankful for to maintain positivity and gratitude. 📖",
// "Set small goals and celebrate them to feel productive and happy. 🌱"
// ];
// }
// };

// function Dashboard() {

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);

// const [profilePic,setProfilePic] = useState(null);


// const [open,setOpen] = useState(false);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(()=>{
// window.scrollTo(0,0);
// },[]);

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// useEffect(()=>{

// const user = localStorage.getItem("currentUser");

// const img = localStorage.getItem(`profilePic_${user}`);

// if(img){
// setProfilePic(img);
// }

// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);
// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);
// setSuggestions(tips);

// const today=new Date().toDateString();
// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;
// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);
// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;
// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);
// localStorage.setItem(`lastEmotion_${currentUser}`,prediction.emotion);

// };

// const emotionData={
// labels:Object.keys(result?.scores||{}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores||{}),
// backgroundColor:["#51cf66","#ff6b6b","#fcc419","#845ef7","#74c0fc"]
// }
// ]
// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

// return(

// <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-12 py-4 bg-white shadow-md mb-8">

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

// {/* <div className="relative group">

// <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-300">

// {profilePic ? (

// <img
// src={profilePic}
// className="w-full h-full object-cover"
// />

// ) : (

// <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600">
// 👤
// </div>

// )}

// </div>

// <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition">

// <button onClick={()=>navigate("/profile")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
// Profile
// </button>

// <button onClick={()=>{localStorage.removeItem("token");navigate("/");}} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
// Logout
// </button>

// </div>
// </div> */}


// {/* <div className="relative group">

//   <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-400">
//     <img src={profilePic} className="w-full h-full object-cover"/>
//   </div>

//   <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200">

//     <button
//       onClick={()=>navigate("/profile")}
//       className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
//     >
//       👤 Profile
//     </button>

//     <button
//       onClick={()=>{
//         localStorage.removeItem("token");
//         navigate("/");
//       }}
//       className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
//     >
//       🚪 Logout
//     </button>

//   </div>

// </div> */}




// <div className="relative">

//   <div
//     onClick={()=>setOpen(!open)}
//     className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-400"
//   >
//     <img src={profilePic} className="w-full h-full object-cover"/>
//   </div>

//   {open && (

//   <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg">

//     <button
//       onClick={()=>navigate("/profile")}
//       className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
//     >
//       👤 Profile
//     </button>

//     <button
//       onClick={()=>{
//         localStorage.removeItem("token");
//         navigate("/");
//       }}
//       className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
//     >
//       🚪 Logout
//     </button>

//   </div>

//   )}

// </div>
// </nav>

// <div className="p-8">

// <div className="text-center mb-10">
// <h1 className="text-4xl font-bold text-blue-800">
// MindScope Mental Health Dashboard
// </h1>
// <p className="text-gray-600 mt-2">
// AI-powered emotional insight and wellness monitoring
// </p>
// </div>

// {/* STATS CARDS */}

// <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">😊 Current Emotion</h3>
// <p className="text-2xl font-bold mt-2 capitalize">
// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">📊 Mental Health Score</h3>
// <p className="text-3xl font-bold text-green-600 mt-2">
// {result ? `${result.score}/10` : "--"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">📝 Journal Entries</h3>
// <p className="text-3xl font-bold text-blue-600 mt-2">
// {localStorage.getItem(`journalCount_${currentUser}`)||0}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
// <h3 className="font-semibold text-indigo-700">🔥 Journaling Streak</h3>
// <p className="text-3xl font-bold text-orange-500 mt-2">{streak}</p>
// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">

// <h2 className="text-2xl font-semibold mb-4 text-center">
// How are you feeling today?
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write your thoughts and emotions here..."
// className="w-full border border-gray-300 p-4 rounded-xl h-36 focus:ring-2 focus:ring-indigo-400 outline-none"
// />

// <div className="text-center">

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition text-white px-8 py-3 rounded-lg"
// >
// Analyze Emotion
// </button>

// </div>

// </div>

// <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
// <p className="text-sm text-blue-800">{tip}</p>
// </div>

// {result && (

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

// <p className="text-lg">
// <strong>Detected Emotion:</strong>
// <span className="text-indigo-600 font-bold ml-2 capitalize">
// {result.emotion} {result.emoji}
// </span>
// </p>

// <p className="mt-2">
// <strong>Confidence:</strong>
// <span className="text-green-600 font-semibold ml-1">
// {result.confidence}%
// </span>
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
// <Bar data={emotionData}/>
// </div>

// </div>

// )}

// {suggestions.length>0 &&(

// <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

// <h2 className="text-2xl font-bold mb-4 text-indigo-700">
// 💡 AI Wellness Suggestions
// </h2>

// <ul className="space-y-3">

// {suggestions.map((item,index)=>(
// <li key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg text-gray-700 hover:shadow-md transition">
// {item}
// </li>
// ))}

// </ul>

// </div>

// )}

// </div>
// </div>
// );

// }

// export default Dashboard;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// function Dashboard(){

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:90,
// score:9,
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);
// setResult(prediction);

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;
// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);

// };

// const emotionData={
// labels:Object.keys(result?.scores||{}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores||{}),
// backgroundColor:["#4ade80","#f87171","#facc15","#a78bfa","#60a5fa"]
// }
// ]
// };

// return(

// <div className="flex min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* SIDEBAR */}

// <div className="w-64 bg-white shadow-lg flex flex-col justify-between">

// <div>

// <div className="flex items-center gap-2 p-6 border-b">

// <img src={pic} className="w-10"/>

// <h1 className="font-bold text-xl text-indigo-600">
// Moodly AI
// </h1>

// </div>

// <div className="mt-6 space-y-2 px-4">

// <button
// className="w-full text-left px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600 font-semibold"
// >
// Dashboard
// </button>

// <button
// onClick={()=>navigate("/profile")}
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Profile
// </button>

// <button
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Journal
// </button>

// <button
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Analytics
// </button>

// </div>

// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// className="m-4 px-4 py-3 bg-red-100 text-red-600 rounded-lg"
// >
// Logout
// </button>

// </div>

// {/* MAIN CONTENT */}

// <div className="flex-1 p-10">

// {/* WELCOME */}

// <h1 className="text-3xl font-bold text-gray-800 mb-6">

// Welcome back 👋

// </h1>

// {/* STATS */}

// <div className="grid md:grid-cols-4 gap-6 mb-10">

// <div className="bg-white p-6 rounded-2xl shadow">

// <p className="text-gray-500">Current Emotion</p>

// <p className="text-3xl font-bold mt-2">

// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}

// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow">

// <p className="text-gray-500">Mental Score</p>

// <p className="text-3xl font-bold text-green-600">

// {result ? `${result.score}/10` : "--"}

// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow">

// <p className="text-gray-500">Journal Entries</p>

// <p className="text-3xl font-bold text-blue-600">

// {localStorage.getItem(`journalCount_${currentUser}`)||0}

// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow">

// <p className="text-gray-500">Streak</p>

// <p className="text-3xl font-bold text-orange-500">

// {streak}

// </p>

// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-2xl shadow max-w-3xl">

// <h2 className="text-xl font-semibold mb-4">

// How are you feeling today?

// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write your thoughts..."
// className="w-full border p-4 rounded-xl h-32"
// />

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"
// >
// Analyze Emotion
// </button>

// </div>

// {/* CHART */}

// {result &&(

// <div className="bg-white p-6 rounded-2xl shadow mt-10 max-w-3xl">

// <h2 className="text-xl font-semibold mb-4">

// Emotion Distribution

// </h2>

// <Bar data={emotionData}/>

// </div>

// )}

// </div>

// </div>

// );

// }

// export default Dashboard;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {

// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸"
// ];

// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶"
// ];

// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️"
// ];

// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️"
// ];

// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities. ⚖️"
// ];
// }
// };

// function Dashboard(){

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);
// const [profilePic,setProfilePic] = useState(null);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(()=>{
// window.scrollTo(0,0);
// },[]);

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// useEffect(()=>{
// const img = localStorage.getItem(`profilePic_${currentUser}`);
// if(img){
// setProfilePic(img);
// }
// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);

// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);

// setSuggestions(tips);

// const today=new Date().toDateString();

// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;

// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);

// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;

// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);

// };

// const emotionData={

// labels:Object.keys(result?.scores || {}),

// datasets:[

// {

// label:"Emotion Probability",

// data:Object.values(result?.scores || {}),

// backgroundColor:[

// "#51cf66",
// "#ff6b6b",
// "#fcc419",
// "#845ef7",
// "#74c0fc"

// ]

// }

// ]

// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

// return(

// <div className="flex min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* SIDEBAR */}

// <div className="w-64 bg-white shadow-lg flex flex-col justify-between">

// <div>

// <div
// onClick={()=>navigate("/")}

// className="flex items-center gap-2 p-6 border-b cursor-pointer"
// >

// <img src={pic} className="w-10"/>

// <h1 className="font-bold text-xl text-indigo-600">
// Moodly AI
// </h1>

// </div>

// <div className="mt-6 space-y-2 px-4">

// <button className="w-full text-left px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600 font-semibold">
// Dashboard
// </button>

// <button
// onClick={()=>navigate("/profile")}
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Profile
// </button>

// </div>

// </div>

// <button
// onClick={()=>{

// localStorage.removeItem("token");

// navigate("/");

// }}

// className="m-4 px-4 py-3 bg-red-100 text-red-600 rounded-lg"
// >

// Logout

// </button>

// </div>

// {/* MAIN CONTENT */}

// <div className="flex-1 p-10">

// <h1 className="text-3xl font-bold text-gray-800 mb-8">

// MindScope Mental Health Dashboard

// </h1>

// {/* STATS */}

// <div className="grid md:grid-cols-4 gap-6 mb-10">

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold text-indigo-700">

// 😊 Current Emotion

// </h3>

// <p className="text-2xl font-bold mt-2 capitalize">

// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}

// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold text-indigo-700">

// 📊 Mental Health Score

// </h3>

// <p className="text-3xl font-bold text-green-600 mt-2">

// {result ? `${result.score}/10` : "--"}

// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold text-indigo-700">

// 📝 Journal Entries

// </h3>

// <p className="text-3xl font-bold text-blue-600 mt-2">

// {localStorage.getItem(`journalCount_${currentUser}`)||0}

// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h3 className="font-semibold text-indigo-700">

// 🔥 Journaling Streak

// </h3>

// <p className="text-3xl font-bold text-orange-500 mt-2">

// {streak}

// </p>

// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

// <h2 className="text-xl font-semibold mb-4">

// How are you feeling today?

// </h2>

// <textarea

// value={journal}

// onChange={(e)=>setJournal(e.target.value)}

// placeholder="Write your thoughts and emotions here..."

// className="w-full border border-gray-300 p-4 rounded-xl h-36"

// />

// <button

// onClick={analyzeEmotion}

// className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"

// >

// Analyze Emotion

// </button>

// </div>

// <div className="max-w-3xl mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">

// <p className="text-sm text-blue-800">{tip}</p>

// </div>

// {/* RESULTS */}

// {result &&(

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl">

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">

// Emotion Analysis

// </h2>

// <p>

// <strong>Detected Emotion:</strong>

// <span className="text-indigo-600 font-bold ml-2 capitalize">

// {result.emotion} {result.emoji}

// </span>

// </p>

// <p className="mt-2">

// <strong>Confidence:</strong>

// <span className="text-green-600 font-semibold ml-1">

// {result.confidence}%

// </span>

// </p>

// <p>

// <strong>Mental Health Score:</strong> {result.score}/10

// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">

// <h2 className="text-xl font-semibold mb-4">

// Emotion Distribution

// </h2>

// <Bar data={emotionData}/>

// </div>

// </div>

// )}

// {/* SUGGESTIONS */}

// {suggestions.length>0 &&(

// <div className="max-w-6xl mt-10 bg-white p-6 rounded-xl shadow">

// <h2 className="text-2xl font-bold mb-4 text-indigo-700">

// 💡 AI Wellness Suggestions

// </h2>

// <ul className="space-y-3">

// {suggestions.map((item,index)=>(

// <li key={index}

// className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">

// {item}

// </li>

// ))}

// </ul>

// </div>

// )}

// </div>

// </div>

// );

// }

// export default Dashboard;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";
// import { FaBell, FaSignOutAlt } from "react-icons/fa";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {

// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸"
// ];

// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶"
// ];

// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️"
// ];

// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️"
// ];

// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities. ⚖️"
// ];
// }
// };

// function Dashboard(){

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);

// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);

// setSuggestions(tips);

// const today=new Date().toDateString();

// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;

// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);

// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;

// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);

// };

// const emotionData={
// labels:Object.keys(result?.scores || {}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores || {}),
// backgroundColor:[
// "#51cf66",
// "#ff6b6b",
// "#fcc419",
// "#845ef7",
// "#74c0fc"
// ]
// }
// ]
// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

// return(

// <div className="flex min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">

// {/* SIDEBAR */}

// <div className="w-64 bg-white shadow-lg flex flex-col justify-between">

// <div>

// <div
// onClick={()=>navigate("/")}
// className="flex items-center gap-2 p-6 border-b cursor-pointer"
// >
// <img src={pic} className="w-10"/>
// <h1 className="font-bold text-xl text-indigo-600">
// Moodly AI
// </h1>
// </div>

// <div className="mt-6 space-y-2 px-4">

// <button className="w-full text-left px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600 font-semibold">
// Dashboard
// </button>

// <button
// onClick={()=>navigate("/profile")}
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Profile
// </button>

// </div>

// </div>

// </div>

// {/* MAIN CONTENT */}

// <div className="flex-1 p-10">

// {/* TOP RIGHT ICONS */}

// <div className="flex justify-end gap-6 mb-4">

// <div className="relative">
// <FaBell className="text-2xl text-yellow-500"/>
// <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
// 1
// </span>
// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// >
// <FaSignOutAlt className="text-2xl"/>
// </button>

// </div>

// <h1 className="text-3xl font-bold text-gray-800 mb-8">
// MindScope Mental Health Dashboard
// </h1>

// {/* STATS */}

// <div className="grid md:grid-cols-4 gap-6 mb-10">

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="font-semibold text-indigo-700">😊 Current Emotion</h3>
// <p className="text-2xl font-bold mt-2 capitalize">
// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="font-semibold text-indigo-700">📊 Mental Health Score</h3>
// <p className="text-3xl font-bold text-green-600 mt-2">
// {result ? `${result.score}/10` : "--"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="font-semibold text-indigo-700">📝 Journal Entries</h3>
// <p className="text-3xl font-bold text-blue-600 mt-2">
// {localStorage.getItem(`journalCount_${currentUser}`)||0}
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="font-semibold text-indigo-700">🔥 Journaling Streak</h3>
// <p className="text-3xl font-bold text-orange-500 mt-2">
// {streak}
// </p>
// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-xl shadow max-w-3xl">

// <h2 className="text-xl font-semibold mb-4">
// How are you feeling today?
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write your thoughts and emotions here..."
// className="w-full border border-gray-300 p-4 rounded-xl h-36"
// />

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"
// >
// Analyze Emotion
// </button>

// </div>

// <div className="max-w-3xl mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
// <p className="text-sm text-blue-800">{tip}</p>
// </div>

// {/* RESULTS */}

// {result &&(

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl">

// <div className="bg-white p-6 rounded-xl shadow">
// <h2 className="text-xl font-semibold mb-4">
// Emotion Analysis
// </h2>

// <p>
// <strong>Detected Emotion:</strong>
// <span className="text-indigo-600 font-bold ml-2 capitalize">
// {result.emotion} {result.emoji}
// </span>
// </p>

// <p className="mt-2">
// <strong>Confidence:</strong>
// <span className="text-green-600 font-semibold ml-1">
// {result.confidence}%
// </span>
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h2 className="text-xl font-semibold mb-4">
// Emotion Distribution
// </h2>

// <Bar data={emotionData}/>
// </div>

// </div>

// )}

// {/* SUGGESTIONS */}

// {suggestions.length>0 &&(

// <div className="max-w-6xl mt-10 bg-white p-6 rounded-xl shadow">

// <h2 className="text-2xl font-bold mb-4 text-indigo-700">
// 💡 AI Wellness Suggestions
// </h2>

// <ul className="space-y-3">

// {suggestions.map((item,index)=>(

// <li key={index}
// className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">

// {item}

// </li>

// ))}

// </ul>

// </div>

// )}

// {/* HOW WE SUPPORT YOU */}

// <div className="mt-16">

// <h2 className="text-3xl font-bold text-center mb-10">
// How We Support You
// </h2>

// <div className="grid md:grid-cols-4 gap-6">

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-lg">Emotion Detection</h3>
// <p className="text-gray-600 mt-2">
// AI detects emotional signals hidden in text.
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-lg">AI Analysis</h3>
// <p className="text-gray-600 mt-2">
// Machine learning analyzes emotional tone.
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-lg">Progress Tracking</h3>
// <p className="text-gray-600 mt-2">
// Track emotional trends over time.
// </p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">
// <h3 className="font-semibold text-lg">Support System</h3>
// <p className="text-gray-600 mt-2">
// Encouraging healthy emotional habits.
// </p>
// </div>

// </div>

// </div>

// </div>

// </div>

// );

// }

// export default Dashboard;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import pic from "../assets/logo pic.png";

// import { FaBell, FaSignOutAlt, FaBrain, FaRobot, FaChartLine, FaUserFriends } from "react-icons/fa";

// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
// CategoryScale,
// LinearScale,
// PointElement,
// LineElement,
// BarElement,
// Title,
// Tooltip,
// Legend
// );

// const getSuggestions = (emotion) => {
// switch (emotion) {

// case "joy":
// return [
// "Keep celebrating the small wins today and let your happiness spread to everyone around you. 🌞",
// "Spend a few moments doing something you love to boost your joyful energy even further. 🎨",
// "Share a smile or kind words with someone—it will make both of you feel even happier. 😊",
// "Notice the little happy moments around you, like a nice breeze or warm sunlight. 🌸"
// ];

// case "sadness":
// return [
// "Talk to someone you trust about your feelings to ease your sadness and feel supported. 💬",
// "Write your thoughts in a journal to release heavy emotions and understand yourself better. ✍️",
// "Listen to music that comforts you and brings calm to your mind and heart. 🎵",
// "Take a short walk in fresh air to clear your thoughts and lift your mood. 🚶"
// ];

// case "fear":
// return [
// "Take slow, deep breaths and remind yourself that you are safe and capable right now. 🌬️",
// "Talk about your worries with a trusted person to feel supported and less anxious. 🗣️"
// ];

// case "anger":
// return [
// "Pause and take a few deep breaths before reacting to cool down and think clearly. 🌬️",
// "Go for a walk or do light exercise to channel your energy positively. 🚶‍♀️"
// ];

// default:
// return [
// "Keep a balanced routine today with small breaks and enjoyable activities. ⚖️"
// ];
// }
// };

// function Dashboard(){

// const navigate = useNavigate();

// const [journal,setJournal] = useState("");
// const [result,setResult] = useState(null);
// const [streak,setStreak] = useState(0);
// const [suggestions,setSuggestions] = useState([]);

// const currentUser = localStorage.getItem("currentUser");

// useEffect(()=>{
// const savedStreak = localStorage.getItem(`journalStreak_${currentUser}`);
// if(savedStreak){
// setStreak(parseInt(savedStreak));
// }
// },[]);

// const detectEmotion=(text)=>{

// text=text.toLowerCase();

// if(text.includes("happy")||text.includes("good")||text.includes("great")||text.includes("love")){
// return{
// emotion:"joy",
// emoji:"😊",
// confidence:92,
// score:9,
// risk:"LOW",
// scores:{joy:0.9,sadness:0.02,anger:0.02,fear:0.03,neutral:0.03}
// };
// }

// if(text.includes("sad")||text.includes("cry")||text.includes("depressed")){
// return{
// emotion:"sadness",
// emoji:"😢",
// confidence:88,
// score:3,
// risk:"HIGH",
// scores:{joy:0.05,sadness:0.85,anger:0.03,fear:0.04,neutral:0.03}
// };
// }

// if(text.includes("angry")||text.includes("hate")||text.includes("mad")){
// return{
// emotion:"anger",
// emoji:"😠",
// confidence:90,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.8,fear:0.02,neutral:0.03}
// };
// }

// if(text.includes("afraid")||text.includes("scared")){
// return{
// emotion:"fear",
// emoji:"😨",
// confidence:85,
// score:4,
// risk:"MEDIUM",
// scores:{joy:0.05,sadness:0.1,anger:0.05,fear:0.7,neutral:0.1}
// };
// }

// return{
// emotion:"neutral",
// emoji:"😐",
// confidence:70,
// score:5,
// risk:"LOW",
// scores:{joy:0.2,sadness:0.2,anger:0.1,fear:0.1,neutral:0.4}
// };

// };

// const analyzeEmotion=()=>{

// const prediction=detectEmotion(journal);

// setResult(prediction);

// const tips=getSuggestions(prediction.emotion);

// setSuggestions(tips);

// const today=new Date().toDateString();

// const lastDate=localStorage.getItem(`lastJournalDate_${currentUser}`);

// let newStreak=streak;

// if(lastDate!==today){

// newStreak=streak+1;

// setStreak(newStreak);

// localStorage.setItem(`journalStreak_${currentUser}`,newStreak);

// localStorage.setItem(`lastJournalDate_${currentUser}`,today);

// }

// const prevCount=localStorage.getItem(`journalCount_${currentUser}`)||0;

// const newCount=Number(prevCount)+1;

// localStorage.setItem(`journalCount_${currentUser}`,newCount);

// };

// const emotionData={
// labels:Object.keys(result?.scores || {}),
// datasets:[
// {
// label:"Emotion Probability",
// data:Object.values(result?.scores || {}),
// backgroundColor:[
// "#4ade80",
// "#f87171",
// "#facc15",
// "#a78bfa",
// "#60a5fa"
// ]
// }
// ]
// };

// const tip="Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

// return(

// <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">

// {/* SIDEBAR */}

// <div className="w-64 bg-white shadow-xl flex flex-col fixed h-screen">

// <div>

// <div
// onClick={()=>navigate("/")}
// className="flex items-center gap-2 p-6 border-b cursor-pointer"
// >
// <img src={pic} className="w-10"/>
// <h1 className="font-bold text-xl text-indigo-600">
// Moodly AI
// </h1>
// </div>

// <div className="mt-6 space-y-2 px-4">

// <button className="w-full text-left px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600 font-semibold">
// Dashboard
// </button>

// <button
// onClick={()=>navigate("/profile")}
// className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
// >
// Profile
// </button>

// </div>

// </div>

// </div>

// {/* MAIN */}

// <div className="flex-1 ml-64 p-10">

// {/* TOP RIGHT */}

// <div className="flex justify-end gap-6 mb-4">

// <div className="relative">
// <FaBell className="text-2xl text-yellow-500"/>
// <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
// 1
// </span>
// </div>

// <button
// onClick={()=>{
// localStorage.removeItem("token");
// navigate("/");
// }}
// >
// <FaSignOutAlt className="text-2xl"/>
// </button>

// </div>

// {/* HERO */}

// <div className="bg-white rounded-2xl shadow p-8 mb-10 flex items-center justify-between">

// <div>
// <h1 className="text-3xl font-bold text-indigo-700">
// Welcome Back 👋
// </h1>

// <p className="text-gray-500 mt-2">
// Track emotions and understand your mental wellbeing.
// </p>

// </div>

// <img
// src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
// className="w-40"
// />

// </div>

// {/* STATS */}

// <div className="grid md:grid-cols-4 gap-6 mb-10">

// <div className="bg-white p-6 rounded-2xl shadow">
// <h3 className="font-semibold text-indigo-700">😊 Current Emotion</h3>
// <p className="text-2xl font-bold mt-2 capitalize">
// {result ? `${result.emotion} ${result.emoji}` : "Not analyzed"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-2xl shadow">
// <h3 className="font-semibold text-indigo-700">📊 Mental Health Score</h3>
// <p className="text-3xl font-bold text-green-600 mt-2">
// {result ? `${result.score}/10` : "--"}
// </p>
// </div>

// <div className="bg-white p-6 rounded-2xl shadow">
// <h3 className="font-semibold text-indigo-700">📝 Journal Entries</h3>
// <p className="text-3xl font-bold text-blue-600 mt-2">
// {localStorage.getItem(`journalCount_${currentUser}`)||0}
// </p>
// </div>

// <div className="bg-white p-6 rounded-2xl shadow">
// <h3 className="font-semibold text-indigo-700">🔥 Journaling Streak</h3>
// <p className="text-3xl font-bold text-orange-500 mt-2">
// {streak}
// </p>
// </div>

// </div>

// {/* JOURNAL */}

// <div className="bg-white p-8 rounded-2xl shadow max-w-4xl">

// <h2 className="text-xl font-semibold mb-4">
// How are you feeling today?
// </h2>

// <textarea
// value={journal}
// onChange={(e)=>setJournal(e.target.value)}
// placeholder="Write your thoughts and emotions here..."
// className="w-full border border-gray-200 p-4 rounded-xl h-36 outline-none"
// />

// <button
// onClick={analyzeEmotion}
// className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
// >
// Analyze Emotion
// </button>

// </div>



// <div className="mt-6">

// <button
// onClick={()=>navigate("/chatbot")}
// className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow"
// >

// 🤖 Talk to AI Mental Health Assistant

// </button>

// </div>






// <div className="max-w-4xl mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
// <p className="text-sm text-blue-800">{tip}</p>
// </div>

// {/* RESULTS */}

// {result &&(

// <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl">

// <div className="bg-white p-6 rounded-2xl shadow">
// <h2 className="text-xl font-semibold mb-4">
// Emotion Analysis
// </h2>

// <p>
// <strong>Detected Emotion:</strong>
// <span className="text-indigo-600 font-bold ml-2 capitalize">
// {result.emotion} {result.emoji}
// </span>
// </p>

// <p className="mt-2">
// <strong>Confidence:</strong>
// <span className="text-green-600 font-semibold ml-1">
// {result.confidence}%
// </span>
// </p>

// <p>
// <strong>Mental Health Score:</strong> {result.score}/10
// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow">
// <h2 className="text-xl font-semibold mb-4">
// Emotion Distribution
// </h2>

// <Bar data={emotionData}/>
// </div>

// </div>

// )}

// {/* SUGGESTIONS */}

// {suggestions.length>0 &&(

// <div className="max-w-6xl mt-10 bg-white p-6 rounded-2xl shadow">

// <h2 className="text-2xl font-bold mb-4 text-indigo-700">
// 💡 AI Wellness Suggestions
// </h2>

// <ul className="space-y-3">

// {suggestions.map((item,index)=>(

// <li key={index}
// className="bg-blue-50 border border-blue-200 p-4 rounded-xl">

// {item}

// </li>

// ))}

// </ul>

// </div>

// )}

// {/* SUPPORT SECTION */}

// <div className="mt-16">

// <h2 className="text-3xl font-bold text-center mb-10">
// How We Support You
// </h2>

// <div className="grid md:grid-cols-4 gap-8">

// <div className="bg-white p-6 rounded-2xl shadow text-center">

// <FaBrain className="text-blue-600 text-3xl mx-auto mb-3"/>

// <h3 className="font-semibold text-lg">Emotion Detection</h3>

// <p className="text-gray-600 mt-2">
// AI detects emotional signals hidden in text.
// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow text-center">

// <FaRobot className="text-blue-600 text-3xl mx-auto mb-3"/>

// <h3 className="font-semibold text-lg">AI Analysis</h3>

// <p className="text-gray-600 mt-2">
// Machine learning analyzes emotional tone.
// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow text-center">

// <FaChartLine className="text-blue-600 text-3xl mx-auto mb-3"/>

// <h3 className="font-semibold text-lg">Progress Tracking</h3>

// <p className="text-gray-600 mt-2">
// Track emotional trends over time.
// </p>

// </div>

// <div className="bg-white p-6 rounded-2xl shadow text-center">

// <FaUserFriends className="text-blue-600 text-3xl mx-auto mb-3"/>

// <h3 className="font-semibold text-lg">Support System</h3>

// <p className="text-gray-600 mt-2">
// Encouraging healthy emotional habits.
// </p>

// </div>

// </div>

// </div>

// </div>

// </div>

// );

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
  FaCog
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

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

  // const analyzeEmotion = () => {
  //   if (!currentUserEmail) return;

  //   const res = detectEmotion(journal);
  //   setResult(res);

  //   const today = new Date().toDateString();
  //   const lastDate = localStorage.getItem(`lastDate_${currentUserEmail}`);

  //   if (lastDate !== today) {
  //     const newStreak = streak + 1;
  //     setStreak(newStreak);

  //     localStorage.setItem(`journalStreak_${currentUserEmail}`, newStreak);
  //     localStorage.setItem(`lastDate_${currentUserEmail}`, today);
  //   }
  // };



  const analyzeEmotion = async () => {
  if (!journal) return;

  try {
    // ✅ BACKEND CALL
    const res = await fetch("http://localhost:5000/api/journal/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: journal })
    });

    const data = await res.json();
    console.log("Saved:", data);

    // ✅ LOCAL EMOTION (UI lai)
    const emotionRes = detectEmotion(journal);
    setResult(emotionRes);

    // ✅ STREAK LOGIC
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
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">

      {/* sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-28"
        } bg-white shadow-lg fixed h-screen transition-all duration-500 ease-in-out flex flex-col justify-between overflow-visible`}
      >

        {/* TOP */}
        <div>

          {/* LOGO */}
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

          {/* NAV */}
          <div className="p-3 space-y-4 mt-2">

            <button className={`group flex items-center ${
              isOpen ? "px-4 bg-indigo-100 text-indigo-600" : "justify-center py-4"
            } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}>
              <FaChartBar />
              {isOpen && "Dashboard"}
            </button>

            <button
              onClick={() => navigate("/chatbot")}
              className={`group flex items-center ${
                isOpen ? "px-4" : "justify-center py-4"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}
            >
              <FaRobot />
              {isOpen && "AI Assistant"}
            </button>

            <button
              onClick={() => navigate("/profile")}
              className={`group flex items-center ${
                isOpen ? "px-4" : "justify-center py-4"
              } gap-3 w-full rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:scale-105`}
            >
              <FaUser />
              {isOpen && "Profile"}
            </button>

          </div>
        </div>

        {/* USER */}
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

    {/* SETTINGS */}
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

    {/* LOGOUT */}
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
              onClick={() => document.querySelector("textarea")?.focus()}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              + New Entry
            </button>

            <FaBell className="text-xl cursor-pointer" />

            <div
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold cursor-pointer"
            >
              {currentUserName.charAt(0).toUpperCase()}
            </div>

            <FaSignOutAlt
              className="text-xl cursor-pointer"
              onClick={() => {
                sessionStorage.clear();
                navigate("/");
              }}
            />
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[ 
            { title: "Current Emotion", value: result ? `${result.emotion} ${result.emoji}` : "--" },
            { title: "Mental Score", value: result ? `${result.score}/10` : "--" },
            { title: "Streak 🔥", value: streak }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3>{item.title}</h3>
              <p className="text-xl mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* JOURNAL */}
        <div className="bg-white p-6 rounded-xl shadow max-w-3xl">
          <h2 className="text-lg font-semibold mb-3">
            How are you feeling today?
          </h2>

          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Write here..."
          />

          <button
            onClick={analyzeEmotion}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Analyze
          </button>
        </div>

        {/* NEW CONTENT */}
        {result && (
          <div className="mt-8 max-w-3xl space-y-6">

            <div className="bg-white p-5 rounded-xl shadow border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold">
                Detected Emotion: {result.emotion} {result.emoji}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Mental Score: {result.score}/10
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Suggestions 💡</h3>

              <div className="space-y-2 text-sm">
                <div className="p-2 bg-indigo-50 rounded">🌿 Take a walk</div>
                <div className="p-2 bg-indigo-50 rounded">🎧 Listen to music</div>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => navigate("/ai-analysis")}
                className="text-indigo-600 text-sm"
              >
                View Detailed Analysis →
              </button>
            </div>

          </div> //3
        )}

      </div>     


               {/* ✅ SETTINGS MODAL */}
      {openSettings && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

    {/* overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setOpenSettings(false)}
    ></div>

    {/* modal box */}
    <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 z-50">

      {/* close button */}
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


      
    </div> // 1
    
  );
}

export default Dashboard;



