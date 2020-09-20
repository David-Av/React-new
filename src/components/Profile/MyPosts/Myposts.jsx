import React from 'react'
import s from './Myposts.module.css'
import Post from './Post/Post'

const Myposts = () =>{
   return ( 
   <div>
    My posts
    <div className = {s.item}>
        <textarea name="" id="" cols="10" rows="1"></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
    </div>
    <Post message = "HI" likes = '10'/>
    <Post message = "First Post" likes = '25'/>
    </div>
   )
}
export default Myposts;