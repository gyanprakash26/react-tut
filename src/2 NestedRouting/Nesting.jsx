import { Link,useLocation } from "react-router-dom";

export default function Nesting(){
    const location = useLocation()
    console.warn("location")
    return(
        <>
        <hr></hr>
            <h1>Nesting Routing</h1>
            <Link to="/nest1" state={{name:"Gyan prakash",age:31}}>Overview</Link>
            <p></p>
        </>
    )
}