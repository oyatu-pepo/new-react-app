import { Action, Goods } from '../types';

// Action
const ADD_GOODS = 'ADD_GOODS';
const REMOVE_GOODS = 'REMOVE_GOODS';
const RESET_CART = 'RESET_CART';

// Action Creator
/** カートに商品追加 */
export const addGoods = (goods: Goods): Action => ({
  type: ADD_GOODS,
  payload: goods,
});

/** カートから商品を取り除く */
export const removeGoods = (goods: Goods): Action => ({
  type: REMOVE_GOODS,
  payload: goods,
});

/** カート初期化 */
export const resetCart = (): Action => ({
  type: RESET_CART,
});

// Reducer
export interface CartState {
  /** 小計 */
  subtotal: number;
  /** カート内の商品たち */
  items: Array<Goods>;
}

const initialState: CartState = {
  subtotal: 0,
  items: [],
};

export default function cart(state: CartState = initialState, action: Action): CartState {
  switch (action.type) {
    case ADD_GOODS:
      console.log(action.payload);
      return {
        items: state.items.concat(action.payload),
        subtotal: state.subtotal + action.payload.price,
      }
    case REMOVE_GOODS:
      // 配列から取り除く要素の位置を特定
      const pos = state.items.map((item) => {
        return item.id;
      }).indexOf(action.payload.id);
      // 取り除く
      const newItems = state.items.slice().splice(pos, 1);
      return {
        items: newItems,
        subtotal: state.subtotal - action.payload.goods.price,
      }
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};