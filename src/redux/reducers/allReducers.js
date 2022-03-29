import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer.js";
import locationReducer from "./locationReducer.js";
import weatherReducer from "./weatherReducer.js";

const allReducers = combineReducers({
    weatherArr: weatherReducer,
    loaderState: loaderReducer,
    locationData: locationReducer,
})

export default allReducers;