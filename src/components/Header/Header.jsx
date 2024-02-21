import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css'

import React from 'react';

const Header = () => {
  const {user,onClose} = useTelegram()

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {user}
      </span>
    </div>
  );
};

export default Header;