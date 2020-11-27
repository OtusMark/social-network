import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.link}><a href="/profile">Profile</a></li>
        <li className={s.link}><a href="/dialogs">Dialogs</a></li>
        <li className={s.link}><a href="/news">News</a></li>
        <li className={s.link}><a href="/music">Music</a></li>
        <li className={s.link}><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;