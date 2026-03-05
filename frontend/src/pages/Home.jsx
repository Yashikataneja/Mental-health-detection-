// import { useNavigate } from "react-router-dom";
// import { FaBrain, FaHeart, FaShieldAlt } from "react-icons/fa"; // icons
// import mentalHealthImg from "../assets/mental healthhhh.png"; // Add your mental health illustration here
// import aiImg from "../assets/ai_illustration.png"; // optional AI illustration

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col font-sans">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md sticky top-0 z-50">
//         <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
//           MindScope
//         </h1>
//         <div className="space-x-4">
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-white text-purple-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-800 transition"
//           >
//             Signup
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//             <span className="text-purple-700 animate-pulse">AI-Powered</span> Mental Health Detection
//           </h2>
//           <p className="text-gray-600 text-lg md:text-xl">
//             MindScope uses advanced text analysis to detect stress, anxiety, and depression. Track your mental wellbeing and get personalized guidance.
//           </p>
//           <div className="flex space-x-4">
//             <button
//               onClick={() => navigate("/signup")}
//               className="bg-purple-700 text-white px-6 py-3 rounded shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
//             >
//               Get Started
//             </button>
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:-translate-y-1"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-0">
//           <img
//             src={mentalHealthImg}
//             alt="Mental Health Analysis"
//             className="w-full rounded-lg shadow-xl animate-fadeIn"
//           />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="px-8 py-16 bg-white">
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
//           Why Choose MindScope
//         </h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
//             <FaBrain className="text-purple-700 mx-auto mb-4 text-5xl" />
//             <h4 className="text-xl font-semibold mb-2">AI-Based Detection</h4>
//             <p className="text-gray-600">
//               Detect mental health issues from your text using advanced AI models.
//             </p>
//           </div>
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
//             <FaHeart className="text-purple-700 mx-auto mb-4 text-5xl" />
//             <h4 className="text-xl font-semibold mb-2">Personalized Guidance</h4>
//             <p className="text-gray-600">
//               Receive actionable exercises and insights tailored to your mental health needs.
//             </p>
//           </div>
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
//             <FaShieldAlt className="text-purple-700 mx-auto mb-4 text-5xl" />
//             <h4 className="text-xl font-semibold mb-2">Safe & Confidential</h4>
//             <p className="text-gray-600">
//               Your data is private and secure. MindScope ensures complete confidentiality.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* AI + Mental Health Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-purple-50 to-blue-50">
//         <div className="md:w-1/2">
//           <img
//             src={aiImg}
//             alt="AI Illustration"
//             className="w-full rounded-lg shadow-xl"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 space-y-4">
//           <h3 className="text-3xl font-bold text-gray-800">Text Analysis Powered by AI</h3>
//           <p className="text-gray-600 text-lg">
//             Our platform analyzes your writing to understand your emotional state, helping you take early steps towards better mental health.
//           </p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-purple-700 text-white px-6 py-3 rounded shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
//           >
//             Start Your Journey
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-purple-700 text-white py-6 text-center">
//         <p>&copy; {new Date().getFullYear()} MindScope. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;







import { Link } from "react-router-dom";
import { FaBrain, FaRobot, FaUserFriends, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">
          MindDetect AI
        </h1>

        <div className="space-x-4">
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
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10">

        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Detect Mental Health Using
            <span className="text-indigo-600"> AI Text Analysis</span>
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Our platform uses advanced AI to analyze written text and
            identify possible mental health signals such as anxiety,
            depression, and stress. Helping people understand their
            emotions early and take better care of their mental health.
          </p>

          <div className="space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            alt="mental health"
            className="rounded-xl shadow-lg"
          />
        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="py-20 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">
          How Our AI Helps
        </h2>

        <div className="grid md:grid-cols-4 gap-8 px-10">

          <div className="p-6 bg-gray-100 rounded-xl text-center">
            <FaBrain className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Emotion Detection</h3>
            <p className="text-gray-600">
              Identify emotions and mental health signals from written text.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl text-center">
            <FaRobot className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Advanced machine learning models analyze mental patterns.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl text-center">
            <FaChartLine className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Track emotional patterns and improvement over time.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl text-center">
            <FaUserFriends className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Support System</h3>
            <p className="text-gray-600">
              Connect insights with mental health awareness resources.
            </p>
          </div>

        </div>
      </section>

      {/* AI EXPLANATION SECTION */}

      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">

        <div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            AI Powered Mental Health Detection
          </h2>

          <p className="text-gray-600 mb-4">
            Our system uses Natural Language Processing (NLP) and machine
            learning algorithms to analyze the emotional tone of text.
          </p>

          <p className="text-gray-600 mb-4">
            By examining word patterns, sentiment scores, and emotional
            indicators, the platform detects potential mental health
            challenges and provides early awareness.
          </p>

          <p className="text-gray-600">
            This approach enables proactive mental health support and
            awareness for individuals of all age groups.
          </p>
        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="bg-indigo-50 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          What Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              "This platform helped me understand my emotions better through
              AI insights."
            </p>
            <h4 className="mt-4 font-semibold">Student User</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              "Amazing concept! Mental health awareness through technology."
            </p>
            <h4 className="mt-4 font-semibold">Research Scholar</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              "Simple, clean and very helpful platform for emotional
              analysis."
            </p>
            <h4 className="mt-4 font-semibold">Developer</h4>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="text-center py-20 px-10">

        <h2 className="text-4xl font-bold mb-6">
          Start Understanding Your Mental Health Today
        </h2>

        <p className="text-gray-600 mb-8">
          Join our platform and explore AI-powered mental health insights.
        </p>

        <Link
          to="/signup"
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Create Free Account
        </Link>

      </section>

      {/* FOOTER */}

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2026 MindDetect AI | Mental Health Detection Platform</p>
      </footer>

    </div>
  );
}