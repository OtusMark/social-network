import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.scss'
import axios from "axios";
import userAvatarDefault from '../../assets/images/avatar-default.png'

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
}

export class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages =[];
        for(let i = 1; i <= pagesCount; i ++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span onClick={ () => {this.props.setCurrentPage(p)}}>{p}</span>)}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatarDefault}
                             className={styles.usersPhoto}
                             alt='User image'/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>)}
            </div>
        )
    }
}