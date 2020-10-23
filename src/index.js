import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe } from "./Redux/state";
import { addMessage, addPost, dialogMessageText, updateNewPostText } from "./Redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} dialogMessageText = {dialogMessageText} addMessage = {addMessage} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
subscribe(rerenderEntireTree)
rerenderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
