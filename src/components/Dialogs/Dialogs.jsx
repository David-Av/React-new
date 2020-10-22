import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogPerson from './DialogPerson/DialogPerson';
import s from './Dialogs.module.css'
import Message from './Message/Message';
// const DialogPerson = (props) =>{
// return <div className={s.dialog}><NavLink to = {`/dialogs/${props.id}`}>{props.name}</NavLink></div>
// }
// const Message = (props) =>{
//     return (
//     <div className={s.message}>{props.message}</div> 
//     )
// }
const Dialogs = () =>{
    let dialogsData = [
        {id: 1, name:"David"},
        {id: 2, name:"Andrew"},
        {id: 3, name:"Sveta"},
        {id: 4, name:"Sasha"},
        {id: 5, name:"Valera"}
    ]
    let dialogsDataM = dialogsData.map(
        person =><DialogPerson name = {person.name} id = {person.id}/>
    )
    console.log(dialogsDataM);
    let messagesData = [
        {id:1, message: "sdsdsdsd"},
        {id:2, message: "sdsdsdsd"},
        {id:3, message: "sdsdsdsd"},
        {id:4, message: "sdsdsdsd"},
        {id:5, message: "sdsdsdsd"}
    ]
    let messagesDataM = messagesData.map(
        m=><Message message = {m.message} />
    )
    console.log(messagesDataM);
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
