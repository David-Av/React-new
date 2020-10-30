import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profile_reducer";
import Myposts from "./Myposts";

// const MypostsContainer = (props) => {
 
//   return (
//     <StoreContext.Consumer>
//       { store=>{
//          let state = store.getState(); 
//          let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         let onPostChange = (text) => {
//           let action = onPostChangeActionCreator(text);
//           store.dispatch(action);
//         };
//     return  <Myposts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//       />
//     }
// }
//     </StoreContext.Consumer>
//   );
// };
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
