/* this is the event and fnc
 how we call funct when click on button with differnt method
 and also change the the data when the update the variable
*/
export default function User2() {
  var name = "Gyan prakash";
  function event() {
    let name = "Gyan prakash singh";
    alert("hello alert");
    alert(name);
  }
  return (
    <div>
      <h1>2 Event and function</h1>
      <h3>{name}</h3>
      <button onClick={event}>click here</button>
      <button onClick={() => event()}>click here</button>
      <button onClick={() => alert("alert message")}>click here</button>
      <hr></hr>
    </div>
  );
}
// export default User2;
