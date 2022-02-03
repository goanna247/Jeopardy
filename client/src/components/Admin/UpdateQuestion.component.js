import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../CSS/Admin.css";


export default class UpdateQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChangePoints = this.onChangePoints.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeCatagory = this.onChangeCatagory.bind(this);
    this.onChangeSession = this.onChangeSession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      points: '',
      question: '',
      catagory: '',
      session: '',
      oldPoints: '',
      oldQuestion: '',
      oldCatagory: '',
      oldSession: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/add' + this.props.match.params.id)
      .then(response => {
        this.setState({
          points: response.data.points,
          question: response.data.question,
          catagory: response.data.catagory,
          session: response.data.session
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/questions/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          oldPoints: response.data.points,
          oldQuestion: response.data.question,
          oldCatagory: response.data.catagory,
          oldSession: response.data.session
        })
      })
      .catch(function (error) {
        console.log(error); 
      })
  }

  onChangePoints(e) {
    this.setState({
      points: e.target.value
    })
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    })
  }

  onChangeCatagory(e) {
    this.setState({
      catagory: e.target.value
    })
  }

  onChangeSession(e) {
    this.setState({
      session: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const question = {
      points: this.state.points,
      question: this.state.question,
      catagory: this.state.catagory,
      session: this.state.session
    }

    console.log(question);

    axios.post('http://localhost:5000/questions/update/' + this.props.match.params.id, question)
      .then(res => console.log(res.data));

    window.location = '/Admin';
  }

  render() {
    return (
      <div>
        <h1>Edit Question</h1>
        <form onSubmit={this.onSubmit} className="editQuestion">
          <div className="form-group">
            <label className="FormLabel">Points: </label>
            <p>{this.state.oldPoints}</p>
            <input  type="number"
                    required
                    className="form-control"
                    value={this.state.points}
                    onChange={this.onChangePoints}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Question: </label>
            <p>{this.state.oldQuestion}</p>
            <input  type="text"
                    required
                    className="form-control"
                    value={this.state.question}
                    onChange={this.onChangeQuestion}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Catagory: </label>
            <p>{this.state.oldCatagory}</p>
            <input  type="text"
                    required
                    className="form-control"
                    value={this.state.catagory}
                    onChange={this.onChangeCatagory}
                    />
          </div>
          <div className="form-group">
            <label className="FormLabel">Session: </label>
            <p>{this.state.oldSession}</p>
            <input  type="number"
                    required
                    className="form-control"
                    value={this.state.session}
                    onChange={this.onChangeSession}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Question" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}