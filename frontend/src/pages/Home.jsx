


// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaBars,
//   FaBolt,
//   FaBrain,
//   FaChartLine,
//   FaCheckCircle,
//   FaClock,
//   FaLock,
//   FaRobot,
//   FaShieldAlt,
//   FaStar,
//   FaTimes,
//   FaUserFriends,
// } from "react-icons/fa";

// import picbenifits from "../assets/Pic Benifits.jpeg";
// import picdetect from "../assets/Pic Detect.jpeg";
// import picworking from "../assets/Pic Working.jpeg";
// import picaipowered from "../assets/Pic AI Powered.jpeg";
// import pic from "../assets/logo pic.png";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Features", href: "#features" },
//   { label: "AI Detection", href: "#ai-detection" },
//   { label: "How It Works", href: "#how-ai-works" },
//   { label: "Benefits", href: "#benefits" },
//   { label: "Contact", href: "#footer" },
// ];

// const featureCards = [
//   {
//     title: "Emotion Detection",
//     desc: "Identify emotional signals from written text and surface patterns linked to stress, sadness, and anxiety.",
//     icon: FaBrain,
//     color: "from-indigo-500 via-blue-500 to-cyan-400",
//     route: "/dashboard",
//   },
//   {
//     title: "AI Analysis",
//     desc: "Advanced AI evaluates text tone, emotional intensity, and contextual meaning to provide thoughtful insights.",
//     icon: FaRobot,
//     color: "from-violet-500 via-indigo-500 to-blue-500",
//     route: "/ai-analysis",
//   },
//   {
//     title: "Progress Tracking",
//     desc: "Observe emotional trends over time and better understand your mental wellness journey.",
//     icon: FaChartLine,
//     color: "from-sky-500 via-blue-500 to-indigo-500",
//     route: "/progress",
//   },
//   {
//     title: "Support System",
//     desc: "Encourage healthier habits with a supportive experience built around awareness and reflection.",
//     icon: FaUserFriends,
//     color: "from-cyan-500 via-sky-500 to-teal-400",
//     route: "/support",
//   },
// ];

// const processSteps = [
//   {
//     step: "01",
//     title: "Write Freely",
//     text: "Users enter thoughts, reflections, or daily feelings in natural language.",
//   },
//   {
//     step: "02",
//     title: "AI Understands Context",
//     text: "The model analyzes tone, emotional intensity, and deeper contextual meaning.",
//   },
//   {
//     step: "03",
//     title: "Get Clear Insights",
//     text: "The platform returns clean emotional summaries and helpful suggestions.",
//   },
// ];

// const benefits = [
//   "Accurate emotion detection using AI-powered text intelligence",
//   "Modern and intuitive interface inspired by premium SaaS products",
//   "Fast, responsive, and visually engaging experience",
//   "Encourages mental health awareness and emotional reflection",
//   "Secure and privacy-conscious user journey",
// ];

// const trustItems = [
//   { icon: FaShieldAlt, label: "Private & Secure" },
//   { icon: FaBolt, label: "Real-Time Insights" },
//   { icon: FaClock, label: "Fast Analysis" },
//   { icon: FaStar, label: "Premium Experience" },
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(sessionStorage.getItem("token"));
//   const [open, setOpen] = useState(false);
//   const [profilePic, setProfilePic] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [visibleSections, setVisibleSections] = useState({});

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const user = localStorage.getItem("currentUser");
//     if (user) {
//       const img = localStorage.getItem(`profilePic_${user}`);
//       if (img) {
//         setProfilePic(img);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const sections = document.querySelectorAll("[data-reveal]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleSections((prev) => ({
//               ...prev,
//               [entry.target.id]: true,
//             }));
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   const handleProtectedRoute = (path) => {
//     const currentToken = sessionStorage.getItem("token");

//     if (!currentToken) {
//       navigate("/login", { state: { from: path } });
//     } else {
//       navigate(path);
//     }
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem("token");
//     setToken(null);
//     setOpen(false);
//     navigate("/");
//   };

//   const revealClass = (id) =>
//     visibleSections[id]
//       ? "opacity-100 translate-y-0"
//       : "opacity-0 translate-y-10";

//   return (
//     <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 text-slate-800">
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         <div className="absolute left-[-8%] top-[-4%] h-72 w-72 rounded-full bg-blue-300/35 blur-3xl animate-pulse" />
//         <div className="absolute right-[-8%] top-[10%] h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl animate-pulse" />
//         <div className="absolute bottom-[-12%] left-[18%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl animate-pulse" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_34%),linear-gradient(180deg,rgba(239,246,255,0.98)_0%,rgba(224,231,255,0.94)_50%,rgba(239,246,255,1)_100%)]" />
//         <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
//       </div>

//       <nav className="sticky top-0 z-50 w-full border-b border-indigo-100/80 bg-white/70 backdrop-blur-2xl shadow-sm">
//         <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 xl:px-16 2xl:px-24">
//           <a href="#home" className="flex items-center gap-3">
//             <img
//               src={pic}
//               alt="Moodly AI Logo"
//               className="h-12 w-12 rounded-2xl object-contain ring-1 ring-indigo-100 shadow-sm"
//             />
//             <div>
//               <p className="text-xl font-bold tracking-wide text-indigo-700">
//                 Moodly AI
//               </p>
//               <p className="text-xs text-slate-500">
//                 AI-Powered Emotional Intelligence
//               </p>
//             </div>
//           </a>

//           <div className="hidden items-center gap-8 md:flex">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <div className="hidden items-center gap-3 md:flex">
//             {!token ? (
//               <>
//                 <Link
//                   to="/login"
//                   className="rounded-full border border-indigo-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/signup"
//                   className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition hover:scale-105"
//                 >
//                   Get Started
//                 </Link>
//               </>
//             ) : (
//               <div className="relative">
//                 <div
//                   onClick={() => setOpen(!open)}
//                   className="h-11 w-11 cursor-pointer overflow-hidden rounded-full border-2 border-indigo-300 shadow-md"
//                 >
//                   {profilePic ? (
//                     <img
//                       src={profilePic}
//                       alt="profile"
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center bg-indigo-100 text-indigo-600">
//                       👤
//                     </div>
//                   )}
//                 </div>

//                 {open && (
//                   <div className="absolute right-0 mt-3 w-44 rounded-2xl border border-indigo-100 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl">
//                     <Link
//                       to="/profile"
//                       className="block rounded-xl px-4 py-2 text-slate-700 transition hover:bg-indigo-50"
//                     >
//                       👤 Profile
//                     </Link>

//                     <Link
//                       to="/dashboard"
//                       className="block rounded-xl px-4 py-2 text-slate-700 transition hover:bg-indigo-50"
//                     >
//                       📊 Dashboard
//                     </Link>

//                     <button
//                       onClick={handleLogout}
//                       className="block w-full rounded-xl px-4 py-2 text-left text-rose-500 transition hover:bg-rose-50"
//                     >
//                       🚪 Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             className="rounded-xl border border-indigo-200 bg-white/70 p-3 text-indigo-700 md:hidden"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="border-t border-indigo-100 bg-white/95 px-6 py-5 backdrop-blur-2xl md:hidden">
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               <div className="mt-3 flex gap-3">
//                 {!token ? (
//                   <>
//                     <Link
//                       to="/login"
//                       className="rounded-full border border-indigo-200 px-5 py-2 text-sm text-indigo-700"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/signup"
//                       className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white"
//                     >
//                       Signup
//                     </Link>
//                   </>
//                 ) : (
//                   <>
//                     <Link
//                       to="/profile"
//                       className="rounded-full border border-indigo-200 px-5 py-2 text-sm text-indigo-700"
//                     >
//                       Profile
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       <section
//         id="home"
//         data-reveal
//         className={`grid w-full gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 md:py-24 ${revealClass(
//           "home"
//         )}`}
//       >
//         <div className="flex flex-col justify-center">
//           <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur-xl">
//             <FaShieldAlt />
//             Trusted AI support for emotional insight
//           </div>

//           <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl">
//             Detect Mental Health Using
//             <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
//               AI Text Analysis
//             </span>
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//             Moodly AI transforms written thoughts into meaningful emotional
//             insight using AI and natural language processing, helping users
//             better understand stress, anxiety, mood shifts, and emotional
//             patterns.
//           </p>

//           <p className="mt-4 max-w-2xl leading-7 text-slate-600">
//             Built with a cleaner, more premium landing page experience, the
//             platform feels more trustworthy, modern, and product-ready.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             {!token ? (
//               <>
//                 <Link
//                   to="/signup"
//                   className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200/60 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
//                 >
//                   Start Free
//                   <FaArrowRight className="transition group-hover:translate-x-1" />
//                 </Link>

//                 <Link
//                   to="/login"
//                   className="rounded-full border border-indigo-200 bg-white/80 px-7 py-3.5 font-medium text-indigo-700 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
//                 >
//                   Login
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={() => handleProtectedRoute("/dashboard")}
//                 className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200/60 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
//               >
//                 Go to Dashboard
//                 <FaArrowRight className="transition group-hover:translate-x-1" />
//               </button>
//             )}
//           </div>

//           <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
//               <p className="text-3xl font-bold text-indigo-600">AI + NLP</p>
//               <p className="mt-2 text-sm text-slate-500">
//                 Advanced emotional text understanding
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
//               <p className="text-3xl font-bold text-indigo-600">Real-Time</p>
//               <p className="mt-2 text-sm text-slate-500">
//                 Fast emotional signal analysis
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
//               <p className="text-3xl font-bold text-indigo-600">Secure</p>
//               <p className="mt-2 text-sm text-slate-500">
//                 Private and user-focused experience
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex items-center justify-center">
//           <div className="absolute -top-6 right-2 hidden rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-2xl md:block animate-bounce [animation-duration:3s]">
//             <p className="text-sm text-slate-500">Live sentiment engine</p>
//             <p className="mt-1 text-2xl font-bold text-indigo-600">
//               92% clarity score
//             </p>
//           </div>

//           <div className="absolute bottom-8 -left-4 hidden rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-2xl md:block animate-bounce [animation-duration:4s]">
//             <p className="text-sm text-slate-500">Protected analysis</p>
//             <div className="mt-2 flex items-center gap-2 text-indigo-600">
//               <FaLock />
//               <span className="text-sm">Private session flow</span>
//             </div>
//           </div>

//           <div className="relative w-full max-w-2xl">
//             <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-indigo-200/50 via-blue-200/40 to-cyan-200/50 blur-2xl" />
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_30px_80px_rgba(99,102,241,0.20)] backdrop-blur-2xl">
//               <img
//                 src={picdetect}
//                 alt="AI mental health analysis"
//                 className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
//               />

//               <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-lg backdrop-blur-2xl">
//                 <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">
//                   Platform Insight
//                 </p>
//                 <p className="mt-2 text-lg font-semibold text-slate-800">
//                   Turn written thoughts into clear emotional understanding
//                 </p>
//               </div>
//             </div>

//             <div className="absolute -bottom-10 right-6 hidden w-56 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-2xl lg:block">
//               <p className="text-sm font-medium text-slate-500">
//                 Emotional signal breakdown
//               </p>
//               <div className="mt-3 space-y-2">
//                 <div>
//                   <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
//                     <span>Stress</span>
//                     <span>78%</span>
//                   </div>
//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
//                     <span>Calm</span>
//                     <span>62%</span>
//                   </div>
//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
//                     <span>Clarity</span>
//                     <span>88%</span>
//                   </div>
//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full px-6 pb-6 md:px-10 xl:px-16 2xl:px-24">
//         <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/60 p-5 shadow-lg backdrop-blur-2xl md:grid-cols-4">
//           {trustItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={item.label}
//                 className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4 shadow-sm"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-md">
//                   <Icon />
//                 </div>
//                 <span className="font-medium text-slate-700">{item.label}</span>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <section
//         id="features"
//         data-reveal
//         className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
//           "features"
//         )}`}
//       >
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
//             Core Features
//           </p>
//           <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
//             Premium design with product-level presentation
//           </h2>
//           <p className="mt-5 text-lg leading-8 text-slate-600">
//             Each feature now feels cleaner, deeper, and more professional while
//             preserving your existing navigation and behavior.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {featureCards.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 onClick={() => handleProtectedRoute(item.route)}
//                 className="group relative cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-7 shadow-[0_15px_45px_rgba(99,102,241,0.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(99,102,241,0.20)]"
//                 style={{ transitionDelay: `${index * 70}ms` }}
//               >
//                 <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/70 blur-2xl transition duration-500 group-hover:scale-125" />
//                 <div
//                   className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-xl text-white shadow-lg`}
//                 >
//                   <Icon />
//                 </div>

//                 <h3 className="relative text-xl font-semibold text-slate-900">
//                   {item.title}
//                 </h3>

//                 <p className="relative mt-4 leading-7 text-slate-600">
//                   {item.desc}
//                 </p>

//                 <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
//                   Explore feature
//                   <FaArrowRight className="transition group-hover:translate-x-1" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <section
//         id="ai-detection"
//         data-reveal
//         className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
//           "ai-detection"
//         )}`}
//       >
//         <div className="relative">
//           <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full bg-blue-200/50 blur-2xl md:block" />
//           <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
//             <img
//               src={picaipowered}
//               alt="AI powered mental health detection"
//               className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
//             />
//           </div>
//         </div>

//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
//             AI Detection
//           </p>
//           <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
//             AI-powered emotional detection with a cleaner visual identity
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             The platform analyzes sentiment, emotional intensity, and context
//             to identify signals related to stress, sadness, anxiety, and mood
//             fluctuations.
//           </p>

//           <div className="mt-8 space-y-4">
//             {[
//               "Analyze emotional tone and sentiment in written text",
//               "Identify patterns linked to stress, anxiety, and emotional changes",
//               "Convert free-form writing into meaningful insights",
//               "Encourage healthier awareness and reflection over time",
//             ].map((point) => (
//               <div
//                 key={point}
//                 className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl"
//               >
//                 <FaCheckCircle className="mt-1 text-indigo-500" />
//                 <p className="text-slate-600">{point}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="how-ai-works"
//         data-reveal
//         className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
//           "how-ai-works"
//         )}`}
//       >
//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
//             Workflow
//           </p>
//           <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
//             A more professional journey from thought to insight
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Your process is now presented in a clearer, more product-focused
//             way that feels closer to a premium startup landing page.
//           </p>

//           <div className="mt-10 space-y-5">
//             {processSteps.map((item) => (
//               <div
//                 key={item.step}
//                 className="flex gap-4 rounded-[1.6rem] border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1"
//               >
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 font-bold text-white shadow-md">
//                   {item.step}
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-slate-900">
//                     {item.title}
//                   </h3>
//                   <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid gap-6">
//           <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
//             <img
//               src={picworking}
//               alt="How Moodly AI works"
//               className="h-[360px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
//             />
//           </div>

//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-2xl">
//               <FaShieldAlt className="text-2xl text-indigo-500" />
//               <h4 className="mt-4 text-lg font-semibold text-slate-900">
//                 Built for trust
//               </h4>
//               <p className="mt-2 text-slate-600">
//                 Softer depth, glass cards, and cleaner spacing make the product
//                 feel more mature.
//               </p>
//             </div>

//             <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-2xl">
//               <FaLock className="text-2xl text-indigo-500" />
//               <h4 className="mt-4 text-lg font-semibold text-slate-900">
//                 Private by design
//               </h4>
//               <p className="mt-2 text-slate-600">
//                 Privacy and protection are reflected visually as part of the UI.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="benefits"
//         data-reveal
//         className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
//           "benefits"
//         )}`}
//       >
//         <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
//           <img
//             src={picbenifits}
//             alt="Benefits of Moodly AI"
//             className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
//           />
//         </div>

//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
//             Benefits
//           </p>
//           <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
//             A landing page that feels premium, soft, and startup-ready
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Better hierarchy, stronger depth, and more polished sections make
//             the platform feel more credible and more professional.
//           </p>

//           <div className="mt-8 space-y-4">
//             {benefits.map((item) => (
//               <div
//                 key={item}
//                 className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl"
//               >
//                 <FaCheckCircle className="mt-1 text-indigo-500" />
//                 <p className="text-slate-600">{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full px-6 pb-8 md:px-10 xl:px-16 2xl:px-24">
//         <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-8 shadow-2xl shadow-indigo-200/60 md:p-12">
//           <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
//           <div className="absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

//           <div className="relative grid items-center gap-8 md:grid-cols-2">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
//                 Ready To Experience It?
//               </p>
//               <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
//                 Track emotions with a more premium and welcoming experience
//               </h3>
//               <p className="mt-4 max-w-2xl text-blue-50">
//                 This landing page now feels much closer to a polished startup
//                 product while keeping your original app logic intact.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4 md:justify-end">
//               {!token ? (
//                 <>
//                   <Link
//                     to="/signup"
//                     className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
//                   >
//                     Create Account
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition hover:bg-white/20"
//                   >
//                     Login
//                   </Link>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => handleProtectedRoute("/dashboard")}
//                   className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
//                 >
//                   Open Dashboard
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer
//         id="footer"
//         className="mt-10 border-t border-indigo-100 bg-white/60 px-6 py-14 backdrop-blur-2xl md:px-10 xl:px-16 2xl:px-24"
//       >
//         <div className="grid w-full gap-12 md:grid-cols-3">
//           <div>
//             <a href="#home" className="flex items-center gap-3">
//               <img
//                 src={pic}
//                 alt="Moodly AI Logo"
//                 className="h-14 w-14 rounded-2xl object-contain ring-1 ring-indigo-100 shadow-sm"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-indigo-700">Moodly AI</h3>
//                 <p className="text-sm text-slate-500">
//                   AI-driven mental health awareness platform
//                 </p>
//               </div>
//             </a>

//             <p className="mt-5 max-w-md leading-7 text-slate-600">
//               Moodly AI helps users better understand emotional wellbeing
//               through intelligent text analysis, a refined interface, and a
//               more trustworthy digital experience.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
//             <div className="mt-5 grid gap-3">
//               {navLinks.slice(0, 5).map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-slate-600 transition hover:text-indigo-600"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold text-slate-900">Contact</h4>
//             <div className="mt-5 space-y-3 text-slate-600">
//               <p>
//                 Email:{" "}
//                 <a
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=support.mhealth@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-indigo-600 underline transition hover:text-indigo-700"
//                 >
//                   support.mhealth@gmail.com
//                 </a>
//               </p>

//               <p>
//                 Phone:{" "}
//                 <a
//                   href="tel:+919876543210"
//                   className="text-indigo-600 underline transition hover:text-indigo-700"
//                 >
//                   +91 98765 43210
//                 </a>
//               </p>

//               <p>Location: India</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-indigo-100 pt-6 text-center text-sm text-slate-500">
//           © {new Date().getFullYear()} Moodly AI | Developed by Team Moodly AI:
//           Upinder Kaur, Yashika Taneja, Yashika Khanna
//         </div>
//       </footer>
//     </div>
//   );
// }




































































import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  FaArrowRight,
  FaBars,
  FaBolt,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaLock,
  FaRobot,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaUserFriends,
} from "react-icons/fa";

import picbenifits from "../assets/Pic Benifits.jpeg";
import picdetect from "../assets/Pic Detect.jpeg";
import picworking from "../assets/Pic Working.jpeg";
import picaipowered from "../assets/Pic AI Powered.jpeg";
import pic from "../assets/logo pic.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "AI Detection", href: "#ai-detection" },
  { label: "How It Works", href: "#how-ai-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#footer" },
];

const featureCards = [
  {
    title: "Emotion Detection",
    desc: "Identify emotional signals from written text and surface patterns linked to stress, sadness, and anxiety.",
    icon: FaBrain,
    color: "from-indigo-500 via-blue-500 to-cyan-400",
    route: "/dashboard",
  },
  {
  title: "AI Assistant",
  desc: "Chat with an intelligent AI assistant to share your thoughts and receive real-time emotional insights, guidance, and support.",
  icon: FaRobot,
  color: "from-violet-500 via-indigo-500 to-blue-500",
},
  {
    title: "Progress Tracking",
    desc: "Observe emotional trends over time and better understand your mental wellness journey.",
    icon: FaChartLine,
    color: "from-sky-500 via-blue-500 to-indigo-500",
    route: "/progress",
  },
  {
    title: "Support System",
    desc: "Encourage healthier habits with a supportive experience built around awareness and reflection.",
    icon: FaUserFriends,
    color: "from-cyan-500 via-sky-500 to-teal-400",
    route: "/support",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Write Freely",
    text: "Users enter thoughts, reflections, or daily feelings in natural language.",
  },
  {
    step: "02",
    title: "AI Understands Context",
    text: "The model analyzes tone, emotional intensity, and deeper contextual meaning.",
  },
  {
    step: "03",
    title: "Get Clear Insights",
    text: "The platform returns clean emotional summaries and helpful suggestions.",
  },
];

const benefits = [
  "Accurate emotion detection using AI-powered text intelligence",
  "Modern and intuitive interface inspired by premium SaaS products",
  "Fast, responsive, and visually engaging experience",
  "Encourages mental health awareness and emotional reflection",
  "Secure and privacy-conscious user journey",
];

const trustItems = [
  { icon: FaShieldAlt, label: "Private & Secure" },
  { icon: FaBolt, label: "Real-Time Insights" },
  { icon: FaClock, label: "Fast Analysis" },
  { icon: FaStar, label: "Premium Experience" },
];

export default function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  const user = sessionStorage.getItem("currentUser");

  if (user) {
    // get name
    const name =
      sessionStorage.getItem("currentUserName") ||
      localStorage.getItem(`name_${user}`);

    setUserName(name || user);

    // get profile pic
    const img = localStorage.getItem(`profilePic_${user}`);
    if (img) {
      setProfilePic(img);
    }
  }
}, []);

  useEffect(() => {
  const currentToken = sessionStorage.getItem("token");
  setToken(currentToken);
}, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleProtectedRoute = (path) => {
    const currentToken = sessionStorage.getItem("token");

    if (!currentToken) {
      navigate("/login", { state: { from: path } });
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    setOpen(false);
    navigate("/");
  };

  const revealClass = (id) =>
    visibleSections[id]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 text-slate-800">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[-4%] h-72 w-72 rounded-full bg-blue-300/35 blur-3xl animate-pulse" />
        <div className="absolute right-[-8%] top-[10%] h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-12%] left-[18%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_34%),linear-gradient(180deg,rgba(239,246,255,0.98)_0%,rgba(224,231,255,0.94)_50%,rgba(239,246,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <nav className="sticky top-0 z-50 w-full border-b border-indigo-100/80 bg-white/90 backdrop-blur-xl shadow-md">
        <div className="flex w-full items-center justify-between px-4 py-6 md:px-8 lg:px-12 xl:px-20">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={pic}
              alt="Moodly AI Logo"
              className="h-16 w-16 rounded-2xl object-contain ring-1 ring-indigo-100 shadow-sm"
            />
            <div>
              <p className="text-2xl font-bold tracking-wide text-indigo-700">
                Moodly AI
              </p>
              <p className="text-xs text-slate-500">
                AI-Powered Emotional Intelligence
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-slate-800 transition hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="rounded-full border border-indigo-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition hover:scale-105"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="h-11 w-11 cursor-pointer overflow-hidden rounded-full border-2 border-indigo-300 shadow-md"
                >
                  {profilePic ? (
                    <img
                      src={profilePic}
                      alt="profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-indigo-100 text-indigo-600 text-lg font-bold">
  {userName && userName.charAt(0).toUpperCase()}
</div>
                  )}
                </div>

                {open && (
                  <div className="absolute right-0 mt-3 w-44 rounded-2xl border border-indigo-100 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl">
                    <Link
                      to="/profile"
                      className="block rounded-xl px-4 py-2 text-slate-700 transition hover:bg-indigo-50"
                    >
                      👤 Profile
                    </Link>

                    <Link
                      to="/dashboard"
                      className="block rounded-xl px-4 py-2 text-slate-700 transition hover:bg-indigo-50"
                    >
                      📊 Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block w-full rounded-xl px-4 py-2 text-left text-rose-500 transition hover:bg-rose-50"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-indigo-200 bg-white/70 p-3 text-indigo-700 md:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-indigo-100 bg-white/95 px-6 py-5 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex gap-3">
                {!token ? (
                  <>
                    <Link
                      to="/login"
                      className="rounded-full border border-indigo-200 px-5 py-2 text-sm text-indigo-700"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="rounded-full border border-indigo-200 px-5 py-2 text-sm text-indigo-700"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        data-reveal
        className={`grid w-full gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 md:py-24 ${revealClass(
          "home"
        )}`}
      >
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm text-blue-700 shadow-sm backdrop-blur-xl">
            <FaShieldAlt />
            Trusted AI support for emotional insight
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl">
            Detect Mental Health Using
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              AI Text Analysis
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Moodly AI transforms written thoughts into meaningful emotional
            insight using AI and natural language processing, helping users
            better understand stress, anxiety, mood shifts, and emotional
            patterns.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Built with a cleaner, more premium landing page experience, the
            platform feels more trustworthy, modern, and product-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {!token ? (
              <>
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200/60 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Start Free
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/login"
                  className="rounded-full border border-indigo-200 bg-white/80 px-7 py-3.5 font-medium text-indigo-700 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={() => handleProtectedRoute("/dashboard")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-indigo-200/60 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Go to Dashboard
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>
            )}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
              <p className="text-3xl font-bold text-indigo-600">AI + NLP</p>
              <p className="mt-2 text-sm text-slate-500">
                Advanced emotional text understanding
              </p>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
              <p className="text-3xl font-bold text-indigo-600">Real-Time</p>
              <p className="mt-2 text-sm text-slate-500">
                Fast emotional signal analysis
              </p>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-2xl">
              <p className="text-3xl font-bold text-indigo-600">Secure</p>
              <p className="mt-2 text-sm text-slate-500">
                Private and user-focused experience
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          

          <div className="absolute top-10 right-10 hidden md:block">
  <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-xl backdrop-blur-xl transition ">
    <FaLock className="text-indigo-600" />
    <span className="text-sm font-medium text-slate-700">
      Private Session
    </span>
  </div>
</div>

          <div className="relative w-full max-w-2xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-indigo-200/50 via-blue-200/40 to-cyan-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_30px_80px_rgba(99,102,241,0.20)] backdrop-blur-2xl">
              <img
                src={picdetect}
                alt="AI mental health analysis"
                className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-lg backdrop-blur-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">
                  Platform Insight
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  Turn written thoughts into clear emotional understanding
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/60 p-5 shadow-lg backdrop-blur-2xl md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-md">
                  <Icon />
                </div>
                <span className="font-medium text-slate-700">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="features"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "features"
        )}`}
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Core Features
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Smart features designed to support your mental well-being
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Simple, supportive tools built to guide your emotional journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  {featureCards.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_10px_40px_rgba(99,102,241,0.10)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] cursor-default"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* glow */}
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-indigo-100/60 blur-2xl group-hover:scale-110 transition duration-500" />

        {/* icon */}
        <div
          className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-md`}
        >
          <Icon />
        </div>

        {/* title */}
        <h3 className="text-xl font-semibold text-slate-900">
          {item.title}
        </h3>

        {/* description */}
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.desc}
        </p>
      </div>
    );
  })}
</div>
      </section>

      <section
        id="ai-detection"
        data-reveal
        className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "ai-detection"
        )}`}
      >
        <div className="relative">
          <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full bg-blue-200/50 blur-2xl md:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
            <img
              src={picaipowered}
              alt="AI powered mental health detection"
              className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            AI Detection
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            AI-powered emotional detection with a cleaner visual identity
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The platform analyzes sentiment, emotional intensity, and context
            to identify signals related to stress, sadness, anxiety, and mood
            fluctuations.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Analyze emotional tone and sentiment in written text",
              "Identify patterns linked to stress, anxiety, and emotional changes",
              "Convert free-form writing into meaningful insights",
              "Encourage healthier awareness and reflection over time",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl"
              >
                <FaCheckCircle className="mt-1 text-indigo-500" />
                <p className="text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-ai-works"
        data-reveal
        className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "how-ai-works"
        )}`}
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Workflow
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            A more professional journey from thought to insight
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Your process is now presented in a clearer, more product-focused
            way that feels closer to a premium startup landing page.
          </p>

          <div className="mt-10 space-y-5">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-[1.6rem] border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 font-bold text-white shadow-md">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
            <img
              src={picworking}
              alt="How Moodly AI works"
              className="h-[360px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-2xl">
              <FaShieldAlt className="text-2xl text-indigo-500" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Built for trust
              </h4>
              <p className="mt-2 text-slate-600">
                Softer depth, glass cards, and cleaner spacing make the product
                feel more mature.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-2xl">
              <FaLock className="text-2xl text-indigo-500" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Private by design
              </h4>
              <p className="mt-2 text-slate-600">
                Privacy and protection are reflected visually as part of the UI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        data-reveal
        className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "benefits"
        )}`}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] backdrop-blur-2xl">
          <img
            src={picbenifits}
            alt="Benefits of Moodly AI"
            className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Benefits
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            A landing page that feels premium, soft, and startup-ready
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Better hierarchy, stronger depth, and more polished sections make
            the platform feel more credible and more professional.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl"
              >
                <FaCheckCircle className="mt-1 text-indigo-500" />
                <p className="text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-8 md:px-10 xl:px-16 2xl:px-24">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-8 shadow-2xl shadow-indigo-200/60 md:p-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Ready To Experience It?
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Track emotions with a more premium and welcoming experience
              </h3>
              <p className="mt-4 max-w-2xl text-blue-50">
                This landing page now feels much closer to a polished startup
                product while keeping your original app logic intact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              {!token ? (
                <>
                  <Link
                    to="/signup"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/login"
                    className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition hover:bg-white/20"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => handleProtectedRoute("/dashboard")}
                  className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
                >
                  Open Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer
        id="footer"
        className="mt-10 border-t border-indigo-100 bg-white/60 px-6 py-14 backdrop-blur-2xl md:px-10 xl:px-16 2xl:px-24"
      >
        <div className="grid w-full gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src={pic}
                alt="Moodly AI Logo"
                className="h-14 w-14 rounded-2xl object-contain ring-1 ring-indigo-100 shadow-sm"
              />
              <div>
                <h3 className="text-2xl font-bold text-indigo-700">Moodly AI</h3>
                <p className="text-sm text-slate-500">
                  AI-driven mental health awareness platform
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Moodly AI helps users better understand emotional wellbeing
              through intelligent text analysis, a refined interface, and a
              more trustworthy digital experience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
            <div className="mt-5 grid gap-3">
              {navLinks.slice(0, 5).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 transition hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Contact</h4>
            <div className="mt-5 space-y-3 text-slate-600">
              <p>
                Email:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support.mhealth@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline transition hover:text-indigo-700"
                >
                  support.mhealth@gmail.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="text-indigo-600 underline transition hover:text-indigo-700"
                >
                  +91 98765 43210
                </a>
              </p>

              <p>Location: India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-indigo-100 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Moodly AI | Developed by Team Moodly AI:
          Upinder Kaur, Yashika Taneja, Yashika Khanna
        </div>
      </footer>
    </div>
  );
}


















































