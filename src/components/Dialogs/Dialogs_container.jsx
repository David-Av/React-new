import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import {
  addMessageActionCreator,
  
} from "../../Redux/dialogs_reducer";
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import Dialogs from "./Dialogs";
let mapStateToProps = (state) => {
  return {
    state: state.DialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },

  };
};
const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
export default DialogsContainer;
