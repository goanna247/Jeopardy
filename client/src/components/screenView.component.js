import React, { Component } from "react";
import axios from 'axios';

import "../CSS/Screen.css";
import Popup from "./Screen/Popup.component";

//one day i will make this more efficient, today is not that day

//view showed on the big screen
export default class ScreenView extends Component {
  state = {
    data: "Hello World",
    point1000: "1000",
    point800: "800",
    point600: "600",
    point400: "400",
    point200: "200",
    teamCat: "Team History",
    frcCat: "FRC History",
    mechCat: "Mechanical",
    progCat: "Programming and Electrical",
    outCat: "Outreach and Awards"
  }

  state = {
    seen81: false,
    seen82: false,
    seen83: false,
    seen84: false,
    seen85: false
  };

  togglePop81 = () => {this.setState({seen81: !this.state.seen81});};
  togglePop82 = () => {this.setState({seen82: !this.state.seen82});};
  togglePop83 = () => {this.setState({seen83: !this.state.seen83});};
  togglePop84 = () => {this.setState({seen84: !this.state.seen84});};
  togglePop85 = () => {this.setState({seen85: !this.state.seen85});};

  
  render() {
    return (
      <div>
        <h1>Screen View</h1>
          <table>
          <tr>
              <th>1000</th>
              <th>1000</th>
              <th>1000</th>
              <th>1000</th>
              <th>1000</th>
            </tr>
            
            <tr>
              {/* yeah im aware this isnt a good way to do this */}
              <div><th><div className="tbtn eight one" data={this.point800}><button onClick={this.togglePop81}>800{this.state.seen81 ? <Popup toggle={this.togglePop81} points="800" cat="Team History"/> : null}</button></div></th></div>
              <div><th><div className="tbtn eight two" data={this.point800}><button onClick={this.togglePop82}>800{this.state.seen82 ? <Popup toggle={this.togglePop82} points="800" cat="FRC History"/> : null}</button></div></th></div>
              <div><th><div className="tbtn eight three" data={this.point800}><button onClick={this.togglePop83}>800{this.state.seen83 ? <Popup toggle={this.togglePop83} points="800" cat="Mechanical"/> : null}</button></div></th></div>
              <div><th><div className="tbtn eight four" data={this.point800}><button onClick={this.togglePop84}>800{this.state.seen84 ? <Popup toggle={this.togglePop84} points="800" cat="Programming and Electrical"/> : null}</button></div></th></div>
              <div><th><div className="tbtn eight five" data={this.point800}><button onClick={this.togglePop85}>800{this.state.seen85 ? <Popup toggle={this.togglePop85} points="800" cat="Outreach and Awards"/> : null}</button></div></th></div>
            </tr>

            <tr>
              <th>600</th>
              <th>600</th>
              <th>600</th>
              <th>600</th>
              <th>600</th>
            </tr>
            <tr>
              <th>400</th>
              <th>400</th>
              <th>400</th>
              <th>400</th>
              <th>400</th>
            </tr>
            <tr>
              <th>200</th>
              <th>200</th>
              <th>200</th>
              <th>200</th>
              <th>200</th>
            </tr>
            <tr>
              <th>Team History</th>
              <th>FRC History</th>
              <th>Mechanical</th>
              <th>Programming + Electrical</th>
              <th>Outreach + Awards</th>
            </tr>
          </table>

          <div>
            <h1>Teams</h1>
          </div>
      </div>
    );
  }
}

// order pizza at lunch 

// Cad + Mechanical 
// Electrical + Programming 
// Awards + Media
// FRC 
// Team History

// 200 - 400 - 600 - 800 - 1000