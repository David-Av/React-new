import React from "react";
import s from "../../Users/Users.module.css";
import sp from "./Paginator.module.css"
import userPhoto from "../../../assets/images/user.jpg"
import { NavLink } from "react-router-dom";


let Paginator = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
  return (
    <div>
      {pages.map((p) => (
        <span
          onClick={(e) => {
            props.onPageChanged(p)
          }}
          className={props.currentPage === p && s.selectedPage, s.page}
        >
          {p}
        </span>
      ))}
    </div>
    
  
  );
};

export default Paginator;