import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const navStyle = {
    backgroundColor: "#333",
    padding: "10px"
  };

  const linkStyle = {
    color: "white",
    marginRight: "15px",
    textDecoration: "none",
    fontSize: "18px"
  };

  return (
    <div style={navStyle}>
      <Link style={linkStyle} to="/">Dashboard</Link>
      <Link style={linkStyle} to="/employees">Employees</Link>
      <Link style={linkStyle} to="/tasks">Tasks</Link>
    </div>
  );
}

export default Navbar;