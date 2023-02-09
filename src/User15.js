import React from "react";
export default class User15 extends React.Component{
    constructor(){
        super();
        // this.state ={name:"Siva"}
        console.warn("constructor WALA ")
        this.state ={count: 0}
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.warn("componentDidUpdate wala log")
        if(this.state.count<3){
            console.log(preState)
        }
        else
        alert("grater then 3")

    }
    render(){
        console.warn("render wala")
        return(
            <div>
                <h1>15. ComponentDidUpdate and it is work</h1>
                <h3>Count Number: {this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Change button</button>
                <hr></hr>
            </div>
        )
    }
}