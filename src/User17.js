import { Component } from "react";
import React from "react";
export default class User17 extends Component{
    componentWillUnmount(){
        alert("componentDidMount called")
    }
    render(){
        return(
            <div>
                <h3>this componentDidMount calls</h3>
            </div>
        )
    }
}