import React, {MouseEventHandler} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

type PropsType = {
    isAuth: boolean
    login: boolean
    logout: MouseEventHandler<HTMLButtonElement>
}

export const Header = (props: PropsType) => {
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
