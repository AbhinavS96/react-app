import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function submitHandler(inputData) {
    props.onSubmit(inputData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={submitHandler} />
    </div>
  );
}

export default NewExpense;
