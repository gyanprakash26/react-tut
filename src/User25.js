import User25App from './User25App'
function User25(){
    function display(name){
        alert(name)
    }
    return(
        <div>
        <h1>25. Lifting state up or we can say send data child to parent</h1>
        <User25App data ={display}/>
        <hr></hr>
        </div>
    )
}
export default User25;