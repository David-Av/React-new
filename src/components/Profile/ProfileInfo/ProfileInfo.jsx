import React from "react";
import Preloader from "../../Preloader/Preloader";
//! import s from "./ProfileInfo.module.css";
import ProfileStatusWihtHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg'
const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      
      <div>

          <img src={props.profile.photos.large || userPhoto} alt="" />
        </div>
        <div>
        <ProfileStatusWihtHooks status={props.status} updateStatus = {props.updateStatus}/>
      </div>
  <div>
    <ul>
  <li>About Me: {props.profile.aboutMe}</li>
  <li>Name: {props.profile.fullName}</li>
  <li>Working: {props.profile.lookingForAJob ? `работаю`:`не работаю`}</li>
      <li>sdsd</li>
      <li>sdsdsd</li>
    </ul>
  </div>
    </div>
  );
};

export default ProfileInfo;
