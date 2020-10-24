import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

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
   this._state.profilePage = profileReducer(this._state.profilePage,action);
   this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
   this._callSubscriber(this._state);
  },
};


export default store;
window.store = store;

