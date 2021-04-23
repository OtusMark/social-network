import React, {MouseEventHandler} from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: boolean
    logout: MouseEventHandler<HTMLButtonElement>
}

export const Header = (props: PropsType) => {
    return (
        <header>
            <div>
                { props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
