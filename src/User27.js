import { useState } from "react";
export default function User27(){
    const [count,setCount] = useState(0);
    const [mul,setMul] = useState(10);
    function multi(){
        setMul(mul*5)
        console.log("funcn calling when both data updtae ")
        // this slowdown the app performance becouse when count update it calls every time
        // but in new react is inbuild 
    }

    return(
        <div>
            <h1>27. useMemo in Function ( it is like PureComponent in class component)</h1>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Count Now</button>
              <h3>Multiply: {mul}</h3>
            <button onClick={multi}>Count Now</button>
            <hr></hr>
        </div>
    )

}