import React, { useState } from 'react';
import Header from './components/Header';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';

const App = () => {
  // Task 3: Use `useState` to manage the username state and pass it to the shop page

  return (
    <div>
      <div className="main">
        <Router>
          {/* Task 1: Ensure that the header component is imported and rendered here */}
          <Routes>
            {/* Task 2: Implement routing to navigate between different pages */}
            {/* Task 3: Pass the username state as a prop to the shop page */}
            {/* Task 3: Pass the setUser function to the login page */}
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
