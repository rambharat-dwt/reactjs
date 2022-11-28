import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpenses;
