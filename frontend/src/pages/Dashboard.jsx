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



import { useState } from "react";
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
import { Bar, Line } from "react-chartjs-2";

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

  // Improved emotion detection function
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

    if (
      text.includes("angry") ||
      text.includes("hate") ||
      text.includes("mad")
    ) {
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
      text.includes("nervous") ||
      text.includes("panic") ||
      text.includes("dark") // optional: detecting fear in dark
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

    // Default neutral
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

  const moodTrend = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Mood Score",
        data: [3, 4, 2, 3, 5, 4, 3],
        borderColor: "#4dabf7",
        fill: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Mental Health Dashboard
      </h1>

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
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Analyze Emotion
        </button>
      </div>

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

      <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Weekly Mood Trend</h2>
        <Line data={moodTrend} />
      </div>
    </div>
  );
}

export default Dashboard;