import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://www.onlygfx.com/wp-content/uploads/2018/01/grunge-skull-4-790x1024.png" alt="logo" />
    </header>
  );
}

export default Header;
