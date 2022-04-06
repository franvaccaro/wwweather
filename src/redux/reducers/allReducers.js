import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

const allReducers = combineReducers({
  weatherArr: weatherReducer,
  loaderState: loaderReducer,
  locationData: locationReducer,
});

export default allReducers;
