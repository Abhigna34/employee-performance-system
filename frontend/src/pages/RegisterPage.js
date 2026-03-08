import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function RegisterPage() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const container = {
    maxWidth:"400px",
    margin:"auto",
    marginTop:"100px",
    textAlign:"center"
  };

  const input = {
    width:"100%",
    padding:"10px",
    margin:"10px 0"
  };

  const button = {
    padding:"10px 20px",
    background:"#333",
    color:"white",
    border:"none",
    cursor:"pointer"
  };

  const handleSignup = () => {

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    registerUser(user)
      .then(() => {

        alert("Registration successful");

        navigate("/login");

      })
      .catch(() => {

        alert("Registration failed");

      });

  };

  return(
    <div style={container}>

      <h2>Register</h2>

      <input
        style={input}
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        style={input}
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        style={input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <input
        style={input}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
      />

      <button style={button} onClick={handleSignup}>
        Register
      </button>

    </div>
  )
}

export default RegisterPage;