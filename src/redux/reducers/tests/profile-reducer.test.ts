import {addPost, deletePost, profileReducer, profileStateType} from "../profile-reducer";

let startState: profileStateType

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, post: 'My first post', likes: 1},
            {id: 2, post: 'My second post', likes: 2},
            {id: 3, post: 'My third post', likes: 3},
            {id: 4, post: 'My fourth post', likes: 4},
            {id: 5, post: 'My fifth post', likes: 5}
        ],
        profile: null,
        status: ''
    }
})

test(`Length of posts should be incremented`, () => {
    let action = addPost('New post')
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(6)
})

test(`message of new post should be correct`, () => {
    let action = addPost('New post')
    let newState = profileReducer(startState, action)

    expect(newState.posts[5].post).toBe('New post')
})

test(`Length of posts should be decremented after deletion of post`, () => {
    let action = deletePost(1)
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(4)
})

test(`Correct post should be deleted`, () => {
    let action = deletePost(1)
    let newState = profileReducer(startState, action)

    expect(newState.posts[0].post).toBe('My second post')
})

test(`Length of post shouldn't change if we try to delete post with wrong id`, () => {
    let action = deletePost(100)
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(5)
})

