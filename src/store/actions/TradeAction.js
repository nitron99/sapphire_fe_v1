import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

export const GetTradeData = ( id ) => async (dispatch) => {
    try{
        const { data } = await api.getTradeByID(id);
        if (data) {
            dispatch({ type: actionTypes.GET_TRADE_DATA, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}

export const CreateBid = (formData) => async (dispatch) => {
    try{
        const { data } = await api.createBid(formData);
        if (data) {
            dispatch({ type: actionTypes.CREATE_BID, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}

export const GetBidData = (id) => async (dispatch) => {
    try{
        const { data } = await api.getBidData(id);
        if (data) {
            dispatch({ type: actionTypes.GET_BID_DATA, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}