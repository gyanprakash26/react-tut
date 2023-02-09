import User19 from "./User19";
import React, { useState} from "react";
export default function User19A() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1> 19. useEffect in state and props</h1>
      <span>Data: {data}</span>
      <br></br>
      <button onClick={() => setData(data+1)}> Click me</button>
      <br></br><br></br>
      <span>Count: {count}</span>
      <br></br>
      <button onClick={() => setCount(count+1)}> Click me</button>
      <User19 data={data} count ={count}/>
      <hr></hr>
    </div>
  );
}
