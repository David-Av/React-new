import React from "react";
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, dialogMessageTextActionCreator } from "../../Redux/dialogs_reducer";

import DialogPerson from "./DialogPerson/DialogPerson";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let newMessage = React.createRef();
    let addMessage = ()=>{
      props.dispatch(addMessageActionCreator())
    }
    let updateDialogText = ()=>{
      let text = newMessage.current.value
      let action = dialogMessageTextActionCreator(text)
      props.dispatch(action)

    }
  let dialogsDataM = props.state.dialogsData.map((person) => (
    <DialogPerson name={person.name} id={person.id} />
  ));
  let messagesDataM = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsDataM}</div>
      <div className={s.messages}>{messagesDataM}</div>
      <div>
        <input name="" ref = {newMessage} cols="10" rows="1" onChange = {updateDialogText} value = {props.state.dialogMessage}/>
        <button onClick = {addMessage}>Add Messae</button>
      </div>
    </div>
  );
};

export default Dialogs;
