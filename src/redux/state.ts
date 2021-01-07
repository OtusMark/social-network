export type PostType = {
    id: number
    post: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostDataType = Array<PostType>
export type DialogsDataType = Array<DialogsType>
export type MessagesDataType = Array<MessagesType>

export type profileStateType = {
    posts: PostDataType
    newPostText: string
}

export type messagesStateType = {
    dialogs: DialogsDataType
    dialogsMessages: MessagesDataType
}

export type stateType = {
    profilePage: profileStateType
    messagesPage: messagesStateType
}

export type addPostType = () => void
export type updateNewPostTextType = (newText: string) => void
export type rerenderEntireTreeType = (state: stateType) => void
export type subscribeType = (observer: rerenderEntireTreeType) => void

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: rerenderEntireTreeType;
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
    subscribe: subscribeType
}

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'My first post', likes: 1},
                {id: 2, post: 'My second post', likes: 2},
                {id: 3, post: 'My third post', likes: 3},
                {id: 4, post: 'My fourth post', likes: 4},
                {id: 5, post: 'My fifth post', likes: 5}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Mark'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Issac'},
                {id: 4, name: 'Robert'},
                {id: 5, name: 'Arthur'}
            ],
            dialogsMessages: [
                {id: 1, message: 'My name is Mark'},
                {id: 2, message: 'My name is Ivan'},
                {id: 3, message: 'My name is Issac'},
                {id: 4, message: 'My name is Robert'},
                {id: 5, message: 'My name is Arthur'}
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber(state: stateType) {},
    addPost () {
        let newPost: PostType = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}