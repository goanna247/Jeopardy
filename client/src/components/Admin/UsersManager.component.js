import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
    <td>{props.user.session}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => {props.deleteUser(props.user._id)}}>delete</a>
    </td>
  </tr>
)

export default class UsersManager extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeSession = this.onChangeSession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      users: [],
      username: '',
      password: '',
      session: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeSession(e) {
    this.setState({
      session: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      session: this.state.session
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      .catch((error) => console.log(error))

    this.setState({
      username: '',
      password: '',
      session: ''
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => { 
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }


  render() {
    return (
      <div>
        <h1>USERS!</h1>
        
        <div className="ExistingUsers">
          <h4>Existing Users: </h4>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Session</th>
              </tr>
            </thead>
            <tbody>
              {this.userList() }
            </tbody>
          </table>
        </div>

        <div className="NewUser">
          <h3>create new user</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
              />
              <label>Password: </label>
              <input type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
              />
              <label>Session: </label>
              <input type="number"
                    required
                    className="form-control"
                    value={this.state.session}
                    onChange={this.onChangeSession}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}