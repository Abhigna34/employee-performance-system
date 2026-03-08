import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  const container = {
    textAlign: "center",
    marginTop: "120px"
  };

  const button = {
    padding: "12px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer"
  };

  return (
    <div style={container}>

      <h1>Employee Performance System</h1>

      <p>Manage employees, tasks and performance analytics</p>

      <button style={button} onClick={() => navigate("/register")}>
        Register
      </button>

      <button style={button} onClick={() => navigate("/login")}>
        Login
      </button>

    </div>
  );
}

export default HomePage;