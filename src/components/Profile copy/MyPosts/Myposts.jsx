import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsDataM = props.posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} key ={post.id}/>
  ));
  // let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      My posts
      <div className={s.item}>
        <input onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add Post</button>
        <button>Remove Post</button>
      </div>
      {postsDataM}
    </div>
  );
};
export default Myposts;
