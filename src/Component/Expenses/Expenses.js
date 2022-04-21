import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
