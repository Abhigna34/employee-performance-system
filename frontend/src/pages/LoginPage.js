import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function LoginPage(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

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

  const handleLogin = () => {

    const user = {
      email: email,
      password: password
    };

    loginUser(user)
      .then((res)=>{

        if(res.data){

          alert("Login successful");

          navigate("/dashboard");

        }else{

          alert("Invalid email or password");

        }

      })
      .catch(()=>{

        alert("Login failed");

      });

  };

  return(
    <div style={container}>

      <h2>Login</h2>

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

      <button style={button} onClick={handleLogin}>
        Login
      </button>

    </div>
  )
}

export default LoginPage;