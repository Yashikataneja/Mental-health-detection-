import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

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
      console.log("FULL ERROR:", error);
      console.log("SERVER RESPONSE:", error.response);
      console.log("SERVER DATA:", error.response?.data);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;