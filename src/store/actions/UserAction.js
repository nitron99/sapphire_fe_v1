import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

export const GetUser = (setLoading) => async (dispatch) => {
    setLoading(true)
    try{
        const { data } = await api.getUser();
        if (data) {
            dispatch({ type: actionTypes.GETUSER, payload: data});
        }
        setLoading(false)
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
        setLoading(false)
    }
}


