import React from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function DashboardCharts({ dashboard }) {

  const pieData = [
    { name: "Completed", value: dashboard.completedTasks },
    { name: "Pending", value: dashboard.pendingTasks }
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  const barData = [
    {
      name: "Employees",
      value: dashboard.totalEmployees
    },
    {
      name: "Tasks",
      value: dashboard.totalTasks
    }
  ];

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>

      {/* Pie Chart */}
      <div>
        <h3>Task Status</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div>
        <h3>System Overview</h3>
        <BarChart width={400} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>

    </div>
  );
}

export default DashboardCharts;