function User9(){
    function logInHandle(e){
        e.preventDefault()
    }
    function userHandler(e){
        let p1 = e.target.value
        if(p1.lenght<3){
              console.warn("Invalid User") 
           
        }
          console.log(e.target.value)
      
    }
    function passHandler(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>9. Form Handling with Validation</h1>

            <form onSubmit={logInHandle}><p></p>
                <input type="text" placeholder="Enter Username" onChange={userHandler} ></input><br/><br/>
                <input type="password" placeholder="Enter Password" onChange={passHandler} ></input><br/><br/>
                <input type="submit"></input>
            </form>
            <hr></hr>
        </div>
    )
}
export default User9;