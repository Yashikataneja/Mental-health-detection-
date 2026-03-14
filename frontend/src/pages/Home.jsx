


// import { Link, useNavigate } from "react-router-dom";
// import { FaBrain, FaRobot, FaChartLine, FaHandsHelping } from "react-icons/fa";
// import mental from "../assets/mental health image.png";
// import ai from "../assets/ai mental health illustration.png";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 text-gray-800">

//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-indigo-600">MindDetect AI</h1>

//         <div className="space-x-4">
//           <Link to="/login" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition">Login</Link>
//           <Link to="/signup" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Signup</Link>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10">
//         <div>
//           <h2 className="text-5xl font-bold leading-tight mb-6">
//             Detect Mental Health Using
//             <span className="text-indigo-600"> AI Text Analysis</span>
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             Our platform uses advanced AI to analyze written text and identify possible mental health signals such as anxiety, depression, and stress.
//           </p>
//           <div className="space-x-4">
//             <Link to="/signup" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Get Started</Link>
//             <Link to="/login" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">Login</Link>
//           </div>
//         </div>

//         <div>
//           <img src={mental} alt="mental health" className="rounded-xl shadow-lg w-full h-[420px] object-cover" />
//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="py-20 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12">How Our AI Helps</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">

//           {/* Emotion Detection */}
//           <div onClick={() => navigate("/dashboard")} className="p-6 bg-gray-100 rounded-xl text-center cursor-pointer hover:scale-105 transition">
//             <FaBrain className="text-4xl text-indigo-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Emotion Detection</h3>
//             <p className="text-gray-600">Identify emotions and mental health signals from written text.</p>
//           </div>

//           {/* AI Analysis */}
//           <div onClick={() => navigate("/ai-analysis")} className="p-6 bg-gray-100 rounded-xl text-center cursor-pointer hover:scale-105 transition">
//             <FaRobot className="text-4xl text-indigo-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">AI Analysis</h3>
//             <p className="text-gray-600">Advanced machine learning models analyze mental patterns.</p>
//           </div>

//           {/* Progress Tracking */}
//           <div onClick={() => navigate("/progress")} className="p-6 bg-gray-100 rounded-xl text-center cursor-pointer hover:shadow-lg transition">
//             <FaChartLine className="text-4xl text-indigo-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Progress Tracking</h3>
//             <p className="text-gray-600">Track emotional patterns and improvement over time.</p>
//           </div>

//           {/* Support */}
//           <div onClick={() => navigate("/support")} className="p-6 bg-gray-100 rounded-xl text-center cursor-pointer hover:scale-105 transition">
//             <FaHandsHelping className="text-4xl text-indigo-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Support</h3>
//             <p className="text-gray-600">Access verified helplines, professional counselors, coping tips, and a safe space mode.</p>
//           </div>

//         </div>
//       </section>

//       {/* AI EXPLANATION */}
//       <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
//         <div>
//           <img src={ai} alt="AI mental health" className="rounded-xl shadow-lg w-full h-[420px] object-cover" />
//         </div>
//         <div>
//           <h2 className="text-3xl font-bold mb-6">AI Powered Mental Health Detection</h2>
//           <p className="text-gray-600 mb-4">Our system uses NLP and machine learning algorithms to analyze the emotional tone of text.</p>
//           <p className="text-gray-600 mb-4">By examining word patterns, sentiment scores, and emotional indicators, the platform detects potential mental health challenges and provides early awareness.</p>
//           <p className="text-gray-600">This approach enables proactive mental health support and awareness for individuals of all age groups.</p>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="bg-indigo-50 py-20">
//         <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
//         <div className="grid md:grid-cols-3 gap-8 px-10">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-600">"This platform helped me understand my emotions better through AI insights."</p>
//             <h4 className="mt-4 font-semibold">Student User</h4>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-600">"Amazing concept! Mental health awareness through technology."</p>
//             <h4 className="mt-4 font-semibold">Research Scholar</h4>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-600">"Simple, clean and very helpful platform for emotional analysis."</p>
//             <h4 className="mt-4 font-semibold">Developer</h4>
//           </div>
//         </div>
//       </section>

//       {/* CALL TO ACTION */}
//       <section className="text-center py-20 px-10">
//         <h2 className="text-4xl font-bold mb-6">Start Understanding Your Mental Health Today</h2>
//         <p className="text-gray-600 mb-8">Join our platform and explore AI-powered mental health insights.</p>
//         <Link to="/signup" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Create Free Account</Link>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-white py-6 text-center">
//         <p>© 2026 MindDetect AI | Mental Health Detection Platform</p>
//       </footer>

//     </div>
//   );
// }








// import { Link, useNavigate } from "react-router-dom";
// import { FaBrain, FaRobot, FaUserFriends, FaChartLine } from "react-icons/fa";
// import ai from "../assets/ai mental health illustration.png";
// import aipic from "../assets/Ai pic mental health.jpeg";
// import rdsection from "../assets/3rdsection Pic.jpeg";
// import benifits from "../assets/Benifits.jpeg";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 text-gray-800">

//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-12 py-4 bg-white shadow-md">

//   <h1 className="text-2xl font-bold text-indigo-600">
//     MindDetect AI
//   </h1>

//   <div className="space-x-4">
//     <Link
//       to="/login"
//       className="inline-block px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-110 transition-transform duration-300"
//     >
//       Login
//     </Link>

//     <Link
//       to="/signup"
//       className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-110 transition-transform duration-300"
//     >
//       Signup
//     </Link>
//   </div>

// </nav>


//       {/* HERO SECTION */}
//       <section id="home" className="grid md:grid-cols-2 items-center px-12 py-28 gap-12 bg-gradient-to-r from-gray-50 to-indigo-50">

//   <div>

//     <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//       Detect Mental Health Using
//       <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//         AI Text Analysis
//       </span>
//     </h2>

//     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//       Our platform uses advanced Artificial Intelligence and Natural
//       Language Processing techniques to analyze written text and
//       identify possible mental health signals such as anxiety,
//       depression, emotional stress, and mood fluctuations.
//     </p>

//     <p className="text-gray-600 mb-8 leading-relaxed">
//       The platform transforms simple written text into meaningful
//       emotional insights that help individuals better understand
//       their feelings and behavioral patterns.
//     </p>

//     <div className="flex gap-4">

//       <Link
//         to="/signup"
//         className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 
//         transition-transform duration-500 ease-in-out 
//         hover:scale-110 hover:-translate-y-1"
//       >
//         Get Started
//       </Link>

//       <Link
//         to="/login"
//         className="inline-block px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg 
//         hover:bg-indigo-600 hover:text-white 
//         transition-transform duration-500 ease-in-out 
//         hover:scale-110 hover:-translate-y-1"
//       >
//         Login
//       </Link>

//     </div>

//   </div>


//   <div className="flex justify-center items-center">

//     <img
//       src={aipic}
//       alt="AI mental health"
//       className="w-full max-w-2xl h-[520px] object-contain 
//       transition-transform duration-500 ease-in-out 
//       hover:scale-110 hover:-translate-y-2"
//     />

//   </div>

// </section>


//       {/* FEATURES SECTION */}
//       <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-50">

//         <h2 className="text-4xl font-bold text-center mb-16">
//           How We Support You
//         </h2>

//         <div className="grid md:grid-cols-4 gap-10 px-12">

//           {/* Card 1 */}
//           <div className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-indigo-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

//             <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
//               <FaBrain className="text-3xl text-indigo-600 group-hover:text-white transition" />
//             </div>

//             <h3 className="font-semibold text-xl mb-3">
//               Emotion Detection
//             </h3>

//             <p className="text-gray-600">
//               AI detects emotional signals hidden in written text, helping
//               users understand feelings like happiness, sadness, anxiety,
//               or stress through intelligent language analysis.
//             </p>

//           </div>


//           {/* Card 2 */}
//           <div className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-purple-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

//             <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
//               <FaRobot className="text-3xl text-purple-600 group-hover:text-white transition" />
//             </div>

//             <h3 className="font-semibold text-xl mb-3">
//               AI Analysis
//             </h3>

//             <p className="text-gray-600">
//               Machine learning algorithms analyze sentence structures,
//               keywords, and emotional tones to detect patterns that
//               indicate mental health signals.
//             </p>

//           </div>


//           {/* Card 3 */}
//           <div className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-blue-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

//             <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
//               <FaChartLine className="text-3xl text-blue-600 group-hover:text-white transition" />
//             </div>

//             <h3 className="font-semibold text-xl mb-3">
//               Progress Tracking
//             </h3>

//             <p className="text-gray-600">
//               Track emotional trends over time and recognize recurring
//               emotional patterns to understand mental wellbeing changes.
//             </p>

//           </div>


//           {/* Card 4 */}
//           <div className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-green-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

//             <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-green-100 group-hover:bg-green-600 transition">
//               <FaUserFriends className="text-3xl text-green-600 group-hover:text-white transition" />
//             </div>

//             <h3 className="font-semibold text-xl mb-3">
//               Support System
//             </h3>

//             <p className="text-gray-600">
//               The platform encourages mental health awareness by guiding
//               users toward helpful insights and positive emotional habits.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* AI EXPLANATION */}
// <section id="ai-detection" className="grid md:grid-cols-2 gap-16 items-center px-12 py-24 bg-gradient-to-r from-white to-indigo-50">

//   {/* IMAGE */}
//   <div className="flex justify-center">
//     <img
//       src={ai}
//       alt="AI mental health"
//       className="w-full max-w-2xl h-[520px] object-contain 
//     rounded-2xl 
//     transition-transform duration-500 ease-in-out
//     hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
//     />
//   </div>

//   {/* TEXT CONTENT */}
//   <div>

//     <h2 className="text-4xl font-bold mb-6 leading-tight">
//       AI Powered
//       <span className="text-indigo-600"> Mental Health Detection</span>
//     </h2>

//     <p className="text-gray-600 mb-5 text-lg leading-relaxed">
//       Our platform uses advanced <span className="font-semibold text-indigo-600">Artificial Intelligence</span> 
//       and Natural Language Processing (NLP) techniques to analyze written text 
//       and identify emotional patterns hidden within language. By examining the 
//       tone, sentence structure, and word choices used in communication, the 
//       system can understand the emotional signals that reflect a person's 
//       mental and psychological state.
//     </p>

//     <p className="text-gray-600 mb-5 leading-relaxed">
//       The AI model processes text using machine learning algorithms that 
//       evaluate sentiment, emotional intensity, and contextual meaning. 
//       Through this analysis, the platform can detect indicators related 
//       to stress, anxiety, sadness, mood changes, and other emotional 
//       conditions that may impact mental wellbeing.
//     </p>

//     <p className="text-gray-600 mb-6 leading-relaxed">
//       By transforming simple written expressions into meaningful emotional 
//       insights, the system helps individuals gain deeper awareness of their 
//       thoughts and feelings. This awareness encourages users to reflect on 
//       their emotional state and take proactive steps toward maintaining 
//       better mental health and overall wellbeing.
//     </p>

//     {/* POINTS */}
//     <div className="space-y-4">

//       <div className="flex items-start gap-3">
//         <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
//         <p className="text-gray-600">
//           Analyze written language to detect emotional tone and sentiment.
//         </p>
//       </div>

//       <div className="flex items-start gap-3">
//         <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
//         <p className="text-gray-600">
//           Identify patterns related to stress, anxiety, sadness, and mood changes.
//         </p>
//       </div>

//       <div className="flex items-start gap-3">
//         <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
//         <p className="text-gray-600">
//           Provide insights that help users understand their emotional wellbeing.
//         </p>
//       </div>

//       <div className="flex items-start gap-3">
//         <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
//         <p className="text-gray-600">
//           Encourage early awareness and healthier emotional habits.
//         </p>
//       </div>

//     </div>

//   </div>

// </section>
// {/* HOW IT WORKS SECTION */}

// <section id="how-ai-works" className="grid md:grid-cols-2 items-center px-12 py-28 gap-12 bg-gradient-to-r from-gray-50 to-indigo-50">

//   {/* TEXT CONTENT */}
//   <div>

//     <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//       How Our
//       <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//         AI System Works
//       </span>
//     </h2>

//     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//       Our AI-powered platform analyzes written text to understand emotional
//       patterns and detect possible mental health signals. Using Natural
//       Language Processing and machine learning models, the system studies
//       tone, sentence structure, and word choices to identify emotional
//       indicators such as stress, sadness, or anxiety.
//     </p>

//     {/* STEPS */}

//     <div className="space-y-6">

//       <div className="flex items-start gap-4">
//         <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
//           1
//         </div>

//         <div>
//           <h4 className="font-semibold text-lg">Enter Your Text</h4>
//           <p className="text-gray-600">
//             Users simply write their thoughts or feelings in the text input area to begin the analysis.
//           </p>
//         </div>
//       </div>


//       <div className="flex items-start gap-4">
//         <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
//           2
//         </div>

//         <div>
//           <h4 className="font-semibold text-lg">AI Analyzes Emotion</h4>
//           <p className="text-gray-600">
//             The AI model processes the text and evaluates emotional tone, sentiment, and contextual meaning.
//           </p>
//         </div>
//       </div>


//       <div className="flex items-start gap-4">
//         <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
//           3
//         </div>

//         <div>
//           <h4 className="font-semibold text-lg">View Emotional Insights</h4>
//           <p className="text-gray-600">
//             The platform provides emotional results and helpful suggestions to improve mental awareness.
//           </p>
//         </div>
//       </div>

//     </div>

//   </div>


//   {/* IMAGE */}
//   <div className="flex justify-center items-center">

//     <img
//       src={rdsection}
//       alt="3rdsection pic"
//       className="w-full max-w-2xl h-[520px] object-contain 
//       transition-transform duration-500 ease-in-out 
//       hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
//     />

//   </div>

// </section>

//       {/* Benifits */}
//      <section id="benefits" className="grid md:grid-cols-2 gap-12 items-center px-12 py-24">

//   {/* IMAGE */}
//   <div className="flex justify-center items-center">

//     <img
//       src={benifits}
//       alt="Benefits"
//       className="w-full max-w-2xl h-[520px] object-contain 
//       transition-transform duration-500 ease-in-out 
//       hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
//     />

//   </div>

//   {/* CONTENT */}
//   <div>

//     <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//       Benefits of
//       <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//         Our AI Platform
//       </span>
//     </h2>

//     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//       Our AI-powered platform helps users understand emotional patterns in
//       written text using advanced Natural Language Processing and Machine
//       Learning technologies.
//     </p>

//     <ul className="space-y-3 text-gray-600 text-lg">
//       <li>✔ Accurate emotion detection using AI algorithms</li>
//       <li>✔ Fast real-time emotional analysis</li>
//       <li>✔ Simple and easy-to-use interface</li>
//       <li>✔ Promotes mental health awareness</li>
//       <li>✔ Secure and private text processing</li>
//     </ul>

//   </div>

// </section>



//  {/* Footer section */}

//  {/* FOOTER */}

// <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-gray-300 px-8 py-16">

//   <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

//     {/* ABOUT */}
//     <div className="max-w-md">
//       <h3 className="text-2xl font-bold text-white mb-4">
//         AI Mental Health Detection
//       </h3>

//       <p className="text-gray-200 leading-relaxed">
//         Our platform uses Artificial Intelligence and Natural Language
//         Processing to analyze written text and identify emotional
//         patterns. It helps individuals better understand their
//         feelings and promotes mental health awareness.
//       </p>
//     </div>


//     {/* QUICK LINKS */}
//     <div>
//       <h4 className="text-xl font-semibold text-white mb-4">
//         Quick Links
//       </h4>

//       <ul className="space-y-3">

//         <li>
//           <a href="#home" className="inline-block text-gray-200 hover:text-white hover:scale-105 transition duration-200">
//             Homepage
//           </a>
//         </li>

//         <li>
//           <a href="#features" className="inline-block text-gray-200 hover:text-white hover:scale-105 transition duration-200">
//             Features
//           </a>
//         </li>

//         <li>
//           <a href="#ai-detection" className="inline-block text-gray-200 hover:text-white hover:scale-105 transition duration-200">
//             AI Powered Mental Health Detection
//           </a>
//         </li>

//         <li>
//           <a href="#how-ai-works" className="inline-block text-gray-200 hover:text-white hover:scale-105 transition duration-200">
//             How Our AI System Works
//           </a>
//         </li>

//         <li>
//           <a href="#benefits" className="inline-block text-gray-200 hover:text-white hover:scale-105 transition duration-200">
//             Benefits of Our AI Platform
//           </a>
//         </li>

//       </ul>
//     </div>


//     {/* CONTACT */}
//     <div>
//       <h4 className="text-xl font-semibold text-white mb-4">
//         Contact
//       </h4>

//       <p className="text-gray-200 mb-2">
//         Email: support@aimhdetect.com
//       </p>

//       <p className="text-gray-200 mb-2">
//         Phone: +91 98765 43210
//       </p>

//       <p className="text-gray-200">
//         Location: India
//       </p>
//     </div>

//   </div>


//   {/* COPYRIGHT */}
//   <div className="border-t border-white/30 mt-12 pt-6 text-center text-gray-200">
//     <p>
//       © {new Date().getFullYear()} AI Mental Health Detection. All rights reserved.
//     </p>
//   </div>

// </footer>
//     </div>
//   );
// }










































































import { useState, useEffect } from "react";


import { Link, useNavigate } from "react-router-dom";
import { FaBrain, FaRobot, FaUserFriends, FaChartLine } from "react-icons/fa";
import ai from "../assets/ai mental health illustration.png";
import aipic from "../assets/Ai pic mental health.jpeg";
import rdsection from "../assets/3rdsection Pic.jpeg";
import benifits from "../assets/Benifits.jpeg";
import picbenifits from "../assets/Pic Benifits.jpeg";
import picdetect from "../assets/Pic Detect.jpeg";
import picworking from "../assets/Pic Working.jpeg";
import picaipowered from "../assets/Pic AI Powered.jpeg";


import pic from "../assets/logo pic.png";

// export default function Home() {
//   const navigate = useNavigate();
  
// const handleProtectedRoute = (path) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     navigate("/login", { state: { from: path } });
//   } else {
//     navigate(path);
//   }
// };




export default function Home() {

  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token"));

    const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const handleProtectedRoute = (path) => {
  const token = sessionStorage.getItem("token");







  if (!token) {
    navigate("/login", { state: { from: path } });
  } else {
    navigate(path);
  }
};

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   window.location.href = "/";
// };


const handleLogout = () => {
  sessionStorage.removeItem("token");
  setToken(null);
  navigate("/");
};
  
useEffect(() => {

const user = localStorage.getItem("currentUser");

if(user){
const img = localStorage.getItem(`profilePic_${user}`);

if(img){
setProfilePic(img);
}
}

}, []);


  return (
    <div className="bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      

{/* NAVBAR */}
{/* NAVBAR */}
<nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-4 bg-white shadow-md">

{/* Logo */}
<a
href="#home"
className="flex items-center gap-1 text-3xl font-bold text-indigo-600 hover:scale-105 transition"
>
<img src={pic} alt="Moodly AI Logo" className="w-16 h-16 object-contain"/>
Moodly AI
</a>

{/* Navigation Links */}
<div className="hidden md:flex items-center space-x-8 text-lg text-gray-700 font-medium">

<a href="#home" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
Home
</a>

<a href="#features" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
Features
</a>

<a href="#ai-detection" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
AI Detection
</a>

<a href="#how-ai-works" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
How it Works
</a>

<a href="#benefits" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
Benefits
</a>

<a href="#footer" className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
Contact
</a>

</div>

{/* Right Side */}
<div className="flex items-center space-x-4">

{/* If NOT logged in */}
{!token && (

<>

<Link
to="/login"
className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
>
Login
</Link>

<Link
to="/signup"
className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
>
Signup
</Link>

</>

)}

{/* If logged in */}
{token && (

<div className="relative">

<div
onClick={() => setOpen(!open)}
className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-400"
>

{profilePic ? (

<img
src={profilePic}
alt="profile"
className="w-full h-full object-cover"
/>

) : (

<div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600">
👤
</div>

)}

</div>

{open && (

<div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg">

<Link
to="/profile"
className="block px-4 py-2 hover:bg-gray-100"
>
👤 Profile
</Link>

<Link
to="/dashboard"
className="block px-4 py-2 hover:bg-gray-100"
>
📊 Dashboard
</Link>

<button
onClick={handleLogout}
className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
>
🚪 Logout
</button>

</div>

)}

</div>

)}

</div>

</nav>

      {/* HERO SECTION */}
      <section id="home" className="grid md:grid-cols-2 items-center px-12 py-28 gap-12 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Detect Mental Health Using
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              AI Text Analysis
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our platform uses advanced Artificial Intelligence and Natural
            Language Processing techniques to analyze written text and
            identify possible mental health signals such as anxiety,
            depression, emotional stress, and mood fluctuations.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            The platform transforms simple written text into meaningful
            emotional insights that help individuals better understand
            their feelings and behavioral patterns.
          </p>
{!token && (
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="inline-block px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              Login
            </Link>
          </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={picdetect}
            alt="AI mental health"
            className="w-full max-w-2xl h-[520px] object-contain transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-2"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-4xl font-bold text-center mb-16">How We Support You</h2>

        <div className="grid md:grid-cols-4 gap-10 px-12">
          {/* Emotion Detection */}
          <div
            onClick={() => handleProtectedRoute("/dashboard")}
            className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-indigo-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
              <FaBrain className="text-3xl text-indigo-600 group-hover:text-white transition" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Emotion Detection</h3>
            <p className="text-gray-600">
              AI detects emotional signals hidden in written text, helping
              users understand feelings like happiness, sadness, anxiety,
              or stress through intelligent language analysis.
            </p>
          </div>

          {/* AI Analysis */}
          <div
            onClick={() => handleProtectedRoute("/ai-analysis")}
            className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-purple-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
              <FaRobot className="text-3xl text-purple-600 group-hover:text-white transition" />
            </div>
            <h3 className="font-semibold text-xl mb-3">AI Analysis</h3>
            <p className="text-gray-600">
              Machine learning algorithms analyze sentence structures,
              keywords, and emotional tones to detect patterns that
              indicate mental health signals.
            </p>
          </div>

          {/* Progress Tracking */}
          <div
            onClick={() => handleProtectedRoute("/progress")}
            className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-blue-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
              <FaChartLine className="text-3xl text-blue-600 group-hover:text-white transition" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Progress Tracking</h3>
            <p className="text-gray-600">
              Track emotional trends over time and recognize recurring
              emotional patterns to understand mental wellbeing changes.
            </p>
          </div>

          {/* Support System */}
          <div
            onClick={() => handleProtectedRoute("/support")}
            className="group p-8 bg-white rounded-2xl text-center shadow-md border-t-4 border-green-500 hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-green-100 group-hover:bg-green-600 transition">
              <FaUserFriends className="text-3xl text-green-600 group-hover:text-white transition" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Support System</h3>
            <p className="text-gray-600">
              The platform encourages mental health awareness by guiding
              users toward helpful insights and positive emotional habits.
            </p>
          </div>
        </div>
      </section>

      {/* AI EXPLANATION */}
      <section id="ai-detection" className="grid md:grid-cols-2 gap-16 items-center px-12 py-24 bg-gradient-to-r from-white to-indigo-50">
        <div className="flex justify-center">
          <img
            src={picaipowered}
            alt="AI mental health"
            className="w-full max-w-2xl h-[520px] object-contain rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            AI Powered <span className="text-indigo-600"> Mental Health Detection</span>
          </h2>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">
            Our platform uses advanced <span className="font-semibold text-indigo-600">Artificial Intelligence</span> and NLP techniques to analyze written text and identify emotional patterns.
          </p>
          <p className="text-gray-600 mb-5 leading-relaxed">
            The AI model evaluates sentiment, emotional intensity, and contextual meaning to detect indicators related 
            to stress, anxiety, sadness, mood changes, and other emotional conditions.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            By transforming written expressions into meaningful insights, users gain awareness of their thoughts and feelings.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Analyze written language to detect emotional tone and sentiment.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Identify patterns related to stress, anxiety, sadness, and mood changes.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Provide insights that help users understand their emotional wellbeing.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Encourage early awareness and healthier emotional habits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-ai-works" className="grid md:grid-cols-2 items-center px-12 py-28 gap-12 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            How Our <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AI System Works</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our AI-powered platform analyzes written text to understand emotional patterns and detect possible mental health signals.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">1</div>
              <div>
                <h4 className="font-semibold text-lg">Enter Your Text</h4>
                <p className="text-gray-600">Users write their thoughts or feelings in the text input area to begin analysis.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">2</div>
              <div>
                <h4 className="font-semibold text-lg">AI Analyzes Emotion</h4>
                <p className="text-gray-600">The AI model evaluates emotional tone, sentiment, and contextual meaning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">3</div>
              <div>
                <h4 className="font-semibold text-lg">View Emotional Insights</h4>
                <p className="text-gray-600">The platform provides emotional results and helpful suggestions to improve mental awareness.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={picworking}
            alt="3rdsection pic"
            className="w-full max-w-2xl h-[520px] object-contain transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="grid md:grid-cols-2 gap-12 items-center px-12 py-24">
        <div className="flex justify-center items-center">
          <img
            src={picbenifits}
            alt="Benefits"
            className="w-full max-w-2xl h-[520px] object-contain transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Benefits of <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our AI Platform</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our AI-powered platform helps users understand emotional patterns in written text using advanced NLP and ML technologies.
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li>✔ Accurate emotion detection using AI algorithms</li>
            <li>✔ Fast real-time emotional analysis</li>
            <li>✔ Simple and easy-to-use interface</li>
            <li>✔ Promotes mental health awareness</li>
            <li>✔ Secure and private text processing</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-gray-300 px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="max-w-md">
            <a href="#home" className="hover:text-indigo-200 transition">
  <div className="flex items-center gap-1 mb-4">
  <img
  src={pic}
  alt="Moodly AI Logo"
  className="w-16 h-16 object-contain"
/>
<h3 className="text-4xl font-bold text-white">Moodly AI</h3>
</div>
</a>
            <p className="text-gray-200 leading-relaxed">
    Moodly AI is an intelligent platform designed to support mental health
    awareness using Artificial Intelligence and Natural Language Processing.
  </p>

  
          </div>
          <div className="md:ml-20">
  <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-200 hover:text-white hover:scale-105 transition">Homepage</a></li>
              <li><a href="#features" className="text-gray-200 hover:text-white hover:scale-105 transition">Features</a></li>
              <li><a href="#ai-detection" className="text-gray-200 hover:text-white hover:scale-105 transition">AI Powered Mental Health Detection</a></li>
              <li><a href="#how-ai-works" className="text-gray-200 hover:text-white hover:scale-105 transition">How Our AI System Works</a></li>
              <li><a href="#benefits" className="text-gray-200 hover:text-white hover:scale-105 transition">Benefits of Our AI Platform</a></li>
            </ul>
          </div>
          <div className="md:ml-10">
  <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>

  <p className="text-gray-200 mb-2">
    Email:{" "}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=support.mhealth@gmail.com"
       target="_blank"
    rel="noopener noreferrer"
      className="text-gray-200 underline hover:text-white"
    >
      support.mhealth@gmail.com
    </a>
  </p>

  <p className="text-gray-200 mb-2">
    Phone:{" "}
    <a
      href="tel:+919876543210"
      className="text-gray-200 underline hover:text-white"
    >
      +91 98765 43210
    </a>
  </p>

  <p className="text-gray-200">Location: India</p>
</div>
        </div>
        <div className="border-t border-white/30 mt-12 pt-6 text-center text-gray-200">
          <p>© {new Date().getFullYear()} Moodly AI | Developed by Team Moodly AI: Upinder Kaur, Yashika Taneja, Yashika Khanna</p>
        </div>
      </footer>

    </div>
  );
}