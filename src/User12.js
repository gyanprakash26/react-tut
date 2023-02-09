import User12A from "./User12A";
import React from "react";
import { useState } from "react";
function User12() {
  const [name, newName] = useState("Gyan");
  return (
    <div>
      <h1>12. Constructor call render reload again </h1>
      <h3>My Name is {name}</h3>
      <button onClick={() => newName("Prakash")}>Update name</button>  
      <User12A />
      <hr></hr>
    </div>
  );
}
export default User12;
