import React, { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import DashboardCards from "../components/DashboardCards";
import DashboardCharts from "../components/DashboardCharts";

function DashboardPage() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboardData().then(response => {
      setDashboard(response.data);
    });
  }, []);

  if (!dashboard) {
    return <h2>Loading Dashboard...</h2>;
  }

  const containerStyle = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px"
  };

  return (
    <div style={containerStyle}>

      <h1>Dashboard</h1>

      <DashboardCards dashboard={dashboard} />

      <DashboardCharts dashboard={dashboard} />

    </div>
  );
}

export default DashboardPage;