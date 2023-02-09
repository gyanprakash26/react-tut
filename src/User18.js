import React,{useState,useEffect} from "react";
function User18(){
    const [state,setState] = useState("Name: Krishna")
    useEffect(()=>{
        console.warn("useEffect wala console")
    })
    return(
        <div>
            <h1>18. useEffect in Hooks</h1>
            <span>{state}</span><br></br><br></br>
            <button onClick={()=>setState("Name: Radha")}> Click me</button>
            <hr></hr>
        </div>
    )
}
export default User18