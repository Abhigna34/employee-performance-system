import React, { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import DashboardCharts from "../components/DashboardCharts";
import DashboardCards from "../components/DashboardCards";

function DashboardPage() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboardData()
      .then(response => {
        setDashboard(response.data);
      })
      .catch(error => {
        console.error("Error fetching dashboard data", error);
      });
  }, []);

  if (!dashboard) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total Employees: {dashboard.totalEmployees}</p>
      <p>Total Tasks: {dashboard.totalTasks}</p>
      <p>Completed Tasks: {dashboard.completedTasks}</p>
      <p>Pending Tasks: {dashboard.pendingTasks}</p>
      <p>Average Performance: {dashboard.averagePerformance}%</p>

<DashboardCards dashboard={dashboard} />
        <DashboardCharts dashboard={dashboard} />
    </div>
  );
}

export default DashboardPage;