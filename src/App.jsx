import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Navbar from "./components/Navbar";
import AddGroup from "./components/AddGroup";
import AddMember from "./components/AddMember";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";
import { ExpenseProvider, useExpense } from "./context/ExpenseContext";

function Content() {
  const { theme } = useExpense();

  return (
    <div className={theme === "dark" ? "dark-mode" : ""}>
      <Navbar />

      <div className="container">
        <div className="row g-4">
          <div className="col-md-4"><AddGroup /></div>
          <div className="col-md-4"><AddMember /></div>
          <div className="col-md-4"><AddExpense /></div>
        </div>

        <div className="mt-4">
          <ExpenseList />
          <BalanceSummary />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ExpenseProvider>
      <Content />
    </ExpenseProvider>
  );
}
