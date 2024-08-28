import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
});

export const loginUser = userData => instance.post("/user/login", userData);
export const registerUser = userData => instance.post("/user/register", userData);