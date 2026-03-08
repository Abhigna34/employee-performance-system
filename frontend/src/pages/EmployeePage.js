import React, { useEffect, useState } from "react";
import { getEmployees, addEmployee, deleteEmployee } from "../services/employeeService";

function EmployeePage() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getEmployees().then(response => {
      setEmployees(response.data);
    });
  };

  const handleAddEmployee = () => {

    const newEmployee = {
      name: name,
      email: email,
      role: role
    };

    addEmployee(newEmployee).then(() => {
      loadEmployees();
      setName("");
      setEmail("");
      setRole("");
    });
  };

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      loadEmployees();
    });
  };

  return (
    <div>
      <h1>Employee Management</h1>

      <h3>Add Employee</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button onClick={handleAddEmployee}>Add Employee</button>

      <h3>Employee List</h3>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} ({emp.role}) 
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeePage;