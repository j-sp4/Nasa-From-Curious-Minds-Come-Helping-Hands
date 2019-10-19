import { combineReducers } from 'redux';
import viewportReducer from './viewportReducer'
import mapStyleReducer from './mapStyleReducer'

const reducer = combineReducers({
    viewport: viewportReducer,
    mapStyle: mapStyleReducer
  });
  
export default reducer;
