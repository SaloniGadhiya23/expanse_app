import { useExpense } from "../context/ExpenseContext";

const Navbar = () => {
  const { groups, activeGroup, setActiveGroup } = useExpense();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-4 navbar-light bg-white">
      <a className="navbar-brand fw-bold">Expense App</a>

      <div className="ms-auto d-flex gap-3 align-items-center">
        <select
          className="form-select"
          value={activeGroup || ""}
          onChange={(e) => setActiveGroup(parseInt(e.target.value))}
        >
          <option value="">Select Group</option>
          {groups.map((g) => (
            <option value={g.id} key={g.id}>{g.name}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
