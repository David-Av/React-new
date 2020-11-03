import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setUsers,
  setTotalUsersCount,
  unFollow,
  toggleFollowingProgress,
} from "../../Redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersApi } from "../../API/api";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        return (
          this.props.setUsers(response.items),
          this.props.setIsFetching(false),
          this.props.setTotalUsersCount(response.totalCount)
        
        );
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    usersApi.getUsers(pageNumber,this.props.pageSize)
      .then((response) => {
        return (
          this.props.setUsers(response.items),

          this.props.setIsFetching(false)
        );
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgres={this.props.followingInProgres}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgres:state.usersPage.followingInProgres
  };
};


export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingProgress
})(UsersContainer);
