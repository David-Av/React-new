import React from "react";
import Myposts from "./MyPosts/Myposts";
import MypostsContainer from "./MyPosts/Myposts_container";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props);
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MypostsContainer store={props.store} />
    </div>
  );
};
export default Profile;
