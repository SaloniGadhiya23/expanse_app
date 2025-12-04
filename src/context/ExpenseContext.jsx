import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();
export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);

  const addGroup = (name) => {
    const newGroup = {
      id: Date.now(),
      name,
      members: [],
      expenses: [],
    };
    setGroups([...groups, newGroup]);
    setActiveGroup(newGroup.id);
  };

  const addMember = (name) => {
    setGroups(
      groups.map((g) =>
        g.id === activeGroup
          ? { ...g, members: [...g.members, { id: Date.now(), name }] }
          : g
      )
    );
  };

  const addExpense = (paidBy, amount, description) => {
    setGroups(
      groups.map((g) =>
        g.id === activeGroup
          ? {
              ...g,
              expenses: [
                ...g.expenses,
                { id: Date.now(), paidBy, amount: parseFloat(amount), description },
              ],
            }
          : g
      )
    );
  };

  return (
    <ExpenseContext.Provider
      value={{
        theme,
        setTheme,
        groups,
        activeGroup,
        setActiveGroup,
        addGroup,
        addMember,
        addExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
