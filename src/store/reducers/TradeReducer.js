import * as actionTypes from "../actionTypes";

const initialState = {
    tradeData : {},
    bidData: {},
    nftBidData: {}
};

const TradeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRADE_DATA: 
            return {
                ...state,
                tradeData: action?.payload
            }
        case actionTypes.CREATE_BID: 
            return {
                ...state,
                bidData: action?.payload
            }
        case actionTypes.GET_BID_DATA: 
            return {
                ...state,
                nftBidData: action?.payload
            }
        default:
          return state;
      }
}

export default TradeReducer;