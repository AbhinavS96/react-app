import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
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

export default Expenses;