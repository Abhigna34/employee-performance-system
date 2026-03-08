import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import TaskPage from "./pages/TaskPage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Pages */}
        <Route path="/dashboard" element={<><Navbar /><DashboardPage /></>} />
        <Route path="/employees" element={<><Navbar /><EmployeePage /></>} />
        <Route path="/tasks" element={<><Navbar /><TaskPage /></>} />

      </Routes>

    </Router>
  );
}

export default App;