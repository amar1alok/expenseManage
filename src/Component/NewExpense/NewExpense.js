import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [form, setForm] = useState(false);
  const setFormHandler = () => {
    setForm(!form);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!form && <button onClick={setFormHandler}>Add New Expense</button>}
      {form && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setFormHandler={setFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
