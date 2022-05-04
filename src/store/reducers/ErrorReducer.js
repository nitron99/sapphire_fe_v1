import * as actionTypes from "../actionTypes";

const initialState = {
    error : true
};

const ErrorReducer = (state = initialState ,action) => {
    switch (action.type) {
        case actionTypes.ERROR: 
            // eslint-disable-next-line no-lone-blocks
            {console.log("Error - " , initialState.error)}
            return {
                ...state,
                error: action?.payload
            }
        default:
          return state;
      }
}

export default ErrorReducer;