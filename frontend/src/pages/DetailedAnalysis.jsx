// // import { useLocation, useNavigate } from "react-router-dom";
// // import { FaArrowLeft, FaDownload } from "react-icons/fa";
// // import { useState, useEffect } from "react";
// // //import jsPDF from "jspdf";

// // import { Line } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   LineElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   Tooltip,
// //   Legend
// // } from "chart.js";

// // ChartJS.register(
// //   LineElement,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   Tooltip,
// //   Legend
// // );

// // function DetailedAnalysis() {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();

// //   const [darkMode, setDarkMode] = useState(
// //     localStorage.getItem("darkMode") === "true"
// //   );

// //   useEffect(() => {
// //     if (darkMode) document.body.classList.add("dark");
// //     else document.body.classList.remove("dark");
// //   }, [darkMode]);

// //   if (!state) return <div className="p-6">No Data</div>;

// //   const { result, journal } = state;
// //   const userId = localStorage.getItem("userId") || "user1";

// //   // 🔥 DYNAMIC CONFIDENCE
// //   const confidence = Math.min(95, result.score * 10 + 10);

// //   // 🔥 DYNAMIC KEYWORDS
// //   const keywords = journal
// //     ? journal.toLowerCase().split(" ").slice(0, 4)
// //     : [result.emotion];

// //   // 🔥 DYNAMIC AI EXPLANATION
// //   const explanationMap = {
// //     joy: "Your text reflects strong positivity and emotional clarity.",
// //     sad: "Your text indicates low mood and emotional heaviness.",
// //     angry: "Your language shows frustration and emotional intensity.",
// //     neutral: "Your tone appears stable with balanced emotional signals."
// //   };

// //   const explanation =
// //     explanationMap[result.emotion] ||
// //     "Your emotional tone was analyzed based on your input.";

// //   // 🔥 HISTORY
// //   const storedHistory =
// //     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

// //   const newEntry = {
// //     score: result.score,
// //     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
// //   };

// //   const updatedHistory = [...storedHistory, newEntry].slice(-7);

// //   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

// //   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// //   const scores = updatedHistory.map((i) => i.score);

// //   // 🔥 GRAPH DATA
// //   const lineData = {
// //     labels: days,
// //     datasets: [
// //       {
// //         label: "Mood",
// //         data: scores,
// //         borderColor: "#4f46e5",
// //         backgroundColor: "rgba(79,70,229,0.15)",
// //         tension: 0.5,
// //         fill: true,
// //         pointRadius: 5
// //       }
// //     ]
// //   };

// //   // 🔥 DYNAMIC INSIGHT
// //   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

// //   let insight = "";
// //   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
// //   else if (avg >= 4)
// //     insight = "Your mood remained balanced with slight variations.";
// //   else insight = "Your week shows emotional lows. Take care 💙";

// //   // 🔥 DYNAMIC RECOMMENDATION
// //   let recommendation = "";
// //   if (result.score >= 7)
// //     recommendation = "Maintain your positive habits and keep doing what works 🚀";
// //   else if (result.score >= 4)
// //     recommendation = "Try relaxing activities like music or short breaks.";
// //   else
// //     recommendation = "Consider rest, talking to someone, or light activities.";

// //   const peak = Math.max(...scores);
// //   const low = Math.min(...scores);

// //   // 🔥 PDF
// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     doc.text("Mood Report", 20, 20);
// //     doc.text(`Emotion: ${result.emotion}`, 20, 40);
// //     doc.text(`Score: ${result.score}`, 20, 50);
// //     doc.text(`Confidence: ${confidence}%`, 20, 60);
// //     doc.text(`Entry: ${journal}`, 20, 80);
// //     doc.save("Mood_Report.pdf");
// //   };

// //   return (
// //     <div className="min-h-screen px-4 md:px-8 py-6 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:bg-slate-950">

// //       <div className="max-w-6xl mx-auto space-y-6">

// //         {/* HEADER */}
// //         <div className="rounded-3xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#38bdf8] p-6 text-white shadow-xl flex justify-between">
// //           <div>
// //             <h1 className="text-xl font-bold">Detailed Analysis</h1>
// //             <p className="text-sm opacity-90">AI mood insights</p>
// //             <p className="text-xs mt-1">Confidence: {confidence}%</p>
// //           </div>

// //           <button
// //             onClick={() => {
// //               const newMode = !darkMode;
// //               setDarkMode(newMode);
// //               localStorage.setItem("darkMode", newMode);
// //             }}
// //             className="bg-white/20 px-3 py-1 rounded-lg"
// //           >
// //             {darkMode ? "☀" : "🌙"}
// //           </button>
// //         </div>

// //         {/* TOP CARDS */}
// //         <div className="grid md:grid-cols-3 gap-4">

// //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// //             <h3 className="font-semibold">📝 Your Entry</h3>
// //             <p className="mt-2 text-sm">
// //               {journal} — reflecting your current emotional state.
// //             </p>
// //           </div>

// //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// //             <h3 className="font-semibold">🧠 AI Insight</h3>
// //             <p className="text-sm mt-2">{explanation}</p>
// //           </div>

// //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// //             <h3 className="font-semibold">🔍 Key Indicators</h3>
// //             <div className="flex gap-2 flex-wrap mt-3">
// //               {keywords.map((k, i) => (
// //                 <span
// //                   key={i}
// //                   className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
// //                 >
// //                   {k}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* GRAPH */}
// //         <div className="grid lg:grid-cols-12 gap-4">

// //           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 backdrop-blur shadow-lg">
// //             <h3 className="font-semibold mb-3">Mood Trend (Last 7 Days)</h3>
// //             <div className="h-64">
// //               <Line data={lineData} />
// //             </div>

// //             <p className="text-sm mt-3 opacity-80">{insight}</p>
// //           </div>

// //           {/* SIDE */}
// //           <div className="lg:col-span-4 space-y-4">

// //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// //               <h3 className="font-semibold">📊 Mood Highlights</h3>
// //               <p className="text-sm mt-2">Peak: {peak}</p>
// //               <p className="text-sm">Lowest: {low}</p>
// //             </div>

// //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// //               <h3 className="font-semibold">📈 Weekly Insight</h3>
// //               <p className="text-sm mt-2">{insight}</p>
// //             </div>

// //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// //               <h3 className="font-semibold">🚀 Recommendation</h3>
// //               <p className="text-sm mt-2">{recommendation}</p>
// //             </div>

// //           </div>
// //         </div>

// //         {/* BUTTONS */}
// //         <div className="flex justify-between">
// //           <button
// //             onClick={() => navigate(-1)}
// //             className="bg-slate-500 hover:scale-105 transition text-white px-4 py-2 rounded-lg flex items-center gap-2"
// //           >
// //             <FaArrowLeft /> Back
// //           </button>

// //           <button
// //             onClick={downloadPDF}
// //             className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg"
// //           >
// //             <FaDownload /> Download PDF
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default DetailedAnalysis;









// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaDownload } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import jsPDF from "jspdf"; // ✅ FIXED: import enabled

// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// function DetailedAnalysis() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("darkMode") === "true"
//   );

//   // ✅ FIXED: apply dark mode on root element (important for Tailwind)
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   if (!state) return <div className="p-6">No Data</div>;

//   const { result, journal } = state;
//   const userId = localStorage.getItem("userId") || "user1";

//   const confidence = Math.min(95, result.score * 10 + 10);

//   const keywords = journal
//     ? journal.toLowerCase().split(" ").slice(0, 4)
//     : [result.emotion];

//   const explanationMap = {
//     joy: "Your text reflects strong positivity and emotional clarity.",
//     sad: "Your text indicates low mood and emotional heaviness.",
//     angry: "Your language shows frustration and emotional intensity.",
//     neutral: "Your tone appears stable with balanced emotional signals."
//   };

//   const explanation =
//     explanationMap[result.emotion] ||
//     "Your emotional tone was analyzed based on your input.";

//   const storedHistory =
//     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

//   const newEntry = {
//     score: result.score,
//     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
//   };

//   const updatedHistory = [...storedHistory, newEntry].slice(-7);

//   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//   const scores = updatedHistory.map((i) => i.score);

//   const lineData = {
//     labels: days,
//     datasets: [
//       {
//         label: "Mood",
//         data: scores,
//         borderColor: "#4f46e5",
//         backgroundColor: "rgba(79,70,229,0.15)",
//         tension: 0.5,
//         fill: true,
//         pointRadius: 5
//       }
//     ]
//   };

//   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

//   let insight = "";
//   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
//   else if (avg >= 4)
//     insight = "Your mood remained balanced with slight variations.";
//   else insight = "Your week shows emotional lows. Take care 💙";

//   let recommendation = "";
//   if (result.score >= 7)
//     recommendation =
//       "Maintain your positive habits and keep doing what works 🚀";
//   else if (result.score >= 4)
//     recommendation = "Try relaxing activities like music or short breaks.";
//   else
//     recommendation =
//       "Consider rest, talking to someone, or light activities.";

//   const peak = Math.max(...scores);
//   const low = Math.min(...scores);

//   // ✅ FIXED: Proper PDF function
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("Mood Report", 20, 20);

//     doc.setFontSize(12);
//     doc.text(`Emotion: ${result.emotion}`, 20, 40);
//     doc.text(`Score: ${result.score}`, 20, 50);
//     doc.text(`Confidence: ${confidence}%`, 20, 60);

//     // wrap long text properly
//     const splitText = doc.splitTextToSize(
//       `Entry: ${journal}`,
//       170
//     );
//     doc.text(splitText, 20, 80);

//     doc.save("Mood_Report.pdf");
//   };

//   return (
//     <div className="min-h-screen px-4 md:px-8 py-6 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:bg-slate-950 text-black dark:text-white">

//       <div className="max-w-6xl mx-auto space-y-6">

//         {/* HEADER */}
//         <div className="rounded-3xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#38bdf8] p-6 text-white shadow-xl flex justify-between">
//           <div>
//             <h1 className="text-xl font-bold">Detailed Analysis</h1>
//             <p className="text-sm opacity-90">AI mood insights</p>
//             <p className="text-xs mt-1">Confidence: {confidence}%</p>
//           </div>

//           <button
//             onClick={() => {
//               const newMode = !darkMode;
//               setDarkMode(newMode);
//               localStorage.setItem("darkMode", newMode);
//             }}
//             className="bg-white/20 px-3 py-1 rounded-lg"
//           >
//             {darkMode ? "☀" : "🌙"}
//           </button>
//         </div>

//         {/* TOP CARDS */}
//         <div className="grid md:grid-cols-3 gap-4">

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
//             <h3 className="font-semibold">📝 Your Entry</h3>
//             <p className="mt-2 text-sm">
//               {journal} — reflecting your current emotional state.
//             </p>
//           </div>

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
//             <h3 className="font-semibold">🧠 AI Insight</h3>
//             <p className="text-sm mt-2">{explanation}</p>
//           </div>

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
//             <h3 className="font-semibold">🔍 Key Indicators</h3>
//             <div className="flex gap-2 flex-wrap mt-3">
//               {keywords.map((k, i) => (
//                 <span
//                   key={i}
//                   className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
//                 >
//                   {k}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* GRAPH */}
//         <div className="grid lg:grid-cols-12 gap-4">

//           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-slate-800 backdrop-blur shadow-lg">
//             <h3 className="font-semibold mb-3">Mood Trend (Last 7 Days)</h3>
//             <div className="h-64">
//               <Line data={lineData} />
//             </div>

//             <p className="text-sm mt-3 opacity-80">{insight}</p>
//           </div>

//           <div className="lg:col-span-4 space-y-4">

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
//               <h3 className="font-semibold">📊 Mood Highlights</h3>
//               <p className="text-sm mt-2">Peak: {peak}</p>
//               <p className="text-sm">Lowest: {low}</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
//               <h3 className="font-semibold">📈 Weekly Insight</h3>
//               <p className="text-sm mt-2">{insight}</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
//               <h3 className="font-semibold">🚀 Recommendation</h3>
//               <p className="text-sm mt-2">{recommendation}</p>
//             </div>

//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex justify-between">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-slate-500 hover:scale-105 transition text-white px-4 py-2 rounded-lg flex items-center gap-2"
//           >
//             <FaArrowLeft /> Back
//           </button>

//           <button
//             onClick={downloadPDF}
//             className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg"
//           >
//             <FaDownload /> Download PDF
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default DetailedAnalysis;

















import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function DetailedAnalysis() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🌗 SYSTEM AUTO-DETECT
  const getInitialTheme = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // ✅ APPLY THEME
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  if (!state) return <div className="p-6">No Data</div>;

  const { result, journal } = state;
  const userId = localStorage.getItem("userId") || "user1";

  const confidence = Math.min(95, result.score * 10 + 10);

  const keywords = journal
    ? journal.toLowerCase().split(" ").slice(0, 4)
    : [result.emotion];

  const explanationMap = {
    joy: "Your text reflects strong positivity and emotional clarity.",
    sad: "Your text indicates low mood and emotional heaviness.",
    angry: "Your language shows frustration and emotional intensity.",
    neutral: "Your tone appears stable with balanced emotional signals."
  };

  const explanation =
    explanationMap[result.emotion] ||
    "Your emotional tone was analyzed based on your input.";

  const storedHistory =
    JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

  const newEntry = {
    score: result.score,
    day: new Date().toLocaleDateString("en-US", { weekday: "short" })
  };

  const updatedHistory = [...storedHistory, newEntry].slice(-7);
  localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const scores = updatedHistory.map((i) => i.score);

  // 📊 CHART SYNC WITH THEME
  const lineData = {
    labels: days,
    datasets: [
      {
        label: "Mood",
        data: scores,
        borderColor: darkMode ? "#22d3ee" : "#4f46e5",
        backgroundColor: darkMode
          ? "rgba(34,211,238,0.15)"
          : "rgba(79,70,229,0.15)",
        tension: 0.5,
        fill: true,
        pointRadius: 5
      }
    ]
  };

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  let insight = "";
  if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
  else if (avg >= 4)
    insight = "Your mood remained balanced with slight variations.";
  else insight = "Your week shows emotional lows. Take care 💙";

  let recommendation = "";
  if (result.score >= 7)
    recommendation = "Maintain your positive habits 🚀";
  else if (result.score >= 4)
    recommendation = "Try relaxing activities like music.";
  else recommendation = "Consider rest or talking to someone.";

  const peak = Math.max(...scores);
  const low = Math.min(...scores);

  // 📄 PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Mood Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Emotion: ${result.emotion}`, 20, 40);
    doc.text(`Score: ${result.score}`, 20, 50);
    doc.text(`Confidence: ${confidence}%`, 20, 60);

    const splitText = doc.splitTextToSize(`Entry: ${journal}`, 170);
    doc.text(splitText, 20, 80);

    doc.save("Mood_Report.pdf");
  };

  return (
    <div
      className="
      min-h-screen px-4 md:px-8 py-6

      bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
      dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-black dark:to-black

      text-slate-800 dark:text-slate-200
      transition-all duration-500
    "
    >
      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 p-6 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] flex justify-between">
          <div>
            <h1 className="text-xl font-bold">Detailed Analysis</h1>
            <p className="text-sm opacity-90">AI mood insights</p>
            <p className="text-xs mt-1">Confidence: {confidence}%</p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/20 px-3 py-1 rounded-lg"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

        {/* TOP CARDS */}
        <div className="grid md:grid-cols-3 gap-4">
          {[ 
            { title: "📝 Your Entry", content: `${journal}` },
            { title: "🧠 AI Insight", content: explanation },
            { title: "🔍 Key Indicators", content: keywords.join(", ") }
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.content}</p>
            </div>
          ))}
        </div>

        {/* GRAPH */}
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
            <h3 className="font-semibold mb-3">Mood Trend</h3>
            <div className="h-64">
              <Line data={lineData} />
            </div>
            <p className="text-sm mt-3">{insight}</p>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur">
              <p>Peak: {peak}</p>
              <p>Lowest: {low}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur">
              <p>{recommendation}</p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-500 text-white px-4 py-2 rounded-lg flex gap-2"
          >
            <FaArrowLeft /> Back
          </button>

          <button
            onClick={downloadPDF}
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-2 rounded-lg flex gap-2 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
          >
            <FaDownload /> Download PDF
          </button>
        </div>

      </div>
    </div>
  );
}

export default DetailedAnalysis;