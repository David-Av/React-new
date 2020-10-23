import React from "react";
import { NavLink } from "react-router-dom";
import DialogPerson from "./DialogPerson/DialogPerson";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessage = React.createRef();
    let addMessage = ()=>{
      let text = newMessage.current.value
      alert(text)
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
        <textarea name="" ref = {newMessage} cols="10" rows="1"></textarea>
        <button onClick = {addMessage}>Add Messae</button>
      </div>
    </div>
  );
};

export default Dialogs;
