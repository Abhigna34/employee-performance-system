import React from "react";

function DashboardCards({ dashboard }) {

  const cardStyle = {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "180px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "20px"
  };

  return (
    <div style={containerStyle}>

      <div style={cardStyle}>
        <h3>Total Employees</h3>
        <h2>{dashboard.totalEmployees}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Total Tasks</h3>
        <h2>{dashboard.totalTasks}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Completed Tasks</h3>
        <h2>{dashboard.completedTasks}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Pending Tasks</h3>
        <h2>{dashboard.pendingTasks}</h2>
      </div>

    </div>
  );
}

export default DashboardCards;