import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amount, date } = props;
  return (
    <div className="expense-item">
      <div>
        <div>{date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
