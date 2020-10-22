import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id:1, message:"HI", likesCount:11},
  {id:2, message:"first Post", likesCount:12},
  {id:3, message:"Second Post", likesCount:55}
]
let dialogsData = [
  {id: 1, name:"David"},
  {id: 2, name:"Andrew"},
  {id: 3, name:"Sveta"},
  {id: 4, name:"Sasha"},
  {id: 5, name:"Valera"}
]
    let messagesData = [
        {id:1, message: "sdsdsdsd"},
        {id:2, message: "sdsdsdsd"},
        {id:3, message: "sdsdsdsd"},
        {id:4, message: "sdsdsdsd"},
        {id:5, message: "sdsdsdsd"}
    ]
ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
