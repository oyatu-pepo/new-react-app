import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { resetCart } from '../modules/cart';
import { Link } from 'react-router-dom';

import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const { items, subtotal } = useSelector((state: RootState) => state.cart);
  
  return (
    <div>
      <h1>Cart Page</h1>
      <hr />
      {items.map((item, index) => (
        <div key={index} className="goods">
          <div>{item.name}</div>
          <div>{item.price}円</div>
        </div>
      ))}
      <p>合計：{subtotal}円</p>
      <br />
      <button onClick={() => dispatch(resetCart())}>カートを空にする</button>
      <hr />
      <p><Link to="/list">商品を選び直す</Link></p>
      <p><Link to="/done">購入する</Link></p>
    </div>
  );
};

export default Cart;
