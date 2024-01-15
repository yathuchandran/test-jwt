import React from 'react'
import { Route, Routes, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login';
import BasePage from './Components/Home';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/home" element={<BasePage />} />
        <Route path="/CustomerList" element={<BasePage />} />

      </Routes>
    </Router>
 )
}

export default App
