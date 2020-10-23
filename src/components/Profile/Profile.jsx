import React from 'react'
import Myposts from './MyPosts/Myposts'
import s from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) =>{
    return (
        <div className = {s.content}>
        <ProfileInfo/>
        <Myposts posts = {props.profilePage.posts}
                 newPostText = {props.profilePage.newPostText}
                addPost = {props.addPost}
                updateNewPostText = {props.updateNewPostText}
        />
      </div>
    )
}
export default Profile;