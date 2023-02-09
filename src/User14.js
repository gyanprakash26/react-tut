import React from "react";
export default class User14 extends React.Component{
    constructor(){
        super();
        this.state ={name:"Siva"}
        console.warn("constructor WALA ")
    }
    componentDidUpdate(){
        console.warn("componentDidUpdate wala log")
    }
    render(){
        console.warn("render wala")
        return(
            <div>
                <h1>14. ComponentDidUpdate and it is work</h1>
                <h3>{this.state.name}</h3>
                <button onClick={()=>this.setState({name:"Mahakal"})}>Change button</button>
                <hr></hr>
            </div>
        )
    }
}