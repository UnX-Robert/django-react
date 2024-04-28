import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://3b2ebc83-ea05-446c-8b72-31ae8436d87c-dev.e1-us-cdp-2.choreoapis.dev/djangoreact/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
