import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, dialogMessageTextActionCreator } from "../../Redux/dialogs_reducer";

import DialogPerson from "./DialogPerson/DialogPerson";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



// const DialogsContainer = (props) => {
//     let state = props.store.getState().DialogsPage;
//     let addMessage = ()=>{
//       props.store.dispatch(addMessageActionCreator())
//     }
//     let updateDialogText = (text)=>{
//       let action = dialogMessageTextActionCreator(text)
//       props.store.dispatch(action)

//     }
  
//   return (
//       <Dialogs addMessage = {addMessage} updateDialogText = {updateDialogText} state = {state}/>
//   );
//   }
  let mapStateToProps = (state) =>{
    return {
      state:state
    }
  }
  let mapDispatchToProps = (dispatch) =>{
    return {
      addMessage:()=>{ dispatch(addMessageActionCreator())},
      updateDialogText:(text)=>{dispatch(dialogMessageTextActionCreator(text))}
    }
  }
  const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer;
