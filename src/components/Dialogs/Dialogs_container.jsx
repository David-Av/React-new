import React from "react";
import { NavLink } from "react-router-dom";
import {
  addMessageActionCreator,
  dialogMessageTextActionCreator,
} from "../../Redux/dialogs_reducer";
import StoreContext from "../../Store_Context";

import DialogPerson from "./DialogPerson/DialogPerson";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const DialogsContainer = (props) => {
  
  return (
    <StoreContext.Consumer>
      {  store =>{
        let state = store.getState().DialogsPage;
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let updateDialogText = (text) => {
          let action = dialogMessageTextActionCreator(text);
          store.dispatch(action);
        };
      
     return <Dialogs
        addMessage={addMessage}
        updateDialogText={updateDialogText}
        state={state}
      />
 } }
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
