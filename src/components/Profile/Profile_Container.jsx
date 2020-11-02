import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../Redux/profile_reducer";
import Profile from "./Profile";

class ProfileContiner extends React.Component {
    
  componentDidMount() {
      
      let userId = this.props.match.params.userId
      if(!userId){
          userId = 2
      }
      
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    )
    .then((response) => {
     this.props.setUserProfile(response.data)
    });
      console.log(this.props);
  }
  render() {
    return <Profile {...this.props} profile = {this.props.profile}/>;
  }
}
let mapStateToProps = (state) =>({
    profile:state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContiner)
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
