// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await api.post("/auth/signup", { name, email, password });
//       alert("Signup successful!");
//       navigate("/");
//     } catch (error) {
//       console.log("FULL ERROR:", error);
//       console.log("SERVER RESPONSE:", error.response);
//       console.log("SERVER DATA:", error.response?.data);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// }

// export default Signup;




// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../utils/axios";
// import bgImage from "../assets/mental-bg.jpg";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await api.post("/auth/signup", { name, email, password });
//       alert("Signup successful!");
//       navigate("/");
//     } catch (error) {
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* FULL SCREEN BACKGROUND IMAGE */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       ></div>

//       {/* ROYAL BLUE OVERLAY */}
//       {/* <div className="fixed inset-0 bg-[#0f172a]/70"></div> */}

//       {/* CENTERED FORM */}
//       <div className="relative flex items-center justify-center min-h-screen px-4">
        
//         <div className="w-[380px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">

//           <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
//             Create Your Account ✨
//           </h2>

//           <div className="space-y-5">

//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setName(e.target.value)}
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               onClick={handleSignup}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//             >
//               Signup
//             </button>

//           </div>

//           <p className="text-center text-sm mt-6 text-black-300">
//             Already have an account?{" "}
//             <Link to="/" className="text-blue-400 font-semibold">
//               Login
//             </Link>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Signup;




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/axios";
import bgImage from "../assets/mental-bg.jpg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await api.post("/auth/signup", { name, email, password });
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* FULL SCREEN BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* CENTERED FORM */}
      <div className="relative flex items-center justify-center min-h-screen px-4">

        <div className="w-[380px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">

          <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
            Create Your Account ✨
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleSignup}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              Signup
            </button>

          </div>

          <p className="text-center text-sm mt-6 text-black">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;