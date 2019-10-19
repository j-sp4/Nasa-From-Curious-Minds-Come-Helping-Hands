import { combineReducers } from 'redux';
import mapReducer from './mapReducer'

const reducer = combineReducers({
    map: mapReducer
  });
  
export default reducer;
  