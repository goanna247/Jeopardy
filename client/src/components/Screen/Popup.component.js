import React, { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Popup extends Component {
  state = {
    question: "What is the 3 letter code for the superstructure?"
  }

  handleClick = () => {
    this.props.toggle();
  };

  reveal = () => {
    this.state.question = "SUS";
  }
  


  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <h2>{this.props.points} Points</h2>
          <h1>{this.props.cat}</h1>
          {/* this is where the question needs to be displayed,
          use axios to sort by cat and points to get the correct question */}
          <h1>{this.state.question}</h1>


          {/* this is also where the team buzzer needs to pop up */}
          <table>
            <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Team 3</th>
              <th>Team 4</th>
              <th>Team 5</th>
              <th>Team 6</th>
              <th>Team 7</th>
              <th>Team 8</th>
              <th>Team 9</th>
              <th>Team 10</th>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </table>
          {/* answer button */}
          <button onHover={this.reveal}></button>
        </div>
      </div>
    )
  }
}