// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import api from "../utils/axios";

// // // function Signup() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSignup = async () => {
// // //     try {
// // //       await api.post("/auth/signup", { name, email, password });
// // //       alert("Signup successful!");
// // //       navigate("/");
// // //     } catch (error) {
// // //       console.log("FULL ERROR:", error);
// // //       console.log("SERVER RESPONSE:", error.response);
// // //       console.log("SERVER DATA:", error.response?.data);
// // //       alert(error.response?.data?.message || "Signup failed");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Signup</h2>
// // //       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
// // //       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
// // //       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
// // //       <button onClick={handleSignup}>Signup</button>
// // //     </div>
// // //   );
// // // }

// // // export default Signup;




// // // import { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import api from "../utils/axios";
// // // import bgImage from "../assets/mental-bg.jpg";

// // // function Signup() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSignup = async () => {
// // //     try {
// // //       await api.post("/auth/signup", { name, email, password });
// // //       alert("Signup successful!");
// // //       navigate("/");
// // //     } catch (error) {
// // //       alert(error.response?.data?.message || "Signup failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative min-h-screen w-full overflow-hidden">

// // //       {/* FULL SCREEN BACKGROUND IMAGE */}
// // //       <div
// // //         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
// // //         style={{ backgroundImage: `url(${bgImage})` }}
// // //       ></div>

// // //       {/* ROYAL BLUE OVERLAY */}
// // //       {/* <div className="fixed inset-0 bg-[#0f172a]/70"></div> */}

// // //       {/* CENTERED FORM */}
// // //       <div className="relative flex items-center justify-center min-h-screen px-4">
        
// // //         <div className="w-[380px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">

// // //           <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
// // //             Create Your Account ✨
// // //           </h2>

// // //           <div className="space-y-5">

// // //             <input
// // //               type="text"
// // //               placeholder="Full Name"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setName(e.target.value)}
// // //             />

// // //             <input
// // //               type="email"
// // //               placeholder="Email Address"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />

// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />

// // //             <button
// // //               onClick={handleSignup}
// // //               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
// // //             >
// // //               Signup
// // //             </button>

// // //           </div>

// // //           <p className="text-center text-sm mt-6 text-black-300">
// // //             Already have an account?{" "}
// // //             <Link to="/" className="text-blue-400 font-semibold">
// // //               Login
// // //             </Link>
// // //           </p>

// // //         </div>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default Signup;




// // // import { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import api from "../utils/axios";
// // // import bgImage from "../assets/mental-bg.jpg";

// // // function Signup() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();

// // // //   const handleSignup = async () => {
// // // //     try {
// // // //       const res = await api.post("/auth/signup", { name, email, password });

// // // // localStorage.setItem("token", res.data.token);


// // // // alert("Signup successful!");
// // // // navigate("/");
// // // //     } catch (error) {
// // // //       alert(error.response?.data?.message || "Signup failed");
// // // //     }
// // // //   };
// // // const handleSignup = async () => {
// // //   try {

// // //     const res = await api.post("/auth/signup", { name, email, password });

// // // localStorage.setItem("token", res.data.token);

// // // localStorage.setItem("currentUser", email);

// // // localStorage.setItem(`name_${email}`, name);
// // // localStorage.setItem(`email_${email}`, email);

// // // alert("Signup successful!");
// // // navigate("/dashboard");

// // //   } catch (error) {
// // //     alert(error.response?.data?.message || "Signup failed");
// // //   }
// // // };

// // //   return (
// // //     <div className="relative min-h-screen w-full overflow-hidden">

// // //       {/* FULL SCREEN BACKGROUND IMAGE */}
// // //       <div
// // //         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
// // //         style={{ backgroundImage: `url(${bgImage})` }}
// // //       ></div>

// // //       {/* CENTERED FORM */}
// // //       <div className="relative flex items-center justify-center min-h-screen px-4">

// // //         <div className="w-[380px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">

// // //           <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
// // //             Create Your Account ✨
// // //           </h2>

// // //           <div className="space-y-5">

// // //             <input
// // //               type="text"
// // //               placeholder="Full Name"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setName(e.target.value)}
// // //             />

// // //             <input
// // //               type="email"
// // //               placeholder="Email Address"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />

// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />

// // //             <button
// // //               onClick={handleSignup}
// // //               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
// // //             >
// // //               Signup
// // //             </button>

// // //           </div>

// // //           <p className="text-center text-sm mt-6 text-black">
// // //             Already have an account?{" "}
// // //             <Link to="/" className="text-blue-600 font-semibold">
// // //               Login
// // //             </Link>
// // //           </p>

// // //         </div>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default Signup;



// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import api from "../utils/axios";
// // import bgImage from "../assets/mental-bg.jpg";

// // function Signup() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// // //   const handleSignup = async () => {
// // //     try {
// // //       const res = await api.post("/auth/signup", { name, email, password });

// // // localStorage.setItem("token", res.data.token);


// // // alert("Signup successful!");
// // // navigate("/");
// // //     } catch (error) {
// // //       alert(error.response?.data?.message || "Signup failed");
// // //     }
// // //   };
// // const handleSignup = async () => {
// //   try {

// //     const res = await api.post("/auth/signup", { name, email, password });

// // // localStorage.setItem("token", res.data.token);

// // // localStorage.setItem("currentUser", email);

// // // localStorage.setItem(`name_${email}`, name);
// // // localStorage.setItem(`email_${email}`, email);


// // localStorage.setItem("token", res.data.token);

// // // store user info
// // localStorage.setItem(`name_${email}`, name);
// // localStorage.setItem(`email_${email}`, email);

// // // current user
// // sessionStorage.setItem("currentUser", email);
// // sessionStorage.setItem("currentUserName", name);

// // alert("Signup successful!");
// // navigate("/dashboard");

// //   } catch (error) {
// //     alert(error.response?.data?.message || "Signup failed");
// //   }
// // };

// //   return (
// //     <div className="relative min-h-screen w-full overflow-hidden">

// //       {/* FULL SCREEN BACKGROUND IMAGE */}
// //       <div
// //         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
// //         style={{ backgroundImage: `url(${bgImage})` }}
// //       ></div>

// //       {/* CENTERED FORM */}
// //       <div className="relative flex items-center justify-center min-h-screen px-4">

// //         <div className="w-[380px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">

// //           <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
// //             Create Your Account ✨
// //           </h2>

// //           <div className="space-y-5">

// //             <input
// //               type="text"
// //               placeholder="Full Name"
// //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// //               onChange={(e) => setName(e.target.value)}
// //             />

// //             <input
// //               type="email"
// //               placeholder="Email Address"
// //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// //               onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <input
// //               type="password"
// //               placeholder="Password"
// //               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
// //               onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <button
// //               onClick={handleSignup}
// //               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
// //             >
// //               Signup
// //             </button>

// //           </div>

// //           <p className="text-center text-sm mt-6 text-black">
// //             Already have an account?{" "}
// //             <Link to="/" className="text-blue-600 font-semibold">
// //               Login
// //             </Link>
// //           </p>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Signup;




// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../utils/axios";
// import bgImage from "../assets/mental-bg.jpg";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

// //   const handleSignup = async () => {
// //     try {
// //       const res = await api.post("/auth/signup", { name, email, password });

// // localStorage.setItem("token", res.data.token);


// // alert("Signup successful!");
// // navigate("/");
// //     } catch (error) {
// //       alert(error.response?.data?.message || "Signup failed");
// //     }
// //   };
// const handleSignup = async () => {
//   try {

//     // const res = await api.post("/auth/signup", { name, email, password });

//     const res = await api.post("/auth/signup", {
//   name,
//   email: email.trim().toLowerCase(),
//   password
// });

// // localStorage.setItem("token", res.data.token);

// // localStorage.setItem("currentUser", email);

// // localStorage.setItem(`name_${email}`, name);
// // localStorage.setItem(`email_${email}`, email);


// sessionStorage.setItem("token", res.data.token);

// // store user info
// localStorage.setItem(`name_${email}`, name);
// localStorage.setItem(`email_${email}`, email);

// // current user
// sessionStorage.setItem("currentUser", email);
// sessionStorage.setItem("currentUserName", name);

// alert("Signup successful!");
// navigate("/dashboard");

//   } catch (error) {
//     alert(error.response?.data?.message || "Signup failed");
//   }
// };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* FULL SCREEN BACKGROUND IMAGE */}
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       ></div>

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
//               className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-700 text-black focus:ring-2 focus:ring-blue-400 outline-none"
//               onChange={(e) => setName(e.target.value)}
//             />

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
//               onClick={handleSignup}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
//             >
//               Signup
//             </button>

//           </div>

//           <p className="text-center text-sm mt-6 text-black">
//             Already have an account?{" "}
//             <Link to="/" className="text-blue-600 font-semibold">
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
import { useNavigate } from "react-router-dom";
import brainImg from "../assets/brain.jpeg";
import pic from "../assets/logo pic.png";
import api from "../utils/axios";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirm,setShowConfirm] = useState(false);

  const [passwordError,setPasswordError] = useState("");
  const [error,setError] = useState("");

  const handlePasswordChange = (value) => {
    setPassword(value);

    if (!value) setPasswordError("");
    else if (value.length < 6) setPasswordError("Minimum 6 characters required");
    else if (!/[A-Z]/.test(value)) setPasswordError("At least 1 uppercase letter required");
    else if (!/[0-9]/.test(value)) setPasswordError("At least 1 number required");
    else if (!/[!@#$%^&*]/.test(value)) setPasswordError("At least 1 special character required");
    else setPasswordError("");
  };

  const handleSignup = async (e) => {
  e.preventDefault();

  if(passwordError) return setError("Fix password errors ❌");
  if(password !== confirmPassword) return setError("Passwords do not match ❌");

  try {

    // ✅ Firebase user create
    await createUserWithEmailAndPassword(auth, email, password);

    // ✅ Backend user create
    const res = await api.post("/auth/signup",{
      name,
      email: email.trim().toLowerCase(),
      password
    });

    sessionStorage.setItem("token",res.data.token);
    sessionStorage.setItem("currentUser",email);
    sessionStorage.setItem("currentUserName",name);

    navigate("/dashboard");

  } catch (error) {
    alert(error.message || "Signup failed ❌");
  }
};

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await axios.post("http://localhost:5000/api/auth/google",{
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      });

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("currentUser", res.data.user.email);
      sessionStorage.setItem("currentUserName", res.data.user.name);

      navigate("/dashboard");

    } catch(error){
      alert("Google signup failed ❌");
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

{/* MAIN */}
<div style={styles.container}>

{/* LEFT */}
<div style={styles.left}>
  <div style={styles.overlay}>
    <h1 style={styles.heading}>Start Your Mental Wellness Journey 🧠</h1>
    <p style={styles.subtext}>Join Moodly AI & track your emotions</p>
  </div>
</div>

{/* RIGHT */}
<div style={styles.right}>
<div style={styles.box}>

<h2 style={styles.title}>Create Your Account</h2>

<form onSubmit={handleSignup}>

<input type="text" placeholder="Full Name" style={styles.input}
value={name} onChange={(e)=>setName(e.target.value)} required/>

<input type="email" placeholder="Email Address" style={styles.input}
value={email} onChange={(e)=>setEmail(e.target.value)} required/>

<div style={styles.passwordBox}>
<input type={showPassword ? "text" : "password"} placeholder="Password"
style={{...styles.input, border: passwordError ? "1px solid red":"1px solid #ddd"}}
value={password} onChange={(e)=>handlePasswordChange(e.target.value)} required/>
<span onClick={()=>setShowPassword(!showPassword)} style={styles.eye}>
{showPassword ? <FaEyeSlash/> : <FaEye/>}
</span>
</div>

{passwordError && <p style={styles.error}>{passwordError}</p>}

<div style={styles.passwordBox}>
<input type={showConfirm ? "text":"password"} placeholder="Confirm Password"
style={{...styles.input, border: error.includes("match") ? "1px solid red":"1px solid #ddd"}}
value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
<span onClick={()=>setShowConfirm(!showConfirm)} style={styles.eye}>
{showConfirm ? <FaEyeSlash/> : <FaEye/>}
</span>
</div>

{error && <p style={styles.error}>{error}</p>}

<button type="submit" style={styles.button}>Signup</button>

</form>

<div style={styles.divider}>OR</div>

<button style={styles.googleBtn} onClick={handleGoogleLogin}>
<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="g"/>
Continue with Google
</button>

<p style={styles.text}>
Already have an account?{" "}
<span style={styles.link} onClick={()=>navigate("/login")}>Login</span>
</p>

</div>
</div>

</div>
</div>
  );
}

export default Signup;

const styles = {

header:{
  width:"100%",
  height:"80px",
  display:"flex",
  alignItems:"center",
  gap:"3px",
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
  fontSize:"24px",
  fontWeight:"800",
  color:"#4f46e5"
},

headerSub:{
  fontSize:"13px",
  color:"#6b7280"
},

container:{
  display:"flex",
  height:"calc(100vh - 80px)",
  marginTop:"80px",
  fontFamily:"Poppins, sans-serif"
},

left:{
  flex:1,
  backgroundImage:`url(${brainImg})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  display:"flex",
  alignItems:"center",
  paddingLeft:"80px"
},

overlay:{ color:"#fff", maxWidth:"500px" },

heading:{ fontSize:"48px", fontWeight:"800" },

subtext:{ fontSize:"18px" },

right:{
  flex:1,
  background:"linear-gradient(to bottom right,#f5f7fa,#e4ecf7)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  overflow:"hidden"
},

box:{
  width:"420px",
  background:"#fff",
  padding:"40px",
  borderRadius:"20px",
  boxShadow:"0 15px 40px rgba(0,0,0,0.15)",
  textAlign:"center"
},

title:{ marginBottom:"25px", color:"#4f46e5" },

input:{
  width:"100%",
  padding:"14px",
  margin:"10px 0",
  borderRadius:"10px",
  border:"1px solid #ddd",
  outline:"none"
},

passwordBox:{ position:"relative" },

eye:{
  position:"absolute",
  right:"15px",
  top:"50%",
  transform:"translateY(-50%)",
  cursor:"pointer",
  color:"#666",
  fontSize:"18px"
},

button:{
  width:"100%",
  padding:"14px",
  marginTop:"15px",
  border:"none",
  borderRadius:"10px",
  background:"#4f46e5",
  color:"#fff",
  cursor:"pointer"
},

divider:{ margin:"20px 0", color:"#888" },

googleBtn:{
  width:"100%",
  padding:"12px",
  borderRadius:"10px",
  border:"none",
  background:"#f1f3f6",
  display:"flex",
  justifyContent:"center",
  gap:"10px",
  cursor:"pointer"
},

error:{
  color:"red",
  fontSize:"13px",
  textAlign:"left",
  marginTop:"4px"
},

text:{ marginTop:"15px" },

link:{ color:"#4f46e5", cursor:"pointer" }

};