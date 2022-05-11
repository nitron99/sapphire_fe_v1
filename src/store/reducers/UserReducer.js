import * as actionTypes from "../actionTypes";

const initialState = {
    user : {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETUSER: 
            return {
                ...state,
                user: action?.payload
            }
        default:
          return state;
      }
}

export default UserReducer;