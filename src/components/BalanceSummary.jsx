import { useExpense } from "../context/ExpenseContext";

const BalanceSummary = () => {
  const { activeGroup, groups } = useExpense();
  const group = groups.find((g) => g.id === activeGroup);

  if (!group) return null;

  const total = group.expenses.reduce((a, b) => a + b.amount, 0);
  const perPerson = total / group.members.length;

  return (
    <div className="animated-card card p-3 shadow-sm">
      <h3>Balance Summary</h3>

      {group.members.map((m) => {
        const paid = group.expenses
          .filter((ex) => ex.paidBy === m.name)
          .reduce((a, b) => a + b.amount, 0);

        const balance = paid - perPerson;

        return (
          <p key={m.id} className={balance >= 0 ? "text-success" : "text-danger"}>
            {m.name} {balance >= 0 ? "gets" : "owes"} ₹{Math.abs(balance).toFixed(2)}
          </p>
        );
      })}
    </div>
  );
};

export default BalanceSummary;
