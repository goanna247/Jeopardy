import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Question = props => {
  <tr>
    <td>{props.question.points}</td>
    <td>{props.question.question}</td>
    <td>{props.question.catagory}</td>
    <td>{props.question.session}</td>
    <td>
      <Link to={"/edit/"+props.question._id}>edit</Link> | <a href="#" onClick={() => {props.deleteQuestion(props.question._id)}}>delete</a>
    </td>
  </tr>
}

export default class QuestionManager extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.onChangePoints = this.onChangePoints.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeCatagory = this.onChangeCatagory.bind(this);
    this.onChangeSession = this.onChangeSession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      questions: [],
      points: '',
      question: '',
      catagory: '',
      session: ''
    }
  }

  onChangeCatagory(e) {
    this.setState({
      catagory: e.target.value
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

  onChangeSession(e) {
    this.setState({
      session: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const questions = {
      points: this.state.points,
      question: this.state.question,
      catagory: this.state.catagory,
      session: this.state.session
    }

    console.log(questions);

    axios.post('http://localhost:5000/questions/add', questions)
      .then(res => console.log(res.data))
      .catch((error) => console.log(error))

    this.setState({
      points: '',
      question: '',
      catagory: '',
      session: ''
    })

    window.location = '/Admin'; //reload
  }

  componentDidMount() {
    axios.get('http://localhost:5000/questions/')
      .then(response => { 
        this.setState({ questions: response.data })
      })
      .catch((error) => { 
        console.log(error);
      })
  }

  deleteQuestion(id) {
    axios.delete('http://localhost:5000/questions/' + id) 
      .then(response => { console.log(response.data)});

    this.setState({
      questions: this.state.questions.filter(el => el._id !== id)
    })
  }

  questionList() {
    return this.state.questions.map(currentQuestion => {
      return <Question question={currentQuestion} deleteQuestion={this.deleteQuestion} key={currentQuestion._id}/>;
      // return <Question question={currentQuestion}/>
    })
    // return <h1>Helki</h1>;
  }
  
  
  render() {
    return (
      <div>
        <h1>QUESTIONS!</h1>
        <div className="ExistingQuestions">
          <h4>Existing Questions: </h4>
          <table className="table">
            {/* <thead className="thead-light">
              <tr>
                <th>Points:</th>
                <th>Question:</th>
                <th>catagory</th>
                <th>session</th>
              </tr>
            </thead> */}
            <tbody>
              {this.questionList() }
            </tbody>
          </table>
        </div>

        <div className="NewQuestion">
          <h3>create new question</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Points: </label>
              <input type="number"
                    required
                    className="form-control"
                    value={this.state.points}
                    onChange={this.onChangePoints}
              />
              <label>question: </label>
              <input type="text"
                    required
                    className="form-control"
                    value={this.state.question}
                    onChange={this.onChangeQuestion}
              />
              <label>catagory: </label>
              <input type="text"
                    required
                    className="form-control"
                    value={this.state.catagory}
                    onChange={this.onChangeCatagory}
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
              <input type="submit" value="Create Question" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}