import React from "react";
export default class User16 extends React.Component{
    constructor(){
        super();
        // this.state ={name:"Siva"}
        console.warn("constructor WALA ")
        this.state ={count: 0}
    }
    // shouldComponentUpdate(){
    //     console.log(this.state.count)
    //     return false;
    // } 
    // shouldComponentUpdate(){
    //     console.log(this.state.count)
    //     return true;
    // } 
       shouldComponentUpdate(){
        console.log(this.state.count)
        if(this.state.count>5&& this.state.count<10 )
        return true;
    }
    render(){
        return(
            <div>
                <h1>16. ShouldComponentUpdate working</h1>
                <h3>Count Number: {this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Change button</button>
                <hr></hr>
            </div>
        )
    }
}