import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers ([
            {id: 1, photoUrl: 'https://avt-18.foto.mail.ru/mail/shilo1991/_avatar180', followed: true, fullName: "Alex", status: "I am busy", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: 'https://avt-18.foto.mail.ru/mail/shilo1991/_avatar180', followed: false, fullName: "Boris", status: "FREEDOM!!!", location: {city: "Moscow", country: "Russia"}},
            {id: 3, photoUrl: 'https://avt-18.foto.mail.ru/mail/shilo1991/_avatar180', followed: true, fullName: "Clark", status: "I like candy", location: {city: "Jerusalem", country: "Israel"}},
        ])
    }
    debugger
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.avatar} src={u.photoUrl} alt="Avatar"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                                : <button onClick={() => (props.follow(u.id))}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;