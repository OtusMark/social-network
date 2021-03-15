import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div>
                { props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
