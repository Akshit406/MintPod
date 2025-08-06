import { BASE_URL } from "./apiPaths";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json"
    }
});


export default axiosInstance;
