import React from "react";
import { Table } from "react-bootstrap";
export default function User23() {
  const detail = [
    {
      name: "Arjun",
      email: "arjun@gmail.com",
      id: 111,
      address: [
        { Hno: 195, city: "noida", state: "UP", country: "IND" },
        { Hno: 195, city: "noida", state: "UP", country: "IND" },
            { Hno: 195, city: "noida", state: "UP", country: "IND" }
      ],
    },
    {
      name: "Karn",
      email: "karn@gmail.com",
      id: 222,
      address: [{ Hno: 195, city: "Pune", state: "MH", country: "IND" },
        { Hno: 195, city: "noida", state: "UP", country: "IND" },
            { Hno: 195, city: "noida", state: "UP", country: "IND" }],
    },
    {
      name: "Bhim",
      email: "bhim@gmail.com",
      id: 333,
      address: [{ Hno: 195, city: "Jaipur", state: "RJ", country: "IND" },
        { Hno: 195, city: "noida", state: "UP", country: "IND" },
            { Hno: 195, city: "noida", state: "UP", country: "IND" }],
    },
  ];
  return (
    <div className="App">
      <h1>23. List with Nested Array</h1>
      <Table variant="dark">
        <tbody >
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {detail.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {/*  */}
                <Table variant="dark">
                  <tbody>
                    {item.address.map((data) => (
                      <tr>
                        <td>{data.Hm}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {/*  */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
