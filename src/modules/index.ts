import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';

import cart from './cart';
import user from './user'; 

// Store生成
const createRootReducer = (history: History<History.PoorMansUnknown>) => {
  const rootState = combineReducers({
    cart,
    user,
    router: connectRouter(history),
  });
  return rootState;
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
/** Store全体の型定義 */

export default createRootReducer;