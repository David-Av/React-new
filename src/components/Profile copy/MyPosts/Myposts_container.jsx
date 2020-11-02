import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profile_reducer";
import Myposts from "./Myposts";


let mapStateToProps = (state)=>{
  return{posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText}
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addPost:()=>{dispatch(addPostActionCreator())},
    updateNewPostText:(text)=>{dispatch(onPostChangeActionCreator(text))}
  }
}
const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)
export default MypostsContainer;
