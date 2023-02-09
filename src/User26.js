// Pure component is used in class componet it is used to cure rerending 
// when update value. it check previous value if it is same as previous then it stop re-rendering
import React from "react";
export default class User26 extends React.PureComponent{
    constructor(){
        super();
        this.state={count:0};
    }
    render(){
        console.log("re-rendering")
        return(
            <div>
                <h1>26. Pure Component {this.state.count}</h1>
                <button onClick={()=>this.setState({count:1})}>Count</button>
                <hr></hr>
            </div>
        )
    }
}