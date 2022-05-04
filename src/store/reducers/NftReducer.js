import * as actionTypes from "../actionTypes";

const initialState = {
    nftData : {}
};

const NftReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETNFT: 
            return {
                ...state,
                nftData: action.payload
            }
        default:
          return state;
      }
}

export default NftReducer;