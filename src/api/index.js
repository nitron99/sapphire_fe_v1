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
// export const nftupload = (formData) => API.post(`/collection/createCollection`, formData);
export const nftUpload = (formData) => API.post(`/collection/createCollection`, formData);
export const getNFTbyID = (id) => API.get(`/collection/${id}`); 
export const getUser = () => API.get(`/user/me`);
export const getUserbyID = (id) => API.get()
export const getMyNFT = () => API.get(`/collection/myCollection`);

//demo
export const getAllNFT = () => API.get(`/collection`);

// trading APIs
export const getTradeByID = (id) => API.get(`/trade/artTrade/${id}`);
export const createTrade = (formData) => API.post(`/trade/createTrade`, formData);

//favourites
export const getFavouriteNFT = () => API.get(`/favourites/myFavourites`);
export const createFavourite = (formData) => API.post(`/favourites/createFavourites`, formData);

//bidding
export const createBid = (formData) => API.post(`/auction/createBid`, formData)
export const getBidData = (id) => API.get(`/auction/ArtBid/${id}`)

//payment
export const addMoneytoWallet = (formData) => API.post(`/purchase/addMoneyToWallet`, formData)
export const getCards = () => API.get(`/purchase/cards`)
export const getInvoices = () => API.get(`/purchase/invoices`)