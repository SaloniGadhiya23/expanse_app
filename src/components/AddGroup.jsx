import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

const AddGroup = () => {
  const [name, setName] = useState("");
  const { addGroup } = useExpense();

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addGroup(name);
    setName("");
  };

  return (
    <div className="animated-card card p-3 shadow-sm">
      <h3>Add Group</h3>

      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Group name (Friends, Trip...)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary w-100">Add Group</button>
      </form>
    </div>
  );
};

export default AddGroup;
