import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

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
