function User25App(props){
    const name = "gyan prakash"
    return(
        <div>
            <h2>User</h2>
            <button onClick={()=>props.data(name)}>Click Button</button>
        </div>
    )
};
export default User25App