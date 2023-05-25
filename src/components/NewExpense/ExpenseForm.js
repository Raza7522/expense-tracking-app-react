import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // For 2nd & 3rd Approach:
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmout: "",
  //     enteredDate: ""
  // })

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);

    // 2nd Approach:
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // 3rd Approach:
    // setUserInput((prevValue) => {
    //     return {
    //         ...prevValue,
    //         enteredTitle: event.target.value
    //     }
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    // 2nd Approach:
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    // 2nd Approach:
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
