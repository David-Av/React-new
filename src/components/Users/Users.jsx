import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component {
  
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        return this.props.setUsers(response.data.items), console.log(response);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => {
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
                    <button onClick={() => this.props.unFollow(u.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(u.id)}>
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
  }
}

export default Users;
