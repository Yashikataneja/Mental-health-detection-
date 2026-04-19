// // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // import { FaArrowLeft, FaDownload } from "react-icons/fa";
// // // // // import { useState, useEffect } from "react";
// // // // // //import jsPDF from "jspdf";

// // // // // import { Line } from "react-chartjs-2";
// // // // // import {
// // // // //   Chart as ChartJS,
// // // // //   LineElement,
// // // // //   CategoryScale,
// // // // //   LinearScale,
// // // // //   PointElement,
// // // // //   Tooltip,
// // // // //   Legend
// // // // // } from "chart.js";

// // // // // ChartJS.register(
// // // // //   LineElement,
// // // // //   CategoryScale,
// // // // //   LinearScale,
// // // // //   PointElement,
// // // // //   Tooltip,
// // // // //   Legend
// // // // // );

// // // // // function DetailedAnalysis() {
// // // // //   const { state } = useLocation();
// // // // //   const navigate = useNavigate();

// // // // //   const [darkMode, setDarkMode] = useState(
// // // // //     localStorage.getItem("darkMode") === "true"
// // // // //   );

// // // // //   useEffect(() => {
// // // // //     if (darkMode) document.body.classList.add("dark");
// // // // //     else document.body.classList.remove("dark");
// // // // //   }, [darkMode]);

// // // // //   if (!state) return <div className="p-6">No Data</div>;

// // // // //   const { result, journal } = state;
// // // // //   const userId = localStorage.getItem("userId") || "user1";

// // // // //   // 🔥 DYNAMIC CONFIDENCE
// // // // //   const confidence = Math.min(95, result.score * 10 + 10);

// // // // //   // 🔥 DYNAMIC KEYWORDS
// // // // //   const keywords = journal
// // // // //     ? journal.toLowerCase().split(" ").slice(0, 4)
// // // // //     : [result.emotion];

// // // // //   // 🔥 DYNAMIC AI EXPLANATION
// // // // //   const explanationMap = {
// // // // //     joy: "Your text reflects strong positivity and emotional clarity.",
// // // // //     sad: "Your text indicates low mood and emotional heaviness.",
// // // // //     angry: "Your language shows frustration and emotional intensity.",
// // // // //     neutral: "Your tone appears stable with balanced emotional signals."
// // // // //   };

// // // // //   const explanation =
// // // // //     explanationMap[result.emotion] ||
// // // // //     "Your emotional tone was analyzed based on your input.";

// // // // //   // 🔥 HISTORY
// // // // //   const storedHistory =
// // // // //     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

// // // // //   const newEntry = {
// // // // //     score: result.score,
// // // // //     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
// // // // //   };

// // // // //   const updatedHistory = [...storedHistory, newEntry].slice(-7);

// // // // //   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

// // // // //   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// // // // //   const scores = updatedHistory.map((i) => i.score);

// // // // //   // 🔥 GRAPH DATA
// // // // //   const lineData = {
// // // // //     labels: days,
// // // // //     datasets: [
// // // // //       {
// // // // //         label: "Mood",
// // // // //         data: scores,
// // // // //         borderColor: "#4f46e5",
// // // // //         backgroundColor: "rgba(79,70,229,0.15)",
// // // // //         tension: 0.5,
// // // // //         fill: true,
// // // // //         pointRadius: 5
// // // // //       }
// // // // //     ]
// // // // //   };

// // // // //   // 🔥 DYNAMIC INSIGHT
// // // // //   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

// // // // //   let insight = "";
// // // // //   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
// // // // //   else if (avg >= 4)
// // // // //     insight = "Your mood remained balanced with slight variations.";
// // // // //   else insight = "Your week shows emotional lows. Take care 💙";

// // // // //   // 🔥 DYNAMIC RECOMMENDATION
// // // // //   let recommendation = "";
// // // // //   if (result.score >= 7)
// // // // //     recommendation = "Maintain your positive habits and keep doing what works 🚀";
// // // // //   else if (result.score >= 4)
// // // // //     recommendation = "Try relaxing activities like music or short breaks.";
// // // // //   else
// // // // //     recommendation = "Consider rest, talking to someone, or light activities.";

// // // // //   const peak = Math.max(...scores);
// // // // //   const low = Math.min(...scores);

// // // // //   // 🔥 PDF
// // // // //   const downloadPDF = () => {
// // // // //     const doc = new jsPDF();
// // // // //     doc.text("Mood Report", 20, 20);
// // // // //     doc.text(`Emotion: ${result.emotion}`, 20, 40);
// // // // //     doc.text(`Score: ${result.score}`, 20, 50);
// // // // //     doc.text(`Confidence: ${confidence}%`, 20, 60);
// // // // //     doc.text(`Entry: ${journal}`, 20, 80);
// // // // //     doc.save("Mood_Report.pdf");
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen px-4 md:px-8 py-6 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:bg-slate-950">

// // // // //       <div className="max-w-6xl mx-auto space-y-6">

// // // // //         {/* HEADER */}
// // // // //         <div className="rounded-3xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#38bdf8] p-6 text-white shadow-xl flex justify-between">
// // // // //           <div>
// // // // //             <h1 className="text-xl font-bold">Detailed Analysis</h1>
// // // // //             <p className="text-sm opacity-90">AI mood insights</p>
// // // // //             <p className="text-xs mt-1">Confidence: {confidence}%</p>
// // // // //           </div>

// // // // //           <button
// // // // //             onClick={() => {
// // // // //               const newMode = !darkMode;
// // // // //               setDarkMode(newMode);
// // // // //               localStorage.setItem("darkMode", newMode);
// // // // //             }}
// // // // //             className="bg-white/20 px-3 py-1 rounded-lg"
// // // // //           >
// // // // //             {darkMode ? "☀" : "🌙"}
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* TOP CARDS */}
// // // // //         <div className="grid md:grid-cols-3 gap-4">

// // // // //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// // // // //             <h3 className="font-semibold">📝 Your Entry</h3>
// // // // //             <p className="mt-2 text-sm">
// // // // //               {journal} — reflecting your current emotional state.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// // // // //             <h3 className="font-semibold">🧠 AI Insight</h3>
// // // // //             <p className="text-sm mt-2">{explanation}</p>
// // // // //           </div>

// // // // //           <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-lg shadow-lg">
// // // // //             <h3 className="font-semibold">🔍 Key Indicators</h3>
// // // // //             <div className="flex gap-2 flex-wrap mt-3">
// // // // //               {keywords.map((k, i) => (
// // // // //                 <span
// // // // //                   key={i}
// // // // //                   className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
// // // // //                 >
// // // // //                   {k}
// // // // //                 </span>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* GRAPH */}
// // // // //         <div className="grid lg:grid-cols-12 gap-4">

// // // // //           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 backdrop-blur shadow-lg">
// // // // //             <h3 className="font-semibold mb-3">Mood Trend (Last 7 Days)</h3>
// // // // //             <div className="h-64">
// // // // //               <Line data={lineData} />
// // // // //             </div>

// // // // //             <p className="text-sm mt-3 opacity-80">{insight}</p>
// // // // //           </div>

// // // // //           {/* SIDE */}
// // // // //           <div className="lg:col-span-4 space-y-4">

// // // // //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// // // // //               <h3 className="font-semibold">📊 Mood Highlights</h3>
// // // // //               <p className="text-sm mt-2">Peak: {peak}</p>
// // // // //               <p className="text-sm">Lowest: {low}</p>
// // // // //             </div>

// // // // //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// // // // //               <h3 className="font-semibold">📈 Weekly Insight</h3>
// // // // //               <p className="text-sm mt-2">{insight}</p>
// // // // //             </div>

// // // // //             <div className="p-4 rounded-2xl bg-white/60 backdrop-blur shadow">
// // // // //               <h3 className="font-semibold">🚀 Recommendation</h3>
// // // // //               <p className="text-sm mt-2">{recommendation}</p>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>

// // // // //         {/* BUTTONS */}
// // // // //         <div className="flex justify-between">
// // // // //           <button
// // // // //             onClick={() => navigate(-1)}
// // // // //             className="bg-slate-500 hover:scale-105 transition text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // // // //           >
// // // // //             <FaArrowLeft /> Back
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={downloadPDF}
// // // // //             className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg"
// // // // //           >
// // // // //             <FaDownload /> Download PDF
// // // // //           </button>
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default DetailedAnalysis;









// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { FaArrowLeft, FaDownload } from "react-icons/fa";
// // // // import { useState, useEffect } from "react";
// // // // import jsPDF from "jspdf"; // ✅ FIXED: import enabled

// // // // import { Line } from "react-chartjs-2";
// // // // import {
// // // //   Chart as ChartJS,
// // // //   LineElement,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   PointElement,
// // // //   Tooltip,
// // // //   Legend
// // // // } from "chart.js";

// // // // ChartJS.register(
// // // //   LineElement,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   PointElement,
// // // //   Tooltip,
// // // //   Legend
// // // // );

// // // // function DetailedAnalysis() {
// // // //   const { state } = useLocation();
// // // //   const navigate = useNavigate();

// // // //   const [darkMode, setDarkMode] = useState(
// // // //     localStorage.getItem("darkMode") === "true"
// // // //   );

// // // //   // ✅ FIXED: apply dark mode on root element (important for Tailwind)
// // // //   useEffect(() => {
// // // //     if (darkMode) {
// // // //       document.documentElement.classList.add("dark");
// // // //     } else {
// // // //       document.documentElement.classList.remove("dark");
// // // //     }
// // // //   }, [darkMode]);

// // // //   if (!state) return <div className="p-6">No Data</div>;

// // // //   const { result, journal } = state;
// // // //   const userId = localStorage.getItem("userId") || "user1";

// // // //   const confidence = Math.min(95, result.score * 10 + 10);

// // // //   const keywords = journal
// // // //     ? journal.toLowerCase().split(" ").slice(0, 4)
// // // //     : [result.emotion];

// // // //   const explanationMap = {
// // // //     joy: "Your text reflects strong positivity and emotional clarity.",
// // // //     sad: "Your text indicates low mood and emotional heaviness.",
// // // //     angry: "Your language shows frustration and emotional intensity.",
// // // //     neutral: "Your tone appears stable with balanced emotional signals."
// // // //   };

// // // //   const explanation =
// // // //     explanationMap[result.emotion] ||
// // // //     "Your emotional tone was analyzed based on your input.";

// // // //   const storedHistory =
// // // //     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

// // // //   const newEntry = {
// // // //     score: result.score,
// // // //     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
// // // //   };

// // // //   const updatedHistory = [...storedHistory, newEntry].slice(-7);

// // // //   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

// // // //   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// // // //   const scores = updatedHistory.map((i) => i.score);

// // // //   const lineData = {
// // // //     labels: days,
// // // //     datasets: [
// // // //       {
// // // //         label: "Mood",
// // // //         data: scores,
// // // //         borderColor: "#4f46e5",
// // // //         backgroundColor: "rgba(79,70,229,0.15)",
// // // //         tension: 0.5,
// // // //         fill: true,
// // // //         pointRadius: 5
// // // //       }
// // // //     ]
// // // //   };

// // // //   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

// // // //   let insight = "";
// // // //   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
// // // //   else if (avg >= 4)
// // // //     insight = "Your mood remained balanced with slight variations.";
// // // //   else insight = "Your week shows emotional lows. Take care 💙";

// // // //   let recommendation = "";
// // // //   if (result.score >= 7)
// // // //     recommendation =
// // // //       "Maintain your positive habits and keep doing what works 🚀";
// // // //   else if (result.score >= 4)
// // // //     recommendation = "Try relaxing activities like music or short breaks.";
// // // //   else
// // // //     recommendation =
// // // //       "Consider rest, talking to someone, or light activities.";

// // // //   const peak = Math.max(...scores);
// // // //   const low = Math.min(...scores);

// // // //   // ✅ FIXED: Proper PDF function
// // // //   const downloadPDF = () => {
// // // //     const doc = new jsPDF();

// // // //     doc.setFontSize(18);
// // // //     doc.text("Mood Report", 20, 20);

// // // //     doc.setFontSize(12);
// // // //     doc.text(`Emotion: ${result.emotion}`, 20, 40);
// // // //     doc.text(`Score: ${result.score}`, 20, 50);
// // // //     doc.text(`Confidence: ${confidence}%`, 20, 60);

// // // //     // wrap long text properly
// // // //     const splitText = doc.splitTextToSize(
// // // //       `Entry: ${journal}`,
// // // //       170
// // // //     );
// // // //     doc.text(splitText, 20, 80);

// // // //     doc.save("Mood_Report.pdf");
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen px-4 md:px-8 py-6 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:bg-slate-950 text-black dark:text-white">

// // // //       <div className="max-w-6xl mx-auto space-y-6">

// // // //         {/* HEADER */}
// // // //         <div className="rounded-3xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#38bdf8] p-6 text-white shadow-xl flex justify-between">
// // // //           <div>
// // // //             <h1 className="text-xl font-bold">Detailed Analysis</h1>
// // // //             <p className="text-sm opacity-90">AI mood insights</p>
// // // //             <p className="text-xs mt-1">Confidence: {confidence}%</p>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => {
// // // //               const newMode = !darkMode;
// // // //               setDarkMode(newMode);
// // // //               localStorage.setItem("darkMode", newMode);
// // // //             }}
// // // //             className="bg-white/20 px-3 py-1 rounded-lg"
// // // //           >
// // // //             {darkMode ? "☀" : "🌙"}
// // // //           </button>
// // // //         </div>

// // // //         {/* TOP CARDS */}
// // // //         <div className="grid md:grid-cols-3 gap-4">

// // // //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
// // // //             <h3 className="font-semibold">📝 Your Entry</h3>
// // // //             <p className="mt-2 text-sm">
// // // //               {journal} — reflecting your current emotional state.
// // // //             </p>
// // // //           </div>

// // // //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
// // // //             <h3 className="font-semibold">🧠 AI Insight</h3>
// // // //             <p className="text-sm mt-2">{explanation}</p>
// // // //           </div>

// // // //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur-lg shadow-lg">
// // // //             <h3 className="font-semibold">🔍 Key Indicators</h3>
// // // //             <div className="flex gap-2 flex-wrap mt-3">
// // // //               {keywords.map((k, i) => (
// // // //                 <span
// // // //                   key={i}
// // // //                   className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
// // // //                 >
// // // //                   {k}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* GRAPH */}
// // // //         <div className="grid lg:grid-cols-12 gap-4">

// // // //           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-slate-800 backdrop-blur shadow-lg">
// // // //             <h3 className="font-semibold mb-3">Mood Trend (Last 7 Days)</h3>
// // // //             <div className="h-64">
// // // //               <Line data={lineData} />
// // // //             </div>

// // // //             <p className="text-sm mt-3 opacity-80">{insight}</p>
// // // //           </div>

// // // //           <div className="lg:col-span-4 space-y-4">

// // // //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
// // // //               <h3 className="font-semibold">📊 Mood Highlights</h3>
// // // //               <p className="text-sm mt-2">Peak: {peak}</p>
// // // //               <p className="text-sm">Lowest: {low}</p>
// // // //             </div>

// // // //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
// // // //               <h3 className="font-semibold">📈 Weekly Insight</h3>
// // // //               <p className="text-sm mt-2">{insight}</p>
// // // //             </div>

// // // //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800 backdrop-blur shadow">
// // // //               <h3 className="font-semibold">🚀 Recommendation</h3>
// // // //               <p className="text-sm mt-2">{recommendation}</p>
// // // //             </div>

// // // //           </div>
// // // //         </div>

// // // //         {/* BUTTONS */}
// // // //         <div className="flex justify-between">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="bg-slate-500 hover:scale-105 transition text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // // //           >
// // // //             <FaArrowLeft /> Back
// // // //           </button>

// // // //           <button
// // // //             onClick={downloadPDF}
// // // //             className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg"
// // // //           >
// // // //             <FaDownload /> Download PDF
// // // //           </button>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DetailedAnalysis;

















// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { FaArrowLeft, FaDownload } from "react-icons/fa";
// // // import { useState, useEffect } from "react";
// // // import jsPDF from "jspdf";

// // // import { Line } from "react-chartjs-2";
// // // import {
// // //   Chart as ChartJS,
// // //   LineElement,
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   Tooltip,
// // //   Legend
// // // } from "chart.js";

// // // ChartJS.register(
// // //   LineElement,
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   Tooltip,
// // //   Legend
// // // );

// // // function DetailedAnalysis() {
// // //   const { state } = useLocation();
// // //   const navigate = useNavigate();

// // //   // 🌗 SYSTEM AUTO-DETECT
// // //   const getInitialTheme = () => {
// // //     const saved = localStorage.getItem("darkMode");
// // //     if (saved !== null) return saved === "true";
// // //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// // //   };

// // //   const [darkMode, setDarkMode] = useState(getInitialTheme);

// // //   // ✅ APPLY THEME
// // //   useEffect(() => {
// // //     const root = document.documentElement;

// // //     if (darkMode) root.classList.add("dark");
// // //     else root.classList.remove("dark");

// // //     localStorage.setItem("darkMode", darkMode);
// // //   }, [darkMode]);

// // //   if (!state) return <div className="p-6">No Data</div>;

// // //   const { result, journal } = state;
// // //   const userId = localStorage.getItem("userId") || "user1";

// // //   const confidence = Math.min(95, result.score * 10 + 10);

// // //   const keywords = journal
// // //     ? journal.toLowerCase().split(" ").slice(0, 4)
// // //     : [result.emotion];

// // //   const explanationMap = {
// // //     joy: "Your text reflects strong positivity and emotional clarity.",
// // //     sad: "Your text indicates low mood and emotional heaviness.",
// // //     angry: "Your language shows frustration and emotional intensity.",
// // //     neutral: "Your tone appears stable with balanced emotional signals."
// // //   };

// // //   const explanation =
// // //     explanationMap[result.emotion] ||
// // //     "Your emotional tone was analyzed based on your input.";

// // //   const storedHistory =
// // //     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

// // //   const newEntry = {
// // //     score: result.score,
// // //     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
// // //   };

// // //   const updatedHistory = [...storedHistory, newEntry].slice(-7);
// // //   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

// // //   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// // //   const scores = updatedHistory.map((i) => i.score);

// // //   // 📊 CHART SYNC WITH THEME
// // //   const lineData = {
// // //     labels: days,
// // //     datasets: [
// // //       {
// // //         label: "Mood",
// // //         data: scores,
// // //         borderColor: darkMode ? "#22d3ee" : "#4f46e5",
// // //         backgroundColor: darkMode
// // //           ? "rgba(34,211,238,0.15)"
// // //           : "rgba(79,70,229,0.15)",
// // //         tension: 0.5,
// // //         fill: true,
// // //         pointRadius: 5
// // //       }
// // //     ]
// // //   };

// // //   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

// // //   let insight = "";
// // //   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
// // //   else if (avg >= 4)
// // //     insight = "Your mood remained balanced with slight variations.";
// // //   else insight = "Your week shows emotional lows. Take care 💙";

// // //   let recommendation = "";
// // //   if (result.score >= 7)
// // //     recommendation = "Maintain your positive habits 🚀";
// // //   else if (result.score >= 4)
// // //     recommendation = "Try relaxing activities like music.";
// // //   else recommendation = "Consider rest or talking to someone.";

// // //   const peak = Math.max(...scores);
// // //   const low = Math.min(...scores);

// // //   // 📄 PDF
// // //   const downloadPDF = () => {
// // //     const doc = new jsPDF();

// // //     doc.setFontSize(18);
// // //     doc.text("Mood Report", 20, 20);

// // //     doc.setFontSize(12);
// // //     doc.text(`Emotion: ${result.emotion}`, 20, 40);
// // //     doc.text(`Score: ${result.score}`, 20, 50);
// // //     doc.text(`Confidence: ${confidence}%`, 20, 60);

// // //     const splitText = doc.splitTextToSize(`Entry: ${journal}`, 170);
// // //     doc.text(splitText, 20, 80);

// // //     doc.save("Mood_Report.pdf");
// // //   };

// // //   return (
// // //     <div
// // //       className="
// // //       min-h-screen px-4 md:px-8 py-6

// // //       bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
// // //       dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-black dark:to-black

// // //       text-slate-800 dark:text-slate-200
// // //       transition-all duration-500
// // //     "
// // //     >
// // //       <div className="max-w-6xl mx-auto space-y-6">

// // //         {/* HEADER */}
// // //         <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 p-6 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] flex justify-between">
// // //           <div>
// // //             <h1 className="text-xl font-bold">Detailed Analysis</h1>
// // //             <p className="text-sm opacity-90">AI mood insights</p>
// // //             <p className="text-xs mt-1">Confidence: {confidence}%</p>
// // //           </div>

// // //           <button
// // //             onClick={() => setDarkMode(!darkMode)}
// // //             className="bg-white/20 px-3 py-1 rounded-lg"
// // //           >
// // //             {darkMode ? "☀" : "🌙"}
// // //           </button>
// // //         </div>

// // //         {/* TOP CARDS */}
// // //         <div className="grid md:grid-cols-3 gap-4">
// // //           {[ 
// // //             { title: "📝 Your Entry", content: `${journal}` },
// // //             { title: "🧠 AI Insight", content: explanation },
// // //             { title: "🔍 Key Indicators", content: keywords.join(", ") }
// // //           ].map((item, i) => (
// // //             <div
// // //               key={i}
// // //               className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]"
// // //             >
// // //               <h3 className="font-semibold">{item.title}</h3>
// // //               <p className="mt-2 text-sm">{item.content}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* GRAPH */}
// // //         <div className="grid lg:grid-cols-12 gap-4">
// // //           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
// // //             <h3 className="font-semibold mb-3">Mood Trend</h3>
// // //             <div className="h-64">
// // //               <Line data={lineData} />
// // //             </div>
// // //             <p className="text-sm mt-3">{insight}</p>
// // //           </div>

// // //           <div className="lg:col-span-4 space-y-4">
// // //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur">
// // //               <p>Peak: {peak}</p>
// // //               <p>Lowest: {low}</p>
// // //             </div>

// // //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur">
// // //               <p>{recommendation}</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* BUTTONS */}
// // //         <div className="flex justify-between">
// // //           <button
// // //             onClick={() => navigate(-1)}
// // //             className="bg-slate-500 text-white px-4 py-2 rounded-lg flex gap-2"
// // //           >
// // //             <FaArrowLeft /> Back
// // //           </button>

// // //           <button
// // //             onClick={downloadPDF}
// // //             className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-2 rounded-lg flex gap-2 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
// // //           >
// // //             <FaDownload /> Download PDF
// // //           </button>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default DetailedAnalysis;








// // import { useLocation, useNavigate } from "react-router-dom";
// // import { FaArrowLeft, FaDownload } from "react-icons/fa";
// // import { useState, useEffect } from "react";
// // import jsPDF from "jspdf";

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

// //   const getInitialTheme = () => {
// //     const saved = localStorage.getItem("darkMode");
// //     if (saved !== null) return saved === "true";
// //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// //   };

// //   const [darkMode, setDarkMode] = useState(getInitialTheme);

// //   useEffect(() => {
// //     const root = document.documentElement;

// //     if (darkMode) root.classList.add("dark");
// //     else root.classList.remove("dark");

// //     localStorage.setItem("darkMode", darkMode);
// //   }, [darkMode]);

// //   if (!state) {
// //     return <div className="p-6">No Data</div>;
// //   }

// //   const { result, journal } = state;
// //   const userId = localStorage.getItem("userId") || "user1";

// //   const safeScore = Number(result?.score || 0);
// //   const safeRiskScore = Number(result?.riskScore || 0);
// //   const safeConfidence = Number(result?.confidence || 0);
// //   const predictedLabel = result?.predicted_label || "Normal";
// //   const sentimentScore = Number(result?.sentiment_score || 0);
// //   const cognitiveDistortions = result?.cognitive_distortions || [];
// //   const behavioralSignals = result?.behavioral_signals || [];

// //   const confidencePercent = Math.max(
// //     0,
// //     Math.min(100, Math.round(safeConfidence * 100))
// //   );

// //   const keywords = journal
// //     ? journal
// //         .toLowerCase()
// //         .replace(/[^a-z0-9\s]/g, " ")
// //         .split(/\s+/)
// //         .filter(Boolean)
// //         .slice(0, 6)
// //     : [result?.emotion || "neutral"];

// //   const explanationMap = {
// //     joy: "Your text reflects strong positivity and emotional clarity.",
// //     happiness: "Your writing shows warmth, positivity, and emotional ease.",
// //     sad: "Your text indicates low mood and emotional heaviness.",
// //     sadness: "Your text suggests emotional heaviness, low mood, or distress.",
// //     angry: "Your language shows frustration and emotional intensity.",
// //     anger: "Your language reflects frustration, irritation, or tension.",
// //     anxiety: "Your words suggest worry, nervousness, or mental restlessness.",
// //     stress: "Your response suggests pressure, overload, or emotional strain.",
// //     neutral: "Your tone appears stable with balanced emotional signals."
// //   };

// //   const explanation =
// //     explanationMap[(result?.emotion || "neutral").toLowerCase()] ||
// //     "Your emotional tone was analyzed using trained text classification and sentiment signals.";

// //   const storedHistory =
// //     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

// //   const newEntry = {
// //     score: safeScore,
// //     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
// //   };

// //   const updatedHistory = [...storedHistory, newEntry].slice(-7);
// //   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

// //   const historyLabels = updatedHistory.map((item) => item.day);
// //   const scores = updatedHistory.map((item) => item.score);

// //   const avg =
// //     scores.length > 0
// //       ? scores.reduce((a, b) => a + b, 0) / scores.length
// //       : safeScore;

// //   let insight = "";
// //   if (avg >= 7) {
// //     insight = "You had a consistently positive emotional week.";
// //   } else if (avg >= 4) {
// //     insight = "Your mood stayed moderately balanced with some variation.";
// //   } else {
// //     insight = "Your recent pattern shows lower mood and may need extra care.";
// //   }

// //   let recommendation = "";
// //   if (predictedLabel === "Suicidal") {
// //     recommendation =
// //       "Your text suggests serious distress. Please consider reaching out to a trusted person or a licensed mental health professional immediately.";
// //   } else if (predictedLabel === "Depression") {
// //     recommendation =
// //       "Your writing reflects emotional heaviness. Gentle routines, rest, and talking to someone you trust may help.";
// //   } else if (predictedLabel === "Anxiety") {
// //     recommendation =
// //       "Your response shows worry and tension. Breathing exercises, grounding, and slower routines may help.";
// //   } else if (predictedLabel === "Stress") {
// //     recommendation =
// //       "Your text reflects mental overload. Short breaks, sleep, hydration, and reducing pressure may help.";
// //   } else if (safeScore >= 7) {
// //     recommendation =
// //       "Your emotional state looks comparatively stable. Try to maintain the habits that are helping.";
// //   } else if (safeScore >= 4) {
// //     recommendation =
// //       "A balanced self-care routine, short breaks, and emotional check-ins may be useful.";
// //   } else {
// //     recommendation =
// //       "Consider rest, light activity, and reaching out for support if these feelings continue.";
// //   }

// //   const peak = scores.length ? Math.max(...scores) : safeScore;
// //   const low = scores.length ? Math.min(...scores) : safeScore;

// //   const lineData = {
// //     labels: historyLabels.length ? historyLabels : ["Today"],
// //     datasets: [
// //       {
// //         label: "Mood",
// //         data: scores.length ? scores : [safeScore],
// //         borderColor: darkMode ? "#22d3ee" : "#4f46e5",
// //         backgroundColor: darkMode
// //           ? "rgba(34,211,238,0.15)"
// //           : "rgba(79,70,229,0.15)",
// //         tension: 0.5,
// //         fill: true,
// //         pointRadius: 5
// //       }
// //     ]
// //   };

// //   const lineOptions = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         labels: {
// //           color: darkMode ? "#e2e8f0" : "#334155"
// //         }
// //       }
// //     },
// //     scales: {
// //       x: {
// //         ticks: {
// //           color: darkMode ? "#cbd5e1" : "#475569"
// //         },
// //         grid: {
// //           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
// //         }
// //       },
// //       y: {
// //         min: 0,
// //         max: 10,
// //         ticks: {
// //           stepSize: 1,
// //           color: darkMode ? "#cbd5e1" : "#475569"
// //         },
// //         grid: {
// //           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
// //         }
// //       }
// //     }
// //   };

// //   const downloadPDF = () => {
// //     const doc = new jsPDF();

// //     doc.setFontSize(18);
// //     doc.text("Mood Report", 20, 20);

// //     doc.setFontSize(12);
// //     doc.text(`Emotion: ${result?.emotion || "neutral"}`, 20, 40);
// //     doc.text(`Predicted Label: ${predictedLabel}`, 20, 50);
// //     doc.text(`Mental Score: ${safeScore}/10`, 20, 60);
// //     doc.text(`Risk Score: ${safeRiskScore}`, 20, 70);
// //     doc.text(`Confidence: ${confidencePercent}%`, 20, 80);
// //     doc.text(`Sentiment Score: ${sentimentScore}`, 20, 90);

// //     const splitText = doc.splitTextToSize(`Entry: ${journal || ""}`, 170);
// //     doc.text(splitText, 20, 110);

// //     let nextY = 110 + splitText.length * 7 + 10;

// //     const distortionText = cognitiveDistortions.length
// //       ? cognitiveDistortions.join(", ")
// //       : "None";

// //     const behaviorText = behavioralSignals.length
// //       ? behavioralSignals.join(", ")
// //       : "None";

// //     doc.text(`Cognitive Distortions: ${distortionText}`, 20, nextY);
// //     nextY += 10;
// //     doc.text(`Behavioral Signals: ${behaviorText}`, 20, nextY);

// //     doc.save("Mood_Report.pdf");
// //   };

// //   return (
// //     <div
// //       className="
// //       min-h-screen px-4 md:px-8 py-6
// //       bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
// //       dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-black dark:to-black
// //       text-slate-800 dark:text-slate-200
// //       transition-all duration-500
// //     "
// //     >
// //       <div className="max-w-6xl mx-auto space-y-6">
// //         <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 p-6 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] flex justify-between">
// //           <div>
// //             <h1 className="text-xl font-bold">Detailed Analysis</h1>
// //             <p className="text-sm opacity-90">AI mood insights</p>
// //             <p className="text-xs mt-1">Confidence: {confidencePercent}%</p>
// //           </div>

// //           <button
// //             onClick={() => setDarkMode(!darkMode)}
// //             className="bg-white/20 px-3 py-1 rounded-lg"
// //           >
// //             {darkMode ? "☀" : "🌙"}
// //           </button>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-4">
// //           {[
// //             {
// //               title: "📝 Your Entry",
// //               content: journal || "No journal entry available."
// //             },
// //             {
// //               title: "🧠 AI Insight",
// //               content: explanation
// //             },
// //             {
// //               title: "🔍 Key Indicators",
// //               content: keywords.length ? keywords.join(", ") : "No indicators found"
// //             }
// //           ].map((item, i) => (
// //             <div
// //               key={i}
// //               className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]"
// //             >
// //               <h3 className="font-semibold">{item.title}</h3>
// //               <p className="mt-2 text-sm">{item.content}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid md:grid-cols-4 gap-4">
// //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow">
// //             <h3 className="font-semibold">Detected Emotion</h3>
// //             <p className="mt-2 text-sm capitalize">
// //               {result?.emotion || "neutral"} {result?.emoji || ""}
// //             </p>
// //           </div>

// //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow">
// //             <h3 className="font-semibold">Predicted Label</h3>
// //             <p className="mt-2 text-sm">{predictedLabel}</p>
// //           </div>

// //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow">
// //             <h3 className="font-semibold">Mental Score</h3>
// //             <p className="mt-2 text-sm">{safeScore}/10</p>
// //           </div>

// //           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow">
// //             <h3 className="font-semibold">Risk Score</h3>
// //             <p className="mt-2 text-sm">{safeRiskScore}</p>
// //           </div>
// //         </div>

// //         <div className="grid lg:grid-cols-12 gap-4">
// //           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
// //             <h3 className="font-semibold mb-3">Mood Trend</h3>
// //             <div className="h-64">
// //               <Line data={lineData} options={lineOptions} />
// //             </div>
// //             <p className="text-sm mt-3">{insight}</p>
// //           </div>

// //           <div className="lg:col-span-4 space-y-4">
// //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
// //               <h3 className="font-semibold">📊 Mood Highlights</h3>
// //               <p className="text-sm mt-2">Peak: {peak}</p>
// //               <p className="text-sm">Lowest: {low}</p>
// //               <p className="text-sm mt-2">Confidence: {confidencePercent}%</p>
// //               <p className="text-sm">Sentiment Score: {sentimentScore}</p>
// //             </div>

// //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
// //               <h3 className="font-semibold">🧩 Cognitive Patterns</h3>
// //               <p className="text-sm mt-2">
// //                 {cognitiveDistortions.length
// //                   ? cognitiveDistortions.join(", ")
// //                   : "No major distortion patterns detected."}
// //               </p>
// //             </div>

// //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
// //               <h3 className="font-semibold">🧍 Behavioral Signals</h3>
// //               <p className="text-sm mt-2">
// //                 {behavioralSignals.length
// //                   ? behavioralSignals.join(", ")
// //                   : "No strong behavioral signals detected."}
// //               </p>
// //             </div>

// //             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
// //               <h3 className="font-semibold">🚀 Recommendation</h3>
// //               <p className="text-sm mt-2">{recommendation}</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex justify-between">
// //           <button
// //             onClick={() => navigate(-1)}
// //             className="bg-slate-500 text-white px-4 py-2 rounded-lg flex gap-2"
// //           >
// //             <FaArrowLeft /> Back
// //           </button>

// //           <button
// //             onClick={downloadPDF}
// //             className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-2 rounded-lg flex gap-2 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
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
// import jsPDF from "jspdf";

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

//   const getInitialTheme = () => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved !== null) return saved === "true";
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   };

//   const [darkMode, setDarkMode] = useState(getInitialTheme);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) root.classList.add("dark");
//     else root.classList.remove("dark");
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   if (!state) return <div className="p-6">No Data</div>;

//   const { result, journal } = state;
//   const userId = localStorage.getItem("userId") || "user1";

//   const score = Number(result?.score || 0);
//   const riskScore = Number(result?.riskScore || 0);
//   const confidencePercent = Math.round(Number(result?.confidence || 0) * 100);
//   const predictedLabel = result?.predicted_label || "Normal";
//   const sentimentScore = Number(result?.sentiment_score || 0);
//   const cognitiveDistortions = result?.cognitive_distortions || [];
//   const behavioralSignals = result?.behavioral_signals || [];

//   const keywords = journal
//     ? journal
//         .toLowerCase()
//         .replace(/[^a-z0-9\s]/g, " ")
//         .split(/\s+/)
//         .filter(Boolean)
//         .slice(0, 6)
//     : [result?.emotion || "neutral"];

//   const explanationMap = {
//     joy: "Your text reflects strong positivity and emotional clarity.",
//     happiness: "Your words suggest a positive and emotionally balanced state.",
//     sad: "Your text indicates low mood and emotional heaviness.",
//     sadness: "Your words suggest emotional heaviness or distress.",
//     angry: "Your language shows frustration and emotional intensity.",
//     anger: "Your language reflects frustration or tension.",
//     anxiety: "Your text suggests worry, nervousness, or emotional restlessness.",
//     stress: "Your text suggests pressure, overload, or tension.",
//     neutral: "Your tone appears stable with balanced emotional signals."
//   };

//   const explanation =
//     explanationMap[(result?.emotion || "neutral").toLowerCase()] ||
//     "Your emotional tone was analyzed using sentiment and trained model prediction.";

//   const storedHistory =
//     JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

//   const newEntry = {
//     score,
//     day: new Date().toLocaleDateString("en-US", { weekday: "short" })
//   };

//   const updatedHistory = [...storedHistory, newEntry].slice(-7);
//   localStorage.setItem(`moodHistory_${userId}`, JSON.stringify(updatedHistory));

//   const labels = updatedHistory.map((item) => item.day);
//   const scores = updatedHistory.map((item) => item.score);

//   const avg =
//     scores.length > 0
//       ? scores.reduce((a, b) => a + b, 0) / scores.length
//       : score;

//   let insight = "";
//   if (avg >= 7) insight = "You had a consistently positive emotional week 😊";
//   else if (avg >= 4)
//     insight = "Your mood remained balanced with slight variations.";
//   else insight = "Your week shows emotional lows. Take care 💙";

//   let recommendation = "";
//   if (predictedLabel === "Suicidal") {
//     recommendation =
//       "Your text reflects high distress. Please consider reaching out to a trusted person or a licensed mental health professional.";
//   } else if (predictedLabel === "Depression") {
//     recommendation =
//       "Your writing suggests emotional heaviness. Rest, small routines, and supportive conversation may help.";
//   } else if (predictedLabel === "Anxiety") {
//     recommendation =
//       "Your writing shows worry or mental restlessness. Breathing exercises and grounding may help.";
//   } else if (predictedLabel === "Stress") {
//     recommendation =
//       "Your response suggests pressure or overload. Short breaks and lighter routines may help.";
//   } else if (score >= 7) {
//     recommendation =
//       "Maintain your positive habits and keep doing what works for you 🚀";
//   } else if (score >= 4) {
//     recommendation =
//       "Try relaxing activities like music, breaks, or a short walk.";
//   } else {
//     recommendation =
//       "Consider rest, self-care, and talking to someone you trust.";
//   }

//   const peak = scores.length ? Math.max(...scores) : score;
//   const low = scores.length ? Math.min(...scores) : score;

//   const lineData = {
//     labels: labels.length ? labels : ["Today"],
//     datasets: [
//       {
//         label: "Mood",
//         data: scores.length ? scores : [score],
//         borderColor: darkMode ? "#22d3ee" : "#4f46e5",
//         backgroundColor: darkMode
//           ? "rgba(34,211,238,0.15)"
//           : "rgba(79,70,229,0.15)",
//         tension: 0.5,
//         fill: true,
//         pointRadius: 5
//       }
//     ]
//   };

//   const lineOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         labels: {
//           color: darkMode ? "#e2e8f0" : "#334155"
//         }
//       }
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: darkMode ? "#cbd5e1" : "#475569"
//         },
//         grid: {
//           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
//         }
//       },
//       y: {
//         min: 0,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//           color: darkMode ? "#cbd5e1" : "#475569"
//         },
//         grid: {
//           color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
//         }
//       }
//     }
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("Mood Report", 20, 20);

//     doc.setFontSize(12);
//     doc.text(`Emotion: ${result?.emotion || "neutral"}`, 20, 40);
//     doc.text(`Predicted Label: ${predictedLabel}`, 20, 50);
//     doc.text(`Mental Score: ${score}/10`, 20, 60);
//     doc.text(`Risk Score: ${riskScore}`, 20, 70);
//     doc.text(`Confidence: ${confidencePercent}%`, 20, 80);
//     doc.text(`Sentiment Score: ${sentimentScore}`, 20, 90);

//     const splitText = doc.splitTextToSize(`Entry: ${journal || ""}`, 170);
//     doc.text(splitText, 20, 110);

//     let nextY = 110 + splitText.length * 7 + 10;

//     doc.text(
//       `Cognitive Distortions: ${
//         cognitiveDistortions.length
//           ? cognitiveDistortions.join(", ")
//           : "None detected"
//       }`,
//       20,
//       nextY
//     );
//     nextY += 10;

//     doc.text(
//       `Behavioral Signals: ${
//         behavioralSignals.length ? behavioralSignals.join(", ") : "None detected"
//       }`,
//       20,
//       nextY
//     );

//     doc.save("Mood_Report.pdf");
//   };

//   return (
//     <div
//       className="
//       min-h-screen px-4 md:px-8 py-6
//       bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
//       dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-black dark:to-black
//       text-slate-800 dark:text-slate-200
//       transition-all duration-500
//     "
//     >
//       <div className="max-w-6xl mx-auto space-y-6">
//         <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 p-6 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] flex justify-between">
//           <div>
//             <h1 className="text-xl font-bold">Detailed Analysis</h1>
//             <p className="text-sm opacity-90">AI mood insights</p>
//             <p className="text-xs mt-1">Confidence: {confidencePercent}%</p>
//           </div>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="bg-white/20 px-3 py-1 rounded-lg"
//           >
//             {darkMode ? "☀" : "🌙"}
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             { title: "📝 Your Entry", content: `${journal}` },
//             { title: "🧠 AI Insight", content: explanation },
//             { title: "🔍 Key Indicators", content: keywords.join(", ") }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]"
//             >
//               <h3 className="font-semibold">{item.title}</h3>
//               <p className="mt-2 text-sm">{item.content}</p>
//             </div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-4 gap-4">
//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//             <h3 className="font-semibold">Emotion</h3>
//             <p className="text-sm mt-2 capitalize">
//               {result?.emotion} {result?.emoji}
//             </p>
//           </div>

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//             <h3 className="font-semibold">Predicted Label</h3>
//             <p className="text-sm mt-2">{predictedLabel}</p>
//           </div>

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//             <h3 className="font-semibold">Mental Score</h3>
//             <p className="text-sm mt-2">{score}/10</p>
//           </div>

//           <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//             <h3 className="font-semibold">Risk Score</h3>
//             <p className="text-sm mt-2">{riskScore}</p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-4">
//           <div className="lg:col-span-8 p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
//             <h3 className="font-semibold mb-3">Mood Trend</h3>
//             <div className="h-64">
//               <Line data={lineData} options={lineOptions} />
//             </div>
//             <p className="text-sm mt-3">{insight}</p>
//           </div>

//           <div className="lg:col-span-4 space-y-4">
//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//               <h3 className="font-semibold">📊 Mood Highlights</h3>
//               <p className="text-sm mt-2">Peak: {peak}</p>
//               <p className="text-sm">Lowest: {low}</p>
//               <p className="text-sm mt-2">Confidence: {confidencePercent}%</p>
//               <p className="text-sm">Sentiment Score: {sentimentScore}</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//               <h3 className="font-semibold">🧩 Cognitive Distortions</h3>
//               <p className="text-sm mt-2">
//                 {cognitiveDistortions.length
//                   ? cognitiveDistortions.join(", ")
//                   : "No major cognitive distortions detected."}
//               </p>
//             </div>

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//               <h3 className="font-semibold">🧍 Behavioral Signals</h3>
//               <p className="text-sm mt-2">
//                 {behavioralSignals.length
//                   ? behavioralSignals.join(", ")
//                   : "No major behavioral signals detected."}
//               </p>
//             </div>

//             <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
//               <h3 className="font-semibold">🚀 Recommendation</h3>
//               <p className="text-sm mt-2">{recommendation}</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-slate-500 text-white px-4 py-2 rounded-lg flex gap-2"
//           >
//             <FaArrowLeft /> Back
//           </button>

//           <button
//             onClick={downloadPDF}
//             className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-2 rounded-lg flex gap-2 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
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

import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  ArcElement,
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

  const getInitialTheme = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  if (!state) return <div className="p-6">No Data</div>;

  const { result, journal } = state;
  const userId =
    sessionStorage.getItem("currentUser") ||
    localStorage.getItem("currentUser") ||
    localStorage.getItem("userId") ||
    "user1";

  const score = Number(result?.score || 0);
  const riskScore = Number(result?.riskScore || 0);
  const confidencePercent = Math.round(Number(result?.confidence || 0) * 100);
  const predictedLabel = result?.predicted_label || "Normal";
  const sentimentScore = Number(result?.sentiment_score || 0);
  const cognitiveDistortions = result?.cognitive_distortions || [];
  const behavioralSignals = result?.behavioral_signals || [];

  const keywords = journal
    ? journal
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 6)
    : [result?.emotion || "neutral"];

  const explanationMap = {
    joy: "Your text reflects strong positivity and emotional clarity.",
    happiness: "Your words suggest a positive and emotionally balanced state.",
    sad: "Your text indicates low mood and emotional heaviness.",
    sadness: "Your words suggest emotional heaviness or distress.",
    angry: "Your language shows frustration and emotional intensity.",
    anger: "Your language reflects frustration or tension.",
    anxiety: "Your text suggests worry, nervousness, or emotional restlessness.",
    stress: "Your text suggests pressure, overload, or tension.",
    neutral: "Your tone appears stable with balanced emotional signals."
  };

  const explanation =
    explanationMap[(result?.emotion || "neutral").toLowerCase()] ||
    "Your emotional tone was analyzed using sentiment and trained model prediction.";

  const emotionChartTheme = {
    happiness: ["#facc15", "#fde68a", "#f59e0b", "#fef3c7"],
    joy: ["#facc15", "#fde68a", "#f59e0b", "#fef3c7"],
    sadness: ["#60a5fa", "#93c5fd", "#2563eb", "#dbeafe"],
    sad: ["#60a5fa", "#93c5fd", "#2563eb", "#dbeafe"],
    anger: ["#f87171", "#fca5a5", "#ef4444", "#fee2e2"],
    angry: ["#f87171", "#fca5a5", "#ef4444", "#fee2e2"],
    anxiety: ["#a78bfa", "#c4b5fd", "#8b5cf6", "#ede9fe"],
    stress: ["#fb923c", "#fdba74", "#f97316", "#ffedd5"],
    neutral: ["#94a3b8", "#cbd5e1", "#64748b", "#f1f5f9"]
  };

  const activeEmotionKey = (result?.emotion || "neutral").toLowerCase();
  const activeTheme =
    emotionChartTheme[activeEmotionKey] || emotionChartTheme.neutral;

  const realtimeMetrics = [
    {
      label: "Mental Score",
      value: Number(score || 0),
      displayValue: `${Number(score || 0)}/10`,
      color: activeTheme[0]
    },
    {
      label: "Confidence",
      value: Number(confidencePercent || 0),
      displayValue: `${Number(confidencePercent || 0)}%`,
      color: activeTheme[1]
    },
    {
      label: "Risk Score",
      value: Number(riskScore.toFixed(2)),
      displayValue: `${Number(riskScore.toFixed(2))}`,
      color: activeTheme[2]
    },
    {
      label: "Sentiment Score",
      value: Number(sentimentScore.toFixed(3)),
      displayValue: `${Number(sentimentScore.toFixed(3))}`,
      color: activeTheme[0]
    }
  ];

  const realtimeValues = realtimeMetrics.map((item) => item.value);
  const minRealtimeValue = realtimeValues.length
    ? Math.min(...realtimeValues, 0)
    : 0;
  const maxRealtimeValue = realtimeValues.length
    ? Math.max(...realtimeValues, 1)
    : 1;
  const realtimePadding = Math.max(2, Math.ceil(maxRealtimeValue * 0.15));

  const realtimeBarData = {
    labels: realtimeMetrics.map(
      (item) => `${item.label} (${item.displayValue})`
    ),
    datasets: [
      {
        data: realtimeMetrics.map((item) => item.value),
        backgroundColor: realtimeMetrics.map((item) => item.color),
        borderRadius: 14,
        borderSkipped: false,
        barThickness: 22
      }
    ]
  };

  const realtimeBarOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: darkMode ? "#0f172a" : "#ffffff",
        titleColor: darkMode ? "#f8fafc" : "#0f172a",
        bodyColor: darkMode ? "#e2e8f0" : "#334155",
        borderColor: darkMode ? "#334155" : "#e2e8f0",
        borderWidth: 1,
        callbacks: {
          label: (context) => ` Value: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        min: minRealtimeValue < 0 ? minRealtimeValue - realtimePadding : 0,
        max: maxRealtimeValue + realtimePadding,
        ticks: {
          color: darkMode ? "#cbd5e1" : "#475569"
        },
        grid: {
          color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
        }
      },
      y: {
        ticks: {
          color: darkMode ? "#e2e8f0" : "#334155",
          font: {
            size: 12,
            weight: "600"
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  const emotionRingData = {
    labels: ["Detected Emotion", "Remaining"],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: [activeTheme[0], darkMode ? "#1e293b" : "#e2e8f0"],
        borderWidth: 0,
        cutout: "72%"
      }
    ]
  };

  const emotionRingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  const storedHistory =
    JSON.parse(localStorage.getItem(`moodHistory_${userId}`)) || [];

  const validHistory = storedHistory.filter(
    (item) =>
      typeof item.score === "number" && item.day && item.createdAt
  );

  const trendHistory = validHistory.slice(-7);
  const showTrend = trendHistory.length >= 3;

  const trendLabels = trendHistory.map((item) =>
    new Date(item.createdAt).toLocaleDateString("en-US", {
      weekday: "short"
    })
  );

  const trendScores = trendHistory.map((item) => Number(item.score || 0));

  const avg =
    trendScores.length > 0
      ? trendScores.reduce((a, b) => a + b, 0) / trendScores.length
      : score;

  let insight = "";
  if (avg >= 7) insight = "You had a consistently positive emotional pattern.";
  else if (avg >= 4)
    insight = "Your emotional pattern looks balanced with some variation.";
  else insight = "Your recent entries suggest emotional lows. Take care.";

  let recommendation = "";
  if (predictedLabel === "Suicidal") {
    recommendation =
      "Your text reflects high distress. Please consider reaching out to a trusted person or a licensed mental health professional.";
  } else if (predictedLabel === "Depression") {
    recommendation =
      "Your writing suggests emotional heaviness. Rest, small routines, and supportive conversation may help.";
  } else if (predictedLabel === "Anxiety") {
    recommendation =
      "Your writing shows worry or mental restlessness. Breathing exercises and grounding may help.";
  } else if (predictedLabel === "Stress") {
    recommendation =
      "Your response suggests pressure or overload. Short breaks and lighter routines may help.";
  } else if (score >= 7) {
    recommendation =
      "Maintain your positive habits and keep doing what works for you.";
  } else if (score >= 4) {
    recommendation =
      "Try relaxing activities like music, breaks, or a short walk.";
  } else {
    recommendation =
      "Consider rest, self-care, and talking to someone you trust.";
  }

  const peak = trendScores.length ? Math.max(...trendScores) : score;
  const low = trendScores.length ? Math.min(...trendScores) : score;

  const trendLineData = {
    labels: trendLabels,
    datasets: [
      {
        label: "Mental Score Trend",
        data: trendScores,
        borderColor: activeTheme[2],
        backgroundColor: `${activeTheme[1]}55`,
        tension: 0.35,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 5
      }
    ]
  };

  const trendLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "#e2e8f0" : "#334155"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#cbd5e1" : "#475569"
        },
        grid: {
          color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
        }
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
          color: darkMode ? "#cbd5e1" : "#475569"
        },
        grid: {
          color: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
        }
      }
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Mood Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Emotion: ${result?.emotion || "neutral"}`, 20, 40);
    doc.text(`Predicted Label: ${predictedLabel}`, 20, 50);
    doc.text(`Mental Score: ${score}/10`, 20, 60);
    doc.text(`Risk Score: ${riskScore}`, 20, 70);
    doc.text(`Confidence: ${confidencePercent}%`, 20, 80);
    doc.text(`Sentiment Score: ${sentimentScore}`, 20, 90);

    const splitText = doc.splitTextToSize(`Entry: ${journal || ""}`, 170);
    doc.text(splitText, 20, 110);

    let nextY = 110 + splitText.length * 7 + 10;

    doc.text(
      `Cognitive Distortions: ${
        cognitiveDistortions.length
          ? cognitiveDistortions.join(", ")
          : "None detected"
      }`,
      20,
      nextY
    );
    nextY += 10;

    doc.text(
      `Behavioral Signals: ${
        behavioralSignals.length ? behavioralSignals.join(", ") : "None detected"
      }`,
      20,
      nextY
    );

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
        <div className="rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 p-6 text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] flex justify-between">
          <div>
            <h1 className="text-xl font-bold">Detailed Analysis</h1>
            <p className="text-sm opacity-90">AI mood insights</p>
            <p className="text-xs mt-1">Confidence: {confidencePercent}%</p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/20 px-3 py-1 rounded-lg"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

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

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
            <h3 className="font-semibold">Emotion</h3>
            <p className="text-sm mt-2 capitalize">
              {result?.emotion} {result?.emoji}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
            <h3 className="font-semibold">Predicted Label</h3>
            <p className="text-sm mt-2">{predictedLabel}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
            <h3 className="font-semibold">Mental Score</h3>
            <p className="text-sm mt-2">{score}/10</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
            <h3 className="font-semibold">Risk Score</h3>
            <p className="text-sm mt-2">{riskScore}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Emotion Focus</h3>

            <div className="relative h-72">
              <Doughnut data={emotionRingData} options={emotionRingOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-sm text-slate-500">Detected</p>
                <p className="text-2xl font-bold capitalize">
                  {result?.emotion} {result?.emoji}
                </p>
              </div>
            </div>

            <div
              className="mt-4 rounded-2xl p-4"
              style={{ backgroundColor: activeTheme[3] }}
            >
              <p className="text-sm text-slate-600">Current confidence</p>
              <p className="text-xl font-semibold mt-1">{confidencePercent}%</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Realtime Emotional Metrics</h3>
            <div className="h-72">
              <Bar data={realtimeBarData} options={realtimeBarOptions} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg p-4">
            <h3 className="font-semibold text-lg mb-3">Mood Trend</h3>

            {showTrend ? (
              <>
                <div className="h-72">
                  <Line data={trendLineData} options={trendLineOptions} />
                </div>
                <p className="text-sm mt-3">{insight}</p>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-center">
                <p className="text-sm text-slate-500">
                  Trend chart will appear after at least 3 real analysis entries.
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
              <h3 className="font-semibold">📊 Mood Highlights</h3>
              <p className="text-sm mt-2">Peak: {peak}</p>
              <p className="text-sm">Lowest: {low}</p>
              <p className="text-sm mt-2">Confidence: {confidencePercent}%</p>
              <p className="text-sm">Sentiment Score: {sentimentScore}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
              <h3 className="font-semibold">🧩 Cognitive Distortions</h3>
              <p className="text-sm mt-2">
                {cognitiveDistortions.length
                  ? cognitiveDistortions.join(", ")
                  : "No major cognitive distortions detected."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
              <h3 className="font-semibold">🧍 Behavioral Signals</h3>
              <p className="text-sm mt-2">
                {behavioralSignals.length
                  ? behavioralSignals.join(", ")
                  : "No major behavioral signals detected."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow">
              <h3 className="font-semibold">🚀 Recommendation</h3>
              <p className="text-sm mt-2">{recommendation}</p>
            </div>
          </div>
        </div>

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
