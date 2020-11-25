import React from "react";
import Paginator from '../common/Pagination/Paginator'
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => {
        return (
          <User user={u}
            key={u.id}
            followingInProgres={props.followingInProgres}
            unFollow={props.unFollow}
            follow={props.follow}
          />
        );
      })}
    </div>
  );
};

export default Users;