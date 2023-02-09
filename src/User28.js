import React from "react";
import { createRef } from "react";
export default class User28 extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef;
    }
    render(){
        console.log(this.inputRef.value = "1873")
        return(
            <>
            <h1>28. ref in the react</h1>
            <input type='text' ref={this.inputRef}></input>
            </>
        )
    }
}