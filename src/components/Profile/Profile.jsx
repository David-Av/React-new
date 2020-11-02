import React from "react";
import MypostsContainer from "./MyPosts/Myposts_container";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MypostsContainer  />
    </div>
  );
};
export default Profile;
