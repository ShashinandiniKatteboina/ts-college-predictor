import axios from "axios";

const api = axios.create({
  baseURL: "https://ts-college-predictor.onrender.com"
});

export default api;