import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

// export const NftUpload = ( formData ) => async (dispatch) => {
//     try{
//         const { data } = await api.nftupload(formData);
//         if (data) {
//             dispatch({ type: actionTypes.NFTUPLOAD, payload: data});
//         }
        
//     }catch (error) {
//         dispatch({ type: actionTypes.ERROR, payload: error});
//         console.log(error)
//     }
// }

export const NftUploader = ( formData, navigate ) => async (dispatch) => {
    try{
        const { data } = await api.nftUpload(formData);
        if (data) {
            dispatch({ type: actionTypes.NFTUPLOAD, payload: data});
        }
        navigate(`/collection/${data?.data?._id}`)
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}

export const GetNFT = (id) => async (dispatch) => {
    try{
        const { data } = await api.getNFTbyID(id);
        if (data) {
            dispatch({ type: actionTypes.GETNFT, payload: data});
        }
        console.log(data)
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
} 

export const GetMyNFT = () => async (dispatch) => {
    try{
        const { data } = await api.getMyNFT();
        if (data) {
            dispatch({ type: actionTypes.GETMYNFT, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
} 


export const GetAllNFT = () => async (dispatch) => {
    try{
        const { data } = await api.getAllNFT();
        if (data) {
            dispatch({ type: actionTypes.GETALLNFT, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
} 

export const GetFavouriteNFT = () => async (dispatch) => {
    try{
        const { data } = await api.getFavouriteNFT();
        if (data) {
            dispatch({ type: actionTypes.GET_FAVOURITE_NFT, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
} 

export const CreateFavouriteNFT = (formData) => async (dispatch) => {
    try{
        const { data } = await api.createFavourite(formData);
        if (data) {
            dispatch({ type: actionTypes.CREATE_FAVOURITE_NFT, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
} 


