import { Action, Grade } from '../types';

// Action
const SET_USER = 'SET_USER';
const SET_GRADE = 'SET_GRADE';

// Action Creator
/** ユーザー名設定 */
export const setUser = (name: string): Action => ({
  type: SET_USER,
  payload: name,
});

/** 会員グレードを設定 */
export const removeGoods = (grade: Grade): Action => ({
  type: SET_GRADE,
  payload: grade,
});

// Reducer
export interface UserState {
  /** ユーザー名 */
  name: string;
  /** 会員グレード */
  grade?: Grade;
}

const initialState: UserState = {
  name: '',
  grade: undefined,
};

export default function user(state: UserState = initialState, action: Action): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload,
      }
    case SET_GRADE:
      return {
        ...state,
        grade: action.payload,
      }
    default:
      return state;
  }
};