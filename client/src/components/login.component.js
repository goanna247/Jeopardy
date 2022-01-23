import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <nav className='login'>
        <h1>Login</h1>
        {/* make a username and password box here,
        admins (me) have a special code for username */}
        <form action='/action_page.php'>
          <label for="uname">Username: </label>
          <input type="text" id="uname" name="uname"/>
          <br/><br/>
          <label for="pword">Password: </label>
          <input type="text" id="pword" name="pword"/>
          <br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </nav>
    );
  }
}