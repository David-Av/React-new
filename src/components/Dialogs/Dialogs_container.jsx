import React from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import {
  addMessageActionCreator,
  dialogMessageTextActionCreator,
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
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateDialogText: (text) => {
      dispatch(dialogMessageTextActionCreator(text));
    },
  };
};
const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
export default DialogsContainer;
