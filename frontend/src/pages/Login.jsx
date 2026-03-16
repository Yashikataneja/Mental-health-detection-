// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");

//     } catch (error) {
//       console.log("FULL ERROR:", error);
//       console.log("SERVER RESPONSE:", error.response);
//       console.log("SERVER DATA:", error.response?.data);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;






// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../utils/axios";
// import bgImage from "../assets/mental-bg.jpg";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
      
//       {/* Background Image FULL SCREEN */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       ></div>

//       {/* Dark Overlay FULL SCREEN */}
//       {/* <div className="fixed inset-0 bg-[#0f172a]/70"></div> */}

//       {/* Centered Form */}
//       <div className="relative flex items-center justify-center min-h-screen">
//         <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md text-white border border-white/20">
          
//           <h2 className="text-3xl font-bold text-center mb-6 text-blue-300">
//             Welcome Back 👋
//           </h2>

//           <div className="space-y-5">
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
//               onClick={handleLogin}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//             >
//               Login
//             </button>
//           </div>

//           <p className="text-center text-sm mt-6 text-gray-300">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-blue-400 font-semibold">
//               Signup
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import { useState } from "react";

// import { useNavigate, Link, useLocation } from "react-router-dom";
// import api from "../utils/axios";
// import bgImage from "../assets/mental-bg.jpg";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//  const location = useLocation();
// const redirectTo = location.state?.redirectTo || "/dashboard";

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate(redirectTo);
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* Background Image */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       ></div>

//       {/* Centered Form */}
//       <div className="relative flex items-center justify-center min-h-screen px-4">

//         <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md text-white border border-white/20">

//           <h2 className="text-3xl font-bold text-center mb-6 text-blue-300">
//             Welcome Back 👋
//           </h2>

//           <div className="space-y-5">

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               onClick={handleLogin}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//             >
//               Login
//             </button>

//           </div>

//           <p className="text-center text-sm mt-6 text-black">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-blue-600 font-semibold">
//               Signup
//             </Link>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;




// import { useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import api from "../utils/axios";
// import bgImage from "../assets/mental-bg.jpg";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectTo = location.state?.from || "/";

//   // const handleLogin = async () => {
//   //   try {
//   //     const res = await api.post("/auth/login", { email, password });

//   //     localStorage.setItem("token", res.data.token);
      
      


//   //     navigate(redirectTo);

//   //   } catch (error) {
//   //     alert(error.response?.data?.message || "Login failed");
//   //   }
//   // };

// //   const handleLogin = async () => {
// //   try {

// //     const res = await api.post("/auth/login", { email, password });

// // localStorage.setItem("token", res.data.token);

// // localStorage.setItem("currentUser", email);

// // localStorage.setItem(`email_${email}`, email);

// // navigate("/dashboard");

// //   } catch (error) {
// //     alert(error.response?.data?.message || "Login failed");
// //   }
// // };


// const handleLogin = async () => {
//   try {

//     const res = await api.post("/auth/login", { email, password });

//     sessionStorage.setItem("token", res.data.token);

//     sessionStorage.setItem("currentUser", email);

//     sessionStorage.setItem(`email_${email}`, email);

//     navigate("/dashboard");

//   } catch (error) {
//     alert(error.response?.data?.message || "Login failed");
//   }
// };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* Background Image */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       ></div>

//       {/* Centered Form */}
//       <div className="relative flex items-center justify-center min-h-screen px-4">

//         <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md text-white border border-white/20">

//           <h2 className="text-3xl font-bold text-center mb-6 text-blue-300">
//             Welcome Back 👋
//           </h2>

//           <div className="space-y-5">

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               onClick={handleLogin}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//             >
//               Login
//             </button>

//           </div>

//           <p className="text-center text-sm mt-6 text-black">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-blue-600 font-semibold">
//               Signup
//             </Link>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import api from "../utils/axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  const handleLogin = async () => {
    try {

      const res = await api.post("/auth/login", { email, password });

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("currentUser", email);
      sessionStorage.setItem(`email_${email}`, email);

      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (

    <div className="min-h-screen w-full flex items-center justify-center px-4 
    bg-gradient-to-b from-blue-100 to-blue-200">

      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border">

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Welcome Back 👋
        </h2>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Login
          </button>

        </div>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;