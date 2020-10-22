import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogPerson from './DialogPerson/DialogPerson';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) =>{

    let dialogsDataM = props.dialogsData.map(
        person =><DialogPerson name = {person.name} id = {person.id}/>
    )
    let messagesDataM = props.messagesData.map(
        m=><Message message = {m.message} />
    )
    return (
        
        <div className = {s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsDataM}
            </div> 
            <div className={s.messages}>
                {messagesDataM}
            </div>
        </div>
    )
    
}

export default Dialogs;
