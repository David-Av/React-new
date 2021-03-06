import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.jpg";
import s from "./Users.module.css";

let User = ({user,followingInProgres,unFollow,follow}) => {
  let u = user
    return (
      <div>
        <div>
          <span>
            <div>
              <NavLink to={`/Profile/${u.id}`}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.photo}
                alt = ""
              />
              </NavLink>
            </div>
            <div>
              {u.followed ? (  
                <button disabled = {followingInProgres
                  .some(id=>id===u.id)} onClick={() =>{
                  unFollow(u.id)
                   }}>

                  Unfollow
                </button>
              ) : (
                <button disabled = {followingInProgres.some(id=>id===u.id)} onClick={() => {
                  follow(u.id)
                  }}>
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
        </div>
      );
    
  
  
};

export default User;