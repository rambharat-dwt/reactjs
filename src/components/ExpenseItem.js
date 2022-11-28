import React from "react";
import { useEffect, useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const [title, setTitle] = useState(props.title);
  //   const [newTitle, setNewTitle] = useState("");

  //   const handleChange = (e) => {
  //     setNewTitle(e.target.value);
  //   };

  //   const clickHandler = () => {
  //     // alert("clicked");
  //     setTitle(newTitle);
  //   };
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h3>{props.title}</h3>
          <div className="expense-item_price">${props.amount}</div>
        </div>
        {/* <input type="text" value={newTitle} onChange={handleChange} />
        <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </>
  );
};
export default ExpenseItem;
