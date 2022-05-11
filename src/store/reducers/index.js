import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducers from "./AuthReducer";
import NftReducers from "./NftReducer";
import UserReducers from "./UserReducer";
import TradeReducers from "./TradeReducer";

const persistConfig = {
    key : "root",
    storage, 
    whitelist : ["Assessment"],
};

const rootReducer = combineReducers({
    auth : AuthReducers,
    nft : NftReducers,
    user : UserReducers,
    trade : TradeReducers,
})

export default persistReducer(persistConfig, rootReducer);