import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../CSS/Admin.css";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeSession = this.onChangeSession.bind(this);
    this.onChangePoints = this.onChangePoints.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      session: '',
      points: '',
      oldUsername: '',
      oldPassword: '',
      oldSession: '',
      oldPoints: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/add' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          session: response.data.session,
          points: response.data.points
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          oldUsername: response.data.username,
          oldPassword: response.data.password,
          oldSession: response.data.session,
          oldPoints: response.data.points
        })
      })
      .catch(function (error) {
        console.log(error);
      })
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

  onChangePoints(e) {
    this.setState({
      points: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      session: this.state.session,
      points: this.state.points
    }

    console.log(user);

    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/Admin';
  }

  render() {
    return (
      <div>
        <h1>Edit Team</h1>
        <form onSubmit={this.onSubmit} className="editTeam">
          <div className="form-group">
            <label className="FormLabel">Team name: </label>
            <p>{this.state.oldUsername}</p>
            <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Team password: </label>
            <p>{this.state.oldPassword}</p>
            <input  type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Session number: </label>
            <p>{this.state.oldSession}</p>
            <input  type="number"
                    required
                    className="form-control"
                    value={this.state.session}
                    onChange={this.onChangeSession}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Team points: </label>
            <p>{this.state.oldPoints}</p>
            <input  type="number"
                    required
                    className="form-control"
                    value={this.state.points}
                    onChange={this.onChangePoints}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Team" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
