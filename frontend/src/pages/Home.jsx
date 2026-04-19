
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaBars,
  FaBolt,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaGlobe,
  FaHeartbeat,
  FaLeaf,
  FaLightbulb,
  FaLinkedin,
  FaLock,
  FaLaptopMedical,
  FaMoon,
  FaQuoteLeft,
  FaRobot,
  FaShieldAlt,
  FaSignOutAlt,
  FaStar,
  FaSun,
  FaTimes,
  FaUser,
  FaUserFriends,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

import picbenifits from "../assets/Pic Benifits.jpeg";
import picdetect from "../assets/Pic Detect.jpeg";
import picworking from "../assets/Pic Working.jpeg";
import picaipowered from "../assets/Pic AI Powered.jpeg";
import supportImg from "../assets/support-calm.jpg";
import pic from "../assets/logo pic.png";
import welcomeVoice from "../assets/voice.mp3";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "AI Detection", href: "#ai-detection" },
  { label: "How It Works", href: "#how-ai-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
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
    title: "Progress Tracking",
    eyebrow: "Trend monitoring",
    desc: "Review emotional changes over time and notice recurring patterns across days, helping you understand your wellness journey more clearly.",
    detail: "Follow mood shifts, consistency, and growth over time.",
    points: [
      "Observe emotional trends across entries",
      "Build stronger long-term awareness",
    ],
    icon: FaChartLine,
    color: "from-sky-500 via-blue-500 to-indigo-500",
    route: "/progress",
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
    title: "Progress Awareness",
    eyebrow: "Pattern awareness",
    desc: "Notice how moods shift over time and revisit emotional changes with greater clarity. The experience helps users stay more aware of recurring thoughts and responses.",
    detail: "See growth, changes, and recurring patterns",
    icon: FaChartLine,
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

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Student",
    text: "Moodly AI helped me understand my emotional patterns better. The interface feels calm, modern, and easy to trust whenever I want to reflect.",
  },
  {
    name: "Rahul Mehta",
    role: "Working Professional",
    text: "I liked how quickly it analyzed my writing and showed meaningful emotional insights. It feels supportive without being overwhelming.",
  },
  {
    name: "Priya Kapoor",
    role: "Daily User",
    text: "The platform feels polished and comforting. Tracking changes in my mood over time made me more aware of stress and how I respond to it.",
  },
];

const supportHelplines = [
  {
    id: 1,
    title: "Tele-MANAS",
    number: "14416 / 1800-891-4416",
    callLink: "tel:14416",
    website: "https://telemanas.mohfw.gov.in/home",
    description:
      "Government mental health support for stress, anxiety, emotional distress, and crisis listening.",
    meta: "24x7 support • National service",
  },
  {
    id: 2,
    title: "KIRAN Mental Health Helpline",
    number: "1800-599-0019",
    callLink: "tel:18005990019",
    website: "https://nimhr.ac.in/",
    description:
      "National toll-free mental health helpline with multilingual support and accessible guidance.",
    meta: "24x7 support • Multilingual",
  },
  {
    id: 3,
    title: "Vandrevala Foundation",
    number: "99996-66555",
    callLink: "tel:9999666555",
    website: "https://www.vandrevalafoundation.com/",
    description:
      "Emotional support and crisis intervention through trained volunteers and support services.",
    meta: "24x7 support • Crisis assistance",
  },
];

const counselingCards = [
  {
    name: "Surbhi Anand",
    specialty: "Therapist, MindPeers",
    desc: "Official MindPeers therapist profile with booking access through the platform.",
    initials: "SA",
    profileLink: "https://www.mindpeers.co/surbhi-anand-0007",
    bookLink: "https://www.mindpeers.co/surbhi-anand-0007",
    website: "https://www.mindpeers.co/",
    linkedin: "https://www.linkedin.com/company/mindpeersco/",
  },
  {
    name: "Rohan Chandak",
    specialty: "Therapist, MindPeers",
    desc: "MindPeers therapist listing with profile information and session booking flow.",
    initials: "RC",
    profileLink: "https://www.mindpeers.co/rohan-0060",
    bookLink: "https://www.mindpeers.co/rohan-0060",
    website: "https://www.mindpeers.co/",
    linkedin: "https://www.linkedin.com/company/mindpeersco/",
  },
  {
    name: "Dr. Nisha Khanna",
    specialty: "Psychologist / Counselling Psychologist",
    desc: "Official Practo profile with counseling details and appointment options.",
    initials: "NK",
    profileLink:
      "https://www.practo.com/gurgaon/doctor/nisha-khanna-1-psychiatrist?no_app_promo=true",
    bookLink:
      "https://www.practo.com/gurgaon/doctor/nisha-khanna-1-psychiatrist?no_app_promo=true",
    website: "https://www.practo.com/",
    linkedin: "https://my.linkedin.com/company/practo-technologies-pvt-ltd",
  },
  {
    name: "Ms. Subhra Banerjee Paul",
    specialty: "Psychologist / Rehabilitation Therapist",
    desc: "Practo listing covering profile details and counseling-related services.",
    initials: "SB",
    profileLink:
      "https://www.practo.com/kolkata/therapist/subhra-banerjee-paul",
    bookLink:
      "https://www.practo.com/kolkata/therapist/subhra-banerjee-paul",
    website: "https://www.practo.com/",
    linkedin: "https://my.linkedin.com/company/practo-technologies-pvt-ltd",
  },
  {
    name: "Dr. Sebin S Kottaram",
    specialty: "Psychologist",
    desc: "Practo profile listing youth, adult, family, and online counseling support.",
    initials: "SK",
    profileLink:
      "https://www.practo.com/kottayam/doctor/sebin-s-kottaram-psychologist",
    bookLink:
      "https://www.practo.com/kottayam/doctor/sebin-s-kottaram-psychologist",
    website: "https://www.practo.com/",
    linkedin: "https://my.linkedin.com/company/practo-technologies-pvt-ltd",
  },
  {
    name: "Dr. Finita Glory Roy",
    specialty: "Therapist / Adult Counselling",
    desc: "Official Practo profile with appointment and counseling service details.",
    initials: "FR",
    profileLink:
      "https://www.practo.com/chennai/therapist/finita-glory-roy-psychologist",
    bookLink:
      "https://www.practo.com/chennai/therapist/finita-glory-roy-psychologist",
    website: "https://www.practo.com/",
    linkedin: "https://my.linkedin.com/company/practo-technologies-pvt-ltd",
  },
];

const faqItems = [
  {
    question: "How does Moodly AI detect emotions?",
    answer:
      "Moodly AI analyzes written text using natural language processing and AI models to understand emotional tone, intensity, and context.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, the platform is designed with a privacy-conscious approach so users feel safer while reflecting on sensitive emotions and experiences.",
  },
  {
    question: "Can Moodly AI replace a therapist or doctor?",
    answer:
      "No. Moodly AI is a supportive emotional-awareness tool and not a substitute for professional medical or mental health care.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "Students, professionals, and anyone interested in understanding emotional well-being through written reflection can use the platform.",
  },
];

const concernOptions = [
  "Stress management",
  "Anxiety support",
  "Low mood / sadness",
  "Relationship concerns",
  "Work or academic pressure",
  "Sleep and burnout",
  "I need urgent emotional support",
];

const supportTypeOptions = [
  "Talk to a counselor",
  "View verified helplines",
  "Explore therapist profiles",
  "Need help deciding",
];

export default function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [userName, setUserName] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [currentUser, setCurrentUser] = useState(() =>
    sessionStorage.getItem("currentUser")
  );
  const [bookingForm, setBookingForm] = useState({
    name: "",
    concern: concernOptions[0],
    supportType: supportTypeOptions[0],
    note: "",
  });
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [voiceStarted, setVoiceStarted] = useState(false);
  const [heroOrbReady, setHeroOrbReady] = useState(false);
  const [autoPlayAttempted, setAutoPlayAttempted] = useState(false);
  const [voiceGreetingComplete, setVoiceGreetingComplete] = useState(false);
  const [interactionDetected, setInteractionDetected] = useState(false);

  const dropdownRef = useRef(null);
  const supportSectionRef = useRef(null);
  const audioRef = useRef(null);

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

      const img = localStorage.getItem(`profilePic_${userEmail}`);
      if (img) {
        setProfilePic(img);
      } else {
        setProfilePic(null);
      }
    } else {
      setUserName("");
      setProfilePic(null);
    }
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (bookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  const stopWelcomeVoice = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setVoiceStarted(false);
  };

  const tryPlayWelcomeVoice = async () => {
    if (!voiceEnabled || !audioRef.current || voiceStarted) return;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setVoiceStarted(true);
      setAutoPlayAttempted(true);
    } catch (error) {
      // Autoplay blocked - will try again on user interaction
      setAutoPlayAttempted(true);
    }
  };

  // Enhanced voice feedback system
  const speakText = (text, options = {}) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.1;
    utterance.volume = options.volume || 0.8;
    
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Female') || 
      voice.name.includes('Samantha') ||
      voice.name.includes('Karen') ||
      voice.gender === 'female'
    ) || voices[0];
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const orbTimer = window.setTimeout(() => {
      setHeroOrbReady(true);
    }, 450);

    return () => {
      window.clearTimeout(orbTimer);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.95;

    const handleEnded = () => {
      setVoiceStarted(false);
      setVoiceGreetingComplete(true);
      
      // Professional follow-up message
      if (voiceEnabled) {
        setTimeout(() => {
          speakText("Feel free to explore our features. I'll provide helpful guidance as you navigate through the platform.", {
            rate: 0.85,
            pitch: 1.0
          });
        }, 2000);
      }
    };

    const handlePlay = () => {
      setVoiceStarted(true);
    };

    const handleError = () => {
      setVoiceStarted(false);
      setAutoPlayAttempted(true);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("error", handleError);
    };
  }, [voiceEnabled]);

  // Auto-play welcome voice on page load/refresh
  useEffect(() => {
    const attemptAutoPlay = async () => {
      if (voiceEnabled && !autoPlayAttempted) {
        // Small delay to ensure page is ready
        setTimeout(() => {
          tryPlayWelcomeVoice();
        }, 1200);
      }
    };
    
    attemptAutoPlay();
  }, [voiceEnabled, autoPlayAttempted]);

  useEffect(() => {
    const triggerOnInteraction = () => {
      tryPlayWelcomeVoice();
    };

    window.addEventListener("pointerdown", triggerOnInteraction, { once: true });
    window.addEventListener("scroll", triggerOnInteraction, { once: true });
    window.addEventListener("keydown", triggerOnInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", triggerOnInteraction);
      window.removeEventListener("scroll", triggerOnInteraction);
      window.removeEventListener("keydown", triggerOnInteraction);
    };
  }, [voiceEnabled, voiceStarted]);

  useEffect(() => {
    return () => {
      stopWelcomeVoice();
    };
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
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUserName");

    setCurrentUser(null);
    setUserName("");
    setProfilePic(null);
    setOpen(false);
    setMobileMenuOpen(false);

    navigate("/");
  };

  const handleBookingInput = (event) => {
    const { name, value } = event.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setBookingSubmitted(true);
    setBookingOpen(false);

    setTimeout(() => {
      supportSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  const revealClass = (id) =>
    visibleSections[id]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  const selectedSupportMessage =
    bookingForm.supportType === "Talk to a counselor"
      ? "You selected counselor support. Explore the therapist cards below and book the option that feels right for you."
      : bookingForm.supportType === "View verified helplines"
      ? "You selected helpline support. Verified helplines are shown first below for quick access."
      : bookingForm.supportType === "Explore therapist profiles"
      ? "You selected therapist profiles. You can directly compare and open profile pages below."
      : "You selected guidance support. Start with helplines or therapist profiles below based on what feels most comfortable.";

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
      className={`relative min-h-screen w-full overflow-x-hidden pt-28 transition-colors duration-500 ${pageBg}`}
    >
      <audio ref={audioRef} preload="auto" src={welcomeVoice} />

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_32%),linear-gradient(180deg,rgba(239,246,255,0.92)_0%,rgba(224,231,255,0.86)_50%,rgba(239,246,255,0.94)_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-[100] w-full border-b shadow-md backdrop-blur-xl ${navBg}`}
      >
        <div className="flex w-full items-center justify-between px-4 py-6 md:px-8 lg:px-12 xl:px-20">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={pic}
              alt="Moodly AI Logo"
              className="h-16 w-16 rounded-2xl object-contain shadow-sm"
            />
            <div>
              <p className="text-2xl font-bold tracking-wide text-indigo-600">
                Moodly AI
              </p>
              <p className={`text-xs ${subtleText}`}>
                AI-Powered Emotional Intelligence
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-[18px] font-semibold tracking-[0.01em] transition duration-300 hover:text-indigo-600 ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}
              >
                <span className="inline-block transition duration-300 group-hover:-translate-y-0.5">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => {
                setBookingOpen(true);
                if (voiceEnabled && voiceGreetingComplete) {
                  setTimeout(() => {
                    speakText("Great choice! Let's help you find the right support. Please fill out this quick form.");
                  }, 500);
                }
              }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(79,70,229,0.28)] animate-[bookReveal_0.9s_ease-out,bookGlow_2.8s_ease-in-out_infinite_1s] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute -left-12 top-0 h-full w-10 rotate-12 bg-white/35 blur-[2px] animate-[bookShine_3.4s_linear_infinite]" />
              <span className="relative z-10">Book a Session</span>
            </button>

            <button
              type="button"
              onClick={toggleDarkMode}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                darkMode
                  ? "border-indigo-400/30 bg-gradient-to-br from-slate-800 to-slate-700 text-amber-300 shadow-[0_8px_24px_rgba(99,102,241,0.18)]"
                  : "border-indigo-200 bg-gradient-to-br from-white to-indigo-50 text-indigo-600 shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
              }`}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">
                {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </span>
            </button>

            {!currentUser ? (
              <Link
                to="/signup"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Get Started
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setOpen(!open)}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-full font-bold text-white shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                  }}
                >
                  {profilePic ? (
                    <img
                      src={profilePic}
                      alt="profile"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    userName?.charAt(0)?.toUpperCase()
                  )}
                </div>

                {open && (
                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-2xl border p-2 shadow-2xl ${cardBg} ${
                      darkMode ? "border-gray-700" : "border-indigo-100"
                    }`}
                  >
                    <Link
                      to="/profile"
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"
                      }`}
                    >
                      <FaUser className="shrink-0 text-sm text-indigo-500" />
                      Profile
                    </Link>

                    <Link
                      to="/dashboard"
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-indigo-50"
                      }`}
                    >
                      <FaChartBar className="shrink-0 text-sm text-indigo-500" />
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-rose-500 transition ${
                        darkMode ? "hover:bg-red-950/40" : "hover:bg-rose-50"
                      }`}
                    >
                      <FaSignOutAlt className="shrink-0 text-sm text-rose-500" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="animate-[navPulse_3.2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
            >
              Book
            </button>

            <button
              type="button"
              onClick={toggleDarkMode}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                darkMode
                  ? "border-indigo-400/30 bg-gradient-to-br from-slate-800 to-slate-700 text-amber-300 shadow-[0_8px_24px_rgba(99,102,241,0.18)]"
                  : "border-indigo-200 bg-gradient-to-br from-white to-indigo-50 text-indigo-600 shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
              }`}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">
                {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`rounded-xl p-3 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-indigo-700"
              }`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`border-t px-6 py-5 md:hidden ${
              darkMode ? "border-gray-700 bg-gray-900" : "border-indigo-100 bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition hover:text-indigo-600 ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex gap-3">
                {!currentUser ? (
                  <Link
                    to="/signup"
                    className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white"
                  >
                    Get Started
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className={`rounded-full border px-5 py-2 text-sm ${
                        darkMode
                          ? "border-gray-600 bg-gray-800 text-white"
                          : "border-indigo-200 text-indigo-700"
                      }`}
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

      <div className="pointer-events-none fixed bottom-5 right-5 z-[115] flex max-w-[340px] flex-col items-end gap-3 md:bottom-7 md:right-7">
        <div
          className={`pointer-events-auto relative overflow-hidden rounded-[1.75rem] border p-4 shadow-[0_20px_60px_rgba(59,130,246,0.22)] backdrop-blur-2xl transition-all duration-700 ${
            heroOrbReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } ${
            darkMode
              ? "border-indigo-500/20 bg-slate-900/90 text-white"
              : "border-white/80 bg-white/88 text-slate-800"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-400/10 to-transparent" />
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

          <div className="relative flex items-start gap-3">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-lg">
              <FaVolumeUp
                className={`${
                  voiceEnabled ? "animate-[voiceWave_1.8s_ease-in-out_infinite]" : ""
                }`}
              />
              <span className="absolute inset-0 rounded-2xl border border-white/20 animate-[voiceRing_2.1s_ease-out_infinite]" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-500">
                Welcome Voice
              </p>
              <h3 className={`mt-1 text-base font-semibold ${headingText}`}>
                {voiceStarted ? "Welcoming your visitor..." : "Auto welcome is ready"}
              </h3>
              <p className={`mt-1 text-sm leading-6 ${mutedText}`}>
                A warm voice greets visitors automatically for a more memorable first impression.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label={voiceEnabled ? "Mute welcome voice" : "Unmute welcome voice"}
          onClick={() => {
            if (voiceEnabled) {
              stopWelcomeVoice();
              setVoiceEnabled(false);
              setVoiceStarted(false);
            } else {
              setVoiceEnabled(true);
              setTimeout(() => {
                tryPlayWelcomeVoice();
              }, 120);
            }
          }}
          className={`pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 ${
            darkMode
              ? "border-gray-700 bg-gray-900/90 text-white"
              : "border-white/80 bg-white/90 text-slate-700"
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-md">
            {voiceEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </span>
        </button>
      </div>

      {bookingOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
          <div
            className={`relative w-full max-w-3xl rounded-[2rem] border p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:p-8 ${
              darkMode
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-white/80 bg-white/95 text-slate-800"
            }`}
          >
            <button
              type="button"
              onClick={() => setBookingOpen(false)}
              className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border text-base shadow-sm transition ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
                  : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <FaTimes />
            </button>

            <div className="pr-14">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-500">
                Book Session
              </p>
              <h3 className={`mt-3 text-3xl font-bold ${headingText}`}>
                Book a Support Session
              </h3>
              <p className={`mt-3 max-w-xl leading-7 ${mutedText}`}>
                Share a few details and we&apos;ll guide you to the right support options.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  className={`mb-2 block text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingInput}
                  placeholder="Enter your name"
                  required
                  className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition ${inputBg}`}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  What support do you need?
                </label>
                <select
                  name="supportType"
                  value={bookingForm.supportType}
                  onChange={handleBookingInput}
                  className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition ${inputBg}`}
                >
                  {supportTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  Main Concern
                </label>
                <select
                  name="concern"
                  value={bookingForm.concern}
                  onChange={handleBookingInput}
                  className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition ${inputBg}`}
                >
                  {concernOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  Short Note
                </label>
                <input
                  type="text"
                  name="note"
                  value={bookingForm.note}
                  onChange={handleBookingInput}
                  placeholder="Optional note"
                  className={`w-full rounded-2xl border px-4 py-3.5 outline-none transition ${inputBg}`}
                />
              </div>

              <div
                className={`md:col-span-2 flex flex-col gap-5 border-t pt-6 md:flex-row md:items-center md:justify-between ${
                  darkMode ? "border-gray-700" : "border-indigo-100"
                }`}
              >
                <p className={`max-w-sm text-sm leading-6 ${subtleText}`}>
                  Submit the form and we&apos;ll take you to the most relevant support options.
                </p>

                <button
                  type="submit"
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  View Support Options
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section
        id="home"
        data-reveal
        className={`grid w-full gap-14 px-6 py-20 transition-all duration-1000 md:grid-cols-2 md:px-10 md:py-24 xl:px-16 2xl:px-24 ${revealClass(
          "home"
        )}`}
      >
        <div className="flex flex-col justify-center">
          <div
            className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm ${pillBg}`}
          >
            <FaShieldAlt />
            Trusted AI support for emotional insight
          </div>

          <h1
            className={`max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl ${headingText}`}
          >
            Detect Mental Health Using
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              AI Text Analysis
            </span>
          </h1>

          <p className={`mt-6 max-w-2xl text-lg leading-8 ${mutedText}`}>
            Moodly AI transforms written thoughts into meaningful emotional insight using AI and natural language processing, helping users better understand stress, anxiety, mood shifts, and emotional patterns.
          </p>

          <p className={`mt-4 max-w-2xl leading-7 ${mutedText}`}>
            Built with a cleaner, more premium landing page experience, the platform feels more trustworthy, modern, and product-ready.
          </p>

          <div
            className={`mt-6 inline-flex w-fit items-center gap-3 rounded-full border px-4 py-3 shadow-sm backdrop-blur-xl ${
              darkMode
                ? "border-gray-700 bg-gray-800/90 text-white"
                : "border-white/80 bg-white/85 text-slate-700"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm font-medium">
              Automatic welcome voice greets new visitors
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {!currentUser ? (
              <>
                <Link
                  to="/signup"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
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
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Go to Dashboard
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl pt-16 animate-[heroFloat_6s_ease-in-out_infinite]">
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

            <div className="absolute left-5 top-5 z-20 hidden md:block">
              <div
                className={`rounded-full px-4 py-2 text-sm font-medium shadow-xl backdrop-blur-xl animate-[float_3.4s_ease-in-out_infinite] ${
                  darkMode ? "bg-gray-900/85 text-cyan-200" : "bg-white/88 text-slate-700"
                }`}
              >
                Voice-led first impression
              </div>
            </div>

            <div className="absolute right-5 top-20 z-20 hidden md:block">
              <div
                className={`rounded-full px-4 py-2 text-sm font-medium shadow-xl backdrop-blur-xl animate-[float_4.2s_ease-in-out_infinite] ${
                  darkMode ? "bg-gray-900/85 text-indigo-200" : "bg-white/88 text-slate-700"
                }`}
              >
                Calm, modern, human
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
              className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-[0_30px_80px_rgba(99,102,241,0.20)] ${
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
                  Turn written thoughts into clear emotional understanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mini-highlights"
        data-reveal
        className={`w-full px-6 pb-6 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "mini-highlights"
        )}`}
      >
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-500">
            Quick Highlights
          </p>

          <h2 className={`mt-3 text-3xl font-bold md:text-4xl ${headingText}`}>
            Thoughtful details that make the experience feel calmer and clearer
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {[
              "AI-guided emotional understanding",
              "Private and calm reflection space",
              "Fast, simple, supportive insights",
            ].map((item) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-gray-200"
                    : "border-indigo-100 bg-white/80 text-slate-600"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {miniCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex min-h-[280px] flex-col rounded-[2rem] border p-6 shadow-[0_12px_35px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-3 hover:rotate-[0.4deg] hover:shadow-[0_18px_45px_rgba(99,102,241,0.16)] ${softCardBg}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-md">
                  <Icon />
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-500">
                  {item.eyebrow}
                </p>

                <h3 className={`mt-3 text-xl font-semibold ${headingText}`}>
                  {item.title}
                </h3>

                <p className={`mt-3 text-sm leading-7 ${mutedText}`}>{item.desc}</p>

                <div className="mt-auto pt-5">
                  <div className="h-px w-full bg-gradient-to-r from-indigo-200 via-cyan-200 to-transparent" />
                  <p className="mt-4 text-sm font-medium text-indigo-600">
                    {item.detail}
                  </p>
                </div>
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

        <div className="space-y-5">
          {featureCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_14px_38px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-1 hover:scale-[1.005] hover:shadow-[0_20px_52px_rgba(99,102,241,0.16)] ${softCardBg}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute -right-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full blur-3xl ${
                    darkMode ? "bg-indigo-900/20" : "bg-indigo-100/70"
                  }`}
                />

                <div className="relative grid gap-6 lg:grid-cols-[88px_minmax(0,1.3fr)_minmax(0,0.9fr)] lg:items-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-gradient-to-r ${item.color} text-2xl text-white shadow-lg`}
                  >
                    <Icon />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-500">
                      {item.eyebrow}
                    </p>
                    <h3 className={`mt-3 text-2xl font-semibold ${headingText}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 max-w-2xl leading-7 ${mutedText}`}>
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`rounded-[1.5rem] border p-5 ${
                      darkMode
                        ? "border-gray-700 bg-gray-900/60"
                        : "border-indigo-100 bg-white/70"
                    }`}
                  >
                    <p className="text-sm font-semibold text-indigo-600">
                      {item.detail}
                    </p>

                    <div className="mt-4 space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <FaCheckCircle className="mt-1 text-sm text-indigo-500" />
                          <p className={`text-sm leading-6 ${mutedText}`}>{point}</p>
                        </div>
                      ))}
                    </div>

                    {item.route && (
                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => handleProtectedRoute(item.route)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-cyan-500"
                        >
                          Explore feature
                          <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="why-choose-us"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "why-choose-us"
        )}`}
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Why Choose Us
          </p>
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            More than detection, it is a thoughtful emotional support experience
          </h2>
          <p className={`mt-5 text-lg leading-8 ${mutedText}`}>
            Moodly AI combines insight, comfort, and clarity in a way that feels human-centered and trustworthy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-[2rem] border p-8 shadow-[0_12px_35px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_18px_45px_rgba(99,102,241,0.16)] ${softCardBg}`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white shadow-md">
                  <Icon />
                </div>
                <h3 className={`text-xl font-semibold ${headingText}`}>{item.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${mutedText}`}>{item.desc}</p>
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
          <div
            className={`absolute -left-5 top-12 hidden h-24 w-24 rounded-full blur-2xl md:block ${
              darkMode ? "bg-indigo-900/25" : "bg-blue-200/50"
            }`}
          />
          <div
            className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${
              darkMode ? "border-gray-700 bg-gray-800/75" : "border-white/80 bg-white/75"
            }`}
          >
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
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            AI-powered emotional detection with a cleaner visual identity
          </h2>
          <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
            The platform analyzes sentiment, emotional intensity, and context to identify signals related to stress, sadness, anxiety, and mood fluctuations.
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
                className={`flex items-start gap-3 rounded-2xl border p-4 shadow-sm ${softCardBg}`}
              >
                <FaCheckCircle className="mt-1 text-indigo-500" />
                <p className={mutedText}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="demo-preview"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "demo-preview"
        )}`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Demo Preview
            </p>
            <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
              A quick look at how emotional insight can be presented
            </h2>
            <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
              This preview gives users a visual sense of how written thoughts can be transformed into a clean emotional summary.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Detected mood balance with simple visual clarity",
                "Highlights signals like stress, sadness, and calmness",
                "Shows user-friendly summaries instead of complex technical output",
              ].map((item) => (
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

          <div className={`rounded-[2rem] border p-6 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${softCardBg}`}>
            <div
              className={`rounded-[1.5rem] border p-6 ${
                darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-indigo-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
                    Analysis Result
                  </p>
                  <h3 className={`mt-2 text-2xl font-bold ${headingText}`}>
                    Emotional Summary
                  </h3>
                </div>
                <div
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    darkMode ? "bg-emerald-900/40 text-emerald-300" : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  Stable Insight
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className={`rounded-2xl p-4 shadow-sm ${cardBg}`}>
                  <p className={`text-sm ${subtleText}`}>Stress</p>
                  <p className="mt-2 text-2xl font-bold text-rose-500">42%</p>
                </div>
                <div className={`rounded-2xl p-4 shadow-sm ${cardBg}`}>
                  <p className={`text-sm ${subtleText}`}>Calm</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-500">35%</p>
                </div>
                <div className={`rounded-2xl p-4 shadow-sm ${cardBg}`}>
                  <p className={`text-sm ${subtleText}`}>Optimism</p>
                  <p className="mt-2 text-2xl font-bold text-indigo-500">23%</p>
                </div>
              </div>

              <div className={`mt-5 rounded-2xl p-5 shadow-sm ${cardBg}`}>
                <p className={`text-sm font-semibold ${subtleText}`}>Suggested Insight</p>
                <p className={`mt-3 leading-7 ${mutedText}`}>
                  Your reflection shows mild stress with signs of emotional control. Taking a short pause, journaling consistently, and checking your recent mood trends may help improve balance.
                </p>
              </div>
            </div>
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
            A more professional journey from thought to insight
          </h2>
          <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
            Your process is now presented in a clearer, more product-focused way that feels closer to a premium startup landing page.
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
              alt="How Moodly AI works"
              className="h-[360px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className={`rounded-[1.8rem] border p-6 shadow-sm ${softCardBg}`}>
              <FaShieldAlt className="text-2xl text-indigo-500" />
              <h4 className={`mt-4 text-lg font-semibold ${headingText}`}>Built for trust</h4>
              <p className={`mt-2 ${mutedText}`}>
                Softer depth, glass cards, and cleaner spacing make the product feel more mature.
              </p>
            </div>

            <div className={`rounded-[1.8rem] border p-6 shadow-sm ${softCardBg}`}>
              <FaLock className="text-2xl text-indigo-500" />
              <h4 className={`mt-4 text-lg font-semibold ${headingText}`}>Private by design</h4>
              <p className={`mt-2 ${mutedText}`}>
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
        <div
          className={`overflow-hidden rounded-[2rem] border p-3 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${
            darkMode ? "border-gray-700 bg-gray-800/75" : "border-white/80 bg-white/75"
          }`}
        >
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
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            A landing page that feels premium, soft, and startup-ready
          </h2>
          <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
            Better hierarchy, stronger depth, and more polished sections make the platform feel more credible and more professional.
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

      <section
        id="testimonials"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "testimonials"
        )}`}
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Testimonials
          </p>
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            Trusted by users who want calmer, clearer emotional insight
          </h2>
          <p className={`mt-5 text-lg leading-8 ${mutedText}`}>
            Real feedback from users who value thoughtful design, privacy, and meaningful AI-powered support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_12px_40px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-2 hover:rotate-[0.3deg] hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] ${softCardBg}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${
                  darkMode ? "bg-cyan-900/20" : "bg-cyan-100/70"
                }`}
              />
              <div
                className={`absolute -left-6 bottom-0 h-20 w-20 rounded-full blur-2xl ${
                  darkMode ? "bg-indigo-900/20" : "bg-indigo-100/60"
                }`}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-lg font-bold text-white shadow-md">
                    {item.name.charAt(0)}
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} />
                    ))}
                  </div>
                </div>

                <FaQuoteLeft className="mb-4 text-2xl text-indigo-300" />

                <p className={`text-sm leading-7 ${mutedText}`}>{item.text}</p>

                <div
                  className={`mt-6 border-t pt-5 ${
                    darkMode ? "border-gray-700" : "border-indigo-100"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${headingText}`}>{item.name}</h3>
                  <p className={`text-sm ${subtleText}`}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="support"
        ref={supportSectionRef}
        data-reveal
        className={`w-full px-6 py-24 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "support"
        )}`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Support
            </p>
            <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
              Support, guidance, and trusted help when you need it
            </h2>
            <p className={`mt-6 text-lg leading-8 ${mutedText}`}>
              Moodly AI helps you reflect and understand emotions, but reaching trusted support also matters. Here are verified help resources and counseling options.
            </p>

            {bookingSubmitted && (
              <div
                className={`mt-6 rounded-[1.6rem] border p-5 shadow-sm ${
                  darkMode
                    ? "border-cyan-900/40 bg-gray-800 text-white"
                    : "border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-indigo-50 text-slate-800"
                }`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                    darkMode ? "text-cyan-300" : "text-cyan-700"
                  }`}
                >
                  Your Support Path
                </p>
                <h3 className={`mt-2 text-xl font-semibold ${headingText}`}>
                  {bookingForm.name
                    ? `${bookingForm.name}, here are your recommended next steps`
                    : "Here are your recommended next steps"}
                </h3>
                <p className={`mt-3 leading-7 ${mutedText}`}>
                  Concern selected:{" "}
                  <span className={`font-semibold ${headingText}`}>{bookingForm.concern}</span>
                </p>
                <p className={`mt-2 leading-7 ${mutedText}`}>{selectedSupportMessage}</p>
              </div>
            )}
          </div>

          <div className={`overflow-hidden rounded-[2rem] border p-5 shadow-[0_25px_60px_rgba(99,102,241,0.16)] ${softCardBg}`}>
            <div className={`rounded-[1.5rem] p-4 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-indigo-50 via-white to-cyan-50"}`}>
              <img
                src={supportImg}
                alt="Mental wellness support"
                className="h-[320px] w-full rounded-[1.2rem] object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-10 rounded-[1.8rem] border p-6 shadow-lg ${
            darkMode
              ? "border-amber-900/40 bg-gray-800 text-white"
              : "border-amber-100 bg-gradient-to-r from-amber-50 via-white to-blue-50 text-slate-800"
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.3em] ${
              darkMode ? "text-amber-300" : "text-amber-600"
            }`}
          >
            Important Note
          </p>
          <p className={`mt-4 leading-8 ${mutedText}`}>
            Moodly AI provides supportive emotional insights and is not a substitute for professional medical advice, diagnosis, or treatment. In immediate danger or emergency situations, contact emergency services right away.
          </p>
        </div>

        <div className="mt-14">
          <h3 className={`text-2xl font-semibold ${headingText}`}>
            Verified Mental Health Helplines
          </h3>

          <div className="mt-6 grid gap-6">
            {supportHelplines.map((item) => (
              <div
                key={item.id}
                className={`rounded-[1.8rem] border p-6 shadow-[0_12px_35px_rgba(99,102,241,0.10)] transition duration-300 ${
                  bookingSubmitted && bookingForm.supportType === "View verified helplines"
                    ? darkMode
                      ? "border-indigo-500 bg-gray-800 text-white ring-2 ring-indigo-500/20"
                      : "border-indigo-200 bg-white/80 ring-2 ring-indigo-100"
                    : `${softCardBg}`
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-600">{item.title}</h4>
                    <p className="mt-2 text-sm font-medium text-indigo-500">{item.meta}</p>
                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      darkMode ? "bg-gray-700 text-indigo-300" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    Verified Support
                  </div>
                </div>

                <p className={`mt-4 max-w-4xl leading-7 ${mutedText}`}>{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={item.callLink}
                    className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                  >
                    Call: {item.number}
                  </a>

                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                      darkMode
                        ? "border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
                        : "border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50"
                    }`}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-semibold ${headingText}`}>Counseling Support</h3>
          <p className={`mt-3 max-w-3xl ${mutedText}`}>
            Explore official therapist and platform pages for profile details, professional background, and booking access.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {counselingCards.map((item) => (
              <div
                key={item.name}
                className={`flex h-full flex-col rounded-[1.8rem] border p-6 shadow-[0_12px_35px_rgba(99,102,241,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(99,102,241,0.16)] ${
                  bookingSubmitted &&
                  (bookingForm.supportType === "Talk to a counselor" ||
                    bookingForm.supportType === "Explore therapist profiles")
                    ? darkMode
                      ? "border-indigo-500 bg-gray-800 text-white ring-2 ring-indigo-500/20"
                      : "border-indigo-200 bg-white/80 ring-2 ring-indigo-100"
                    : `${softCardBg}`
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-lg font-bold text-white shadow-md">
                    {item.initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className={`text-lg font-semibold ${headingText}`}>{item.name}</h4>
                    <p className="mt-1 text-sm font-medium text-indigo-500">{item.specialty}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition ${
                          darkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                        }`}
                      >
                        <FaGlobe />
                        Website
                      </a>

                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition ${
                          darkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                        }`}
                      >
                        <FaLinkedin />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <p className={`mt-5 min-h-[72px] text-sm leading-7 ${mutedText}`}>{item.desc}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={item.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                      darkMode
                        ? "border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
                        : "border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50"
                    }`}
                  >
                    View Profile
                  </a>

                  <a
                    href={item.bookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                  >
                    Book Session
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        data-reveal
        className={`w-full px-6 py-20 transition-all duration-1000 md:px-10 xl:px-16 2xl:px-24 ${revealClass(
          "faq"
        )}`}
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            FAQ
          </p>
          <h2 className={`text-4xl font-bold md:text-5xl ${headingText}`}>
            Common questions about Moodly AI
          </h2>
          <p className={`mt-5 text-lg leading-8 ${mutedText}`}>
            A few quick answers that help users understand how the platform works and what it is designed for.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className={`overflow-hidden rounded-[1.7rem] border shadow-sm ${softCardBg}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className={`text-base font-semibold md:text-lg ${headingText}`}>
                  {item.question}
                </span>
                <FaChevronDown
                  className={`text-indigo-500 transition duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div
                  className={`border-t px-6 py-5 ${
                    darkMode ? "border-gray-700 text-gray-300" : "border-indigo-100 text-slate-600"
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 pb-8 md:px-10 xl:px-16 2xl:px-24">
        <div
          className={`rounded-[2rem] border p-6 shadow-lg md:p-8 ${
            darkMode
              ? "border-amber-900/40 bg-gray-800 text-white"
              : "border-amber-100 bg-gradient-to-r from-amber-50 via-white to-blue-50 text-slate-800"
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.3em] ${
              darkMode ? "text-amber-300" : "text-amber-600"
            }`}
          >
            Disclaimer
          </p>
          <p className={`mt-4 text-base leading-8 md:text-lg ${mutedText}`}>
            Moodly AI provides supportive emotional insights and reflection tools. It is not a substitute for professional medical advice, diagnosis, therapy, or emergency mental health support.
          </p>
        </div>
      </section>

      <section className="w-full px-6 pb-8 md:px-10 xl:px-16 2xl:px-24">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-8 shadow-2xl md:p-12">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Ready To Experience It?
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Start your emotional wellness journey with a more thoughtful digital experience
              </h3>
              <p className="mt-4 max-w-2xl text-blue-50">
                Explore emotional patterns, reflect with more clarity, and use AI-powered insights in a safe and modern environment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              {!currentUser ? (
                <Link
                  to="/signup"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
                >
                  Create Account
                </Link>
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
        className={`mt-10 border-t px-6 py-14 md:px-10 xl:px-16 2xl:px-24 ${
          darkMode ? "border-gray-700 bg-gray-900" : "border-indigo-100 bg-white/60"
        }`}
      >
        <div className="grid w-full gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src={pic}
                alt="Moodly AI Logo"
                className="h-14 w-14 rounded-2xl object-contain shadow-sm"
              />
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">Moodly AI</h3>
                <p className={`text-sm ${subtleText}`}>
                  AI-driven mental health awareness platform
                </p>
              </div>
            </a>

            <p className={`mt-5 max-w-md leading-7 ${mutedText}`}>
              Moodly AI helps users better understand emotional wellbeing through intelligent text analysis, a refined interface, and a more trustworthy digital experience.
            </p>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${headingText}`}>Quick Links</h4>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-indigo-600 ${mutedText}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${headingText}`}>Contact</h4>
            <div className={`mt-5 space-y-3 ${mutedText}`}>
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

        <div
          className={`mt-12 border-t pt-6 text-center text-sm ${
            darkMode ? "border-gray-700 text-gray-400" : "border-indigo-100 text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} Moodly AI | Developed by Team Moodly AI:
          Upinder Kaur, Yashika Taneja, Yashika Khanna
        </div>
      </footer>

      <style>{`
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes voiceWave {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.82;
          }
        }

        @keyframes voiceRing {
          0% {
            transform: scale(0.92);
            opacity: 0.75;
          }
          70% {
            transform: scale(1.28);
            opacity: 0;
          }
          100% {
            transform: scale(1.28);
            opacity: 0;
          }
        }

        @keyframes navPulse {
          0%,
          100% {
            box-shadow: 0 10px 28px rgba(79, 70, 229, 0.22);
          }
          50% {
            box-shadow: 0 16px 38px rgba(34, 211, 238, 0.28);
          }
        }
      `}</style>
    </div>
  );
}
