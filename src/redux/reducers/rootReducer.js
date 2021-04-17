import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import loaderReducer from './loaderReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  changedate: dataReducer,
  changeLoad: loaderReducer,
  changeInput: inputReducer,
});

export default rootReducer;
