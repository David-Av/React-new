import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWihtHooks =props=> {

 let [editMode,setEditMode] = useState(false);
 let [status,setStatus] = useState(props.status);
 useEffect(()=>{
  setStatus(props.status)

 },[props.status])
 const activateMode = ()=>{
  setEditMode(true)
 }
 const deactivateEditMode = ()=>{
  setEditMode(false)
   props.updateStatus(status)
 }
 const onStatusChange = e=>{
   setStatus(e.currentTarget.value)
 }
    return (
      <>
        <div>{!editMode && <span
            onDoubleClick = {activateMode}
        >{props.status || '-------'}</span>}</div>
        <div>{editMode && <input
        onChange={onStatusChange}
        autoFocus = {true} 
            onBlur={deactivateEditMode}
            value={status}
             />}</div>
            
      </>
    );
  }


export default ProfileStatusWihtHooks;
