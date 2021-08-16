import React , {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
// function Expenses(props) then more code goes here 
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found</p>
  // if(filteredExpenses.length > 0) {
  //   expensesContent =  filteredExpenses.map((expense => (   //map function works with mutiple array
  //     <ExpenseItem 
  //     key = {expense.id}
  //     title={expense.title} 
  //     amount={expense.amount} 
  //     date={expense.date} />
  //   )))
  // }

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>No Expense Found</p> }
        {filteredExpenses.length > 0  &&  filteredExpenses.map((expense => (   //map function works with mutiple array
          <ExpenseItem 
          key = {expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} />
        ))) } */}
        
        {/* <ExpenseItem        // from the expenses component to the expense Item component
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </div>
    </Card>
  );
}
export default Expenses;
