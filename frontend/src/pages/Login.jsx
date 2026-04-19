



// // import { useState } from "react";
// // import { useNavigate, Link, useLocation } from "react-router-dom";
// // import api from "../utils/axios";

// // function Login() {

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const redirectTo = location.state?.from || "/";

// //   const handleLogin = async () => {
// //     try {

// //       const res = await api.post("/auth/login", { email, password });

// //       sessionStorage.setItem("token", res.data.token);
// //       sessionStorage.setItem("currentUser", email);
// //       sessionStorage.setItem(`email_${email}`, email);

// //       navigate("/dashboard");

// //     } catch (error) {
// //       alert(error.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (

// //     <div className="min-h-screen w-full flex items-center justify-center px-4 
// //     bg-gradient-to-b from-blue-100 to-blue-200">

// //       <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border">

// //         <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
// //           Welcome Back 👋
// //         </h2>

// //         <div className="space-y-5">

// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
// //             onChange={(e) => setEmail(e.target.value)}
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
// //             onChange={(e) => setPassword(e.target.value)}
// //           />

// //           <button
// //             onClick={handleLogin}
// //             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
// //           >
// //             Login
// //           </button>

// //         </div>

// //         <p className="text-center text-sm mt-6">
// //           Don’t have an account?{" "}
// //           <Link to="/signup" className="text-blue-600 font-semibold">
// //             Signup
// //           </Link>
// //         </p>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Login;





// import { useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import api from "../utils/axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectTo = location.state?.from || "/dashboard";

//   const handleLogin = async () => {
//     try {
//       const userEmail = email.trim().toLowerCase();

//       const res = await api.post("/auth/login", {
//         email: userEmail,
//         password,
//       });

//       // ✅ Save token
//       sessionStorage.setItem("token", res.data.token);

//       // ✅ Save current user email
//       sessionStorage.setItem("currentUser", userEmail);

//       // ✅ Get name from localStorage (saved at signup)
//       const storedName = localStorage.getItem(`name_${userEmail}`);

//       if (storedName) {
//         sessionStorage.setItem("currentUserName", storedName);
//       } else {
//         // fallback if name not found
//         sessionStorage.setItem("currentUserName", userEmail);
//       }

//       // ✅ Redirect
//       navigate(redirectTo);

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
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
//             value={password}
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
import { useNavigate } from "react-router-dom";
import brainImg from "../assets/brain.jpeg";
import pic from "../assets/logo pic.png";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUserName");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email.toLowerCase(),
          password
        }
      );

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("currentUser", res.data.user.email);
      sessionStorage.setItem("currentUserName", res.data.user.name);

      if (res.data.user.photo) {
        localStorage.setItem(
          `profilePic_${res.data.user.email}`,
          res.data.user.photo
        );
      }

      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUserName");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await axios.post(
        "http://localhost:5000/api/auth/google",
        {
          name: user.displayName,
          email: user.email.toLowerCase(),
          photo: user.photoURL,
          uid: user.uid
        }
      );

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("currentUser", res.data.user.email);
      sessionStorage.setItem("currentUserName", res.data.user.name);

      if (res.data.user.photo) {
        localStorage.setItem(
          `profilePic_${res.data.user.email}`,
          res.data.user.photo
        );
      }

      navigate("/dashboard");

    } catch (error) {
      alert("Google login failed ❌");
    }
  };

  const handleForgotPassword = async () => {
  if (!email) return alert("Enter your email first");

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Reset link sent to your email ✅");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div>

      {/* HEADER */}
      <div style={styles.header} onClick={() => navigate("/")}>
        <img src={pic} alt="logo" style={styles.headerLogo} />
        <div>
          <h2 style={styles.headerTitle}>Moodly AI</h2>
          <p style={styles.headerSub}>AI-Powered Emotional Intelligence</p>
        </div>
      </div>

      <div style={styles.container}>
        
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.overlay}>
            <h1 style={styles.heading}>Take Care of Your Mind 🧠</h1>
            <p style={styles.subtext}>Track & improve your mental health</p>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.box}>
            <h2 style={styles.title}>Login to Your Account</h2>

            <form onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Email Address"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* PASSWORD WITH EYE */}
              <div style={styles.passwordBox}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  style={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eye}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* FORGOT PASSWORD */}
              <div style={styles.forgotBox}>
                <span
                  style={styles.forgot}
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </span>
              </div>

              <button type="submit" style={styles.button}>
                Login
              </button>

            </form>

            <div style={styles.divider}>OR</div>

            <button style={styles.googleBtn} onClick={handleGoogleLogin}>
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="google"
              />
              Continue with Google
            </button>

            <p style={styles.text}>
              Don't have an account?{" "}
              <span style={styles.link} onClick={() => navigate("/signup")}>
                Signup
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

const styles = {

  header:{
    width:"100%",
    height:"80px",
    display:"flex",
    alignItems:"center",
    gap:"6px",
    padding:"0 40px",
    background:"#fff",
    position:"fixed",
    top:0,
    left:0,
    zIndex:1000,
    boxShadow:"0 2px 10px rgba(0,0,0,0.05)",
    cursor:"pointer"
  },

  headerLogo:{
    height:"55px",
    width:"75px",
    borderRadius:"12px"
  },

  headerTitle:{
    fontSize:"26px",
    fontWeight:"800",
    color:"#4f46e5"
  },

  headerSub:{
    fontSize:"13px",
    color:"#6b7280"
  },

  container: {
    display: "flex",
    height: "calc(100vh - 80px)",
    marginTop:"80px",
    fontFamily: "Poppins, sans-serif",
  },

  left: {
    flex: 1,
    backgroundImage: `url(${brainImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    paddingLeft: "80px",
  },

  overlay: {
    color: "#fff",
    maxWidth: "500px",
    marginTop: "80px",
  },

  heading: {
    fontSize: "54px",
    fontWeight: "800",
    textShadow: "2px 2px 12px rgba(0,0,0,0.9)",
  },

  subtext: {
    fontSize: "18px",
    textShadow: "1px 1px 8px rgba(0,0,0,0.7)",
  },

  right: {
    flex: 1,
    background: "linear-gradient(to bottom right, #f5f7fa, #e4ecf7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "420px",
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  title: {
    marginBottom: "25px",
    color: "#2f5fb3",
  },

  input: {
    width: "100%",
    padding: "14px",
    margin:"10px 0",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
  },

  passwordBox:{
    position:"relative"
  },

  eye:{
    position:"absolute",
    right:"15px",
    top:"50%",
    transform:"translateY(-50%)",
    cursor:"pointer",
    color:"#666"
  },

  forgotBox:{
    display:"flex",
    justifyContent:"flex-end",
    marginTop:"5px"
  },

  forgot:{
    fontSize:"13px",
    color:"#4f46e5",
    cursor:"pointer"
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    border: "none",
    borderRadius: "10px",
    background: "#3b6edc",
    color: "#fff",
    cursor: "pointer",
  },

  divider: {
    margin: "25px 0",
    color: "#888",
  },

  googleBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#f1f3f6",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
  },

  text: {
    marginTop: "20px",
  },

  link: {
    color: "#3b6edc",
    cursor: "pointer",
    fontWeight:"500"
  },
};