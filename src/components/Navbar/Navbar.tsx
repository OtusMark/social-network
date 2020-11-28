import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.link}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
        <li className={s.link}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
        <li className={s.link}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
        <li className={s.link}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
        <li className={s.link}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;