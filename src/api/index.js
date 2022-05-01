import axios from "axios";

const API = axios.create({
    baseURL : "http://167.71.234.121:3000/api"
})

API.interceptors.request.use((req) => {
    if (sessionStorage.getItem("user"))
    {
        req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("customer")).token}`;
    }
    return req;
});

export const login = (formData) => API.post(`v1/user/login` , formData);