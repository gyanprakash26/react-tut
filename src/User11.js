import React from "react";
class User10 extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  render() {   
    console.log("render")
    return (
      <div>
        <h1>11. Constructor </h1>
        <hr></hr>
      </div>
    );
  }
  }
export default User10;
