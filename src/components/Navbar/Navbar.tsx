import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to="/profilePage" activeClassName={s.activeLink}>Profile</NavLink>
            <NavLink to="/dialogsPage" activeClassName={s.activeLink}>Messages</NavLink>
            <NavLink to="/usersPage" activeClassName={s.activeLink}>Users</NavLink>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </nav>
    )
}