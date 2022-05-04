import axios from "axios";

const API = axios.create({
    baseURL : "http://167.71.234.121:8000/api/v1"
})

API.interceptors.request.use((req) => {
    if (sessionStorage.getItem("user")){
        req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem("user")).token}`;
    }
    return req;
});

export const login = (formData) => API.post(`/user/login` , formData);
export const signup = (formData) => API.post(`/user/signup` , formData);
export const nftupload = (formData) => API.post(`collection/createCollection`, formData);
export const getNFTbyID = (id) => API.get(`collection/${id}`); 
