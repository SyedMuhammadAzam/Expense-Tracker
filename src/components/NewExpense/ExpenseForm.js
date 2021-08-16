import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
         // current state , updated state
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setenteredDate] = useState('');
  
  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) =>{
      event.preventDefault(); // blocks the page for reloading and continues with default javascript behaviour
        const expenseData = {
            id : Math.random(),
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date (enteredDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData); // sb se pahly yeh ha transfering data to child to parent or component UP transfer
                                              // prop pass krwaya uske baad jo data transfer krwana wo parametrize krwaya 
                                              // jo data apne parent me use krna uska eik data prop bnana or usko yeh value deni ha 

        setenteredTitle('')    // we set all the value to deafault empty coz after input submission we want it empty
        setenteredAmount('')
        setenteredDate('')    // two way binding gathers the user input and also change it (in forms React as i done.)
        
        
        
  };
  return (
    <form onSubmit={submitHandler}>
      
      
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>{" "}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
