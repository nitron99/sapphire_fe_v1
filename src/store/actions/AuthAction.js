import * as actionTypes from "../actionTypes";
import * as api from "../../api/index";

export const Login = (formData, navigate) => async (dispatch) => {
    try{
        const { data } = await api.login(formData);
        if (data) {
            dispatch({ type: actionTypes.LOGIN, payload: data});
        }
        navigate("/dashboard");
    }catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error});
    }
}

export const Logout = (navigate) => async (dispatch) => {
    try{
        dispatch({ type: actionTypes.LOGOUT });
        navigate("/");
        sessionStorage.clear();
    }catch ( error ){
        console.log(error);
    }
}
