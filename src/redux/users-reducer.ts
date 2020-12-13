const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

type photosType = {
    small: string;
    large: string;
}

type usersType = {
    name: number;
    id: string;
    uniqueUrlName: string;
    photos: photosType;
    status: string;
    followed: boolean;
}

export type usersStateType = {
    users: Array<usersType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
};

let initialState: usersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2,
};

const usersReducer = (state: usersStateType = initialState, action: any): usersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAc = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export default usersReducer;