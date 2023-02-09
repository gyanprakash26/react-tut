import React from "react";
function User10(props){
    return(
        <div>
            <h1>10. Function pass in props</h1>
            <button onClick={props.data}>Click Here</button>
            <hr></hr>
        </div>
    )
}
export default User10;