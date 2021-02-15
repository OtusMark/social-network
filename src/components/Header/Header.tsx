import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div>
                { props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
