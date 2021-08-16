// import ExpenseItem from "./components/ExpenseItem.js";
import React, { useState } from "react";
import Expenses from "../src/components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 999, date: new Date(2020, 4, 3) },
  { id: "e2", title: "Bills", amount: 45, date: new Date(2021, 5, 23) },
  { id: "e3", title: "grocery", amount: 65, date: new Date(2020, 5, 5) },
  { id: "e4", title: "fees", amount: 85, date: new Date(2019, 5, 23) },
];

// const App = () => Arrow function
// function App()
const App = () => {
  // we can use this code also alternative to the below JSX code but a good practise is to make your entire web in a JSX(simple HTML text in a React Application).
  // return React.createElement('div' ,
  //  {} ,
  //  React.createElement('h1' , {} , 'Expense Tracker') ,
  //  React.createElement(Expenses , {items : expenses}));
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const saveExpenseDataHandler = (expense) => {
    // const expenseDataCopied = {
    // ...copiedExpense
    // }   // ab mene yeh data ko kahi leke nhi jana to kisi extra funtion ki zroort nhi ha

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onPassData={saveExpenseDataHandler} />

      <Expenses items={expenses} />
    </div>
  );
};
export default App;
