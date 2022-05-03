import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { expenses } = props;
  const [year, setYear] = useState("");

  function filterHandler(year) {
    setYear(year);
  }

  if (year) {
    return (
      <Card className="expenses">
        <ExpensesFilter onFilter={filterHandler} />
        {expenses.map((expense) => {
          if (expense.date.getFullYear() == year) {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
              />
            );
          }
        })}
      </Card>
    );
  } else {
    return (
      <Card className="expenses">
        <ExpensesFilter onFilter={filterHandler} />
        {expenses.map((expense) => {
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
}

export default Expenses;
