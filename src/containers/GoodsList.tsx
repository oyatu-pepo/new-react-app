import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addGoods } from '../modules/cart';
import { cola, chocoCake, milk } from '../mock/goods';

const Goods = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>GoodsList Page</h1>
      <hr />
      <div>
        <button onClick={() => dispatch(addGoods(milk))}>牛乳（150円）をカートに入れる</button>
      </div>
      <div>
        <button onClick={() => dispatch(addGoods(cola))}>コーラ（150円）をカートに入れる</button>
      </div>
      <div>
        <button onClick={() => dispatch(addGoods(chocoCake))}>チョコレートケーキ（350円）をカートに入れる</button>
      </div>
      <hr />
      <div>
        <Link to="/cart">カートへ進む</Link>
      </div>
    </div>
  );
};

export default Goods;
