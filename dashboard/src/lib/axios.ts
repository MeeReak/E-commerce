import axios from "axios";
import Cookies from "js-cookie";
import { handleUnauthorized } from "./auth";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.request.use((config) => {
    const token = Cookies.get("auth_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            handleUnauthorized();
        }
        return Promise.reject(error);
    }
);

export default api;
