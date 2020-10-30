import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../Redux/profile_reducer";
import Myposts from "./Myposts";


const MypostsContainer = (props) => {
  let state = props.store.getState();
  console.log(state);
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (<Myposts updateNewPostText = {onPostChange} addPost = {addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
};
export default MypostsContainer;
