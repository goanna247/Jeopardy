import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UsersManager from './Admin/UsersManager.component';
import QuestionManager from './Admin/QuestionManager.component';

//only for me
export default class AdminView extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Admin View</h1>
        </div>
      </Router>
    );
  }
}

//view all logged in users, create users, modify + deleate users
//create, mod, and delete questions. Also overide points + questions answered