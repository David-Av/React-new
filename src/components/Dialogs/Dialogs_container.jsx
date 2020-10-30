import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addMessageActionCreator,
  dialogMessageTextActionCreator,
} from "../../Redux/dialogs_reducer";

import DialogPerson from "./DialogPerson/DialogPerson";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

// const DialogsContainer = (props) => {
  
//   return (
//     <StoreContext.Consumer>
//       {  store =>{
//         let state = store.getState().DialogsPage;
//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//         let updateDialogText = (text) => {
//           let action = dialogMessageTextActionCreator(text);
//           store.dispatch(action);
//         };
      
//      return <Dialogs
//         addMessage={addMessage}
//         updateDialogText={updateDialogText}
//         state={state}
//       />
//  } }
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps=(state)=>{
  return {
    state:state.DialogsPage
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
    addMessage:()=>{dispatch(addMessageActionCreator())},
    updateDialogText:(text)=>{
      dispatch(dialogMessageTextActionCreator(text))
    }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer;
