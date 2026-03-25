// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import AiAnalysis from "./pages/AiAnalysis";
// import ProgressTracking from "./pages/ProgressTracking";
// import Support from "./pages/Support";
// import Profile from "./pages/Profile";
// import Chatbot from "./pages/Chatbot";
// import Setting from "./pages/Setting";
// import SafeSpace from "./pages/Safespace";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/ai-analysis" element={<AiAnalysis />} />
//         <Route path="/progress" element={<ProgressTracking />} />
//         <Route path="/support" element={<Support />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/chatbot" element={<Chatbot/>}/>
//         <Route path="/settings" element={<Setting/>}/>
//         //<Route path="/safe-space" element={<Safespace />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
