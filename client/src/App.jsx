import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home'; 


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} /> {/* Ajout de la route pour la page Home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
