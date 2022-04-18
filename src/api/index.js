import axios from "axios";

const API = axios.create({
    baseURL : "http://137.184.81.173:3000/"
})

API.interceptors.request.use((req) => {
    if (sessionStorage.getItem("user"))
    {
        req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("customer")).token}`;
    }
    return req;
});

export const login = (formData) => API.post();