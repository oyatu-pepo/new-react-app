import { combineReducers } from 'redux';

import cart from './cart';
import user from './user'; 

// Store生成
const rootState = combineReducers({
  cart,
  user,
});

/** Store全体の型定義 */
export type RootState = ReturnType<typeof rootState>;

export default rootState;