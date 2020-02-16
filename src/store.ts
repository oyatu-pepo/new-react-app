import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history'

import createRootReducer from './modules';

// historyオブジェクト生成
export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  applyMiddleware(logger)
);

export default store;