



// import { useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import api from "../utils/axios";

// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectTo = location.state?.from || "/";

//   const handleLogin = async () => {
//     try {

//       const res = await api.post("/auth/login", { email, password });

//       sessionStorage.setItem("token", res.data.token);
//       sessionStorage.setItem("currentUser", email);
//       sessionStorage.setItem(`email_${email}`, email);

//       navigate("/dashboard");

//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (

//     <div className="min-h-screen w-full flex items-center justify-center px-4 
//     bg-gradient-to-b from-blue-100 to-blue-200">

//       <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border">

//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
//           Welcome Back 👋
//         </h2>

//         <div className="space-y-5">

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//           >
//             Login
//           </button>

//         </div>

//         <p className="text-center text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-600 font-semibold">
//             Signup
//           </Link>
//         </p>

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

  const redirectTo = location.state?.from || "/dashboard";

  const handleLogin = async () => {
    try {
      const userEmail = email.trim().toLowerCase();

      const res = await api.post("/auth/login", {
        email: userEmail,
        password,
      });

      // ✅ Save token
      sessionStorage.setItem("token", res.data.token);

      // ✅ Save current user email
      sessionStorage.setItem("currentUser", userEmail);

      // ✅ Get name from localStorage (saved at signup)
      const storedName = localStorage.getItem(`name_${userEmail}`);

      if (storedName) {
        sessionStorage.setItem("currentUserName", storedName);
      } else {
        // fallback if name not found
        sessionStorage.setItem("currentUserName", userEmail);
      }

      // ✅ Redirect
      navigate(redirectTo);

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
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