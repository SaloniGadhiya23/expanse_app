export const calculateBalances = (group) => {
  const balances = {};
  group.members.forEach((m) => (balances[m] = 0));
  group.expenses.forEach((exp) => {
    const split = exp.amount / group.members.length;
    group.members.forEach((m) => (balances[m] -= split));
    balances[exp.paidBy] += exp.amount;
  });
  return balances;
};
