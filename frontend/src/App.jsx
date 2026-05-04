

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AiAnalysis from "./pages/AiAnalysis";
import ProgressTracking from "./pages/ProgressTracking";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import Setting from "./pages/Setting";
import SafeSpace from "./pages/Safespace";
import DetailedAnalysis from "./pages/DetailedAnalysis";
import MentalHealthLibrary from "./pages/MentalHealthLibrary";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminLibrary from "./pages/AdminLibrary";
import AdminSafeSpace from "./pages/AdminSafeSpace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-analysis" element={<AiAnalysis />} />
        <Route path="/progress" element={<ProgressTracking />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/safe-space" element={<SafeSpace />} />
        <Route path="/detailed-analysis" element={<DetailedAnalysis/>}/>
        <Route path="/library" element={<MentalHealthLibrary/>}/>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/library" element={<AdminLibrary />} />
        <Route path="/admin/safespace" element={<AdminSafeSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
