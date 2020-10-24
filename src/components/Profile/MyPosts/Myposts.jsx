import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../Redux/state";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsDataM = props.posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = onPostChangeActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div>
      My posts
      <div className={s.item}>
        <input
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}/>
        <button onClick={addPost}>Add Post</button>
        <button>Remove Post</button>
      </div>
      {postsDataM}
    </div>
  );
};
export default Myposts;
