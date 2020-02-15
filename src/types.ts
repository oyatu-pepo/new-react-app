/** 商品の型 */
export interface Goods {
  /** 商品ID */
  id: number;
  /** 商品名 */
  name: string;
  /** 値段 */
  price: number;
}

/** Actionの型 */
export interface Action {
  type: string;
  payload?: any;
}

/** 会員グレード */
export type Grade = 'bronze' | 'silver' | 'gold' | 'platinum';