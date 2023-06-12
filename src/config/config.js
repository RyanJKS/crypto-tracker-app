import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://crypto-tracker-backend.vercel.app",
});
