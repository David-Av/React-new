import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { usersApi } from "../../API/api";
import { getProfile, getStatus,  setUserProfile, updateStatus } from "../../Redux/profile_reducer";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContiner extends React.Component {
    
  componentDidMount() {
      
      let userId = this.props.match.params.userId
      if(!userId){
          userId = 12354
      }
      this.props.getProfile(userId)
    
      this.props.getStatus(userId)
  }
  render() {
    return <Profile {...this.props} profile = {this.props.profile}
      status={this.props.status}
      updateStatus = {this.props.updateStatus}
    />;
  }
}

let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    status:state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {setUserProfile,getProfile,getStatus,updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContiner);