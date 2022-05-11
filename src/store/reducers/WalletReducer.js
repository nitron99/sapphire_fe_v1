import * as actionTypes from "../actionTypes";

const initialState = {
  walletData: {},
  cardData: {},
  invoiceData: null
};

const WalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MONEY_TO_WALLET:
            return {
                ...state,
                walletData: action?.payload
            }
        case actionTypes.GET_CARDS: 
            return {
                ...state,
                cardData: action?.payload
            }
        case actionTypes.GET_INVOICES: 
            return {
                ...state,
                invoiceData: action?.payload
            }
        default:
          return state;
      }
}

export default WalletReducer;