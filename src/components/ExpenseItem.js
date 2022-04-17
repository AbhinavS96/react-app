import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseTitle = "title";
  const expenseAmount = "cost";
  const expenseDate = new Date(2022, 3, 17);

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString().split("T")[0]}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
