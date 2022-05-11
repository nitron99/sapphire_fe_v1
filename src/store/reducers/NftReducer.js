import * as actionTypes from "../actionTypes";

const initialState = {
    nftresponse: {},
    nftData : {},
    myNftData : {},
    homeNftData : {},
    favouriteData : null,
};

const NftReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NFTUPLOAD:
            return {
                ...state,
                nftresponse: action?.payload
            }
        case actionTypes.GETNFT: 
            return {
                ...state,
                nftData: action?.payload
            }
        case actionTypes.GETMYNFT: 
            return {
                ...state,
                myNftData: action?.payload
            }
        case actionTypes.GETALLNFT: 
            return {
                ...state,
                homeNftData: action?.payload
            }
        case actionTypes.GET_FAVOURITE_NFT: 
            return {
                ...state,
                favouriteData: action?.payload
            }
        default:
          return state;
      }
}

export default NftReducer;