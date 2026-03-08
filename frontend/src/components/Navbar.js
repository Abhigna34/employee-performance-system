import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

  const nav = {
    background:"#333",
    padding:"10px",
    display:"flex",
    justifyContent:"space-between"
  };

  const link = {
    color:"white",
    textDecoration:"none",
    marginRight:"15px"
  };

  return(
    <div style={nav}>

      <div style={{color:"white",fontWeight:"bold"}}>
        Employee Performance System
      </div>

      <div>
        <Link style={link} to="/dashboard">Dashboard</Link>
        <Link style={link} to="/employees">Employees</Link>
        <Link style={link} to="/tasks">Tasks</Link>
      </div>

    </div>
  )
}

export default Navbar;