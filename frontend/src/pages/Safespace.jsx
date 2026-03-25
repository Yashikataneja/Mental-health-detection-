

// // // // // import { useEffect, useMemo, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { FaSun } from "react-icons/fa";

// // // // // import {
// // // // //   FaArrowLeft,
// // // // //   FaGamepad,
// // // // //   FaHeadphones,
// // // // //   FaSpa,
// // // // //   FaHandsHelping,
// // // // //   FaLaughBeam,
// // // // //   FaMusic,
// // // // //   FaWind,
// // // // //   FaHeart,
// // // // //   FaPlay,
// // // // //   FaMoon,
// // // // //   FaStar,
// // // // //   FaSearch,
// // // // //   FaBolt,
// // // // // } from "react-icons/fa";

// // // // // const fallbackData = {
// // // // //   "mini-games": [
// // // // //     {
// // // // //       _id: "g1",
// // // // //       title: "Color Match Calm",
// // // // //       description: "A light focus game to gently shift your attention.",
// // // // //       url: "https://www.crazygames.com/",
// // // // //       mediaType: "game",
// // // // //     },
// // // // //     {
// // // // //       _id: "g2",
// // // // //       title: "Puzzle Break",
// // // // //       description: "A simple brain game for a calm mental reset.",
// // // // //       url: "https://poki.com/",
// // // // //       mediaType: "game",
// // // // //     },
// // // // //     {
// // // // //       _id: "g3",
// // // // //       title: "Memory Relax",
// // // // //       description: "A short memory challenge to refresh your mind.",
// // // // //       url: "https://www.memozor.com/",
// // // // //       mediaType: "game",
// // // // //     },
// // // // //   ],
// // // // //   music: [
// // // // //     {
// // // // //       _id: "m1",
// // // // //       title: "Soft Rain Ambience",
// // // // //       description: "Gentle rain sounds for calm and comfort.",
// // // // //       url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
// // // // //       mediaType: "audio",
// // // // //       duration: "10 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "m2",
// // // // //       title: "Piano Peace",
// // // // //       description: "Slow piano tones for relaxation.",
// // // // //       url: "https://www.youtube.com/results?search_query=calm+piano+music",
// // // // //       mediaType: "audio",
// // // // //       duration: "8 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "m3",
// // // // //       title: "Nature Calm",
// // // // //       description: "Birds, breeze, and nature sounds to relax.",
// // // // //       url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
// // // // //       mediaType: "audio",
// // // // //       duration: "12 min",
// // // // //     },
// // // // //   ],
// // // // //   meditation: [
// // // // //     {
// // // // //       _id: "med1",
// // // // //       title: "5-Minute Calm Reset",
// // // // //       description: "A short guided meditation for grounding.",
// // // // //       url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
// // // // //       mediaType: "video",
// // // // //       duration: "5 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "med2",
// // // // //       title: "Morning Mindfulness",
// // // // //       description: "Start gently with a focused meditation session.",
// // // // //       url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
// // // // //       mediaType: "video",
// // // // //       duration: "7 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "med3",
// // // // //       title: "Sleep Relaxation",
// // // // //       description: "A soft meditation session to reduce night anxiety.",
// // // // //       url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
// // // // //       mediaType: "video",
// // // // //       duration: "10 min",
// // // // //     },
// // // // //   ],
// // // // //   therapy: [
// // // // //     {
// // // // //       _id: "t1",
// // // // //       title: "Grounding for Panic",
// // // // //       description: "Quick grounding support for panic moments.",
// // // // //       url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
// // // // //       mediaType: "video",
// // // // //       duration: "6 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "t2",
// // // // //       title: "Overthinking Relief",
// // // // //       description: "Therapy-style support for racing thoughts.",
// // // // //       url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
// // // // //       mediaType: "video",
// // // // //       duration: "8 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "t3",
// // // // //       title: "Anxiety Reset",
// // // // //       description: "A gentle calming session for anxious moments.",
// // // // //       url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
// // // // //       mediaType: "video",
// // // // //       duration: "7 min",
// // // // //     },
// // // // //   ],
// // // // //   "funny-videos": [
// // // // //     {
// // // // //       _id: "f1",
// // // // //       title: "Cute Animal Moments",
// // // // //       description: "A cheerful break to lift your mood.",
// // // // //       url: "https://www.youtube.com/results?search_query=funny+animal+videos",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //     {
// // // // //       _id: "f2",
// // // // //       title: "Funny Kids Compilation",
// // // // //       description: "Light and playful videos for a quick smile.",
// // // // //       url: "https://www.youtube.com/results?search_query=funny+kids+videos",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //     {
// // // // //       _id: "f3",
// // // // //       title: "Comedy Shorts",
// // // // //       description: "Small, funny clips for a stress break.",
// // // // //       url: "https://www.youtube.com/results?search_query=funny+short+videos",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //   ],
// // // // //   "dance-videos": [
// // // // //     {
// // // // //       _id: "d1",
// // // // //       title: "Feel-Good Dance Break",
// // // // //       description: "A positive movement break to refresh your energy.",
// // // // //       url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //     {
// // // // //       _id: "d2",
// // // // //       title: "Happy Dance Session",
// // // // //       description: "Move a little and shake off stress.",
// // // // //       url: "https://www.youtube.com/results?search_query=happy+dance+video",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //     {
// // // // //       _id: "d3",
// // // // //       title: "Fun Zumba Break",
// // // // //       description: "A short dance routine for mood lifting.",
// // // // //       url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
// // // // //       mediaType: "video",
// // // // //     },
// // // // //   ],
// // // // //   breathing: [
// // // // //     {
// // // // //       _id: "b1",
// // // // //       title: "Box Breathing",
// // // // //       description: "Inhale 4, hold 4, exhale 4, hold 4.",
// // // // //       mediaType: "text",
// // // // //       duration: "3 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "b2",
// // // // //       title: "4-4-6 Breathing",
// // // // //       description: "Inhale for 4, hold for 4, exhale for 6.",
// // // // //       mediaType: "text",
// // // // //       duration: "2 min",
// // // // //     },
// // // // //     {
// // // // //       _id: "b3",
// // // // //       title: "Slow Deep Breathing",
// // // // //       description: "Breathe in deeply and exhale slowly for calm.",
// // // // //       mediaType: "text",
// // // // //       duration: "5 min",
// // // // //     },
// // // // //   ],
// // // // //   affirmations: [
// // // // //     {
// // // // //       _id: "a1",
// // // // //       title: "You are safe right now.",
// // // // //       description:
// // // // //         "Pause, breathe, and remind yourself that this feeling will pass.",
// // // // //       mediaType: "text",
// // // // //     },
// // // // //     {
// // // // //       _id: "a2",
// // // // //       title: "You are doing your best.",
// // // // //       description: "Even small steps matter. You are trying, and that counts.",
// // // // //       mediaType: "text",
// // // // //     },
// // // // //     {
// // // // //       _id: "a3",
// // // // //       title: "This moment is temporary.",
// // // // //       description: "Let yourself slow down. Calm can return gradually.",
// // // // //       mediaType: "text",
// // // // //     },
// // // // //   ],
// // // // // };

// // // // // const sectionMeta = {
// // // // //   "mini-games": {
// // // // //     title: "Mini Games",
// // // // //     icon: FaGamepad,
// // // // //     tone: "from-violet-500 via-indigo-500 to-blue-500",
// // // // //   },
// // // // //   music: {
// // // // //     title: "Soothing Music",
// // // // //     icon: FaHeadphones,
// // // // //     tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
// // // // //   },
// // // // //   meditation: {
// // // // //     title: "Meditation Sessions",
// // // // //     icon: FaSpa,
// // // // //     tone: "from-indigo-500 via-blue-500 to-cyan-400",
// // // // //   },
// // // // //   therapy: {
// // // // //     title: "Therapy Support",
// // // // //     icon: FaHandsHelping,
// // // // //     tone: "from-sky-500 via-blue-500 to-indigo-500",
// // // // //   },
// // // // //   "funny-videos": {
// // // // //     title: "Funny Videos",
// // // // //     icon: FaLaughBeam,
// // // // //     tone: "from-pink-500 via-rose-500 to-violet-500",
// // // // //   },
// // // // //   "dance-videos": {
// // // // //     title: "Dance Videos",
// // // // //     icon: FaMusic,
// // // // //     tone: "from-indigo-500 via-purple-500 to-pink-500",
// // // // //   },
// // // // //   breathing: {
// // // // //     title: "Breathing Exercises",
// // // // //     icon: FaWind,
// // // // //     tone: "from-cyan-500 via-sky-500 to-indigo-500",
// // // // //   },
// // // // //   affirmations: {
// // // // //     title: "Comfort Notes",
// // // // //     icon: FaHeart,
// // // // //     tone: "from-rose-400 via-pink-500 to-fuchsia-500",
// // // // //   },
// // // // // };

// // // // // function SafeSpace() {
// // // // //   const navigate = useNavigate();
// // // // //   const [groupedItems, setGroupedItems] = useState(fallbackData);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [query, setQuery] = useState("");
// // // // //   const [activeCategory, setActiveCategory] = useState("all");

// // // // //   useEffect(() => {
// // // // //     const fetchSafeSpaceItems = async () => {
// // // // //       try {
// // // // //         const res = await fetch("http://localhost:5000/api/safe-space");
// // // // //         const data = await res.json();

// // // // //         if (Array.isArray(data) && data.length > 0) {
// // // // //           const grouped = data.reduce((acc, item) => {
// // // // //             if (!acc[item.category]) acc[item.category] = [];
// // // // //             acc[item.category].push(item);
// // // // //             return acc;
// // // // //           }, {});
// // // // //           setGroupedItems((prev) => ({ ...prev, ...grouped }));
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.log("Using fallback safe space data:", error);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchSafeSpaceItems();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const sections = document.querySelectorAll(".reveal-on-scroll");
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) entry.target.classList.add("in-view");
// // // // //         });
// // // // //       },
// // // // //       { threshold: 0.12 }
// // // // //     );

// // // // //     sections.forEach((el) => observer.observe(el));
// // // // //     return () => observer.disconnect();
// // // // //   }, []);

// // // // //   const categories = useMemo(() => Object.keys(sectionMeta), []);
// // // // //   const normalizedQuery = query.trim().toLowerCase();

// // // // //   const handleQuickRelief = () => {
// // // // //     const pool = categories.flatMap((cat) =>
// // // // //       (groupedItems[cat] || []).filter((item) => item.url && item.mediaType !== "text")
// // // // //     );
// // // // //     if (pool.length > 0) {
// // // // //       const random = pool[Math.floor(Math.random() * pool.length)];
// // // // //       window.open(random.url, "_blank", "noopener,noreferrer");
// // // // //       return;
// // // // //     }
// // // // //     document.getElementById("section-breathing")?.scrollIntoView({ behavior: "smooth" });
// // // // //   };

// // // // //   const filterItems = (items) => {
// // // // //     if (!normalizedQuery) return items;
// // // // //     return items.filter((item) => {
// // // // //       const hay = `${item.title} ${item.description || ""}`.toLowerCase();
// // // // //       return hay.includes(normalizedQuery);
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="page-in relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900">
// // // // //       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // // // //         <div className="ambient ambient-a" />
// // // // //         <div className="ambient ambient-b" />
// // // // //         <div className="ambient ambient-c" />
// // // // //         <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
// // // // //       </div>

// // // // //       <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
// // // // //         <div className="reveal-on-scroll mb-7 flex items-center justify-between">
// // // // //           <button
// // // // //             onClick={() => navigate("/dashboard")}
// // // // //             className="top-btn inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-5 py-2.5 font-medium text-indigo-600 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
// // // // //           >
// // // // //             <FaArrowLeft />
// // // // //             Back to Dashboard
// // // // //           </button>

// // // // //           <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-indigo-600 shadow-sm backdrop-blur-xl md:flex calm-chip">
// // // // //             <FaMoon />
// // // // //             Calm Mode Active
// // // // //           </div>
// // // // //         </div>

// // // // //         <section className="reveal-on-scroll hero-soft relative mb-8 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
// // // // //           <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
// // // // //           <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

// // // // //           <div className="relative grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
// // // // //             <div>
// // // // //               <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
// // // // //                 <FaHeart />
// // // // //                 Safe Space Mode
// // // // //               </div>

// // // // //               <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
// // // // //                 Your calm recovery zone
// // // // //               </h1>

// // // // //               <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
// // // // //                 Slow down with soothing music, guided meditation, grounding
// // // // //                 therapy, playful mini breaks, movement sessions, breathing
// // // // //                 practices, and uplifting support.
// // // // //               </p>

// // // // //               <div className="mt-5 flex flex-wrap gap-2.5">
// // // // //                 <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // // //                   8 wellness sections
// // // // //                 </span>
// // // // //                 <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // // //                   Guided calm support
// // // // //                 </span>
// // // // //                 <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // // //                   Soft visual therapy feel
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
// // // // //               <div className="glass-panel rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-2xl">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
// // // // //                     <FaStar />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">
// // // // //                       Premium Feel
// // // // //                     </p>
// // // // //                     <p className="text-lg font-bold">Immersive UI</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="mt-2 text-sm text-white/85">
// // // // //                   Softer, safer, and cleaner than a regular tools page.
// // // // //                 </p>
// // // // //               </div>

// // // // //               <div className="glass-panel-delay rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-2xl">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
// // // // //                     <FaMoon />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">
// // // // //                       Calm Mode
// // // // //                     </p>
// // // // //                     <p className="text-lg font-bold">Soft Layers</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="mt-2 text-sm text-white/85">
// // // // //                   Gentle depth + subtle motion for a peaceful feel.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </section>

// // // // //         <section className="reveal-on-scroll mb-8 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-md backdrop-blur-xl md:p-5">
// // // // //           <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
// // // // //             <div className="relative w-full md:max-w-md">
// // // // //               <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" />
// // // // //               <input
// // // // //                 value={query}
// // // // //                 onChange={(e) => setQuery(e.target.value)}
// // // // //                 placeholder="Search calming activities..."
// // // // //                 className="w-full rounded-xl border border-indigo-100 bg-white px-10 py-2.5 text-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
// // // // //               />
// // // // //             </div>

// // // // //             <button
// // // // //               onClick={handleQuickRelief}
// // // // //               className="btn-breathe inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]"
// // // // //             >
// // // // //               <FaBolt className="text-xs" />
// // // // //               Quick Calm Now
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="mt-3 flex flex-wrap gap-2">
// // // // //             <button
// // // // //               onClick={() => setActiveCategory("all")}
// // // // //               className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
// // // // //                 activeCategory === "all"
// // // // //                   ? "bg-indigo-600 text-white shadow"
// // // // //                   : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// // // // //               }`}
// // // // //             >
// // // // //               All
// // // // //             </button>
// // // // //             {categories.map((cat) => (
// // // // //               <button
// // // // //                 key={cat}
// // // // //                 onClick={() => setActiveCategory(cat)}
// // // // //                 className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
// // // // //                   activeCategory === cat
// // // // //                     ? "bg-indigo-600 text-white shadow"
// // // // //                     : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// // // // //                 }`}
// // // // //               >
// // // // //                 {sectionMeta[cat].title}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>
// // // // //         </section>

// // // // //         {loading && (
// // // // //           <div className="reveal-on-scroll mb-8 rounded-2xl border border-white/80 bg-white/80 p-4 text-slate-600 shadow-lg backdrop-blur-xl">
// // // // //             Loading safe space content...
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="space-y-12">
// // // // //           {categories.map((category) => {
// // // // //             if (activeCategory !== "all" && activeCategory !== category) return null;

// // // // //             const items = filterItems(groupedItems[category] || []);
// // // // //             const Icon = sectionMeta[category].icon;

// // // // //             if (!items.length) return null;

// // // // //             return (
// // // // //               <section
// // // // //                 key={category}
// // // // //                 id={`section-${category}`}
// // // // //                 className="reveal-on-scroll"
// // // // //               >
// // // // //                 <div className="mb-6 flex items-center justify-between gap-4">
// // // // //                   <div className="flex items-center gap-4">
// // // // //                     <div
// // // // //                       className={`icon-float flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // // // //                     >
// // // // //                       <Icon className="text-xl" />
// // // // //                     </div>

// // // // //                     <div>
// // // // //                       <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
// // // // //                         Safe Space Collection
// // // // //                       </p>
// // // // //                       <h2 className="section-title text-2xl font-black text-slate-900 md:text-3xl">
// // // // //                         {sectionMeta[category].title}
// // // // //                       </h2>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="hidden rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm text-slate-500 shadow-sm backdrop-blur-xl md:block">
// // // // //                     {items.length} curated options
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
// // // // //                   {items.slice(0, 4).map((item, index) => (
// // // // //                     <div
// // // // //                       key={item._id}
// // // // //                       className="card-in group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_48px_rgba(79,70,229,0.10)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
// // // // //                       style={{ animationDelay: `${index * 80}ms` }}
// // // // //                     >
// // // // //                       <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl shimmer-spot" />

// // // // //                       <div
// // // // //                         className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // // // //                       >
// // // // //                         <Icon className="text-xl" />
// // // // //                       </div>

// // // // //                       <div className="relative">
// // // // //                         <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
// // // // //                           Wellness Activity
// // // // //                         </p>

// // // // //                         <h3 className="mt-3 text-xl font-bold text-slate-900">
// // // // //                           {item.title}
// // // // //                         </h3>

// // // // //                         <p className="mt-3 leading-7 text-slate-600">
// // // // //                           {item.description}
// // // // //                         </p>

// // // // //                         {item.duration && (
// // // // //                           <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
// // // // //                             Duration: {item.duration}
// // // // //                           </div>
// // // // //                         )}

// // // // //                         {item.mediaType === "text" ? (
// // // // //                           <div className="mt-5 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 text-slate-700 shadow-sm">
// // // // //                             <p className="font-semibold">{item.title}</p>
// // // // //                             <p className="mt-2 text-sm text-slate-600">
// // // // //                               {item.description}
// // // // //                             </p>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <a
// // // // //                             href={item.url}
// // // // //                             target="_blank"
// // // // //                             rel="noopener noreferrer"
// // // // //                             className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
// // // // //                           >
// // // // //                             Open Now
// // // // //                             <FaPlay className="text-xs" />
// // // // //                           </a>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </section>
// // // // //             );
// // // // //           })}
// // // // //         </div>
// // // // //       </div>

// // // // //       <style>{`
// // // // //         @keyframes pageIn {
// // // // //           from { opacity: 0; transform: translateY(8px); }
// // // // //           to { opacity: 1; transform: translateY(0); }
// // // // //         }
// // // // //         @keyframes ambientA {
// // // // //           0%,100% { transform: translate(0,0); opacity:.68; }
// // // // //           50% { transform: translate(16px,-10px); opacity:.95; }
// // // // //         }
// // // // //         @keyframes ambientB {
// // // // //           0%,100% { transform: translate(0,0); opacity:.62; }
// // // // //           50% { transform: translate(-14px,10px); opacity:.9; }
// // // // //         }
// // // // //         @keyframes ambientC {
// // // // //           0%,100% { transform: translate(0,0); opacity:.58; }
// // // // //           50% { transform: translate(12px,8px); opacity:.85; }
// // // // //         }
// // // // //         @keyframes heroFloat {
// // // // //           0%,100% { transform: translateY(0); }
// // // // //           50% { transform: translateY(-4px); }
// // // // //         }
// // // // //         @keyframes glassFloat {
// // // // //           0%,100% { transform: translateY(0); }
// // // // //           50% { transform: translateY(-5px); }
// // // // //         }
// // // // //         @keyframes fadeUp {
// // // // //           from { opacity:0; transform:translateY(12px); }
// // // // //           to { opacity:1; transform:translateY(0); }
// // // // //         }
// // // // //         @keyframes breathe {
// // // // //           0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
// // // // //           50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
// // // // //         }
// // // // //         @keyframes titleWave {
// // // // //           0%,100% { letter-spacing: 0; }
// // // // //           50% { letter-spacing: .2px; }
// // // // //         }
// // // // //         @keyframes iconBob {
// // // // //           0%,100% { transform: translateY(0); }
// // // // //           50% { transform: translateY(-3px); }
// // // // //         }
// // // // //         @keyframes shimmerMove {
// // // // //           0% { transform: translateX(-20px) scale(1); opacity:.45; }
// // // // //           100% { transform: translateX(18px) scale(1.2); opacity:.2; }
// // // // //         }

// // // // //         .page-in { animation: pageIn .55s ease both; }

// // // // //         .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
// // // // //         .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
// // // // //         .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
// // // // //         .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

// // // // //         .hero-soft { animation: heroFloat 7s ease-in-out infinite; }
// // // // //         .glass-panel { animation: glassFloat 6s ease-in-out infinite; }
// // // // //         .glass-panel-delay { animation: glassFloat 7.2s ease-in-out infinite; }

// // // // //         .card-in { animation: fadeUp .55s ease both; }
// // // // //         .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }
// // // // //         .section-title { animation: titleWave 4.5s ease-in-out infinite; }
// // // // //         .icon-float { animation: iconBob 3.6s ease-in-out infinite; }
// // // // //         .shimmer-spot { animation: shimmerMove 4.8s ease-in-out infinite alternate; }

// // // // //         .top-btn { transition: transform .25s ease, box-shadow .25s ease; }
// // // // //         .top-btn:hover { box-shadow: 0 8px 18px rgba(99,102,241,.2); }
// // // // //         .calm-chip { animation: breathe 3.4s ease-in-out infinite; }

// // // // //         .reveal-on-scroll {
// // // // //           opacity: 0;
// // // // //           transform: translateY(20px);
// // // // //           transition: opacity .65s ease, transform .65s ease;
// // // // //         }
// // // // //         .reveal-on-scroll.in-view {
// // // // //           opacity: 1;
// // // // //           transform: translateY(0);
// // // // //         }

// // // // //         @media (prefers-reduced-motion: reduce) {
// // // // //           .page-in,.ambient-a,.ambient-b,.ambient-c,.hero-soft,.glass-panel,.glass-panel-delay,.card-in,.btn-breathe,.section-title,.icon-float,.shimmer-spot,.calm-chip,.reveal-on-scroll {
// // // // //             animation: none !important;
// // // // //             transition: none !important;
// // // // //           }
// // // // //           .reveal-on-scroll { opacity: 1; transform: none; }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default SafeSpace;





// // // // import { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   FaArrowLeft,
// // // //   FaGamepad,
// // // //   FaHeadphones,
// // // //   FaSpa,
// // // //   FaHandsHelping,
// // // //   FaLaughBeam,
// // // //   FaMusic,
// // // //   FaWind,
// // // //   FaHeart,
// // // //   FaPlay,
// // // //   FaMoon,
// // // //   FaSun,
// // // // } from "react-icons/fa";

// // // // const fallbackData = {
// // // //   "mini-games": [
// // // //     {
// // // //       _id: "g1",
// // // //       title: "Color Match Calm",
// // // //       description: "A light focus game to gently shift your attention.",
// // // //       url: "https://www.crazygames.com/",
// // // //       mediaType: "game",
// // // //     },
// // // //     {
// // // //       _id: "g2",
// // // //       title: "Puzzle Break",
// // // //       description: "A simple brain game for a calm mental reset.",
// // // //       url: "https://poki.com/",
// // // //       mediaType: "game",
// // // //     },
// // // //     {
// // // //       _id: "g3",
// // // //       title: "Memory Relax",
// // // //       description: "A short memory challenge to refresh your mind.",
// // // //       url: "https://www.memozor.com/",
// // // //       mediaType: "game",
// // // //     },
// // // //   ],
// // // //   music: [
// // // //     {
// // // //       _id: "m1",
// // // //       title: "Soft Rain Ambience",
// // // //       description: "Gentle rain sounds for calm and comfort.",
// // // //       url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
// // // //       mediaType: "audio",
// // // //       duration: "10 min",
// // // //     },
// // // //     {
// // // //       _id: "m2",
// // // //       title: "Piano Peace",
// // // //       description: "Slow piano tones for relaxation.",
// // // //       url: "https://www.youtube.com/results?search_query=calm+piano+music",
// // // //       mediaType: "audio",
// // // //       duration: "8 min",
// // // //     },
// // // //     {
// // // //       _id: "m3",
// // // //       title: "Nature Calm",
// // // //       description: "Birds, breeze, and nature sounds to relax.",
// // // //       url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
// // // //       mediaType: "audio",
// // // //       duration: "12 min",
// // // //     },
// // // //   ],
// // // //   meditation: [
// // // //     {
// // // //       _id: "med1",
// // // //       title: "5-Minute Calm Reset",
// // // //       description: "A short guided meditation for grounding.",
// // // //       url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
// // // //       mediaType: "video",
// // // //       duration: "5 min",
// // // //     },
// // // //     {
// // // //       _id: "med2",
// // // //       title: "Morning Mindfulness",
// // // //       description: "Start gently with a focused meditation session.",
// // // //       url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
// // // //       mediaType: "video",
// // // //       duration: "7 min",
// // // //     },
// // // //     {
// // // //       _id: "med3",
// // // //       title: "Sleep Relaxation",
// // // //       description: "A soft meditation session to reduce night anxiety.",
// // // //       url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
// // // //       mediaType: "video",
// // // //       duration: "10 min",
// // // //     },
// // // //   ],
// // // //   therapy: [
// // // //     {
// // // //       _id: "t1",
// // // //       title: "Grounding for Panic",
// // // //       description: "Quick grounding support for panic moments.",
// // // //       url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
// // // //       mediaType: "video",
// // // //       duration: "6 min",
// // // //     },
// // // //     {
// // // //       _id: "t2",
// // // //       title: "Overthinking Relief",
// // // //       description: "Therapy-style support for racing thoughts.",
// // // //       url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
// // // //       mediaType: "video",
// // // //       duration: "8 min",
// // // //     },
// // // //     {
// // // //       _id: "t3",
// // // //       title: "Anxiety Reset",
// // // //       description: "A gentle calming session for anxious moments.",
// // // //       url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
// // // //       mediaType: "video",
// // // //       duration: "7 min",
// // // //     },
// // // //   ],
// // // //   "funny-videos": [
// // // //     {
// // // //       _id: "f1",
// // // //       title: "Cute Animal Moments",
// // // //       description: "A cheerful break to lift your mood.",
// // // //       url: "https://www.youtube.com/results?search_query=funny+animal+videos",
// // // //       mediaType: "video",
// // // //     },
// // // //     {
// // // //       _id: "f2",
// // // //       title: "Funny Kids Compilation",
// // // //       description: "Light and playful videos for a quick smile.",
// // // //       url: "https://www.youtube.com/results?search_query=funny+kids+videos",
// // // //       mediaType: "video",
// // // //     },
// // // //     {
// // // //       _id: "f3",
// // // //       title: "Comedy Shorts",
// // // //       description: "Small, funny clips for a stress break.",
// // // //       url: "https://www.youtube.com/results?search_query=funny+short+videos",
// // // //       mediaType: "video",
// // // //     },
// // // //   ],
// // // //   "dance-videos": [
// // // //     {
// // // //       _id: "d1",
// // // //       title: "Feel-Good Dance Break",
// // // //       description: "A positive movement break to refresh your energy.",
// // // //       url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
// // // //       mediaType: "video",
// // // //     },
// // // //     {
// // // //       _id: "d2",
// // // //       title: "Happy Dance Session",
// // // //       description: "Move a little and shake off stress.",
// // // //       url: "https://www.youtube.com/results?search_query=happy+dance+video",
// // // //       mediaType: "video",
// // // //     },
// // // //     {
// // // //       _id: "d3",
// // // //       title: "Fun Zumba Break",
// // // //       description: "A short dance routine for mood lifting.",
// // // //       url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
// // // //       mediaType: "video",
// // // //     },
// // // //   ],
// // // //   breathing: [
// // // //     {
// // // //       _id: "b1",
// // // //       title: "Box Breathing",
// // // //       description: "Inhale 4, hold 4, exhale 4, hold 4.",
// // // //       mediaType: "text",
// // // //       duration: "3 min",
// // // //     },
// // // //     {
// // // //       _id: "b2",
// // // //       title: "4-4-6 Breathing",
// // // //       description: "Inhale for 4, hold for 4, exhale for 6.",
// // // //       mediaType: "text",
// // // //       duration: "2 min",
// // // //     },
// // // //     {
// // // //       _id: "b3",
// // // //       title: "Slow Deep Breathing",
// // // //       description: "Breathe in deeply and exhale slowly for calm.",
// // // //       mediaType: "text",
// // // //       duration: "5 min",
// // // //     },
// // // //   ],
// // // //   affirmations: [
// // // //     {
// // // //       _id: "a1",
// // // //       title: "You are safe right now.",
// // // //       description:
// // // //         "Pause, breathe, and remind yourself that this feeling will pass.",
// // // //       mediaType: "text",
// // // //     },
// // // //     {
// // // //       _id: "a2",
// // // //       title: "You are doing your best.",
// // // //       description: "Even small steps matter. You are trying, and that counts.",
// // // //       mediaType: "text",
// // // //     },
// // // //     {
// // // //       _id: "a3",
// // // //       title: "This moment is temporary.",
// // // //       description: "Let yourself slow down. Calm can return gradually.",
// // // //       mediaType: "text",
// // // //     },
// // // //   ],
// // // // };

// // // // const sectionMeta = {
// // // //   "mini-games": {
// // // //     title: "Mini Games",
// // // //     icon: FaGamepad,
// // // //     tone: "from-violet-500 via-indigo-500 to-blue-500",
// // // //   },
// // // //   music: {
// // // //     title: "Soothing Music",
// // // //     icon: FaHeadphones,
// // // //     tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
// // // //   },
// // // //   meditation: {
// // // //     title: "Meditation Sessions",
// // // //     icon: FaSpa,
// // // //     tone: "from-indigo-500 via-blue-500 to-cyan-400",
// // // //   },
// // // //   therapy: {
// // // //     title: "Therapy Support",
// // // //     icon: FaHandsHelping,
// // // //     tone: "from-sky-500 via-blue-500 to-indigo-500",
// // // //   },
// // // //   "funny-videos": {
// // // //     title: "Funny Videos",
// // // //     icon: FaLaughBeam,
// // // //     tone: "from-pink-500 via-rose-500 to-violet-500",
// // // //   },
// // // //   "dance-videos": {
// // // //     title: "Dance Videos",
// // // //     icon: FaMusic,
// // // //     tone: "from-indigo-500 via-purple-500 to-pink-500",
// // // //   },
// // // //   breathing: {
// // // //     title: "Breathing Exercises",
// // // //     icon: FaWind,
// // // //     tone: "from-cyan-500 via-sky-500 to-indigo-500",
// // // //   },
// // // //   affirmations: {
// // // //     title: "Comfort Notes",
// // // //     icon: FaHeart,
// // // //     tone: "from-rose-400 via-pink-500 to-fuchsia-500",
// // // //   },
// // // // };

// // // // function SafeSpace() {
// // // //   const navigate = useNavigate();
// // // //   const [groupedItems, setGroupedItems] = useState(fallbackData);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [darkMode, setDarkMode] = useState(
// // // //     () => localStorage.getItem("darkMode") === "true"
// // // //   );

// // // //   useEffect(() => {
// // // //     document.body.classList.toggle("dark", darkMode);
// // // //     localStorage.setItem("darkMode", String(darkMode));
// // // //   }, [darkMode]);

// // // //   useEffect(() => {
// // // //     const fetchSafeSpaceItems = async () => {
// // // //       try {
// // // //         const res = await fetch("http://localhost:5000/api/safe-space");
// // // //         const data = await res.json();

// // // //         if (Array.isArray(data) && data.length > 0) {
// // // //           const grouped = data.reduce((acc, item) => {
// // // //             if (!acc[item.category]) acc[item.category] = [];
// // // //             acc[item.category].push(item);
// // // //             return acc;
// // // //           }, {});
// // // //           setGroupedItems((prev) => ({ ...prev, ...grouped }));
// // // //         }
// // // //       } catch (error) {
// // // //         console.log("Using fallback safe space data:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchSafeSpaceItems();
// // // //   }, []);

// // // //   return (
// // // //     <div
// // // //       className={`relative min-h-screen w-full overflow-hidden ${
// // // //         darkMode
// // // //           ? "bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0b1220_100%)] text-slate-100"
// // // //           : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900"
// // // //       }`}
// // // //     >
// // // //       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // // //         <div className="ambient ambient-a" />
// // // //         <div className="ambient ambient-b" />
// // // //         <div className="ambient ambient-c" />
// // // //         <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
// // // //       </div>

// // // //       <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
// // // //         <div className="mb-7 flex items-center justify-between">
// // // //           <button
// // // //             onClick={() => navigate("/dashboard")}
// // // //             className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium shadow-sm transition hover:-translate-y-0.5 ${
// // // //               darkMode
// // // //                 ? "border border-slate-600 bg-slate-800/80 text-slate-100 hover:bg-slate-700"
// // // //                 : "border border-indigo-200/80 bg-white/80 text-indigo-600 hover:bg-white"
// // // //             }`}
// // // //           >
// // // //             <FaArrowLeft />
// // // //             Back to Dashboard
// // // //           </button>

// // // //           <button
// // // //             onClick={() => setDarkMode((prev) => !prev)}
// // // //             className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition ${
// // // //               darkMode
// // // //                 ? "border border-slate-600 bg-slate-800/80 text-yellow-300 hover:bg-slate-700"
// // // //                 : "border border-white/70 bg-white/70 text-indigo-600 hover:bg-white"
// // // //             }`}
// // // //           >
// // // //             {darkMode ? <FaSun /> : <FaMoon />}
// // // //             {darkMode ? "Light Mode" : "Dark Mode"}
// // // //           </button>
// // // //         </div>

// // // //         <section className="hero-soft relative mb-10 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
// // // //           <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
// // // //           <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

// // // //           <div className="relative">
// // // //             <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
// // // //               <FaHeart />
// // // //               Safe Space Mode
// // // //             </div>

// // // //             <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
// // // //               Your calm recovery zone
// // // //             </h1>

// // // //             <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
// // // //               Slow down with soothing music, guided meditation, grounding
// // // //               therapy, playful mini breaks, movement sessions, breathing
// // // //               practices, and uplifting support.
// // // //             </p>

// // // //             <div className="mt-5 flex flex-wrap gap-2.5">
// // // //               <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // //                 8 wellness sections
// // // //               </span>
// // // //               <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // //                 Guided calm support
// // // //               </span>
// // // //               <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs md:text-sm">
// // // //                 Soft visual therapy feel
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {loading && (
// // // //           <div
// // // //             className={`mb-8 rounded-2xl p-4 shadow-lg backdrop-blur-xl ${
// // // //               darkMode
// // // //                 ? "border border-slate-700 bg-slate-800/80 text-slate-300"
// // // //                 : "border border-white/80 bg-white/80 text-slate-600"
// // // //             }`}
// // // //           >
// // // //             Loading safe space content...
// // // //           </div>
// // // //         )}

// // // //         <div className="space-y-12">
// // // //           {Object.keys(sectionMeta).map((category) => {
// // // //             const items = groupedItems[category] || [];
// // // //             const Icon = sectionMeta[category].icon;

// // // //             if (!items.length) return null;

// // // //             return (
// // // //               <section key={category}>
// // // //                 <div className="mb-6 flex items-center justify-between gap-4">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div
// // // //                       className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // // //                     >
// // // //                       <Icon className="text-xl" />
// // // //                     </div>

// // // //                     <div>
// // // //                       <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
// // // //                         Safe Space Collection
// // // //                       </p>
// // // //                       <h2
// // // //                         className={`text-2xl font-black md:text-3xl ${
// // // //                           darkMode ? "text-slate-100" : "text-slate-900"
// // // //                         }`}
// // // //                       >
// // // //                         {sectionMeta[category].title}
// // // //                       </h2>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div
// // // //                     className={`hidden rounded-full px-4 py-2 text-sm shadow-sm backdrop-blur-xl md:block ${
// // // //                       darkMode
// // // //                         ? "border border-slate-700 bg-slate-800/70 text-slate-300"
// // // //                         : "border border-indigo-100 bg-white/80 text-slate-500"
// // // //                     }`}
// // // //                   >
// // // //                     {items.length} curated options
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
// // // //                   {items.slice(0, 4).map((item, index) => (
// // // //                     <div
// // // //                       key={item._id}
// // // //                       className={`card-in group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
// // // //                         darkMode
// // // //                           ? "border-slate-700 bg-slate-800/75 shadow-[0_18px_48px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
// // // //                           : "border-white/80 bg-white/80 shadow-[0_18px_48px_rgba(79,70,229,0.10)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
// // // //                       }`}
// // // //                       style={{ animationDelay: `${index * 70}ms` }}
// // // //                     >
// // // //                       <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl" />

// // // //                       <div
// // // //                         className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // // //                       >
// // // //                         <Icon className="text-xl" />
// // // //                       </div>

// // // //                       <div className="relative">
// // // //                         <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
// // // //                           Wellness Activity
// // // //                         </p>

// // // //                         <h3
// // // //                           className={`mt-3 text-xl font-bold ${
// // // //                             darkMode ? "text-slate-100" : "text-slate-900"
// // // //                           }`}
// // // //                         >
// // // //                           {item.title}
// // // //                         </h3>

// // // //                         <p
// // // //                           className={`mt-3 leading-7 ${
// // // //                             darkMode ? "text-slate-300" : "text-slate-600"
// // // //                           }`}
// // // //                         >
// // // //                           {item.description}
// // // //                         </p>

// // // //                         {item.duration && (
// // // //                           <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
// // // //                             Duration: {item.duration}
// // // //                           </div>
// // // //                         )}

// // // //                         {item.mediaType === "text" ? (
// // // //                           <div
// // // //                             className={`mt-5 rounded-2xl border p-4 shadow-sm ${
// // // //                               darkMode
// // // //                                 ? "border-slate-700 bg-slate-900/70 text-slate-200"
// // // //                                 : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-slate-700"
// // // //                             }`}
// // // //                           >
// // // //                             <p className="font-semibold">{item.title}</p>
// // // //                             <p
// // // //                               className={`mt-2 text-sm ${
// // // //                                 darkMode ? "text-slate-300" : "text-slate-600"
// // // //                               }`}
// // // //                             >
// // // //                               {item.description}
// // // //                             </p>
// // // //                           </div>
// // // //                         ) : (
// // // //                           <a
// // // //                             href={item.url}
// // // //                             target="_blank"
// // // //                             rel="noopener noreferrer"
// // // //                             className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
// // // //                           >
// // // //                             Open Now
// // // //                             <FaPlay className="text-xs" />
// // // //                           </a>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </section>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>

// // // //       <style>{`
// // // //         @keyframes ambientA {
// // // //           0%,100% { transform: translate(0,0); opacity:.7; }
// // // //           50% { transform: translate(14px,-10px); opacity:1; }
// // // //         }
// // // //         @keyframes ambientB {
// // // //           0%,100% { transform: translate(0,0); opacity:.65; }
// // // //           50% { transform: translate(-12px,12px); opacity:.95; }
// // // //         }
// // // //         @keyframes ambientC {
// // // //           0%,100% { transform: translate(0,0); opacity:.6; }
// // // //           50% { transform: translate(10px,8px); opacity:.9; }
// // // //         }
// // // //         @keyframes heroFloat {
// // // //           0%,100% { transform: translateY(0); }
// // // //           50% { transform: translateY(-4px); }
// // // //         }
// // // //         @keyframes fadeUp {
// // // //           from { opacity:0; transform:translateY(10px); }
// // // //           to { opacity:1; transform:translateY(0); }
// // // //         }
// // // //         @keyframes breathe {
// // // //           0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
// // // //           50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
// // // //         }

// // // //         .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
// // // //         .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
// // // //         .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
// // // //         .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

// // // //         .hero-soft { animation: heroFloat 7s ease-in-out infinite; }
// // // //         .card-in { animation: fadeUp .55s ease both; }
// // // //         .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }

// // // //         @media (prefers-reduced-motion: reduce) {
// // // //           .ambient-a,.ambient-b,.ambient-c,.hero-soft,.card-in,.btn-breathe {
// // // //             animation: none !important;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SafeSpace;












// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import {
// // //   FaArrowLeft,
// // //   FaGamepad,
// // //   FaHeadphones,
// // //   FaSpa,
// // //   FaHandsHelping,
// // //   FaLaughBeam,
// // //   FaMusic,
// // //   FaWind,
// // //   FaHeart,
// // //   FaPlay,
// // //   FaMoon,
// // //   FaSun,
// // //   FaSearch,
// // // } from "react-icons/fa";

// // // const fallbackData = {
// // //   "mini-games": [
// // //     {
// // //       _id: "g1",
// // //       title: "Color Match Calm",
// // //       description: "A light focus game to gently shift your attention.",
// // //       url: "https://www.crazygames.com/",
// // //       mediaType: "game",
// // //     },
// // //     {
// // //       _id: "g2",
// // //       title: "Puzzle Break",
// // //       description: "A simple brain game for a calm mental reset.",
// // //       url: "https://poki.com/",
// // //       mediaType: "game",
// // //     },
// // //     {
// // //       _id: "g3",
// // //       title: "Memory Relax",
// // //       description: "A short memory challenge to refresh your mind.",
// // //       url: "https://www.memozor.com/",
// // //       mediaType: "game",
// // //     },
// // //   ],
// // //   music: [
// // //     {
// // //       _id: "m1",
// // //       title: "Soft Rain Ambience",
// // //       description: "Gentle rain sounds for calm and comfort.",
// // //       url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
// // //       mediaType: "audio",
// // //       duration: "10 min",
// // //     },
// // //     {
// // //       _id: "m2",
// // //       title: "Piano Peace",
// // //       description: "Slow piano tones for relaxation.",
// // //       url: "https://www.youtube.com/results?search_query=calm+piano+music",
// // //       mediaType: "audio",
// // //       duration: "8 min",
// // //     },
// // //     {
// // //       _id: "m3",
// // //       title: "Nature Calm",
// // //       description: "Birds, breeze, and nature sounds to relax.",
// // //       url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
// // //       mediaType: "audio",
// // //       duration: "12 min",
// // //     },
// // //   ],
// // //   meditation: [
// // //     {
// // //       _id: "med1",
// // //       title: "5-Minute Calm Reset",
// // //       description: "A short guided meditation for grounding.",
// // //       url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
// // //       mediaType: "video",
// // //       duration: "5 min",
// // //     },
// // //     {
// // //       _id: "med2",
// // //       title: "Morning Mindfulness",
// // //       description: "Start gently with a focused meditation session.",
// // //       url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
// // //       mediaType: "video",
// // //       duration: "7 min",
// // //     },
// // //     {
// // //       _id: "med3",
// // //       title: "Sleep Relaxation",
// // //       description: "A soft meditation session to reduce night anxiety.",
// // //       url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
// // //       mediaType: "video",
// // //       duration: "10 min",
// // //     },
// // //   ],
// // //   therapy: [
// // //     {
// // //       _id: "t1",
// // //       title: "Grounding for Panic",
// // //       description: "Quick grounding support for panic moments.",
// // //       url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
// // //       mediaType: "video",
// // //       duration: "6 min",
// // //     },
// // //     {
// // //       _id: "t2",
// // //       title: "Overthinking Relief",
// // //       description: "Therapy-style support for racing thoughts.",
// // //       url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
// // //       mediaType: "video",
// // //       duration: "8 min",
// // //     },
// // //     {
// // //       _id: "t3",
// // //       title: "Anxiety Reset",
// // //       description: "A gentle calming session for anxious moments.",
// // //       url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
// // //       mediaType: "video",
// // //       duration: "7 min",
// // //     },
// // //   ],
// // //   "funny-videos": [
// // //     {
// // //       _id: "f1",
// // //       title: "Cute Animal Moments",
// // //       description: "A cheerful break to lift your mood.",
// // //       url: "https://www.youtube.com/results?search_query=funny+animal+videos",
// // //       mediaType: "video",
// // //     },
// // //     {
// // //       _id: "f2",
// // //       title: "Funny Kids Compilation",
// // //       description: "Light and playful videos for a quick smile.",
// // //       url: "https://www.youtube.com/results?search_query=funny+kids+videos",
// // //       mediaType: "video",
// // //     },
// // //     {
// // //       _id: "f3",
// // //       title: "Comedy Shorts",
// // //       description: "Small, funny clips for a stress break.",
// // //       url: "https://www.youtube.com/results?search_query=funny+short+videos",
// // //       mediaType: "video",
// // //     },
// // //   ],
// // //   "dance-videos": [
// // //     {
// // //       _id: "d1",
// // //       title: "Feel-Good Dance Break",
// // //       description: "A positive movement break to refresh your energy.",
// // //       url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
// // //       mediaType: "video",
// // //     },
// // //     {
// // //       _id: "d2",
// // //       title: "Happy Dance Session",
// // //       description: "Move a little and shake off stress.",
// // //       url: "https://www.youtube.com/results?search_query=happy+dance+video",
// // //       mediaType: "video",
// // //     },
// // //     {
// // //       _id: "d3",
// // //       title: "Fun Zumba Break",
// // //       description: "A short dance routine for mood lifting.",
// // //       url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
// // //       mediaType: "video",
// // //     },
// // //   ],
// // //   breathing: [
// // //     {
// // //       _id: "b1",
// // //       title: "Box Breathing",
// // //       description: "Inhale 4, hold 4, exhale 4, hold 4.",
// // //       mediaType: "text",
// // //       duration: "3 min",
// // //     },
// // //     {
// // //       _id: "b2",
// // //       title: "4-4-6 Breathing",
// // //       description: "Inhale for 4, hold for 4, exhale for 6.",
// // //       mediaType: "text",
// // //       duration: "2 min",
// // //     },
// // //     {
// // //       _id: "b3",
// // //       title: "Slow Deep Breathing",
// // //       description: "Breathe in deeply and exhale slowly for calm.",
// // //       mediaType: "text",
// // //       duration: "5 min",
// // //     },
// // //   ],
// // //   affirmations: [
// // //     {
// // //       _id: "a1",
// // //       title: "You are safe right now.",
// // //       description:
// // //         "Pause, breathe, and remind yourself that this feeling will pass.",
// // //       mediaType: "text",
// // //     },
// // //     {
// // //       _id: "a2",
// // //       title: "You are doing your best.",
// // //       description: "Even small steps matter. You are trying, and that counts.",
// // //       mediaType: "text",
// // //     },
// // //     {
// // //       _id: "a3",
// // //       title: "This moment is temporary.",
// // //       description: "Let yourself slow down. Calm can return gradually.",
// // //       mediaType: "text",
// // //     },
// // //   ],
// // // };

// // // const sectionMeta = {
// // //   "mini-games": {
// // //     title: "Mini Games",
// // //     icon: FaGamepad,
// // //     tone: "from-violet-500 via-indigo-500 to-blue-500",
// // //   },
// // //   music: {
// // //     title: "Soothing Music",
// // //     icon: FaHeadphones,
// // //     tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
// // //   },
// // //   meditation: {
// // //     title: "Meditation Sessions",
// // //     icon: FaSpa,
// // //     tone: "from-indigo-500 via-blue-500 to-cyan-400",
// // //   },
// // //   therapy: {
// // //     title: "Therapy Support",
// // //     icon: FaHandsHelping,
// // //     tone: "from-sky-500 via-blue-500 to-indigo-500",
// // //   },
// // //   "funny-videos": {
// // //     title: "Funny Videos",
// // //     icon: FaLaughBeam,
// // //     tone: "from-pink-500 via-rose-500 to-violet-500",
// // //   },
// // //   "dance-videos": {
// // //     title: "Dance Videos",
// // //     icon: FaMusic,
// // //     tone: "from-indigo-500 via-purple-500 to-pink-500",
// // //   },
// // //   breathing: {
// // //     title: "Breathing Exercises",
// // //     icon: FaWind,
// // //     tone: "from-cyan-500 via-sky-500 to-indigo-500",
// // //   },
// // //   affirmations: {
// // //     title: "Comfort Notes",
// // //     icon: FaHeart,
// // //     tone: "from-rose-400 via-pink-500 to-fuchsia-500",
// // //   },
// // // };

// // // function SafeSpace() {
// // //   const navigate = useNavigate();
// // //   const [groupedItems, setGroupedItems] = useState(fallbackData);
// // //   const [loading, setLoading] = useState(true);
// // //   const [darkMode, setDarkMode] = useState(
// // //     () => localStorage.getItem("darkMode") === "true"
// // //   );
// // //   const [query, setQuery] = useState("");
// // //   const [activeCategory, setActiveCategory] = useState("all");

// // //   const categories = Object.keys(sectionMeta);
// // //   const normalizedQuery = query.trim().toLowerCase();

// // //   useEffect(() => {
// // //     document.body.classList.toggle("dark", darkMode);
// // //     localStorage.setItem("darkMode", String(darkMode));
// // //   }, [darkMode]);

// // //   useEffect(() => {
// // //     const fetchSafeSpaceItems = async () => {
// // //       try {
// // //         const res = await fetch("http://localhost:5000/api/safe-space");
// // //         const data = await res.json();

// // //         if (Array.isArray(data) && data.length > 0) {
// // //           const grouped = data.reduce((acc, item) => {
// // //             if (!acc[item.category]) acc[item.category] = [];
// // //             acc[item.category].push(item);
// // //             return acc;
// // //           }, {});
// // //           setGroupedItems((prev) => ({ ...prev, ...grouped }));
// // //         }
// // //       } catch (error) {
// // //         console.log("Using fallback safe space data:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchSafeSpaceItems();
// // //   }, []);

// // //   const getFilteredItems = (category) => {
// // //     const source = groupedItems[category] || [];
// // //     if (!normalizedQuery) return source;

// // //     return source.filter((item) => {
// // //       const haystack = `${item.title} ${item.description || ""}`.toLowerCase();
// // //       return haystack.includes(normalizedQuery);
// // //     });
// // //   };

// // //   const hasAnyVisibleResult = categories.some((cat) => {
// // //     if (activeCategory !== "all" && activeCategory !== cat) return false;
// // //     return getFilteredItems(cat).length > 0;
// // //   });

// // //   return (
// // //     <div
// // //       className={`relative min-h-screen w-full overflow-hidden ${
// // //         darkMode
// // //           ? "bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0b1220_100%)] text-slate-100"
// // //           : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900"
// // //       }`}
// // //     >
// // //       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // //         <div className="ambient ambient-a" />
// // //         <div className="ambient ambient-b" />
// // //         <div className="ambient ambient-c" />
// // //         <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
// // //       </div>

// // //       <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
// // //         <div className="mb-7 flex items-center justify-between">
// // //           <button
// // //             onClick={() => navigate("/dashboard")}
// // //             className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium shadow-sm transition hover:-translate-y-0.5 ${
// // //               darkMode
// // //                 ? "border border-slate-600 bg-slate-800/80 text-slate-100 hover:bg-slate-700"
// // //                 : "border border-indigo-200/80 bg-white/80 text-indigo-600 hover:bg-white"
// // //             }`}
// // //           >
// // //             <FaArrowLeft />
// // //             Back to Dashboard
// // //           </button>

// // //           <button
// // //             onClick={() => setDarkMode((prev) => !prev)}
// // //             className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition ${
// // //               darkMode
// // //                 ? "border border-slate-600 bg-slate-800/80 text-yellow-300 hover:bg-slate-700"
// // //                 : "border border-white/70 bg-white/70 text-indigo-600 hover:bg-white"
// // //             }`}
// // //           >
// // //             {darkMode ? <FaSun /> : <FaMoon />}
// // //             {darkMode ? "Light Mode" : "Dark Mode"}
// // //           </button>
// // //         </div>

// // //         <section className="hero-soft relative mb-6 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
// // //           <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
// // //           <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

// // //           <div className="relative">
// // //             <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
// // //               <FaHeart />
// // //               Safe Space Mode
// // //             </div>

// // //             <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
// // //               Your calm recovery zone
// // //             </h1>

// // //             <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
// // //               Slow down with soothing music, guided meditation, grounding
// // //               therapy, playful mini breaks, movement sessions, breathing
// // //               practices, and uplifting support.
// // //             </p>
// // //           </div>
// // //         </section>

// // //         <section
// // //           className={`mb-8 rounded-2xl border p-4 shadow-sm backdrop-blur-xl md:p-5 ${
// // //             darkMode
// // //               ? "border-slate-700 bg-slate-800/70"
// // //               : "border-indigo-100 bg-white/80"
// // //           }`}
// // //         >
// // //           <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
// // //             <div className="relative w-full md:max-w-md">
// // //               <FaSearch
// // //                 className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
// // //                   darkMode ? "text-slate-400" : "text-indigo-400"
// // //                 }`}
// // //               />
// // //               <input
// // //                 value={query}
// // //                 onChange={(e) => setQuery(e.target.value)}
// // //                 placeholder="Search activities..."
// // //                 className={`w-full rounded-xl border px-10 py-2.5 text-sm outline-none transition ${
// // //                   darkMode
// // //                     ? "border-slate-600 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400"
// // //                     : "border-indigo-100 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-300"
// // //                 }`}
// // //               />
// // //             </div>

// // //             <div className="flex flex-wrap gap-2">
// // //               <button
// // //                 onClick={() => setActiveCategory("all")}
// // //                 className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
// // //                   activeCategory === "all"
// // //                     ? "bg-indigo-600 text-white"
// // //                     : darkMode
// // //                     ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
// // //                     : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// // //                 }`}
// // //               >
// // //                 All Modes
// // //               </button>

// // //               {categories.map((cat) => (
// // //                 <button
// // //                   key={cat}
// // //                   onClick={() => setActiveCategory(cat)}
// // //                   className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
// // //                     activeCategory === cat
// // //                       ? "bg-indigo-600 text-white"
// // //                       : darkMode
// // //                       ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
// // //                       : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// // //                   }`}
// // //                 >
// // //                   {sectionMeta[cat].title}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {loading && (
// // //           <div
// // //             className={`mb-8 rounded-2xl p-4 shadow-lg backdrop-blur-xl ${
// // //               darkMode
// // //                 ? "border border-slate-700 bg-slate-800/80 text-slate-300"
// // //                 : "border border-white/80 bg-white/80 text-slate-600"
// // //             }`}
// // //           >
// // //             Loading safe space content...
// // //           </div>
// // //         )}

// // //         {!loading && !hasAnyVisibleResult && (
// // //           <div
// // //             className={`mb-8 rounded-2xl border p-4 text-sm ${
// // //               darkMode
// // //                 ? "border-slate-700 bg-slate-800/70 text-slate-300"
// // //                 : "border-indigo-100 bg-white/80 text-slate-600"
// // //             }`}
// // //           >
// // //             No result found. Try another search or switch mode filter.
// // //           </div>
// // //         )}

// // //         <div className="space-y-12">
// // //           {categories.map((category) => {
// // //             if (activeCategory !== "all" && activeCategory !== category)
// // //               return null;

// // //             const items = getFilteredItems(category);
// // //             const Icon = sectionMeta[category].icon;

// // //             if (!items.length) return null;

// // //             return (
// // //               <section key={category}>
// // //                 <div className="mb-6 flex items-center justify-between gap-4">
// // //                   <div className="flex items-center gap-4">
// // //                     <div
// // //                       className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // //                     >
// // //                       <Icon className="text-xl" />
// // //                     </div>

// // //                     <div>
// // //                       <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
// // //                         Safe Space Collection
// // //                       </p>
// // //                       <h2
// // //                         className={`text-2xl font-black md:text-3xl ${
// // //                           darkMode ? "text-slate-100" : "text-slate-900"
// // //                         }`}
// // //                       >
// // //                         {sectionMeta[category].title}
// // //                       </h2>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
// // //                   {items.slice(0, 4).map((item, index) => (
// // //                     <div
// // //                       key={item._id}
// // //                       className={`card-in group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
// // //                         darkMode
// // //                           ? "border-slate-700 bg-slate-800/75 shadow-[0_18px_48px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
// // //                           : "border-white/80 bg-white/80 shadow-[0_18px_48px_rgba(79,70,229,0.10)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
// // //                       }`}
// // //                       style={{ animationDelay: `${index * 70}ms` }}
// // //                     >
// // //                       <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl" />

// // //                       <div
// // //                         className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// // //                       >
// // //                         <Icon className="text-xl" />
// // //                       </div>

// // //                       <div className="relative">
// // //                         <h3
// // //                           className={`mt-1 text-xl font-bold ${
// // //                             darkMode ? "text-slate-100" : "text-slate-900"
// // //                           }`}
// // //                         >
// // //                           {item.title}
// // //                         </h3>

// // //                         <p
// // //                           className={`mt-3 leading-7 ${
// // //                             darkMode ? "text-slate-300" : "text-slate-600"
// // //                           }`}
// // //                         >
// // //                           {item.description}
// // //                         </p>

// // //                         {item.duration && (
// // //                           <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
// // //                             Duration: {item.duration}
// // //                           </div>
// // //                         )}

// // //                         {item.mediaType === "text" ? (
// // //                           <div
// // //                             className={`mt-5 rounded-2xl border p-4 shadow-sm ${
// // //                               darkMode
// // //                                 ? "border-slate-700 bg-slate-900/70 text-slate-200"
// // //                                 : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-slate-700"
// // //                             }`}
// // //                           >
// // //                             <p className="font-semibold">{item.title}</p>
// // //                             <p
// // //                               className={`mt-2 text-sm ${
// // //                                 darkMode ? "text-slate-300" : "text-slate-600"
// // //                               }`}
// // //                             >
// // //                               {item.description}
// // //                             </p>
// // //                           </div>
// // //                         ) : (
// // //                           <a
// // //                             href={item.url}
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
// // //                           >
// // //                             Open Now
// // //                             <FaPlay className="text-xs" />
// // //                           </a>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </section>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes ambientA {
// // //           0%,100% { transform: translate(0,0); opacity:.7; }
// // //           50% { transform: translate(14px,-10px); opacity:1; }
// // //         }
// // //         @keyframes ambientB {
// // //           0%,100% { transform: translate(0,0); opacity:.65; }
// // //           50% { transform: translate(-12px,12px); opacity:.95; }
// // //         }
// // //         @keyframes ambientC {
// // //           0%,100% { transform: translate(0,0); opacity:.6; }
// // //           50% { transform: translate(10px,8px); opacity:.9; }
// // //         }
// // //         @keyframes heroFloat {
// // //           0%,100% { transform: translateY(0); }
// // //           50% { transform: translateY(-4px); }
// // //         }
// // //         @keyframes fadeUp {
// // //           from { opacity:0; transform:translateY(10px); }
// // //           to { opacity:1; transform:translateY(0); }
// // //         }
// // //         @keyframes breathe {
// // //           0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
// // //           50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
// // //         }

// // //         .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
// // //         .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
// // //         .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
// // //         .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

// // //         .hero-soft { animation: heroFloat 7s ease-in-out infinite; }
// // //         .card-in { animation: fadeUp .55s ease both; }
// // //         .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }

// // //         @media (prefers-reduced-motion: reduce) {
// // //           .ambient-a,.ambient-b,.ambient-c,.hero-soft,.card-in,.btn-breathe {
// // //             animation: none !important;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default SafeSpace;










// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaArrowLeft,
// //   FaGamepad,
// //   FaHeadphones,
// //   FaSpa,
// //   FaHandsHelping,
// //   FaLaughBeam,
// //   FaMusic,
// //   FaWind,
// //   FaHeart,
// //   FaPlay,
// //   FaMoon,
// //   FaSun,
// //   FaSearch,
// // } from "react-icons/fa";

// // const fallbackData = {
// //   "mini-games": [
// //     {
// //       _id: "g1",
// //       title: "Color Match Calm",
// //       description: "A light focus game to gently shift your attention.",
// //       url: "https://www.crazygames.com/",
// //       mediaType: "game",
// //     },
// //     {
// //       _id: "g2",
// //       title: "Puzzle Break",
// //       description: "A simple brain game for a calm mental reset.",
// //       url: "https://poki.com/",
// //       mediaType: "game",
// //     },
// //     {
// //       _id: "g3",
// //       title: "Memory Relax",
// //       description: "A short memory challenge to refresh your mind.",
// //       url: "https://www.memozor.com/",
// //       mediaType: "game",
// //     },
// //   ],
// //   music: [
// //     {
// //       _id: "m1",
// //       title: "Soft Rain Ambience",
// //       description: "Gentle rain sounds for calm and comfort.",
// //       url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
// //       mediaType: "audio",
// //       duration: "10 min",
// //     },
// //     {
// //       _id: "m2",
// //       title: "Piano Peace",
// //       description: "Slow piano tones for relaxation.",
// //       url: "https://www.youtube.com/results?search_query=calm+piano+music",
// //       mediaType: "audio",
// //       duration: "8 min",
// //     },
// //     {
// //       _id: "m3",
// //       title: "Nature Calm",
// //       description: "Birds, breeze, and nature sounds to relax.",
// //       url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
// //       mediaType: "audio",
// //       duration: "12 min",
// //     },
// //   ],
// //   meditation: [
// //     {
// //       _id: "med1",
// //       title: "5-Minute Calm Reset",
// //       description: "A short guided meditation for grounding.",
// //       url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
// //       mediaType: "video",
// //       duration: "5 min",
// //     },
// //     {
// //       _id: "med2",
// //       title: "Morning Mindfulness",
// //       description: "Start gently with a focused meditation session.",
// //       url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
// //       mediaType: "video",
// //       duration: "7 min",
// //     },
// //     {
// //       _id: "med3",
// //       title: "Sleep Relaxation",
// //       description: "A soft meditation session to reduce night anxiety.",
// //       url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
// //       mediaType: "video",
// //       duration: "10 min",
// //     },
// //   ],
// //   therapy: [
// //     {
// //       _id: "t1",
// //       title: "Grounding for Panic",
// //       description: "Quick grounding support for panic moments.",
// //       url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
// //       mediaType: "video",
// //       duration: "6 min",
// //     },
// //     {
// //       _id: "t2",
// //       title: "Overthinking Relief",
// //       description: "Therapy-style support for racing thoughts.",
// //       url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
// //       mediaType: "video",
// //       duration: "8 min",
// //     },
// //     {
// //       _id: "t3",
// //       title: "Anxiety Reset",
// //       description: "A gentle calming session for anxious moments.",
// //       url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
// //       mediaType: "video",
// //       duration: "7 min",
// //     },
// //   ],
// //   "funny-videos": [
// //     {
// //       _id: "f1",
// //       title: "Cute Animal Moments",
// //       description: "A cheerful break to lift your mood.",
// //       url: "https://www.youtube.com/results?search_query=funny+animal+videos",
// //       mediaType: "video",
// //     },
// //     {
// //       _id: "f2",
// //       title: "Funny Kids Compilation",
// //       description: "Light and playful videos for a quick smile.",
// //       url: "https://www.youtube.com/results?search_query=funny+kids+videos",
// //       mediaType: "video",
// //     },
// //     {
// //       _id: "f3",
// //       title: "Comedy Shorts",
// //       description: "Small, funny clips for a stress break.",
// //       url: "https://www.youtube.com/results?search_query=funny+short+videos",
// //       mediaType: "video",
// //     },
// //   ],
// //   "dance-videos": [
// //     {
// //       _id: "d1",
// //       title: "Feel-Good Dance Break",
// //       description: "A positive movement break to refresh your energy.",
// //       url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
// //       mediaType: "video",
// //     },
// //     {
// //       _id: "d2",
// //       title: "Happy Dance Session",
// //       description: "Move a little and shake off stress.",
// //       url: "https://www.youtube.com/results?search_query=happy+dance+video",
// //       mediaType: "video",
// //     },
// //     {
// //       _id: "d3",
// //       title: "Fun Zumba Break",
// //       description: "A short dance routine for mood lifting.",
// //       url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
// //       mediaType: "video",
// //     },
// //   ],
// //   breathing: [
// //     {
// //       _id: "b1",
// //       title: "Box Breathing",
// //       description: "Inhale 4, hold 4, exhale 4, hold 4.",
// //       mediaType: "text",
// //       duration: "3 min",
// //     },
// //     {
// //       _id: "b2",
// //       title: "4-4-6 Breathing",
// //       description: "Inhale for 4, hold for 4, exhale for 6.",
// //       mediaType: "text",
// //       duration: "2 min",
// //     },
// //     {
// //       _id: "b3",
// //       title: "Slow Deep Breathing",
// //       description: "Breathe in deeply and exhale slowly for calm.",
// //       mediaType: "text",
// //       duration: "5 min",
// //     },
// //   ],
// //   affirmations: [
// //     {
// //       _id: "a1",
// //       title: "You are safe right now.",
// //       description:
// //         "Pause, breathe, and remind yourself that this feeling will pass.",
// //       mediaType: "text",
// //     },
// //     {
// //       _id: "a2",
// //       title: "You are doing your best.",
// //       description: "Even small steps matter. You are trying, and that counts.",
// //       mediaType: "text",
// //     },
// //     {
// //       _id: "a3",
// //       title: "This moment is temporary.",
// //       description: "Let yourself slow down. Calm can return gradually.",
// //       mediaType: "text",
// //     },
// //   ],
// // };

// // const sectionMeta = {
// //   "mini-games": {
// //     title: "Mini Games",
// //     icon: FaGamepad,
// //     tone: "from-violet-500 via-indigo-500 to-blue-500",
// //     keywords: "games mini play puzzle memory focus relax",
// //   },
// //   music: {
// //     title: "Soothing Music",
// //     icon: FaHeadphones,
// //     tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
// //     keywords: "music audio rain piano nature sound calm",
// //   },
// //   meditation: {
// //     title: "Meditation Sessions",
// //     icon: FaSpa,
// //     tone: "from-indigo-500 via-blue-500 to-cyan-400",
// //     keywords: "meditation mindfulness sleep grounding",
// //   },
// //   therapy: {
// //     title: "Therapy Support",
// //     icon: FaHandsHelping,
// //     tone: "from-sky-500 via-blue-500 to-indigo-500",
// //     keywords: "therapy support panic anxiety overthinking relief",
// //   },
// //   "funny-videos": {
// //     title: "Funny Videos",
// //     icon: FaLaughBeam,
// //     tone: "from-pink-500 via-rose-500 to-violet-500",
// //     keywords: "funny comedy laugh light mood",
// //   },
// //   "dance-videos": {
// //     title: "Dance Videos",
// //     icon: FaMusic,
// //     tone: "from-indigo-500 via-purple-500 to-pink-500",
// //     keywords: "dance zumba movement energy",
// //   },
// //   breathing: {
// //     title: "Breathing Exercises",
// //     icon: FaWind,
// //     tone: "from-cyan-500 via-sky-500 to-indigo-500",
// //     keywords: "breathing breath inhale exhale box breathing calm",
// //   },
// //   affirmations: {
// //     title: "Comfort Notes",
// //     icon: FaHeart,
// //     tone: "from-rose-400 via-pink-500 to-fuchsia-500",
// //     keywords: "comfort notes affirmations safe zone comfort zone reassurance",
// //   },
// // };

// // function SafeSpace() {
// //   const navigate = useNavigate();
// //   const [groupedItems, setGroupedItems] = useState(fallbackData);
// //   const [loading, setLoading] = useState(true);
// //   const [darkMode, setDarkMode] = useState(
// //     () => localStorage.getItem("darkMode") === "true"
// //   );
// //   const [query, setQuery] = useState("");
// //   const [activeCategory, setActiveCategory] = useState("all");

// //   const categories = Object.keys(sectionMeta);
// //   const normalizedQuery = query.trim().toLowerCase();
// //   const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
// //   const isSearching = queryTokens.length > 0;

// //   useEffect(() => {
// //     document.body.classList.toggle("dark", darkMode);
// //     localStorage.setItem("darkMode", String(darkMode));
// //   }, [darkMode]);

// //   useEffect(() => {
// //     const fetchSafeSpaceItems = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/safe-space");
// //         const data = await res.json();

// //         if (Array.isArray(data) && data.length > 0) {
// //           const grouped = data.reduce((acc, item) => {
// //             if (!acc[item.category]) acc[item.category] = [];
// //             acc[item.category].push(item);
// //             return acc;
// //           }, {});
// //           setGroupedItems((prev) => ({ ...prev, ...grouped }));
// //         }
// //       } catch (error) {
// //         console.log("Using fallback safe space data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSafeSpaceItems();
// //   }, []);

// //   const includesAllTokens = (text) =>
// //     queryTokens.every((token) => text.includes(token));

// //   const getFilteredItems = (category) => {
// //     const source = groupedItems[category] || [];
// //     if (!isSearching) return source;

// //     const meta = sectionMeta[category];
// //     const sectionSearchText = `${meta.title} ${meta.keywords} ${category.replace(
// //       /-/g,
// //       " "
// //     )}`.toLowerCase();

// //     if (includesAllTokens(sectionSearchText)) return source;

// //     return source.filter((item) => {
// //       const haystack = `${item.title} ${item.description || ""} ${sectionSearchText}`.toLowerCase();
// //       return includesAllTokens(haystack);
// //     });
// //   };

// //   const hasAnyVisibleResult = categories.some((cat) => {
// //     if (!isSearching && activeCategory !== "all" && activeCategory !== cat)
// //       return false;
// //     return getFilteredItems(cat).length > 0;
// //   });

// //   return (
// //     <div
// //       className={`relative min-h-screen w-full overflow-hidden ${
// //         darkMode
// //           ? "bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0b1220_100%)] text-slate-100"
// //           : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900"
// //       }`}
// //     >
// //       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// //         <div className="ambient ambient-a" />
// //         <div className="ambient ambient-b" />
// //         <div className="ambient ambient-c" />
// //         <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
// //       </div>

// //       <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
// //         <div className="mb-7 flex items-center justify-between section-anim" style={{ "--revealDelay": "0ms", "--floatDelay": "0ms" }}>
// //           <button
// //             onClick={() => navigate("/dashboard")}
// //             className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium shadow-sm transition hover:-translate-y-0.5 ${
// //               darkMode
// //                 ? "border border-slate-600 bg-slate-800/80 text-slate-100 hover:bg-slate-700"
// //                 : "border border-indigo-200/80 bg-white/80 text-indigo-600 hover:bg-white"
// //             }`}
// //           >
// //             <FaArrowLeft />
// //             Back to Dashboard
// //           </button>

// //           <button
// //             onClick={() => setDarkMode((prev) => !prev)}
// //             className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition ${
// //               darkMode
// //                 ? "border border-slate-600 bg-slate-800/80 text-yellow-300 hover:bg-slate-700"
// //                 : "border border-white/70 bg-white/70 text-indigo-600 hover:bg-white"
// //             }`}
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //             {darkMode ? "Light Mode" : "Dark Mode"}
// //           </button>
// //         </div>

// //         <section className="hero-soft relative mb-6 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
// //           <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
// //           <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

// //           <div className="relative">
// //             <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
// //               <FaHeart />
// //               Safe Space Mode
// //             </div>

// //             <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
// //               Your calm recovery zone
// //             </h1>

// //             <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
// //               Slow down with soothing music, guided meditation, grounding
// //               therapy, playful mini breaks, movement sessions, breathing
// //               practices, and uplifting support.
// //             </p>
// //           </div>
// //         </section>

// //         <section
// //           className={`mb-8 rounded-2xl border p-4 shadow-sm backdrop-blur-xl md:p-5 section-anim ${
// //             darkMode
// //               ? "border-slate-700 bg-slate-800/70"
// //               : "border-indigo-100 bg-white/80"
// //           }`}
// //           style={{ "--revealDelay": "80ms", "--floatDelay": "500ms" }}
// //         >
// //           <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
// //             <div className="relative w-full md:max-w-md">
// //               <FaSearch
// //                 className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
// //                   darkMode ? "text-slate-400" : "text-indigo-400"
// //                 }`}
// //               />
// //               <input
// //                 value={query}
// //                 onChange={(e) => {
// //                   setQuery(e.target.value);
// //                   if (e.target.value.trim()) setActiveCategory("all");
// //                 }}
// //                 placeholder="Search activities..."
// //                 className={`w-full rounded-xl border px-10 py-2.5 text-sm outline-none transition ${
// //                   darkMode
// //                     ? "border-slate-600 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400"
// //                     : "border-indigo-100 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-300"
// //                 }`}
// //               />
// //             </div>

// //             <div className="flex flex-wrap gap-2">
// //               <button
// //                 onClick={() => setActiveCategory("all")}
// //                 className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
// //                   activeCategory === "all"
// //                     ? "bg-indigo-600 text-white"
// //                     : darkMode
// //                     ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
// //                     : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// //                 }`}
// //               >
// //                 All Modes
// //               </button>

// //               {categories.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   onClick={() => setActiveCategory(cat)}
// //                   className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
// //                     activeCategory === cat
// //                       ? "bg-indigo-600 text-white"
// //                       : darkMode
// //                       ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
// //                       : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
// //                   }`}
// //                 >
// //                   {sectionMeta[cat].title}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {loading && (
// //           <div
// //             className={`mb-8 rounded-2xl p-4 shadow-lg backdrop-blur-xl ${
// //               darkMode
// //                 ? "border border-slate-700 bg-slate-800/80 text-slate-300"
// //                 : "border border-white/80 bg-white/80 text-slate-600"
// //             }`}
// //           >
// //             Loading safe space content...
// //           </div>
// //         )}

// //         {!loading && !hasAnyVisibleResult && (
// //           <div
// //             className={`mb-8 rounded-2xl border p-4 text-sm ${
// //               darkMode
// //                 ? "border-slate-700 bg-slate-800/70 text-slate-300"
// //                 : "border-indigo-100 bg-white/80 text-slate-600"
// //             }`}
// //           >
// //             No result found. Try another search or switch mode filter.
// //           </div>
// //         )}

// //         <div className="space-y-12">
// //           {categories.map((category, catIndex) => {
// //             if (!isSearching && activeCategory !== "all" && activeCategory !== category) {
// //               return null;
// //             }

// //             const items = getFilteredItems(category);
// //             const Icon = sectionMeta[category].icon;
// //             if (!items.length) return null;

// //             return (
// //               <section
// //                 key={category}
// //                 className="section-anim"
// //                 style={{
// //                   "--revealDelay": `${120 + catIndex * 90}ms`,
// //                   "--floatDelay": `${700 + catIndex * 140}ms`,
// //                 }}
// //               >
// //                 <div className="mb-6 flex items-center justify-between gap-4">
// //                   <div className="flex items-center gap-4">
// //                     <div
// //                       className={`icon-float flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// //                     >
// //                       <Icon className="text-xl" />
// //                     </div>

// //                     <div>
// //                       <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
// //                         Safe Space Collection
// //                       </p>
// //                       <h2
// //                         className={`text-2xl font-black md:text-3xl ${
// //                           darkMode ? "text-slate-100" : "text-slate-900"
// //                         }`}
// //                       >
// //                         {sectionMeta[category].title}
// //                       </h2>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
// //                   {items.slice(0, 4).map((item, index) => (
// //                     <div
// //                       key={item._id}
// //                       className={`card-in card-loop group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
// //                         darkMode
// //                           ? "border-slate-700 bg-slate-800/75 shadow-[0_18px_48px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
// //                           : "border-white/80 bg-white/80 shadow-[0_18px_48px_rgba(79,70,229,0.10)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
// //                       }`}
// //                       style={{
// //                         "--cardDelay": `${catIndex * 120 + index * 90}ms`,
// //                       }}
// //                     >
// //                       <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl" />

// //                       <div
// //                         className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
// //                       >
// //                         <Icon className="text-xl" />
// //                       </div>

// //                       <div className="relative">
// //                         <h3
// //                           className={`mt-1 text-xl font-bold ${
// //                             darkMode ? "text-slate-100" : "text-slate-900"
// //                           }`}
// //                         >
// //                           {item.title}
// //                         </h3>

// //                         <p
// //                           className={`mt-3 leading-7 ${
// //                             darkMode ? "text-slate-300" : "text-slate-600"
// //                           }`}
// //                         >
// //                           {item.description}
// //                         </p>

// //                         {item.duration && (
// //                           <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
// //                             Duration: {item.duration}
// //                           </div>
// //                         )}

// //                         {item.mediaType === "text" ? (
// //                           <div
// //                             className={`mt-5 rounded-2xl border p-4 shadow-sm ${
// //                               darkMode
// //                                 ? "border-slate-700 bg-slate-900/70 text-slate-200"
// //                                 : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-slate-700"
// //                             }`}
// //                           >
// //                             <p className="font-semibold">{item.title}</p>
// //                             <p
// //                               className={`mt-2 text-sm ${
// //                                 darkMode ? "text-slate-300" : "text-slate-600"
// //                               }`}
// //                             >
// //                               {item.description}
// //                             </p>
// //                           </div>
// //                         ) : (
// //                           <a
// //                             href={item.url}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
// //                           >
// //                             Open Now
// //                             <FaPlay className="text-xs" />
// //                           </a>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </section>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes ambientA {
// //           0%,100% { transform: translate(0,0); opacity:.7; }
// //           50% { transform: translate(14px,-10px); opacity:1; }
// //         }
// //         @keyframes ambientB {
// //           0%,100% { transform: translate(0,0); opacity:.65; }
// //           50% { transform: translate(-12px,12px); opacity:.95; }
// //         }
// //         @keyframes ambientC {
// //           0%,100% { transform: translate(0,0); opacity:.6; }
// //           50% { transform: translate(10px,8px); opacity:.9; }
// //         }
// //         @keyframes heroFloat {
// //           0%,100% { transform: translateY(0); }
// //           50% { transform: translateY(-4px); }
// //         }
// //         @keyframes fadeUp {
// //           from { opacity:0; transform:translateY(10px); }
// //           to { opacity:1; transform:translateY(0); }
// //         }
// //         @keyframes breathe {
// //           0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
// //           50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
// //         }
// //         @keyframes sectionFloat {
// //           0%,100% { transform: translateY(0); }
// //           50% { transform: translateY(-2px); }
// //         }
// //         @keyframes modePulse {
// //           0%,100% { transform: translateY(0); }
// //           50% { transform: translateY(-1px); }
// //         }
// //         @keyframes iconBob {
// //           0%,100% { transform: translateY(0); }
// //           50% { transform: translateY(-3px); }
// //         }
// //         @keyframes cardDrift {
// //           0%,100% { transform: translateY(0px); }
// //           50% { transform: translateY(-3px); }
// //         }

// //         .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
// //         .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
// //         .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
// //         .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

// //         .hero-soft { animation: heroFloat 7s ease-in-out infinite; }

// //         .section-anim {
// //           animation:
// //             fadeUp .55s ease both,
// //             sectionFloat 9s ease-in-out infinite;
// //           animation-delay: var(--revealDelay, 0ms), var(--floatDelay, 0ms);
// //         }

// //         .mode-chip {
// //           animation: modePulse 4.6s ease-in-out infinite;
// //         }

// //         .icon-float {
// //           animation: iconBob 3.8s ease-in-out infinite;
// //         }

// //         .card-in {
// //           animation: fadeUp .55s ease both;
// //         }

// //         .card-loop {
// //           animation:
// //             fadeUp .55s ease both,
// //             cardDrift 6.4s ease-in-out infinite;
// //           animation-delay: 0ms, var(--cardDelay, 0ms);
// //         }

// //         .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }

// //         @media (prefers-reduced-motion: reduce) {
// //           .ambient-a,.ambient-b,.ambient-c,.hero-soft,.section-anim,.mode-chip,.icon-float,.card-in,.card-loop,.btn-breathe {
// //             animation: none !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default SafeSpace;















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaArrowLeft,
//   FaGamepad,
//   FaHeadphones,
//   FaSpa,
//   FaHandsHelping,
//   FaLaughBeam,
//   FaMusic,
//   FaWind,
//   FaHeart,
//   FaPlay,
//   FaMoon,
//   FaSun,
//   FaSearch,
// } from "react-icons/fa";

// const fallbackData = {
//   "mini-games": [
//     {
//       _id: "g1",
//       title: "Color Match Calm",
//       description: "A light focus game to gently shift your attention.",
//       url: "https://www.crazygames.com/",
//       mediaType: "game",
//     },
//     {
//       _id: "g2",
//       title: "Puzzle Break",
//       description: "A simple brain game for a calm mental reset.",
//       url: "https://poki.com/",
//       mediaType: "game",
//     },
//     {
//       _id: "g3",
//       title: "Memory Relax",
//       description: "A short memory challenge to refresh your mind.",
//       url: "https://www.memozor.com/",
//       mediaType: "game",
//     },
//   ],
//   music: [
//     {
//       _id: "m1",
//       title: "Soft Rain Ambience",
//       description: "Gentle rain sounds for calm and comfort.",
//       url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
//       mediaType: "audio",
//       duration: "10 min",
//     },
//     {
//       _id: "m2",
//       title: "Piano Peace",
//       description: "Slow piano tones for relaxation.",
//       url: "https://www.youtube.com/results?search_query=calm+piano+music",
//       mediaType: "audio",
//       duration: "8 min",
//     },
//     {
//       _id: "m3",
//       title: "Nature Calm",
//       description: "Birds, breeze, and nature sounds to relax.",
//       url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
//       mediaType: "audio",
//       duration: "12 min",
//     },
//   ],
//   meditation: [
//     {
//       _id: "med1",
//       title: "5-Minute Calm Reset",
//       description: "A short guided meditation for grounding.",
//       url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
//       mediaType: "video",
//       duration: "5 min",
//     },
//     {
//       _id: "med2",
//       title: "Morning Mindfulness",
//       description: "Start gently with a focused meditation session.",
//       url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
//       mediaType: "video",
//       duration: "7 min",
//     },
//     {
//       _id: "med3",
//       title: "Sleep Relaxation",
//       description: "A soft meditation session to reduce night anxiety.",
//       url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
//       mediaType: "video",
//       duration: "10 min",
//     },
//   ],
//   therapy: [
//     {
//       _id: "t1",
//       title: "Grounding for Panic",
//       description: "Quick grounding support for panic moments.",
//       url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
//       mediaType: "video",
//       duration: "6 min",
//     },
//     {
//       _id: "t2",
//       title: "Overthinking Relief",
//       description: "Therapy-style support for racing thoughts.",
//       url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
//       mediaType: "video",
//       duration: "8 min",
//     },
//     {
//       _id: "t3",
//       title: "Anxiety Reset",
//       description: "A gentle calming session for anxious moments.",
//       url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
//       mediaType: "video",
//       duration: "7 min",
//     },
//   ],
//   "funny-videos": [
//     {
//       _id: "f1",
//       title: "Cute Animal Moments",
//       description: "A cheerful break to lift your mood.",
//       url: "https://www.youtube.com/results?search_query=funny+animal+videos",
//       mediaType: "video",
//     },
//     {
//       _id: "f2",
//       title: "Funny Kids Compilation",
//       description: "Light and playful videos for a quick smile.",
//       url: "https://www.youtube.com/results?search_query=funny+kids+videos",
//       mediaType: "video",
//     },
//     {
//       _id: "f3",
//       title: "Comedy Shorts",
//       description: "Small, funny clips for a stress break.",
//       url: "https://www.youtube.com/results?search_query=funny+short+videos",
//       mediaType: "video",
//     },
//   ],
//   "dance-videos": [
//     {
//       _id: "d1",
//       title: "Feel-Good Dance Break",
//       description: "A positive movement break to refresh your energy.",
//       url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
//       mediaType: "video",
//     },
//     {
//       _id: "d2",
//       title: "Happy Dance Session",
//       description: "Move a little and shake off stress.",
//       url: "https://www.youtube.com/results?search_query=happy+dance+video",
//       mediaType: "video",
//     },
//     {
//       _id: "d3",
//       title: "Fun Zumba Break",
//       description: "A short dance routine for mood lifting.",
//       url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
//       mediaType: "video",
//     },
//   ],
//   breathing: [
//     {
//       _id: "b1",
//       title: "Box Breathing",
//       description: "Inhale 4, hold 4, exhale 4, hold 4.",
//       mediaType: "text",
//       duration: "3 min",
//     },
//     {
//       _id: "b2",
//       title: "4-4-6 Breathing",
//       description: "Inhale for 4, hold for 4, exhale for 6.",
//       mediaType: "text",
//       duration: "2 min",
//     },
//     {
//       _id: "b3",
//       title: "Slow Deep Breathing",
//       description: "Breathe in deeply and exhale slowly for calm.",
//       mediaType: "text",
//       duration: "5 min",
//     },
//   ],
//   affirmations: [
//     {
//       _id: "a1",
//       title: "You are safe right now.",
//       description:
//         "Pause, breathe, and remind yourself that this feeling will pass.",
//       mediaType: "text",
//     },
//     {
//       _id: "a2",
//       title: "You are doing your best.",
//       description: "Even small steps matter. You are trying, and that counts.",
//       mediaType: "text",
//     },
//     {
//       _id: "a3",
//       title: "This moment is temporary.",
//       description: "Let yourself slow down. Calm can return gradually.",
//       mediaType: "text",
//     },
//   ],
// };

// const sectionMeta = {
//   "mini-games": {
//     title: "Mini Games",
//     icon: FaGamepad,
//     tone: "from-violet-500 via-indigo-500 to-blue-500",
//     keywords: "games mini play puzzle memory focus relax",
//   },
//   music: {
//     title: "Soothing Music",
//     icon: FaHeadphones,
//     tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
//     keywords: "music audio rain piano nature sound calm",
//   },
//   meditation: {
//     title: "Meditation Sessions",
//     icon: FaSpa,
//     tone: "from-indigo-500 via-blue-500 to-cyan-400",
//     keywords: "meditation mindfulness sleep grounding",
//   },
//   therapy: {
//     title: "Therapy Support",
//     icon: FaHandsHelping,
//     tone: "from-sky-500 via-blue-500 to-indigo-500",
//     keywords: "therapy support panic anxiety overthinking relief",
//   },
//   "funny-videos": {
//     title: "Funny Videos",
//     icon: FaLaughBeam,
//     tone: "from-pink-500 via-rose-500 to-violet-500",
//     keywords: "funny comedy laugh light mood",
//   },
//   "dance-videos": {
//     title: "Dance Videos",
//     icon: FaMusic,
//     tone: "from-indigo-500 via-purple-500 to-pink-500",
//     keywords: "dance zumba movement energy",
//   },
//   breathing: {
//     title: "Breathing Exercises",
//     icon: FaWind,
//     tone: "from-cyan-500 via-sky-500 to-indigo-500",
//     keywords: "breathing breath inhale exhale box breathing calm",
//   },
//   affirmations: {
//     title: "Comfort Notes",
//     icon: FaHeart,
//     tone: "from-rose-400 via-pink-500 to-fuchsia-500",
//     keywords: "comfort notes affirmations safe zone comfort zone reassurance",
//   },
// };

// function SafeSpace() {
//   const navigate = useNavigate();
//   const [groupedItems, setGroupedItems] = useState(fallbackData);
//   const [loading, setLoading] = useState(true);
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("darkMode") === "true"
//   );
//   const [query, setQuery] = useState("");
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categories = Object.keys(sectionMeta);
//   const normalizedQuery = query.trim().toLowerCase();
//   const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
//   const isSearching = queryTokens.length > 0;

//   useEffect(() => {
//     document.body.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", String(darkMode));
//   }, [darkMode]);

//   useEffect(() => {
//     const fetchSafeSpaceItems = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/safe-space");
//         const data = await res.json();

//         if (Array.isArray(data) && data.length > 0) {
//           const grouped = data.reduce((acc, item) => {
//             if (!acc[item.category]) acc[item.category] = [];
//             acc[item.category].push(item);
//             return acc;
//           }, {});
//           setGroupedItems((prev) => ({ ...prev, ...grouped }));
//         }
//       } catch (error) {
//         console.log("Using fallback safe space data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSafeSpaceItems();
//   }, []);

//   const includesAllTokens = (text) =>
//     queryTokens.every((token) => text.includes(token));

//   const getFilteredItems = (category) => {
//     const source = groupedItems[category] || [];
//     if (!isSearching) return source;

//     const meta = sectionMeta[category];
//     const sectionSearchText = `${meta.title} ${meta.keywords} ${category.replace(
//       /-/g,
//       " "
//     )}`.toLowerCase();

//     if (includesAllTokens(sectionSearchText)) return source;

//     return source.filter((item) => {
//       const haystack = `${item.title} ${item.description || ""} ${sectionSearchText}`.toLowerCase();
//       return includesAllTokens(haystack);
//     });
//   };

//   const hasAnyVisibleResult = categories.some((cat) => {
//     if (!isSearching && activeCategory !== "all" && activeCategory !== cat)
//       return false;
//     return getFilteredItems(cat).length > 0;
//   });

//   return (
//     <div
//       className={`relative min-h-screen w-full overflow-hidden ${
//         darkMode
//           ? "bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0b1220_100%)] text-slate-100"
//           : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900"
//       }`}
//     >
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="ambient ambient-a" />
//         <div className="ambient ambient-b" />
//         <div className="ambient ambient-c" />
//         <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
//       </div>

//       <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
//         <div className="mb-7 flex items-center justify-between section-anim" style={{ "--revealDelay": "0ms", "--floatDelay": "0ms" }}>
//           <button
//             onClick={() => navigate("/dashboard")}
//             className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium shadow-sm transition hover:-translate-y-0.5 ${
//               darkMode
//                 ? "border border-slate-600 bg-slate-800/80 text-slate-100 hover:bg-slate-700"
//                 : "border border-indigo-200/80 bg-white/80 text-indigo-600 hover:bg-white"
//             }`}
//           >
//             <FaArrowLeft />
//             Back to Dashboard
//           </button>

//           <button
//             onClick={() => setDarkMode((prev) => !prev)}
//             className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition ${
//               darkMode
//                 ? "border border-slate-600 bg-slate-800/80 text-yellow-300 hover:bg-slate-700"
//                 : "border border-white/70 bg-white/70 text-indigo-600 hover:bg-white"
//             }`}
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//             {darkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>

//         <section className="hero-soft relative mb-6 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
//           <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
//           <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

//           <div className="relative">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
//               <FaHeart />
//               Safe Space Mode
//             </div>

//             <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
//               Your calm recovery zone
//             </h1>

//             <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
//               Slow down with soothing music, guided meditation, grounding
//               therapy, playful mini breaks, movement sessions, breathing
//               practices, and uplifting support.
//             </p>
//           </div>
//         </section>

//         <section
//           className={`mb-8 rounded-2xl border p-4 shadow-sm backdrop-blur-xl md:p-5 section-anim ${
//             darkMode
//               ? "border-slate-700 bg-slate-800/70"
//               : "border-indigo-100 bg-white/80"
//           }`}
//           style={{ "--revealDelay": "80ms", "--floatDelay": "500ms" }}
//         >
//           <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="relative w-full md:max-w-md">
//               <FaSearch
//                 className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
//                   darkMode ? "text-slate-400" : "text-indigo-400"
//                 }`}
//               />
//               <input
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                   if (e.target.value.trim()) setActiveCategory("all");
//                 }}
//                 placeholder="Search activities..."
//                 className={`w-full rounded-xl border px-10 py-2.5 text-sm outline-none transition ${
//                   darkMode
//                     ? "border-slate-600 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400"
//                     : "border-indigo-100 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-300"
//                 }`}
//               />
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setActiveCategory("all")}
//                 className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                   activeCategory === "all"
//                     ? "bg-indigo-600 text-white"
//                     : darkMode
//                     ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
//                     : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
//                 }`}
//               >
//                 All Modes
//               </button>

//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
//                     activeCategory === cat
//                       ? "bg-indigo-600 text-white"
//                       : darkMode
//                       ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
//                       : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
//                   }`}
//                 >
//                   {sectionMeta[cat].title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {loading && (
//           <div
//             className={`mb-8 rounded-2xl p-4 shadow-lg backdrop-blur-xl ${
//               darkMode
//                 ? "border border-slate-700 bg-slate-800/80 text-slate-300"
//                 : "border border-white/80 bg-white/80 text-slate-600"
//             }`}
//           >
//             Loading safe space content...
//           </div>
//         )}

//         {!loading && !hasAnyVisibleResult && (
//           <div
//             className={`mb-8 rounded-2xl border p-4 text-sm ${
//               darkMode
//                 ? "border-slate-700 bg-slate-800/70 text-slate-300"
//                 : "border-indigo-100 bg-white/80 text-slate-600"
//             }`}
//           >
//             No result found. Try another search or switch mode filter.
//           </div>
//         )}

//         <div className="space-y-12">
//           {categories.map((category, catIndex) => {
//             if (!isSearching && activeCategory !== "all" && activeCategory !== category) {
//               return null;
//             }

//             const items = getFilteredItems(category);
//             const Icon = sectionMeta[category].icon;
//             if (!items.length) return null;

//             return (
//               <section
//                 key={category}
//                 className="section-anim"
//                 style={{
//                   "--revealDelay": `${120 + catIndex * 90}ms`,
//                   "--floatDelay": `${700 + catIndex * 140}ms`,
//                 }}
//               >
//                 <div className="mb-6 flex items-center justify-between gap-4">
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`icon-float flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
//                     >
//                       <Icon className="text-xl" />
//                     </div>

//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
//                         Safe Space Collection
//                       </p>
//                       <h2
//                         className={`text-2xl font-black md:text-3xl ${
//                           darkMode ? "text-slate-100" : "text-slate-900"
//                         }`}
//                       >
//                         {sectionMeta[category].title}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//                   {items.slice(0, 4).map((item, index) => (
//                     <div
//                       key={item._id}
//                       className={`card-in card-loop group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
//                         darkMode
//                           ? "border-slate-700 bg-slate-800/75 shadow-[0_18px_48px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
//                           : "border-white/80 bg-white/80 shadow-[0_18px_48px_rgba(79,70,229,0.10)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
//                       }`}
//                       style={{
//                         "--cardDelay": `${catIndex * 120 + index * 90}ms`,
//                       }}
//                     >
//                       <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl" />

//                       <div
//                         className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
//                       >
//                         <Icon className="text-xl" />
//                       </div>

//                       <div className="relative">
//                         <h3
//                           className={`mt-1 text-xl font-bold ${
//                             darkMode ? "text-slate-100" : "text-slate-900"
//                           }`}
//                         >
//                           {item.title}
//                         </h3>

//                         <p
//                           className={`mt-3 leading-7 ${
//                             darkMode ? "text-slate-300" : "text-slate-600"
//                           }`}
//                         >
//                           {item.description}
//                         </p>

//                         {item.duration && (
//                           <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
//                             Duration: {item.duration}
//                           </div>
//                         )}

//                         {item.mediaType === "text" ? (
//                           <div
//                             className={`mt-5 rounded-2xl border p-4 shadow-sm ${
//                               darkMode
//                                 ? "border-slate-700 bg-slate-900/70 text-slate-200"
//                                 : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-slate-700"
//                             }`}
//                           >
//                             <p className="font-semibold">{item.title}</p>
//                             <p
//                               className={`mt-2 text-sm ${
//                                 darkMode ? "text-slate-300" : "text-slate-600"
//                               }`}
//                             >
//                               {item.description}
//                             </p>
//                           </div>
//                         ) : (
//                           <a
//                             href={item.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
//                           >
//                             Open Now
//                             <FaPlay className="text-xs" />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             );
//           })}
//         </div>
//       </div>

//       <style>{`
//         @keyframes ambientA {
//           0%,100% { transform: translate(0,0); opacity:.7; }
//           50% { transform: translate(14px,-10px); opacity:1; }
//         }
//         @keyframes ambientB {
//           0%,100% { transform: translate(0,0); opacity:.65; }
//           50% { transform: translate(-12px,12px); opacity:.95; }
//         }
//         @keyframes ambientC {
//           0%,100% { transform: translate(0,0); opacity:.6; }
//           50% { transform: translate(10px,8px); opacity:.9; }
//         }
//         @keyframes heroFloat {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-4px); }
//         }
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(10px); }
//           to { opacity:1; transform:translateY(0); }
//         }
//         @keyframes breathe {
//           0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
//           50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
//         }
//         @keyframes sectionFloat {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-2px); }
//         }
//         @keyframes modePulse {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-1px); }
//         }
//         @keyframes iconBob {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-3px); }
//         }
//         @keyframes cardDrift {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-3px); }
//         }

//         .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
//         .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
//         .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
//         .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

//         .hero-soft { animation: heroFloat 7s ease-in-out infinite; }

//         .section-anim {
//           animation:
//             fadeUp .55s ease both,
//             sectionFloat 9s ease-in-out infinite;
//           animation-delay: var(--revealDelay, 0ms), var(--floatDelay, 0ms);
//         }

//         .mode-chip {
//           animation: modePulse 4.6s ease-in-out infinite;
//         }

//         .icon-float {
//           animation: iconBob 3.8s ease-in-out infinite;
//         }

//         .card-in {
//           animation: fadeUp .55s ease both;
//         }

//         .card-loop {
//           animation:
//             fadeUp .55s ease both,
//             cardDrift 6.4s ease-in-out infinite;
//           animation-delay: 0ms, var(--cardDelay, 0ms);
//         }

//         .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }

//         @media (prefers-reduced-motion: reduce) {
//           .ambient-a,.ambient-b,.ambient-c,.hero-soft,.section-anim,.mode-chip,.icon-float,.card-in,.card-loop,.btn-breathe {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SafeSpace;













































import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaGamepad,
  FaHeadphones,
  FaSpa,
  FaHandsHelping,
  FaLaughBeam,
  FaMusic,
  FaWind,
  FaHeart,
  FaPlay,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";

const fallbackData = {
  "mini-games": [
    {
      _id: "g1",
      title: "Color Match Calm",
      description: "A light focus game to gently shift your attention.",
      url: "https://www.crazygames.com/",
      mediaType: "game",
    },
    {
      _id: "g2",
      title: "Puzzle Break",
      description: "A simple brain game for a calm mental reset.",
      url: "https://poki.com/",
      mediaType: "game",
    },
    {
      _id: "g3",
      title: "Memory Relax",
      description: "A short memory challenge to refresh your mind.",
      url: "https://www.memozor.com/",
      mediaType: "game",
    },
  ],
  music: [
    {
      _id: "m1",
      title: "Soft Rain Ambience",
      description: "Gentle rain sounds for calm and comfort.",
      url: "https://www.youtube.com/results?search_query=soft+rain+sounds",
      mediaType: "audio",
      duration: "10 min",
    },
    {
      _id: "m2",
      title: "Piano Peace",
      description: "Slow piano tones for relaxation.",
      url: "https://www.youtube.com/results?search_query=calm+piano+music",
      mediaType: "audio",
      duration: "8 min",
    },
    {
      _id: "m3",
      title: "Nature Calm",
      description: "Birds, breeze, and nature sounds to relax.",
      url: "https://www.youtube.com/results?search_query=nature+relaxing+sounds",
      mediaType: "audio",
      duration: "12 min",
    },
  ],
  meditation: [
    {
      _id: "med1",
      title: "5-Minute Calm Reset",
      description: "A short guided meditation for grounding.",
      url: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
      mediaType: "video",
      duration: "5 min",
    },
    {
      _id: "med2",
      title: "Morning Mindfulness",
      description: "Start gently with a focused meditation session.",
      url: "https://www.youtube.com/results?search_query=morning+mindfulness+meditation",
      mediaType: "video",
      duration: "7 min",
    },
    {
      _id: "med3",
      title: "Sleep Relaxation",
      description: "A soft meditation session to reduce night anxiety.",
      url: "https://www.youtube.com/results?search_query=sleep+meditation+for+anxiety",
      mediaType: "video",
      duration: "10 min",
    },
  ],
  therapy: [
    {
      _id: "t1",
      title: "Grounding for Panic",
      description: "Quick grounding support for panic moments.",
      url: "https://www.youtube.com/results?search_query=panic+attack+grounding+exercise",
      mediaType: "video",
      duration: "6 min",
    },
    {
      _id: "t2",
      title: "Overthinking Relief",
      description: "Therapy-style support for racing thoughts.",
      url: "https://www.youtube.com/results?search_query=overthinking+relief+therapy",
      mediaType: "video",
      duration: "8 min",
    },
    {
      _id: "t3",
      title: "Anxiety Reset",
      description: "A gentle calming session for anxious moments.",
      url: "https://www.youtube.com/results?search_query=anxiety+relief+session",
      mediaType: "video",
      duration: "7 min",
    },
  ],
  "funny-videos": [
    {
      _id: "f1",
      title: "Cute Animal Moments",
      description: "A cheerful break to lift your mood.",
      url: "https://www.youtube.com/results?search_query=funny+animal+videos",
      mediaType: "video",
    },
    {
      _id: "f2",
      title: "Funny Kids Compilation",
      description: "Light and playful videos for a quick smile.",
      url: "https://www.youtube.com/results?search_query=funny+kids+videos",
      mediaType: "video",
    },
    {
      _id: "f3",
      title: "Comedy Shorts",
      description: "Small, funny clips for a stress break.",
      url: "https://www.youtube.com/results?search_query=funny+short+videos",
      mediaType: "video",
    },
  ],
  "dance-videos": [
    {
      _id: "d1",
      title: "Feel-Good Dance Break",
      description: "A positive movement break to refresh your energy.",
      url: "https://www.youtube.com/results?search_query=feel+good+dance+workout",
      mediaType: "video",
    },
    {
      _id: "d2",
      title: "Happy Dance Session",
      description: "Move a little and shake off stress.",
      url: "https://www.youtube.com/results?search_query=happy+dance+video",
      mediaType: "video",
    },
    {
      _id: "d3",
      title: "Fun Zumba Break",
      description: "A short dance routine for mood lifting.",
      url: "https://www.youtube.com/results?search_query=zumba+fun+beginner",
      mediaType: "video",
    },
  ],
  breathing: [
    {
      _id: "b1",
      title: "Box Breathing",
      description: "Inhale 4, hold 4, exhale 4, hold 4.",
      mediaType: "text",
      duration: "3 min",
    },
    {
      _id: "b2",
      title: "4-4-6 Breathing",
      description: "Inhale for 4, hold for 4, exhale for 6.",
      mediaType: "text",
      duration: "2 min",
    },
    {
      _id: "b3",
      title: "Slow Deep Breathing",
      description: "Breathe in deeply and exhale slowly for calm.",
      mediaType: "text",
      duration: "5 min",
    },
  ],
  affirmations: [
    {
      _id: "a1",
      title: "You are safe right now.",
      description:
        "Pause, breathe, and remind yourself that this feeling will pass.",
      mediaType: "text",
    },
    {
      _id: "a2",
      title: "You are doing your best.",
      description: "Even small steps matter. You are trying, and that counts.",
      mediaType: "text",
    },
    {
      _id: "a3",
      title: "This moment is temporary.",
      description: "Let yourself slow down. Calm can return gradually.",
      mediaType: "text",
    },
  ],
};

const sectionMeta = {
  "mini-games": {
    title: "Mini Games",
    icon: FaGamepad,
    tone: "from-violet-500 via-indigo-500 to-blue-500",
    keywords: "games mini play puzzle memory focus relax",
  },
  music: {
    title: "Soothing Music",
    icon: FaHeadphones,
    tone: "from-fuchsia-500 via-purple-500 to-indigo-500",
    keywords: "music audio rain piano nature sound calm",
  },
  meditation: {
    title: "Meditation Sessions",
    icon: FaSpa,
    tone: "from-indigo-500 via-blue-500 to-cyan-400",
    keywords: "meditation mindfulness sleep grounding",
  },
  therapy: {
    title: "Therapy Support",
    icon: FaHandsHelping,
    tone: "from-sky-500 via-blue-500 to-indigo-500",
    keywords: "therapy support panic anxiety overthinking relief",
  },
  "funny-videos": {
    title: "Funny Videos",
    icon: FaLaughBeam,
    tone: "from-pink-500 via-rose-500 to-violet-500",
    keywords: "funny comedy laugh light mood",
  },
  "dance-videos": {
    title: "Dance Videos",
    icon: FaMusic,
    tone: "from-indigo-500 via-purple-500 to-pink-500",
    keywords: "dance zumba movement energy",
  },
  breathing: {
    title: "Breathing Exercises",
    icon: FaWind,
    tone: "from-cyan-500 via-sky-500 to-indigo-500",
    keywords: "breathing breath inhale exhale box breathing calm",
  },
  affirmations: {
    title: "Comfort Notes",
    icon: FaHeart,
    tone: "from-rose-400 via-pink-500 to-fuchsia-500",
    keywords: "comfort notes affirmations safe zone comfort zone reassurance",
  },
};

function SafeSpace() {
  const navigate = useNavigate();
  const [groupedItems, setGroupedItems] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = Object.keys(sectionMeta);
  const normalizedQuery = query.trim().toLowerCase();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const isSearching = queryTokens.length > 0;

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const fetchSafeSpaceItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/safe-space");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const grouped = data.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
          }, {});
          setGroupedItems((prev) => ({ ...prev, ...grouped }));
        }
      } catch (error) {
        console.log("Using fallback safe space data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSafeSpaceItems();
  }, []);

  const includesAllTokens = (text) =>
    queryTokens.every((token) => text.includes(token));

  const getFilteredItems = (category) => {
    const source = groupedItems[category] || [];
    if (!isSearching) return source;

    const meta = sectionMeta[category];
    const sectionSearchText = `${meta.title} ${meta.keywords} ${category.replace(
      /-/g,
      " "
    )}`.toLowerCase();

    if (includesAllTokens(sectionSearchText)) return source;

    return source.filter((item) => {
      const haystack = `${item.title} ${item.description || ""} ${sectionSearchText}`.toLowerCase();
      return includesAllTokens(haystack);
    });
  };

  const hasAnyVisibleResult = categories.some((cat) => {
    if (!isSearching && activeCategory !== "all" && activeCategory !== cat)
      return false;
    return getFilteredItems(cat).length > 0;
  });

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${
        darkMode
          ? "bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0b1220_100%)] text-slate-100"
          : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_26%),linear-gradient(180deg,#f1f5ff_0%,#f8faff_38%,#eef2ff_68%,#f7f9ff_100%)] text-slate-900"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <div className="ambient ambient-c" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 xl:px-14">
        <div
          className="mb-7 flex items-center justify-between section-anim"
          style={{ "--revealDelay": "0ms", "--floatDelay": "0ms" }}
        >
          <button
            onClick={() => navigate("/dashboard")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium shadow-sm transition hover:-translate-y-0.5 ${
              darkMode
                ? "border border-slate-600 bg-slate-800/80 text-slate-100 hover:bg-slate-700"
                : "border border-indigo-200/80 bg-white/80 text-indigo-600 hover:bg-white"
            }`}
          >
            <FaArrowLeft />
            Back to Dashboard
          </button>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition ${
              darkMode
                ? "border border-slate-600 bg-slate-800/80 text-yellow-300 hover:bg-slate-700"
                : "border border-white/70 bg-white/70 text-indigo-600 hover:bg-white"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <section className="hero-soft relative mb-6 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 px-6 py-7 text-white shadow-[0_24px_64px_rgba(79,70,229,0.28)] md:px-8 md:py-8 lg:px-10 lg:py-9">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-2 left-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl">
              <FaHeart />
              Safe Space Mode
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Your calm recovery zone
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
              Slow down with soothing music, guided meditation, grounding
              therapy, playful mini breaks, movement sessions, breathing
              practices, and uplifting support.
            </p>
          </div>
        </section>

        <section
          className={`mb-8 rounded-2xl border p-4 shadow-sm backdrop-blur-xl md:p-5 section-anim ${
            darkMode
              ? "border-slate-700 bg-slate-800/70"
              : "border-indigo-100 bg-white/80"
          }`}
          style={{ "--revealDelay": "80ms", "--floatDelay": "500ms" }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <FaSearch
                className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-400" : "text-indigo-400"
                }`}
              />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (e.target.value.trim()) setActiveCategory("all");
                }}
                placeholder="Search activities..."
                className={`w-full rounded-xl border px-10 py-2.5 text-sm outline-none transition ${
                  darkMode
                    ? "border-slate-600 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400"
                    : "border-indigo-100 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-300"
                }`}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  activeCategory === "all"
                    ? "bg-indigo-600 text-white"
                    : darkMode
                    ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                All Modes
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`mode-chip rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700"
                      : "border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {sectionMeta[cat].title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {loading && (
          <div
            className={`mb-8 rounded-2xl p-4 shadow-lg backdrop-blur-xl ${
              darkMode
                ? "border border-slate-700 bg-slate-800/80 text-slate-300"
                : "border border-white/80 bg-white/80 text-slate-600"
            }`}
          >
            Loading safe space content...
          </div>
        )}

        {!loading && !hasAnyVisibleResult && (
          <div
            className={`mb-8 rounded-2xl border p-4 text-sm ${
              darkMode
                ? "border-slate-700 bg-slate-800/70 text-slate-300"
                : "border-indigo-100 bg-white/80 text-slate-600"
            }`}
          >
            No result found. Try another search or switch mode filter.
          </div>
        )}

        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            if (!isSearching && activeCategory !== "all" && activeCategory !== category) {
              return null;
            }

            const items = getFilteredItems(category);
            const Icon = sectionMeta[category].icon;
            if (!items.length) return null;

            return (
              <section
                key={category}
                className="section-anim"
                style={{
                  "--revealDelay": `${120 + catIndex * 90}ms`,
                  "--floatDelay": `${700 + catIndex * 140}ms`,
                }}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`icon-float flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
                    >
                      <Icon className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">
                        Safe Space Collection
                      </p>
                      <h2
                        className={`text-2xl font-black md:text-3xl ${
                          darkMode ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {sectionMeta[category].title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.slice(0, 4).map((item, index) => (
                    <div
                      key={item._id}
                      className={`card-in card-loop group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
                        darkMode
                          ? "border-slate-700 bg-slate-800/75 shadow-[0_18px_48px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                          : "border-white/80 bg-white/80 shadow-[0_18px_48px_rgba(79,70,229,0.10)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
                      }`}
                      style={{
                        "--cardDelay": `${catIndex * 120 + index * 90}ms`,
                      }}
                    >
                      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/80 blur-2xl" />

                      <div
                        className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${sectionMeta[category].tone} text-white shadow-lg`}
                      >
                        <Icon className="text-xl" />
                      </div>

                      <div className="relative">
                        <h3
                          className={`mt-1 text-xl font-bold ${
                            darkMode ? "text-slate-100" : "text-slate-900"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`mt-3 leading-7 ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {item.description}
                        </p>

                        {item.duration && (
                          <div className="mt-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                            Duration: {item.duration}
                          </div>
                        )}

                        {item.mediaType === "text" ? (
                          <div
                            className={`mt-5 rounded-2xl border p-4 shadow-sm ${
                              darkMode
                                ? "border-slate-700 bg-slate-900/70 text-slate-200"
                                : "border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-slate-700"
                            }`}
                          >
                            <p className="font-semibold">{item.title}</p>
                            <p
                              className={`mt-2 text-sm ${
                                darkMode ? "text-slate-300" : "text-slate-600"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-breathe mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
                          >
                            Open Now
                            <FaPlay className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ambientA {
          0%,100% { transform: translate(0,0); opacity:.7; }
          50% { transform: translate(14px,-10px); opacity:1; }
        }
        @keyframes ambientB {
          0%,100% { transform: translate(0,0); opacity:.65; }
          50% { transform: translate(-12px,12px); opacity:.95; }
        }
        @keyframes ambientC {
          0%,100% { transform: translate(0,0); opacity:.6; }
          50% { transform: translate(10px,8px); opacity:.9; }
        }
        @keyframes heroFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes breathe {
          0%,100% { box-shadow: 0 8px 18px rgba(99,102,241,.35); }
          50% { box-shadow: 0 12px 26px rgba(139,92,246,.45); }
        }
        @keyframes sectionFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes modePulse {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        @keyframes iconBob {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes cardDrift {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .ambient { position:absolute; border-radius:9999px; filter: blur(55px); }
        .ambient-a { left:-8%; top:-5%; width:320px; height:320px; background:rgba(129,140,248,.35); animation:ambientA 12s ease-in-out infinite; }
        .ambient-b { right:-9%; top:8%; width:380px; height:380px; background:rgba(244,114,182,.22); animation:ambientB 14s ease-in-out infinite; }
        .ambient-c { left:18%; bottom:-10%; width:320px; height:320px; background:rgba(103,232,249,.25); animation:ambientC 13s ease-in-out infinite; }

        .hero-soft { animation: heroFloat 7s ease-in-out infinite; }

        .section-anim {
          animation:
            fadeUp .55s ease both,
            sectionFloat 9s ease-in-out infinite;
          animation-delay: var(--revealDelay, 0ms), var(--floatDelay, 0ms);
        }

        .mode-chip {
          animation: modePulse 4.6s ease-in-out infinite;
        }

        .icon-float {
          animation: iconBob 3.8s ease-in-out infinite;
        }

        .card-in {
          animation: fadeUp .55s ease both;
        }

        .card-loop {
          animation:
            fadeUp .55s ease both,
            cardDrift 6.4s ease-in-out infinite;
          animation-delay: 0ms, var(--cardDelay, 0ms);
        }

        .btn-breathe { animation: breathe 2.8s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ambient-a,.ambient-b,.ambient-c,.hero-soft,.section-anim,.mode-chip,.icon-float,.card-in,.card-loop,.btn-breathe {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default SafeSpace;

