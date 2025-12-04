import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

const AddExpense = () => {
  const { activeGroup, groups, addExpense } = useExpense();
  const group = groups.find((g) => g.id === activeGroup);

  const [paidBy, setPaidBy] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  if (!group)
    return <div className="alert alert-warning">Select a group first!</div>;

  return (
    <div className="animated-card card p-3 shadow-sm">
      <h3>Add Expense</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExpense(paidBy, amount, description);
          setPaidBy(""); setAmount(""); setDescription("");
        }}
      >
        <select
          className="form-select mb-2"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
        >
          <option value="">Paid By</option>
          {group.members.map((m) => (
            <option key={m.id} value={m.name}>{m.name}</option>
          ))}
        </select>

        <input
          className="form-control mb-2"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-primary w-100">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
