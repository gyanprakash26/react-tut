// in the componentDidMount it calls once through out the pageload but
// render call again when any event calls again but componentDidMount didn't
import React from "react";
export default class User13 extends React.Component {
  constructor() {
    super();
    this.state = { name: "Gyanprakash" };
    console.warn("constructor calling");
  }
  componentDidMount() {
    console.warn("componentDidMount calling");
  }
  render() {
    console.warn("render calling");
    return(
      <div>
        <h1>13. ComponentDidMount working</h1>
        <h3>Calling render() and componentDidMpount priority</h3>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "singh prakash" });
          }}
        >
          Update now
        </button>
        <hr></hr>
      </div>
    );
  }
}
