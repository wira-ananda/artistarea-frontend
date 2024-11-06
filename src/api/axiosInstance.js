import axios from "axios";

 const axiosInstance = axios.create({
  baseURL: "https://artistarea-backend.vercel.app",
});

export default axiosInstance