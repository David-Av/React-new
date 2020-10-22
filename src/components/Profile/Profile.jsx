import React from 'react'
import Myposts from './MyPosts/Myposts'
import s from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) =>{
    return (
        <div className = {s.content}>
        <ProfileInfo/>
        <Myposts posts = {props.posts}/>
      </div>
    )
}
export default Profile;