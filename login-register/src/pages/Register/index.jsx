import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

 const  handleSubmit =async(e)=>{
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Password is not match");
    }
    try {
        const response = await axios.post("https://reqres.in/api/register",{
            email,password,age,phonenumber
        })
            setSuccess("Register is successful, redirecting login ...");
            setTimeout(()=>{
                navigate("/login")
            },1000)

    } catch (err) {
        console.log(err.response);
        setError("Register is not successful",err.response.data.error)
    }
 }

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
<br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
      {success && <p style={{color:"green"}}>{success}</p>}
    </>
  );
};
export default Register;
