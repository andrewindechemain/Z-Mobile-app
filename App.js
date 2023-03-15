import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import StaffPage from './components/StaffPage';
import Continents from './components/Continents.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<Homepage/>} /> 
        <Route path="/StaffPage" element={<StaffPage/>} /> 
        <Route path="/Continents" element={<Continents/>} /> 
      </Routes>
    </Router>
    );
}

