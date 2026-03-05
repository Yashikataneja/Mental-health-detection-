import { useNavigate } from "react-router-dom";
import { FaBrain, FaHeart, FaShieldAlt } from "react-icons/fa"; // icons
import mentalHealthImg from "../assets/mental healthhhh.png"; // Add your mental health illustration here
import aiImg from "../assets/ai_illustration.png"; // optional AI illustration

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          MindScope
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-700 text-white font-semibold px-4 py-2 rounded hover:bg-purple-800 transition"
          >
            Signup
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-purple-700 animate-pulse">AI-Powered</span> Mental Health Detection
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            MindScope uses advanced text analysis to detect stress, anxiety, and depression. Track your mental wellbeing and get personalized guidance.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-purple-700 text-white px-6 py-3 rounded shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={mentalHealthImg}
            alt="Mental Health Analysis"
            className="w-full rounded-lg shadow-xl animate-fadeIn"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Why Choose MindScope
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
            <FaBrain className="text-purple-700 mx-auto mb-4 text-5xl" />
            <h4 className="text-xl font-semibold mb-2">AI-Based Detection</h4>
            <p className="text-gray-600">
              Detect mental health issues from your text using advanced AI models.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
            <FaHeart className="text-purple-700 mx-auto mb-4 text-5xl" />
            <h4 className="text-xl font-semibold mb-2">Personalized Guidance</h4>
            <p className="text-gray-600">
              Receive actionable exercises and insights tailored to your mental health needs.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center hover:scale-105">
            <FaShieldAlt className="text-purple-700 mx-auto mb-4 text-5xl" />
            <h4 className="text-xl font-semibold mb-2">Safe & Confidential</h4>
            <p className="text-gray-600">
              Your data is private and secure. MindScope ensures complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* AI + Mental Health Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="md:w-1/2">
          <img
            src={aiImg}
            alt="AI Illustration"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">Text Analysis Powered by AI</h3>
          <p className="text-gray-600 text-lg">
            Our platform analyzes your writing to understand your emotional state, helping you take early steps towards better mental health.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-700 text-white px-6 py-3 rounded shadow-lg hover:bg-purple-800 transition transform hover:-translate-y-1"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} MindScope. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;