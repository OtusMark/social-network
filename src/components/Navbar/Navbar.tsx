import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </nav>
    )
}