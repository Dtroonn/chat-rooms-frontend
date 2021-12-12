import axios from "axios";

const $axios = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:7000/api/",
});

$axios.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
});

export { $axios };
