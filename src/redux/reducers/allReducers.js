import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';
import searchResultsReducer from './searchResultsReducer';
import dialogReducer from './dialogReducer';
import errorReducer from './errorReducer';

const allReducers = combineReducers({
  weatherArr: weatherReducer,
  loaderState: loaderReducer,
  locationData: locationReducer,
  searchResults: searchResultsReducer,
  dialogState: dialogReducer,
  errorState: errorReducer,
});

export default allReducers;
