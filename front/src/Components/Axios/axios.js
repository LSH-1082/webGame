import axios from "axios";

const baseURL = "http://localhost:8080"

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

const formInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

export const loginUser = userData => formInstance.post("/login", userData);
export const registerUser = userData => instance.post("/user/register", userData);