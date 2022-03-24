import React from 'react';
import './App.css';
import './styles/index.css'
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dash from './pages/Dash';
import Logout from './pages/Logout';



function App() {

  return (
    <Router>
      <div className="container">

        <nav className="nav-menu">

          <div className="nav-item">
            <NavLink
              to="/signup"
              >
              Sign Up
            </NavLink>

          </div>

          <div className="nav-item">
            <NavLink
              to="/login"
              >
              Login
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink
              to="/logout"
              >
              Logout
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink
              to="/dash"
              >
              Dash
            </NavLink>
          </div>

        </nav>

        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route
            path="/dash"
            element={
                <Dash />
            }
          />
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>


      </div>
    </Router>
  );
}

export default App;
