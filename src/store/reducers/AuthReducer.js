import * as actionTypes from "../actionTypes";

const initialState = {
    user : true
};

const AuthReducer = (state = initialState ,action) => {
    switch (action.type) {
        case actionTypes.LOGIN: 
            sessionStorage.setItem("user" , JSON.stringify({ ...action?.payload}));
            return {
                ...state,
                user: action.payload
            }
        default:
          return state;
      }
}

export default AuthReducer;