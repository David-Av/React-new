import React from 'react'
import Myposts from './MyPosts/Myposts'
import s from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () =>{
    return (
        <div className = {s.content}>
        <ProfileInfo/>
        <Myposts/>
      </div>
    )
}
export default Profile;