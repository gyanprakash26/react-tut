import { useState } from "react";
function User7() {
    const [name,setName] = useState("")
    const [vahan,setVahan] = useState("")
    const [check,setCheck] = useState()
    function setname(e){
        e.preventDefault()
        console.log(name,vahan,check)
    }
  return (
    <div>
      <h1>7. Handling Form in React</h1>
      <form onClick={setname}>
      <input type="text" placeholder="Enter Name " onChange={(e)=>setName(e.target.value)}></input>
      <br />
      <br />
      <select onChange={(e)=>{setVahan(e.target.value)}} >
        <option>Car</option>
        <option>Bike</option>
        <option>Cycle</option>
      </select>
      <br />
      <br />
      <input type="checkbox" onClick={(e)=>{setCheck(e.target.checked)}}></input>
      <span> Accept terms and Condition</span>
      <br />
      <br />
      <input type="submit"></input>
      </form>
      <hr></hr>
    </div>
  );
}
export default User7;
