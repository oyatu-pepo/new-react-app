import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setGrade, setUser } from '../modules/user';

const Header = () => {
  const dispatch = useDispatch();
  const { name, grade } = useSelector((state: RootState) => state.user);

  const login = () => {
    dispatch(setUser('ななし'));
    dispatch(setGrade('bronze'));
  }

  return (
    <div style={{backgroundColor: '#eee', height: '50px' }}>
      {name === '' && (
        <button onClick={login}>ログインする</button>
      )}
      {name !== '' && (
        <span>ようこそ！{name}さん　あなたはのグレードは{grade}です</span>
      )}
    </div>
  );
};

export default Header;