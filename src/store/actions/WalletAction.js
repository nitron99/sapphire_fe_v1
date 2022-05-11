import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

export const AddMoneytoWallet = ( formData ) => async (dispatch) => {
    try{
        const { data } = await api.addMoneytoWallet(formData);
        if (data) {
            dispatch({ type: actionTypes.ADD_MONEY_TO_WALLET, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error.code)
    }
}

export const GetCards = ( ) => async (dispatch) => {
    try{
        const { data } = await api.getCards();
        if (data) {
            dispatch({ type: actionTypes.GET_CARDS, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}

export const GetInvoices = ( ) => async (dispatch) => {
    try{
        const { data } = await api.getInvoices();
        if (data) {
            dispatch({ type: actionTypes.GET_INVOICES, payload: data});
        }
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        console.log(error)
    }
}