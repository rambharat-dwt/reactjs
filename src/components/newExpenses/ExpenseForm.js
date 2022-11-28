import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const handleTitleChange = (e) => {
    console.log(e.target.value);

    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);

    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div>
          <label>date</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>

        <div>
          <button type="submit">add Expenses</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
