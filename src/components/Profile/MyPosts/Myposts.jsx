import React from 'react'
import s from './Myposts.module.css'
import Post from './Post/Post'

const Myposts = (props) =>{
    
    let postsDataM = props.posts.map(
        post=><Post message = {post.message} likes = {post.likesCount}/>
    )
   return ( 
   <div>
    My posts
    <div className = {s.item}>
        <textarea name="" id="" cols="10" rows="1"></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
    </div>
    {postsDataM}
    </div>
   )
}
export default Myposts;