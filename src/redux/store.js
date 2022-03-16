import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers.js";

const initialState = {};
const middleware = [thunk];
let enhancers = [applyMiddleware(...middleware), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose]

const store = createStore(
    allReducers,
    initialState,
    compose(...enhancers)
);

export default store;