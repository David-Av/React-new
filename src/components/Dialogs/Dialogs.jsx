import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogPerson from "./DialogPerson/DialogPerson";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {

  let dialogsDataM = props.state.dialogsData.map((person) => (
    <DialogPerson name={person.name} id={person.id} key={person.id} />
  ));
  let messagesDataM = props.state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let addNewMessage = (values) => {

    props.addMessage(values.newMessageBody)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsDataM}</div>
      <div className={s.messages}>{messagesDataM}</div>
      <AddmessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddmessageForm = (props) => {

  return (<form onSubmit={props.handleSubmit}>
    <div>
      <Field component='textarea' name="newMessageBody"
        rows="1" cols="15"
        placeholder='gra'
      />
      <button >Add Message</button>
    </div>
  </form>
  )
}
const AddmessageFormRedux = reduxForm({ form: "DialogAddmessageForm" })(AddmessageForm)
export default Dialogs;
