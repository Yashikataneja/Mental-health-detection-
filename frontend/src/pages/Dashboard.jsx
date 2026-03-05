import { useState } from "react";
import api from "../utils/axios";

function Dashboard() {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await api.post("/journal/analyze", { text });
      alert("Emotion: " + res.data.analysis.emotion);
    } catch (error) {
      alert("Error submitting journal");
    }
  };

  return (
    <div>
      <h2>Journal Entry</h2>
      <textarea
        placeholder="How are you feeling?"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
}

export default Dashboard;