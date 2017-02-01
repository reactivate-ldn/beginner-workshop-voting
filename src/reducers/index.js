import { combineReducers } from 'redux';
import pollReducer from './poll';

const rootReducer = combineReducers({
  polls: pollReducer
});

export default rootReducer;
