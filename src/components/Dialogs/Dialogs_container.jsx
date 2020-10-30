import React from "react";
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, dialogMessageTextActionCreator } from "../../Redux/dialogs_reducer";

import DialogPerson from "./DialogPerson/DialogPerson";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const DialogsContainer = (props) => {
  console.log(props);
    let state = props.store.getState().DialogsPage;
    let addMessage = ()=>{
      props.store.dispatch(addMessageActionCreator())
    }
    let updateDialogText = (text)=>{
      let action = dialogMessageTextActionCreator(text)
      props.store.dispatch(action)

    }
  
  return (
      <Dialogs addMessage = {addMessage} updateDialogText = {updateDialogText} state = {state}/>
  );
  }
export default DialogsContainer;
