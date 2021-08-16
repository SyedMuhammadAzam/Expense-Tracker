import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  
  // // console.log("ExpenseItem is Evaluated");
  // const clickHandler = () => {
  //   // const clickHandler = () =>{// code goes here...}
  //   setTitle("Updated!"); // we use it here to call it more times a function and you are assigining a new value to this function
  //   console.log(title);
    
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
       {/* <button onClick={clickHandler}>Update</button>  */}
    </Card>
    </li>
  );
}
export default ExpenseItem;
