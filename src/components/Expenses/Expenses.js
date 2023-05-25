import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function addExpenseFilter(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expense available for this year.</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onAddFilter={addExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {/* Fourth method */}
        <ExpensesList items={filteredExpenses} />
        
        {/* Third method */}
        {/* {expensesContent} */}

        {/* Second method */}

        {/* {filteredExpenses.length === 0 && <p>No expense available for this year.</p>}
        {filteredExpenses.length > 0 && (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )} */}

        {/* First metohd */}
        {/* {props.expenses.map((expense) => { */}
        {/* {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      </Card>
    </div>
  );
}

export default Expenses;
