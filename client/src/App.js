import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from "react-router";

import Login from "./components/login.component";
import TeamView from "./components/teamView.component";
import OrganiserView from './components/organiserView.component';
import ScreenView from './components/screenView.component';

function App() {
  return (
    <div className='container'>
      
       <Routes>
        <Route path="/" exact element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;