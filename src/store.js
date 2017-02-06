import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Our main reducer that contains all the other ones
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk, // Thunk support
    createLogger() // Logging
  )
);

export default store;
