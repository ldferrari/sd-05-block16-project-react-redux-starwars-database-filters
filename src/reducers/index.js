import { combineReducers } from 'redux';
import reducer from './planets';
import filters from './filters';

const rootReducer = combineReducers({
  reducer,
  filters,
});

export default rootReducer;
