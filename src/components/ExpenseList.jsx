import { useExpense } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { activeGroup, groups } = useExpense();
  const group = groups.find((g) => g.id === activeGroup);

  if (!group) return null;

  return (
    <div className="animated-card card p-3 shadow-sm">
      <h3>Expenses</h3>

      {group.expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        group.expenses.map((ex) => (
          <div key={ex.id} className="p-2 mb-2 bg-light rounded">
            <strong>{ex.paidBy}</strong> paid ₹{ex.amount} — {ex.description}
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;
