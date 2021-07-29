import { combineReducers } from "redux";

import userReducer  from "./userReducer.js";

const rootReducer = combineReducers({
    useState:userReducer,
});

export default rootReducer;