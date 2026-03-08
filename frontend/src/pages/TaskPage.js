import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "../services/taskService";
import { getEmployees } from "../services/employeeService";

function TaskPage() {

  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [employeeId, setEmployeeId] = useState("");

  useEffect(() => {
    loadTasks();
    loadEmployees();
  }, []);

  const loadTasks = () => {
    getTasks().then(response => {
      setTasks(response.data);
    });
  };

  const loadEmployees = () => {
    getEmployees().then(response => {
      setEmployees(response.data);
    });
  };

  const handleAddTask = () => {

    const newTask = {
      title,
      description,
      status,
      employee: {
        id: employeeId
      }
    };

    addTask(newTask).then(() => {
      loadTasks();
      setTitle("");
      setDescription("");
      setStatus("Pending");
    });
  };

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      loadTasks();
    });
  };

  return (
    <div>

      <h1>Task Management</h1>

      <h3>Create Task</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select onChange={(e) => setEmployeeId(e.target.value)}>
        <option>Select Employee</option>
        {employees.map(emp => (
          <option key={emp.id} value={emp.id}>
            {emp.name}
          </option>
        ))}
      </select>

      <button onClick={handleAddTask}>Add Task</button>

      <h3>Task List</h3>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.status}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TaskPage;