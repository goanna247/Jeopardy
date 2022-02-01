import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../CSS/Admin.css';

import UsersManager from './Admin/UsersManager.component';
import QuestionManager from './Admin/QuestionManager.component';
import ScoreManager from './Admin/ScoreManager.component';

import Tabs from "./Admin/Tabs.component";

//only for me
export default class AdminView extends Component {
  render() {
    return (
      <div>
        <h1 className='AdminTitle'>ADMIN</h1> 
        <Tabs className="AdminTabs">
          <div label="Users" className='Users'>
            <UsersManager/>
          </div>
          <div label="Questions" className='Questions'>
            <QuestionManager/>
          </div>
          <div label="Score" className='Score'>
            <ScoreManager/>
          </div>
        </Tabs>
      </div>
    );
  }
}

//view all logged in users, create users, modify + deleate users
//create, mod, and delete questions. Also overide points + questions answered