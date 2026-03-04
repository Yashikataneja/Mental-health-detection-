import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Node backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Journal Analysis API
export const analyzeJournal = async (text) => {
  try {
    const response = await API.post("/journal/analyze", {
      text: text,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};