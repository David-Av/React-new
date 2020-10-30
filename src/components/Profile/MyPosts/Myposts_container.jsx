import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profile_reducer";
import StoreContext from "../../../Store_Context";
import Myposts from "./Myposts";

const MypostsContainer = (props) => {
 
  return (
    <StoreContext.Consumer>
      { store=>{
         let state = store.getState(); 
         let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          let action = onPostChangeActionCreator(text);
          store.dispatch(action);
        };
    return  <Myposts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
      />
    }
}
    </StoreContext.Consumer>
  );
};
export default MypostsContainer;
