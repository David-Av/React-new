import { rerenderEntireTree } from "../render";

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
  },
};
window.state = state;
 export let addPost = ()=>{
  let newPost = {
    id:5,
    message:state.profilePage.newPostText,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}
export let updateNewPostText = (newText)=>{
  state.profilePage.newPostText = newText
  rerenderEntireTree(state);
}
export default state;