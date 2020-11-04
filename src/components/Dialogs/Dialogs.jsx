import React from "react";
import DialogPerson from "./DialogPerson/DialogPerson";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let addMessage = ()=>{
      props.addMessage()
    }
    let updateDialogText = (e)=>{
      let text = e.target.value
      props.updateDialogText(text)

    }
  let dialogsDataM = props.state.dialogsData.map((person) => (
    <DialogPerson name={person.name} id={person.id} key = {person.id}/>
  ));
  let messagesDataM = props.state.messagesData.map((m) => (
    <Message message={m.message} key = {m.id}/>
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsDataM}</div>
      <div className={s.messages}>{messagesDataM}</div>
      <div>
        <input name=""  cols="10" rows="1" onChange = {updateDialogText} value = {props.state.dialogMessage}/>
        <button onClick = {addMessage}>Add Messae</button>
      </div>
    </div>
  );
};

export default Dialogs;
