import { useEffect } from "react";
function User19(props){
    useEffect(()=>{
        console.log("useEffect"+props.count)
         console.log("useEffect"+props.data)
      })
      return(
        <div>
            <h3>{props.count} </h3>
            <h3>{props.data}</h3>
        </div>
      )
    }
    export default User19;