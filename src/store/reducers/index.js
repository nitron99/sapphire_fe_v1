import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducers from "./AuthReducer";

const persistConfig = {
    key : "root",
    storage, 
    whitelist : ["Assessment"],
};

const rootReducer = combineReducers({
    auth : AuthReducers,
})

export default persistReducer(persistConfig, rootReducer);