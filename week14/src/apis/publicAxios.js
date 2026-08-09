import axios from 'axios';

export const BASE_URL="https://lion-fe.onrender.com";

export const publicAxios = axios.create({
    baseURL: BASE_URL
});