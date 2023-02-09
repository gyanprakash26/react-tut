import { useState } from "react";
function User8(){
    const [logIn,logOut] = useState(1)
       console.log(logOut)
    return(
        <div>
            {
                logIn===1?
                <h1>8. Welcome User 1</h1>:
                logIn===2?
                <h3>Admin user 2</h3>
                :<h3>Log Out 3</h3>
            }
            <hr></hr>
        </div>
    )
}
export default User8;