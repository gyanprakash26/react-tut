// state with function
/* in the previous user2 when we click on the event then
the data will not be changed but
by the use of state we can change data by clicking
 */
import {useState} from "react";
export default function User3(){ 
    const [data,changedata]=useState("Gyan Prakash");
    function update(){
       changedata("Gyan Prakash Singh")
    }
    return(
        <div>
            <h1>3. State with Function</h1>
            <h3>{data}</h3>
            <button onClick={update}>Update data</button>
            <hr></hr>
        </div>
    )
}
