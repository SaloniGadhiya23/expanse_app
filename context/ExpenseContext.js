import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const addGroup = (name) => {
    const newGroup = { id: Date.now().toString(), name, members: [], expenses: [] };
    setGroups([...groups, newGroup]);
  };

  const addExpense = (groupId, description, amount, paidBy) => {
    setGroups((prevGroups) =>
      prevGroups.map((g) => {
        if (g.id === groupId) {
          if (!g.members.includes(paidBy)) g.members.push(paidBy);
          return {
            ...g,
            expenses: [...g.expenses, { id: Date.now().toString(), description, amount: parseFloat(amount), paidBy }],
          };
        }
        return g;
      })
    );
  };

  return (
    <ExpenseContext.Provider value={{ groups, addGroup, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);
