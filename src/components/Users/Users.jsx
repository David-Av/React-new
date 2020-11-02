import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import * as  axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
  return (
    <div>
    <div>
      {pages.map((p) => (
        <span
          onClick={(e) => {
            props.onPageChanged(p)
          }}
          className={props.currentPage === p && s.selectedPage, s.page}
        >
          {p}
        </span>
      ))}
    </div>
    {props.users.map((u) => {
      return (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/Profile/${u.id}`}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.photo}
              />
              </NavLink>
            </div>
            <div>
              {u.followed ? (  
                <button onClick={() =>{
                  
                  axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,headers:{
                    "API-KEY" : "560961f6-c212-4142-b02d-d99d0a8308d3"
                  }})
                  .then(response=>{
                    if(response.data.resultCode === 0){
                      props.unFollow(u.id)
                    }
                  })
                   }}>

                  Unfollow
                </button>
              ) : (
                <button onClick={() => {
                  axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,headers:{
                      "API-KEY" : "560961f6-c212-4142-b02d-d99d0a8308d3"
                    }})
                    .then(response=>{
                      if(response.data.resultCode === 0){
                        props.follow(u.id)
                      }
                    })
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
      );
    })}
  </div>
  );
};

export default Users;