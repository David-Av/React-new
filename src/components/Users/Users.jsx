import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

let Users = (props) => {
    debugger
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
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.photo}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unFollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(u.id)}>
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