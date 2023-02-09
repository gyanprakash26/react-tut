import React from "react";
export default class User12A extends React.Component {
  constructor() {
    super();
    this.state = { email: "gyanprakash2698@gmail.com" };
  }
  render() {
    console.log("rander email", this.state.email);
    return (
      <div>
        <h1>Class Component</h1>
        <h3>{this.state.email}</h3>
        <button
          onClick={() => {this.setState({ email: "gyaguab@gmail.com" });
          }}
        >
          Update email
        </button>
      </div>
    );
  }
}
