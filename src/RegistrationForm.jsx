import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigation =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    alert("Registration Successful!");
    setFormData({ username: "", email: "", password: "" });
    navigation("/login")
  };
   

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Welcome to the Fresh-Mart please  Register here...</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="username" placeholder="Enter your name" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input 
                className="form-control" 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="Enter your password" 
                value={formData.password} 
                onChange={handleChange} 
                required
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <span>{showPassword ? "🔓" : "🔒"}</span>
              </button>
            </div>
          </div>
          <button className="btn btn-primary w-100" type="submit" >Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
