/** props is used as func call
 * in which we pass parameter in events or call component
 */
import { useState } from "react";
function User4(props) {
 const [name,change]=useState("state change ")
  return (
    <div>
      <h1>4. Props in function</h1>
      <span>{props.name}</span>
      <p>Hello {props.name}</p>
      <p>Email : {props.email}</p>
      <p>Address: {props.other.address}</p>
      <p>NO: {props.other.no}</p>
      <p>{name}</p>
      <button onClick={()=>{change("state has been changed")}}>update now</button>
      <hr></hr>
    </div>
  );
}
export default User4;
