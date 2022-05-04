import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducers from "./AuthReducer";
import NftReducers from "./NftReducer";

const persistConfig = {
    key : "root",
    storage, 
    whitelist : ["Assessment"],
};

const rootReducer = combineReducers({
    auth : AuthReducers,
    nft : NftReducers
})

export default persistReducer(persistConfig, rootReducer);