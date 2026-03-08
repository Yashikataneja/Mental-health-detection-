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























import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [journal, setJournal] = useState("");
  const [result, setResult] = useState(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem("journalStreak");
    if (savedStreak) {
      setStreak(parseInt(savedStreak));
    }
  }, []);

  const detectEmotion = (text) => {
    text = text.toLowerCase();

    if (
      text.includes("happy") ||
      text.includes("good") ||
      text.includes("great") ||
      text.includes("love")
    ) {
      return {
        emotion: "joy",
        emoji: "😊",
        confidence: 92,
        score: 9,
        risk: "LOW",
        scores: {
          joy: 0.9,
          sadness: 0.02,
          anger: 0.02,
          fear: 0.03,
          neutral: 0.03
        }
      };
    }

    if (
      text.includes("sad") ||
      text.includes("cry") ||
      text.includes("depressed") ||
      text.includes("bad")
    ) {
      return {
        emotion: "sadness",
        emoji: "😢",
        confidence: 88,
        score: 3,
        risk: "HIGH",
        scores: {
          joy: 0.05,
          sadness: 0.85,
          anger: 0.03,
          fear: 0.04,
          neutral: 0.03
        }
      };
    }

    if (text.includes("angry") || text.includes("hate") || text.includes("mad")) {
      return {
        emotion: "anger",
        emoji: "😠",
        confidence: 90,
        score: 4,
        risk: "MEDIUM",
        scores: {
          joy: 0.05,
          sadness: 0.1,
          anger: 0.8,
          fear: 0.02,
          neutral: 0.03
        }
      };
    }

    if (
      text.includes("afraid") ||
      text.includes("scared") ||
      text.includes("fear") ||
      text.includes("panic")
    ) {
      return {
        emotion: "fear",
        emoji: "😨",
        confidence: 85,
        score: 4,
        risk: "MEDIUM",
        scores: {
          joy: 0.05,
          sadness: 0.1,
          anger: 0.05,
          fear: 0.7,
          neutral: 0.1
        }
      };
    }

    return {
      emotion: "neutral",
      emoji: "😐",
      confidence: 70,
      score: 5,
      risk: "LOW",
      scores: {
        joy: 0.2,
        sadness: 0.2,
        anger: 0.1,
        fear: 0.1,
        neutral: 0.4
      }
    };
  };

  const analyzeEmotion = () => {
    const prediction = detectEmotion(journal);
    setResult(prediction);

    const today = new Date().toDateString();
    const lastDate = localStorage.getItem("lastJournalDate");

    let newStreak = streak;

    if (lastDate !== today) {
      newStreak = streak + 1;
      setStreak(newStreak);

      localStorage.setItem("journalStreak", newStreak);
      localStorage.setItem("lastJournalDate", today);
    }
  };

  const emotionData = {
    labels: Object.keys(result?.scores || {}),
    datasets: [
      {
        label: "Emotion Probability",
        data: Object.values(result?.scores || {}),
        backgroundColor: ["#51cf66", "#ff6b6b", "#fcc419", "#845ef7", "#74c0fc"]
      }
    ]
  };

  const tip =
    "Tip: Writing your feelings daily can improve emotional awareness and reduce stress.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white p-8">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">
          MindScope Mental Health Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          AI-powered emotional insight and wellness monitoring
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-blue-700">🧠 AI Emotion Detection</h3>
          <p className="text-sm text-gray-500 mt-2">
            Our AI analyzes text to detect emotional states.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-blue-700">📊 Mental Health Score</h3>
          <p className="text-sm text-gray-500 mt-2">
            Get a quick insight into your emotional wellbeing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-blue-700">📈 Emotion Insights</h3>
          <p className="text-sm text-gray-500 mt-2">
            Visual charts help understand emotional patterns.
          </p>
        </div>

        {/* STREAK CARD */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-blue-700">🔥 Journaling Streak</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">{streak}</p>
          <p className="text-sm text-gray-500">Days in a row</p>
        </div>

      </div>

      {/* JOURNAL */}
      <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Daily Journal</h2>

        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Write how you are feeling today..."
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          onClick={analyzeEmotion}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Analyze Emotion
        </button>
      </div>

      {/* TIP */}
      <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-800">{tip}</p>
      </div>

      {/* RESULT */}
      {result && (
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Emotion Analysis</h2>

            <p>
              <strong>Detected Emotion:</strong> {result.emotion} {result.emoji}
            </p>
            <p>
              <strong>Confidence:</strong> {result.confidence}%
            </p>
            <p>
              <strong>Mental Health Score:</strong> {result.score}/10
            </p>

            {result.risk === "HIGH" && (
              <div className="bg-red-100 text-red-700 p-3 mt-4 rounded">
                ⚠ High Mental Health Risk Detected
              </div>
            )}

            {result.risk === "MEDIUM" && (
              <div className="bg-yellow-100 text-yellow-700 p-3 mt-4 rounded">
                ⚠ Medium Risk
              </div>
            )}

            {result.risk === "LOW" && (
              <div className="bg-green-100 text-green-700 p-3 mt-4 rounded">
                ✔ Low Risk
              </div>
            )}

          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Emotion Distribution</h2>
            <Bar data={emotionData} />
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;