import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
let Users = (props) => {
  let users = [
    {
      id: 1,
      followed: true,
      status: "i'm a...",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      fullName: "Dmitry",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      followed: false,
      status: "i'm a...",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      fullName: "Oleg",
      location: { city: "Yerevan", country: "Armenia" },
    },
    {
      id: 3,
      followed: true,
      status: "i'm a...",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
      fullName: "Vartiter",
      location: { city: "Kirovakan", country: "Armenia" },
    },
  ];
  if (props.users.length == 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        return props.setUsers(response.data.items), console.log(response);
      });
    // props.setUsers(users)
  }
  return (
    <div>
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
                  <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>follow</button>
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
