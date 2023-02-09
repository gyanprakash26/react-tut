// in this code we have hide and  show the element 
// also we create tongle 
import { useState } from "react";
function User6(){
    const [status,setstatus] = useState(true)
    return(
        <div>
            <h1>6. Show, Hide and Toggle</h1> 
            {
                status?
                <h5>This is the magic</h5>
                :null
            }
            <button onClick={()=>setstatus(true)} >Show Me</button>
            <button onClick={()=>setstatus(false)}> Hide Me</button>
            <button onClick={()=>setstatus(!status)}> Toggle Me</button>
            
            <hr></hr>
        </div>
    )
}
export default User6;