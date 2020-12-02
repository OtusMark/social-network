let store = {
    _state: {
        profilePage: {
            myPosts: [
                { id: '1', post: 'It\'s time to kick ass and chew bubble gum. And I\'m all out of gum.', likes: "137" },
                { id: '2', post: 'You\'re an inspiration for birth-control.', likes: "51" },
                { id: '3', post: 'I\'ll rip your head off and shit down your neck!', likes: "12" },
                { id: '4', post: 'Your face. Your ass. What\'s the difference?', likes: "55" },
            ],
            newPostText: 'new post text from state',
        },

        chatPage: {
            chatData: [
                { id: '1', name: 'Dmitry', messages: ['Hello my name is Dmitry I am who I am.', 'hi'] },
                { id: '2', name: 'Ivan', messages: ['I am Ivan. Nice to meet you.'] },
                { id: '3', name: 'Sveta', messages: ['Hi my name is Sveta.', 'Salut'] },
                { id: '4', name: 'Igor', messages: ['hello my name is Igor, I\'ll be back.'] },
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: '5',
            post: this._state.profilePage.newPostText,
            likes: '0',
        }
        this._state.profilePage.myPosts.push(newPost);
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
