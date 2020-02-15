import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootState from './modules';

const store = createStore(
  rootState,
  applyMiddleware(logger)
);

export default store;