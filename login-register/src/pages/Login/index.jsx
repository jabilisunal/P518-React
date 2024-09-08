import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post("https://reqres.in/api/login",{
            email,password
        });
        const token = localStorage.setItem("token", response.data.token);
        setSuccess("user created, token stored ...")
    } catch (err) {
        setError("error:"+ err.response.data.error)
    }
  }
  return (
    <>
     <form onSubmit={handleLogin} action="">
      <div>
        <label>Email:</label>
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
    {error && <p style={{color:"red"}}>{error}</p> }
    {success && <p style={{color:"green"}}>{success}</p> }




    </>
   
   
  );
};

export default Login;
