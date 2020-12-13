import axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/avatar-empty.png'

// ShitCode - Redefine any//
interface UsersProps {
    users: any;
    setUsers: any;
    follow: any;
    unfollow: any;
}


class Users extends React.Component<UsersProps> {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers (response.data.items);
        });
    }

    render() {
        return <div>
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
    }
}

export default Users;