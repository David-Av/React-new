import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { usersApi } from "../../API/api";
import { getProfile, setUserProfile } from "../../Redux/profile_reducer";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContiner extends React.Component {
    
  componentDidMount() {
      
      let userId = this.props.match.params.userId
      if(!userId){
          userId = 2
      }
      this.props.getProfile(userId)
      
  }
  render() {
    return <Profile {...this.props} profile = {this.props.profile}/>;
  }
}

let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {setUserProfile,getProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContiner)