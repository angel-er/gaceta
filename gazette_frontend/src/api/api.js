// api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://tu-api.com", // Cambia esto por la URL de tu API
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
