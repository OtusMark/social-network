import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
    )
}