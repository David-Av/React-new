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
  getUsers,
} from "../../Redux/users_reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";
import { getPageSize,getUsersS,getTotalUsersCount,getCurrentPage,getIsFetching,followingInProgres } from "../../Redux/users_selectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber,this.props.pageSize)
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
          followingInProgres={this.props.followingInProgres}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgres:state.usersPage.followingInProgres
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsersS(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgres:followingInProgres(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowingProgress,
    getUsers
  }),
  withAuthRedirect
)(UsersContainer)
