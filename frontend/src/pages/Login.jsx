import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("SERVER RESPONSE:", error.response);
      console.log("SERVER DATA:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;