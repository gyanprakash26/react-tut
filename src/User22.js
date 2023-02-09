import React from "react";
import {Table} from 'react-bootstrap'
export default function User22() {
  const array = ["Gyan", "Prakash", "Harhs", "Anil"];
  //   // map loop
  //       array.map((item)=>
  //     console.log("map loop array"+item)
  //       )
  //       // for loop
  //       for(let i=0;i<array.length;i++){
  //         console.log("For loop array"+array[i]);
  //       }
  const detail = [
    {
      name: "Arjun",
      email: "arjun@gmail.com",
      id: 111,
    },
    {
      name: "Karn",
      email: "karn@gmail.com",
      id: 222,
    },
    {
      name: "Bhim",
      email: "bhim@gmail.com",
      id: 333,
    },
  ];
  return (
    <div>
      <h1>22. Map is used as a loop</h1>
      {array.map((item,i) => (
        <>
        <h3>{i} Map arry in the return{item}</h3>
        <hr></hr>
        </>
      ))}
      {detail.map((det,i) => (
        <div>
          <h4>Id:{det.id}</h4>
          <h4>Name:{det.name}</h4>
          <h4>Email:{det.email}</h4>
          <hr></hr>
          <Table border='1'>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>EMAIL</th>
            </tr>
            <tr >
                <td>{det.id}</td>
                <td>{det.name}</td>
                <td>{det.email}</td>
            </tr></tbody>
          </Table>
        </div>
      ))}
      <hr></hr>
    </div>
  );
}
