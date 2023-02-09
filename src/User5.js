/** ish mai inpute ka data winow screen mai print kraya hai 
 * usestate ki help se hum yeh kar skte hai  
 */
import { useState } from "react";
function User5() {
  const [data, changedata] = useState(null);
  const [print,changeprint] = useState(false);
  function setdata(val) {
    console.log(val.target.value);
    changedata(val.target.value);
  }
  return (
    <div>
        {
            print?
            <h4>{data}</h4>
            :null
        }
      <h1>5. Input data </h1>
      <p>{data}</p>
      <input type="text" onChange={setdata}></input>
      <button onClick={()=>{changeprint(true)}}> Print</button>
      <hr></hr>
    </div>
  );
}
export default User5;
