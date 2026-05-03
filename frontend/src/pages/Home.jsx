import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";

import {
  FaArrowRight,
  FaBolt,
  FaBrain,
  FaBookOpen,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaHeartbeat,
  FaLeaf,
  FaLightbulb,
  FaLock,
  FaLaptopMedical,
  FaRobot,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

import picbenifits from "../assets/Pic Benifits.jpeg";
import picdetect from "../assets/Pic Detect.jpeg";
import picworking from "../assets/assesment.png";
import picaipowered from "../assets/visual display.png";
import pic from "../assets/logo pic.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "/support" },
  { label: "Dashboard", href: "/dashboard" },
];

const featureCards = [
  {
    title: "Emotion Detection",
    eyebrow: "Core intelligence",
    desc: "Analyze written reflections to identify emotional tone, intensity, and patterns connected to stress, anxiety, or low mood.",
    detail: "Turn journal entries into meaningful emotional signals.",
    points: [
      "Reads emotional tone and deeper context",
      "Highlights stress, sadness, and anxiety signals",
    ],
    icon: FaBrain,
    color: "from-indigo-500 via-blue-500 to-cyan-400",
    route: "/dashboard",
  },
  {
    title: "AI Assistant",
    eyebrow: "Interactive support",
    desc: "Talk with an AI companion that responds to your thoughts with clearer summaries, supportive prompts, and gentle next-step guidance.",
    detail: "Helpful support while you reflect in real time.",
    points: [
      "Conversational and easy to use",
      "Delivers feedback without feeling overwhelming",
    ],
    icon: FaRobot,
    color: "from-violet-500 via-indigo-500 to-blue-500",
  },
  {
    title: "Mental Health Library",
    eyebrow: "Learn & Understand",
    desc: "Explore detailed articles on depression, anxiety, stress, and all 7 mental health conditions detected by Mannlytics — with symptoms, coping strategies, and helplines.",
    detail: "Knowledge is the first step toward better mental health.",
    points: [
      "7 conditions explained with symptoms & solutions",
      "Crisis helplines and self-help strategies included",
    ],
    icon: FaBookOpen,
    color: "from-emerald-500 via-teal-500 to-cyan-400",
    route: "/library",
  },
  {
    title: "Support Guidance",
    eyebrow: "Next-step support",
    desc: "Move from insight to action with trusted support options, guided pathways, and a calmer experience built around care and reflection.",
    detail: "Connect emotional insight with trusted support choices.",
    points: [
      "Explore therapist and helpline options",
      "Feel guided toward the right support path",
    ],
    icon: FaUserFriends,
    color: "from-cyan-500 via-sky-500 to-teal-400",
    route: "/support",
  },
];

const miniCards = [
  {
    title: "AI-Powered Analysis",
    eyebrow: "Smart understanding",
    desc: "Understand emotional tone through intelligent text analysis. The system reads patterns in written thoughts and highlights signals that may reflect stress, anxiety, or emotional imbalance.",
    detail: "Clearer insights from everyday writing",
    icon: FaBrain,
  },
  {
    title: "Private Journaling",
    eyebrow: "Safe reflection",
    desc: "Reflect in a safer and privacy-conscious digital space. Capture daily thoughts, personal check-ins, and emotions in a calm environment designed for honest self-expression.",
    detail: "A more personal and trusted experience",
    icon: FaLock,
  },
  {
    title: "Real-Time Insights",
    eyebrow: "Instant feedback",
    desc: "Get quick emotional summaries and supportive feedback. As soon as you write, the platform turns your thoughts into simple, readable insights you can understand right away.",
    detail: "Fast support without overwhelming detail",
    icon: FaBolt,
  },
  {
    title: "Mental Health Library",
    eyebrow: "Learn & understand",
    desc: "Read detailed articles on depression, anxiety, stress, sadness, anger, and more. Each condition is explained with symptoms, what it feels like, coping strategies, and when to seek professional help.",
    detail: "Knowledge that empowers better self-awareness",
    icon: FaBookOpen,
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

const whyChooseUs = [
  {
    title: "Designed for calm",
    desc: "A softer and more welcoming interface encourages honest self-reflection.",
    icon: FaLeaf,
  },
  {
    title: "Actionable insights",
    desc: "The platform goes beyond mood labels and helps surface useful patterns.",
    icon: FaLightbulb,
  },
  {
    title: "Supportive AI flow",
    desc: "Users receive thoughtful analysis and guidance in real time.",
    icon: FaHeartbeat,
  },
  {
    title: "Built with care",
    desc: "Privacy, trust, and accessibility remain central to the full experience.",
    icon: FaLaptopMedical,
  },
];

const faqItems = [
  {
    question: "How does Mannlytics detect emotions?",
    answer:
      "Mannlytics analyzes written text using natural language processing and AI models to understand emotional tone, intensity, and context.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, the platform is designed with a privacy-conscious approach so users feel safer while reflecting on sensitive emotions and experiences.",
  },
  {
    question: "Can Mannlytics replace a therapist or doctor?",
    answer:
      "No. Mannlytics is a supportive emotional-awareness tool and not a substitute for professional medical or mental health care.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "Students, professionals, and anyone interested in understanding emotional well-being through written reflection can use the platform.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [userName, setUserName] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const supportSectionRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [currentUser, setCurrentUser] = useState(() =>
    sessionStorage.getItem("currentUser")
  );

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const userEmail = sessionStorage.getItem("currentUser");
    const name = sessionStorage.getItem("currentUserName");
    setCurrentUser(userEmail);
    if (userEmail) {
      setUserName(name || userEmail.split("@")[0]);
      setProfilePic(localStorage.getItem("profilePic") || null);
    }
    const handleLogout = () => {
      setCurrentUser(null);
      setUserName("");
      setProfilePic(null);
    };
    window.addEventListener("userLogout", handleLogout);
    return () => window.removeEventListener("userLogout", handleLogout);
  }, []);

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

  const revealClass = (id) =>
    visibleSections[id]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  const pageBg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 text-slate-800";

  const navBg = darkMode
    ? "border-gray-700 bg-gray-900/95"
    : "border-indigo-100/80 bg-white/90";

  const cardBg = darkMode ? "bg-gray-800 text-white" : "bg-white text-slate-800";
  const softCardBg = darkMode
    ? "bg-gray-800/95 border-gray-700 text-white"
    : "bg-white/80 border-white/80 text-slate-800";
  const mutedText = darkMode ? "text-gray-300" : "text-slate-600";
  const subtleText = darkMode ? "text-gray-400" : "text-slate-500";
  const headingText = darkMode ? "text-white" : "text-slate-900";
  const pillBg = darkMode
    ? "bg-gray-800 text-cyan-300 border-gray-700"
    : "bg-blue-100/80 text-blue-700 border-blue-200";
  const inputBg = darkMode
    ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400"
    : "bg-white border-indigo-100 text-slate-700 placeholder-slate-400";

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden pt-8 transition-colors duration-500 ${pageBg}`}
    >
      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-indigo-400/50 animate-fade-in-up"
        >
          ↑
        </button>
      )}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-[-8%] top-[-4%] h-72 w-72 animate-pulse rounded-full blur-3xl ${
            darkMode ? "bg-indigo-900/30" : "bg-blue-300/35"
          }`}
        />
        <div
          className={`absolute right-[-8%] top-[10%] h-96 w-96 animate-pulse rounded-full blur-3xl ${
            darkMode ? "bg-cyan-900/20" : "bg-indigo-300/30"
          }`}
        />
        <div
          className={`absolute bottom-[-12%] left-[18%] h-80 w-80 animate-pulse rounded-full blur-3xl ${
            darkMode ? "bg-sky-900/20" : "bg-cyan-200/30"
          }`}
        />
      </div>

      <AppNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} showGetStarted={true} showDarkModeBtn={true} />

      {/* MOBILE NAV */}
      <div className={`fixed top-0 left-0 right-0 z-40 md:hidden ${ darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl border-b ${ darkMode ? "border-gray-700" : "border-indigo-100"}`}>
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-base font-bold text-indigo-600">Mannlytics</span>
          <button
            onClick={() => setMobileNavOpen(p => !p)}
            className={`flex flex-col gap-1.5 p-2 ${ darkMode ? "text-white" : "text-slate-800"}`}
          >
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${ darkMode ? "bg-white" : "bg-slate-800"} ${mobileNavOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${ darkMode ? "bg-white" : "bg-slate-800"} ${mobileNavOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${ darkMode ? "bg-white" : "bg-slate-800"} ${mobileNavOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {mobileNavOpen && (
          <div className={`flex flex-col px-5 pb-4 gap-3 ${ darkMode ? "text-gray-200" : "text-slate-700"}`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setMobileNavOpen(false);
                  link.href.startsWith("/") ? navigate(link.href) : document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-left text-sm font-medium py-2 border-b ${ darkMode ? "border-gray-700" : "border-gray-100"}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>



      <section
        id="home"
        data-reveal
        className={`grid w-full gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 md:py-24 xl:px-16 2xl:px-24 ${revealClass(
          "home"
        )}`}
      >
        <div className="flex flex-col justify-center">
          <div
            className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm animate-fade-in-down ${pillBg}`}
          >
            <FaShieldAlt />
            Trusted AI support for emotional insight
          </div>

          <h1
            className={`max-w-2xl text-5xl font-bold leading-[1.2] tracking-tight md:text-6xl ${headingText}`}
          >
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              Your Thoughts Tell a Story.
            </span>
            <span className="block animated-gradient-text pb-2 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              We Help You Read It.
            </span>
          </h1>

          <p className={`mt-5 max-w-lg text-base leading-7 animate-fade-in-up ${mutedText}`} style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
            A safe, intelligent space to reflect on your emotions, understand your mental patterns, and take meaningful steps toward wellbeing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
            {!currentUser ? (
              <>
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] cta-glow"
                >
                  Start Free
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/login"
                  className={`rounded-full border px-7 py-3.5 font-medium transition duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-gray-600 bg-gray-800 text-white hover:bg-gray-700"
                      : "border-indigo-200 bg-white/80 text-indigo-700 hover:bg-indigo-50"
                  }`}
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={() => handleProtectedRoute("/dashboard")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] cta-glow"
              >
                Go to Dashboard
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl pt-16">
            <div className="absolute right-8 top-0 z-20 hidden md:block">
              <div
                className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-xl animate-[float_1.8s_ease-in-out_infinite] ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white/85 text-slate-700"
                }`}
              >
                <FaLock className="text-indigo-600" />
                <span className="text-sm font-medium">Private Session</span>
              </div>
            </div>

            <div
              className={`absolute -inset-4 top-12 rounded-[2.5rem] blur-2xl ${
                darkMode
                  ? "bg-gradient-to-r from-indigo-900/30 via-cyan-900/20 to-sky-900/20"
                  : "bg-gradient-to-r from-indigo-200/50 via-blue-200/40 to-cyan-200/50"
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-[0_30px_80px_rgba(99,102,241,0.20)] animate-float ${
                darkMode ? "border-gray-700 bg-gray-800/70" : "border-white/80 bg-white/70"
              }`}
            >
              <img
                src={picdetect}
                alt="AI mental health analysis"
                className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />

              <div
                className={`absolute inset-x-6 bottom-6 rounded-2xl border p-5 shadow-lg ${
                  darkMode
                    ? "border-gray-700 bg-gray-900/85 text-white"
                    : "border-blue-100 bg-white/85 text-slate-800"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">
                  Platform Insight
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Reflect. Understand. Feel better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={darkMode ? "#1f2937" : "#eef2ff"} />
        </svg>
      </div>

      <section
        id="features"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "features"
        )}`}
      >
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-500">
            Core Features
          </p>
          <h2 className={`mt-3 text-3xl font-bold md:text-4xl ${headingText}`}>
            Powerful tools built to guide reflection, insight, and support
          </h2>
          <p className={`mt-5 leading-7 ${mutedText}`}>
            Unlike the quick highlights above, these are the product’s main working features users interact with inside the platform.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featureCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2rem] border p-6 shadow-[0_14px_38px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.18)] md:p-7 ${softCardBg}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.08]`} />
                <div
                  className={`absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full blur-3xl ${
                    darkMode ? "bg-white/5" : "bg-white/70"
                  }`}
                />
                <div
                  className={`absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t ${
                    darkMode ? "from-gray-950/25 to-transparent" : "from-white/50 to-transparent"
                  }`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-cyan-300"
                          : "border-white/70 bg-white/80 text-slate-700"
                      }`}
                    >
                      {item.eyebrow}
                    </span>

                    <span
                      className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border px-3 text-sm font-semibold ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-white/80"
                          : "border-slate-200 bg-white/80 text-slate-500"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <div className="flex items-start gap-5">
                      <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.9rem] bg-gradient-to-br ${item.color} text-3xl text-white shadow-[0_20px_45px_rgba(37,99,235,0.25)]`}>
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1 pt-1">
                        <h3 className={`text-3xl font-semibold leading-tight ${headingText}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-4 leading-7 ${mutedText}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`mt-6 rounded-[1.6rem] border p-5 ${
                        darkMode
                          ? "border-white/10 bg-gray-900/55"
                          : "border-indigo-100 bg-white/80"
                      }`}
                    >
                      <p className="text-sm font-semibold text-indigo-600">
                        {item.detail}
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className={`flex items-start gap-3 rounded-[1.2rem] border px-4 py-3 ${
                              darkMode
                                ? "border-white/10 bg-white/5"
                                : "border-indigo-100 bg-white/90"
                            }`}
                          >
                            <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-indigo-500" />
                            <p className={`text-sm leading-6 ${mutedText}`}>{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>



      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill={darkMode ? "#111827" : "#f0f9ff"} />
        </svg>
      </div>

      <section
  id="ai-detection"
  data-reveal
  className={`grid w-full items-center gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
    "ai-detection"
  )}`}
>
  {/* IMAGE SIDE - LEFT */}
  <div
    className={`overflow-hidden rounded-[2rem] border p-1.5 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${
      darkMode ? "border-gray-700 bg-gray-800/75" : "border-white/80 bg-white/75"
    }`}
  >
    <img
      src={picaipowered}
      alt="AI powered mental health detection"
      className="w-full h-auto object-contain rounded-[1.5rem]"
    />
  </div>

  {/* CONTENT SIDE - RIGHT */}
  <div>
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
      AI Detection
    </p>
    <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
      Smarter emotional insights powered by AI
    </h2>
    <p className={`mt-5 text-base leading-7 ${mutedText}`}>
      Understand your emotions with clarity. The system analyzes tone,
      context, and patterns to convert your thoughts into meaningful insights.
    </p>
    <div className="mt-8 space-y-3">
      {[
        "Detect emotional tone and sentiment instantly",
        "Identify stress, anxiety, and mood patterns",
        "Turn free writing into structured insights",
        "Support consistent self-awareness and reflection",
      ].map((point) => (
        <div
          key={point}
          className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${softCardBg}`}
        >
          <FaCheckCircle className="mt-1 shrink-0 text-indigo-500" />
          <p className={`text-sm ${mutedText}`}>{point}</p>
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
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            From a single thought to a clear emotional insight
          </h2>
          <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
            Three simple steps — write freely, let AI understand your context, and receive clear emotional summaries with helpful guidance.
          </p>

          <div className="mt-10 space-y-5">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className={`flex gap-4 rounded-[1.6rem] border p-5 shadow-sm transition hover:-translate-y-1 ${softCardBg}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 font-bold text-white shadow-md">
                  {item.step}
                </div>

                <div>
                  <h3 className={`text-lg font-semibold ${headingText}`}>{item.title}</h3>
                  <p className={`mt-2 leading-7 ${mutedText}`}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div
            className={`overflow-hidden rounded-[2rem] border p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${
              darkMode ? "border-gray-700 bg-gray-800/75" : "border-white/80 bg-white/75"
            }`}
          >
            <img
              src={picworking}
              alt="How Mannlytics works"
              className="h-[360px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
            />
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
        <div
          className={`overflow-hidden rounded-[2rem] border p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${
            darkMode ? "border-gray-700 bg-gray-800/75" : "border-white/80 bg-white/75"
          }`}
        >
          <img
            src={picbenifits}
            alt="Benefits of Mannlytics"
            className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Benefits
          </p>
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            Built for people who want to understand themselves better
          </h2>
          <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
            Mannlytics is private, fast, and designed to feel safe — so you can reflect honestly without feeling judged or overwhelmed.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-2xl border p-4 shadow-sm ${softCardBg}`}
              >
                <FaCheckCircle className="mt-1 text-indigo-500" />
                <p className={mutedText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill={darkMode ? "#111827" : "#f0f9ff"} />
        </svg>
      </div>

      <section
        id="faq"
        data-reveal
        className={`w-full px-6 py-24 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass("faq")}`}
      >
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] ${
            darkMode ? "border-indigo-800 bg-indigo-900/40 text-indigo-300" : "border-indigo-200 bg-indigo-50 text-indigo-600"
          }`}>
            FAQ
          </span>
          <h2 className={`max-w-2xl text-4xl font-bold md:text-5xl ${headingText}`}>
            Common questions about Mannlytics
          </h2>
          <p className={`mt-5 max-w-xl text-lg leading-8 ${mutedText}`}>
            A few quick answers that help users understand how the platform works and what it is designed for.
          </p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className={`group cursor-pointer overflow-hidden rounded-[1.8rem] border shadow-[0_8px_30px_rgba(99,102,241,0.08)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(99,102,241,0.15)] hover:-translate-y-1 ${
                openFaq === index
                  ? darkMode
                    ? "border-indigo-700 bg-gray-800"
                    : "border-indigo-300 bg-white"
                  : softCardBg
              }`}
            >
              {/* Question row */}
              <div className="flex items-start justify-between gap-4 px-7 py-6">
                <div className="flex items-start gap-4">
                  <span className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    openFaq === index
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 text-indigo-400"
                      : "bg-indigo-50 text-indigo-600"
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`text-base font-semibold leading-snug md:text-lg ${headingText}`}>
                    {item.question}
                  </span>
                </div>
                <FaChevronDown
                  className={`mt-1 flex-shrink-0 text-indigo-500 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              {openFaq === index && (
                <div className={`border-t px-7 pb-6 pt-5 text-sm leading-7 md:text-base ${
                  darkMode ? "border-gray-700 text-gray-300" : "border-indigo-100 text-slate-600"
                }`}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 pb-8 md:px-10 xl:px-16 2xl:px-24">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-8 shadow-2xl md:p-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Ready to begin?</p>
              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Start understanding yourself better today
              </h3>
              <p className="mt-4 max-w-2xl text-blue-50">
                Write your first journal entry and let Mannlytics help you make sense of how you feel.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              {!currentUser ? (
                <Link to="/signup" className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105">
                  Get Started Free
                </Link>
              ) : (
                <button onClick={() => handleProtectedRoute("/dashboard")} className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105">
                  Go to Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
        <p className={`mt-6 text-center text-sm ${subtleText}`}>
          Mannlytics is a self-awareness tool and not a substitute for professional medical advice or therapy.
        </p>
      </section>

      <footer
        id="footer"
        className={`mt-10 border-t px-6 py-14 md:px-10 xl:px-16 2xl:px-24 ${
          darkMode ? "border-gray-700 bg-gray-900" : "border-indigo-100 bg-white/60"
        }`}
      >
        <div className="grid w-full gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src={pic}
                alt="Mannlytics Logo"
                className="h-14 w-14 rounded-2xl object-contain shadow-sm"
              />
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">Mannlytics</h3>
                <p className={`text-sm ${subtleText}`}>
                  AI-Powered Emotional Intelligence
                </p>
              </div>
            </a>

            <p className={`mt-5 leading-7 pl-4 ${mutedText}`}>
              Your personal space to reflect, understand emotions, and take care of your mental wellbeing.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className={`text-lg font-semibold ${headingText}`}>Quick Links</h4>
            <div className="mt-5 flex flex-col gap-3 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    link.label === "Dashboard"
                      ? handleProtectedRoute(link.href)
                      : link.href.startsWith("/")
                      ? navigate(link.href)
                      : document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full bg-transparent border-none outline-none text-left text-sm font-medium transition-all duration-200 ${
                    darkMode ? "text-gray-500 hover:text-indigo-400" : "text-slate-400 hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className={`text-lg font-semibold ${headingText}`}>Contact</h4>
            <div className={`mt-5 space-y-3 text-center ${mutedText}`}>
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

              <p>India</p>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 border-t pt-6 text-center text-sm ${
            darkMode ? "border-gray-700 text-gray-400" : "border-indigo-100 text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} Mannlytics. All rights reserved.
          <br />
          Developed by Upinder Kaur, Yashika Taneja & Yashika Khanna
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes cta-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5), 0 8px 30px rgba(99,102,241,0.35); }
          50% { box-shadow: 0 0 0 10px rgba(99,102,241,0), 0 8px 30px rgba(99,102,241,0.35); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease both;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .cta-glow {
          animation: cta-pulse 2.5s ease-in-out infinite;
        }
        .animated-gradient-text {
          background: linear-gradient(270deg, #6366f1, #3b82f6, #06b6d4, #6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }
        @keyframes bookReveal {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bookGlow {
          0%,
          100% {
            box-shadow: 0 10px 28px rgba(79, 70, 229, 0.24);
          }
          50% {
            box-shadow: 0 16px 38px rgba(34, 211, 238, 0.3);
          }
        }

        @keyframes bookShine {
          0% {
            transform: translateX(-60px) rotate(12deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40% {
            transform: translateX(210px) rotate(12deg);
            opacity: 0;
          }
          100% {
            transform: translateX(210px) rotate(12deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}







