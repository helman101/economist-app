import { combineReducers } from 'redux';
import userReducer from './userReducer';
import stateReducer from './stateReducer';
import columnReducer from './columnReducer';

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  state: stateReducer,
});

export default rootReducer;
