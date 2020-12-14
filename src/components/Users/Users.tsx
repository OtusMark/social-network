import axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/avatar-empty.png'

// ShitCode - Redefine any//
interface UsersProps {
    users: any;
    pageSize: any;
    totalUsersCount: any;
    currentPage: number;
    setUsers: any;
    follow: any;
    unfollow: any;
    setCurrentPage: any;
}


class Users extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    // 55 - 51:00
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const setStyle = (page) => {
            if (this.props.currentPage === page) {
                return styles.selectedPage
            } else {
                return '';
            }
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={setStyle(p)} onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt='Avatar'/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => (this.props.unfollow(u.id))}>Unfollow</button>
                                : <button onClick={() => (this.props.follow(u.id))}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.id}</div>
                            <div>{u.uniqueUrlName}</div>
                        </span>
                        <span>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;