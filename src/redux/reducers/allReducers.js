import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer.js";
import weatherReducer from "./weatherReducer.js";

const allReducers = combineReducers({
    weatherArr: weatherReducer,
    loaderState: loaderReducer,
})

export default allReducers;