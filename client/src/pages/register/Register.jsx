import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './register.css';
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email, password} = formData;
    try {
      const {data} = await axios.post("http://localhost:3000/auth/register", {
      name, email, password
    });
    if(data.error){
      alert("Error :" + data.error)
    }else{
      setFormData({});
      navigate("/login");

    }
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
