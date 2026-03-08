import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import TaskPage from "./pages/TaskPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;