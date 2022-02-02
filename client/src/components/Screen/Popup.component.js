import React, { Children, Component } from "react";
import PropTypes from "prop-types";

export default class Popup extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>Im a Pop-Up</p>
          <h1>{this.props.data}</h1>
        </div>
      </div>
    )
  }
}