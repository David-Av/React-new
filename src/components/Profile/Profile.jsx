import React from 'react'
import Myposts from './MyPosts/Myposts'
import s from './profile.module.css'
const Profile = () =>{
    return (
        <div className = {s.content}>
        <div>
        <img className = {s.image} src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg"/>
        </div>
        <div>
          ava+ description
          </div>
        <Myposts/>
      </div>
    )
}
export default Profile;