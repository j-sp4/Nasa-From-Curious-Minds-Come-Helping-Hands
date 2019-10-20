import { combineReducers } from 'redux';
import mapReducer from './mapReducer'
import mapPointerReducer from './mapPointerReducer'

const reducer = combineReducers({
    map: mapReducer,
    pointer: mapPointerReducer
  });
  
export default reducer;
  