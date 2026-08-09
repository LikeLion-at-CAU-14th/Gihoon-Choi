import axios from "axios";
import { BASE_URL } from "./publicAxios";
import { getAccessToken, clearTokens } from "../auth/tokenStorage";

export const privateAxios = axios.create({
    baseURL: BASE_URL,
});

privateAxios.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

privateAxios.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        if (error.response?.status === 401) {
            clearTokens();
            window.location.href = "/";
        }

        return Promise.reject(error);
    },
);