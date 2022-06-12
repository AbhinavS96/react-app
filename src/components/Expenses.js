import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { expenses } = props;
  const [year, setYear] = useState("");

  function filterHandler(year) {
    setYear(year);
  }

  const filteredExpenses =
    year === ""
      ? expenses
      : expenses.filter(
          (expense) => expense.date.getFullYear().toString() === year
        );

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
