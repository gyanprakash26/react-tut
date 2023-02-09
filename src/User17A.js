import React from "react";
import User17 from "./User17";
export default class User17A extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  render() {
    return (
      <div>
        {this.state.show? <User17 /> : <h3>Child component</h3>}
        <h1>17. ComponentWillUnmount</h1>
        <button onClick={() => this.setState({show:!this.state.show})}>Click Here</button>
        <hr></hr>
      </div>
    );
  }
}
