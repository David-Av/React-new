import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersApi } from "../../API/api";
import { logout, me,setAuthUserData } from "../../Redux/auth-reducer";
import Header from "./header";

class HeaderContainer extends React.Component {
    // componentDidMount(){
        
    //     this.props.me()
    // }
  render() {
    
    return <Header {...this.props}/>
  };
};
const mapStateToProps = (state) =>({
  isAuth:state.auth.isAuth,
  login:state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData,me,
logout
})(HeaderContainer) 
