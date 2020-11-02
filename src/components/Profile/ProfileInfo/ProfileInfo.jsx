import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <img
        className={s.image}
        src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg"
      />
      <div></div>
      <div>
          <img src={props.profile.photos.large} alt=""/>
        </div>
  <div>
    <ul>
  <li>About Me: {props.profile.aboutMe}</li>
  <li>Name: {props.profile.fullName}</li>
  <li>Working: {props.profile.lookingForAJob ? `ashxat@m em`:`chem ashxat@M`}</li>
      <li>sdsd</li>
      <li>sdsdsd</li>
    </ul>
  </div>
    </div>
  );
};

export default ProfileInfo;
