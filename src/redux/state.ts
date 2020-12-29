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
}

export type messagesStateType = {
    dialogs: DialogsDataType
    dialogsMessages: MessagesDataType
}

export type stateType = {
    profile: profileStateType
    messages: messagesStateType
}

export let state: stateType = {
    profile: {
        posts: [
            {id: 1, post: 'My first post', likes: 1},
            {id: 2, post: 'My second post', likes: 2},
            {id: 3, post: 'My third post', likes: 3},
            {id: 4, post: 'My fourth post', likes: 4},
            {id: 5, post: 'My fifth post', likes: 5}
        ],
    },
    messages: {
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
}