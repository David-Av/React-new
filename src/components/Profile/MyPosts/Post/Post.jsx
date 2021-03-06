import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.image}
        src="https://www.vokrug.tv/pic/product/6/f/e/2/6fe2523ab4de68e3981b29c9f9f00f17.jpeg"
        alt=""
      />
      {props.message}
      <div>
        <button>like</button>
        {props.likes}
      </div>
    </div>
  );
};

export default Post;
