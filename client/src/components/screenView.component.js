import React, { Component } from "react";

import "../CSS/Screen.css";
import Popup from "./Screen/Popup.component";

//one day i will make this more efficient, today is not that day

//view showed on the big screen
export default class ScreenView extends Component {
  state = {
    data: "Hello World"
  }

  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  
  render() {
    return (
      <div>
        <h1>Screen View</h1>

        {/* <div className="tbtn" onClick={this.togglePop} cat=> */}
          <table>
            <tr>
              <div className="tbtn" onClick={this.togglePop} data={this.data}><th><button>800</button></th></div>
              {this.state.seen ? <Popup toggle={this.togglePop} data="hello" /> : null}
              <th><button>800</button></th>
              <th><button>800</button></th>
              <th><button>800</button></th>
              <th><button>800</button></th>
              
            </tr>

            <tr>
              <th>700</th>
              <th>700</th>
              <th>700</th>
              <th>700</th>
              <th>700</th>
            </tr>

            <tr>
              <th>600</th>
              <th>600</th>
              <th>600</th>
              <th>600</th>
              <th>600</th>
            </tr>
            <tr>
              <th>500</th>
              <th>500</th>
              <th>500</th>
              <th>500</th>
              <th>500</th>
            </tr>
            <tr>
              <th>400</th>
              <th>400</th>
              <th>400</th>
              <th>400</th>
              <th>400</th>
            </tr>
            <tr>
              <th>300</th>
              <th>300</th>
              <th>300</th>
              <th>300</th>
              <th>300</th>
            </tr>
            <tr>
              <th>200</th>
              <th>200</th>
              <th>200</th>
              <th>200</th>
              <th>200</th>
            </tr>
            <tr>
              <th>100</th>
              <th>100</th>
              <th>100</th>
              <th>100</th>
              <th>100</th>
            </tr>
            <tr>
              <th>Team History</th>
              <th>FRC History</th>
              <th>Mechanical</th>
              <th>Programming + Electrical</th>
              <th>Outreach + Awards</th>
            </tr>
          </table>
        </div>

      // </div>
    );
  }
}