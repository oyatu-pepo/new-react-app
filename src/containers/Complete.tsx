import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../modules/cart';

const Complete = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Complete Page</h1>
      <hr />
      <p>お買い上げありがとうございました〜</p>
      <hr />
      <div>
        <Link to="/list" onClick={() => dispatch(resetCart())}>最初から</Link>
      </div>
    </div>
  );
};

export default Complete;
