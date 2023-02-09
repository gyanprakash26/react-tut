import { useState } from "react"
import { useEffect } from "react"

export default function GetMethode(){
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((promise)=>{
        promise.json().then((response)=>{
            setdata(response)
        })
    })
    },[])            
    
    console.log("API: ",data)
    return(
        
        <>
        <hr></hr>
            <h1>Get Method</h1>

        </>
    )
}