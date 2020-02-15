import React from 'react';
import { useDispatch } from 'react-redux';
import { addGoods } from '../modules/cart';
import { cola, chocoCake, milk } from '../mock/goods';

const Goods = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>GoodsList Page</h1>
      <div>
        <button onClick={() => dispatch(addGoods(milk))}>牛乳を買う</button>
      </div>
      <div>
        <button onClick={() => dispatch(addGoods(cola))}>コーラを買う</button>
      </div>
      <div>
        <button onClick={() => dispatch(addGoods(chocoCake))}>チョコレートケーキを買う</button>
      </div>
    </div>
  );
};

export default Goods;
