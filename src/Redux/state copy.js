const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPADTE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_DIALOG_TEXT = "UPDATE-DIALOG-TEXT"
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "HI", likesCount: 11 },
        { id: 2, message: "first Post", likesCount: 12 },
        { id: 3, message: "Second Post", likesCount: 55 },
      ],
      newPostText: "newsocial.com",
    },
    DialogsPage: {
      messagesData: [
        { id: 1, message: "sdsdsdsd" },
        { id: 2, message: "sdsdsdsd" },
        { id: 3, message: "sdsdsdsd" },
        { id: 4, message: "sdsdsdsd" },
        { id: 5, message: "sdsdsdsd" },
      ],
      dialogsData: [
        { id: 1, name: "David" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Valera" },
      ],
      dialogMessage: "",
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.DialogsPage.dialogMessage,
    };
    this._state.DialogsPage.messagesData.push(newMessage);
    this._state.DialogsPage.dialogMessage = "";
    this._callSubscriber(this._state);
  },
  dialogMessageText(message) {
    this._state.DialogsPage.dialogMessage = message;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === ADD_MESSAGE){
      let newMessage = {
        id: 6,
        message: this._state.DialogsPage.dialogMessage,
      };
      this._state.DialogsPage.messagesData.push(newMessage);
      this._state.DialogsPage.dialogMessage = "";
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_DIALOG_TEXT ){
      this._state.DialogsPage.dialogMessage = action.message;
      this._callSubscriber(this._state)
    }
  },
};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const addMessageActionCreator = ()=>({type:ADD_MESSAGE})
export const dialogMessageTextActionCreator = (message)=>({
  type:UPDATE_DIALOG_TEXT, message:message
})
export default store;
window.store = store;

// let rerenderEntireTree  = () =>{

// }
/*
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "HI", likesCount: 11 },
      { id: 2, message: "first Post", likesCount: 12 },
      { id: 3, message: "Second Post", likesCount: 55 },
    ],
    newPostText: 'newsocial.com'
  },
  DialogsPage: {
    messagesData: [
      { id: 1, message: "sdsdsdsd" },
      { id: 2, message: "sdsdsdsd" },
      { id: 3, message: "sdsdsdsd" },
      { id: 4, message: "sdsdsdsd" },
      { id: 5, message: "sdsdsdsd" },
    ],
    dialogsData: [
      { id: 1, name: "David" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Valera" },
    ],
    dialogMessage: ''
  },
};
// window.state = state;
 export const addPost = ()=>{
  let newPost = {
    id:5,
    message:state.profilePage.newPostText,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}
export const updateNewPostText = (newText)=>{
  state.profilePage.newPostText = newText
  rerenderEntireTree();
}
export const addMessage = ()=>{
  let newMessage = {
    id:6,
    message: state.DialogsPage.dialogMessage
  }
  state.DialogsPage.messagesData.push(newMessage)
  state.DialogsPage.dialogMessage = '';
  rerenderEntireTree()
}
export const dialogMessageText = (message)=>{
  state.DialogsPage.dialogMessage = message
  rerenderEntireTree()
}
export const subscribe = (observer)=>{
  rerenderEntireTree = observer
}
// export default state;
*/
/*  //  [
    //     {
    //       id: 1,
    //       followed: true,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Dmitry",
    //       location: { city: "Minsk", country: "Belarus" },
    //     },
    //     {
    //       id: 2,
    //       followed: false,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Oleg",
    //       location: { city: "Yerevan", country: "Armenia" },
    //     },
    //     {
    //       id: 3,
    //       followed: true,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Vartiter",
    //       location: { city: "Kirovakan", country: "Armenia" },
    //     },
    //   ]*/