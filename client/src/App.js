import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Help from "./Components/Help.component";
import AdminView from './Components/AdminView.component';
import ScreenView from './Components/ScreenView.component';
import TeamView from './Components/TeamView.component';

function App() {
  return (
    <Router>
      <div className='container'>
        <Route path="/" exact component={Help}/>
        <Route path="/Admin" exact component={AdminView}/>
        <Route path="/Team" exact component={TeamView}/>
        <Route path="/Screen" exact component={ScreenView}/>
      </div>
    </Router>
  );
}

export default App;
