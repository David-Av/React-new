import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        return (this.props.setUsers(response.data.items), console.log(response),
        this.props.setTotalUsersCount(response.data.totalCount) 
        )
      });
  }
  onPageChanged = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        return this.props.setUsers(response.data.items), console.log(response);
      });
    console.log(this.props);
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
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
                this.onPageChanged(p)
              }}
              className={this.props.currentPage === p && s.selectedPage, s.page}
            >
              {p}
            </span>
          ))}
        </div>
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
