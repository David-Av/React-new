import React from "react";
import { useState } from "react";
import s from "../../Users/Users.module.css";

let Paginator = (props) => {
  let portionSize = 20
 debugger
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
      let portionCount = Math.ceil(pagesCount/portionSize)
      let [portionNumber, setPortionNumber] = useState(1)
      let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
      let rightPortionPageNumber = portionNumber * portionSize
      
  return (
    <div>
      { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
      {pages
      .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
      .map((p) => (
        <span
          onClick={(e) => {
          props.onPageChanged(p)
          }}
          className={props.currentPage === p && s.selectedPage, s.page}
        >
          {p}
        </span>
      ))}
      { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
    
  
  );
};

export default Paginator;

