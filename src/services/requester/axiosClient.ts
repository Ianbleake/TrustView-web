import axios from "axios";


const envApiUrl = import.meta.env.VITE_ENV_SCOPE === "PROD" ? import.meta.env.VITE_API_URL : import.meta.env.VITE_DEV_API_URL;

export const axiosClient = axios.create({
  baseURL: envApiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
