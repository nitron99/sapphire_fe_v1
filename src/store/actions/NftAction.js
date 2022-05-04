import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

export const NftUpload = ( formData ) => async (dispatch) => {
    try{
        const { data } = await api.nftupload(formData);
        if (data) {
            dispatch({ type: actionTypes.NFTUPLOAD, payload: data});
        }
        
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