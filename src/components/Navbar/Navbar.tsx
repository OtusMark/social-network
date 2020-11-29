import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.link}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
        <li className={s.link}><NavLink to="/Chats" activeClassName={s.active}>Chats</NavLink></li>
        <li className={s.link}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
        <li className={s.link}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
        <li className={s.link}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

{/* 
    !!!NavLink adds class "active" to active link. If you use css modules
    you might have a problem, because css modules adds postfix to the class active
    and it looks. You can add activeClassName to change the class name to the one
    in the module.css!!!
    <NavLink to "/profile" activeClassName={s.activeLink}>Profile</NavLink>
    -------------------------------------------------
*/}