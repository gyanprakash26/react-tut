import "./f.css"
import { useSearchParams } from "react-router-dom"
export default function Filter(){
    const [searchParams,setsearchParams] =useSearchParams();
    console.log(searchParams.get('age'))
        console.log(searchParams.get('city'))
        const age =searchParams.get('age')
        const city = searchParams.get('city')
   ;
    return(
        <>
        <span>gyan</span><span>prakash</span>
        <h1>Filter</h1>
        <h3>Age: {age}</h3>
        <h3>City: {city}</h3>
        <button onClick={()=>{setsearchParams("age=50")}}>50</button>
        <input type="text" onChange={(e)=>{setsearchParams({text:e.target.value,age:199})}} />
        </>
    )
}