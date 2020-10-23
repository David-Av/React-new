import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsDataM = props.posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div>
      My posts
      <div className={s.item}>
        <input
        onChange = {onPostChange}
        value = {props.newPostText}
        ref={newPostElement}
        id=""
        // autoFocus = {true}
        cols="10"
        rows="5"
        />  
        <button onClick={addPost}>Add Post</button>
        <button>Remove Post</button>
      </div>
      {postsDataM}
    </div>
  );
};
export default Myposts;
