import { combineReducers } from 'redux';
import pollReducer from './poll';

const rootReducer = combineReducers({
  poll: pollReducer
});

export default rootReducer;
