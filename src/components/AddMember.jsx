import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

const AddMember = () => {
  const [name, setName] = useState("");
  const { activeGroup, groups, addMember } = useExpense();

  if (!activeGroup)
    return <div className="alert alert-warning">Select a group first!</div>;

  return (
    <div className="animated-card card p-3 shadow-sm">
      <h3>Add Member</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMember(name);
          setName("");
        }}
      >
        <input
          className="form-control mb-2"
          placeholder="Member name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success w-100">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
