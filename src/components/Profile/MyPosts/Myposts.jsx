import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsDataM = props.posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} key ={post.id}/>
  ));


  let AddPost = (value) =>{
    props.addPost(value.newPostText)
  }
  return (
    <div>
      My posts
      <MyPostFormReduxForm onSubmit={AddPost}/>
      {postsDataM}
    </div>
  );
};
const MyPostForm = (props)=>{
  return <form onSubmit={props.handleSubmit}>
  <div className={s.item}>
  <Field  component="input" name="newPostText"/>
  <button>Add Post</button>
</div>
</form>
}
const MyPostFormReduxForm = reduxForm({
  form:"post"
})(MyPostForm)
export default Myposts;
