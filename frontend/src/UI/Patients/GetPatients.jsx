import React from "react";
import { useState } from "react";

const GetPatients = () => {
  const [responseData, setResponseData] = useState([]);

  const getAllEmployees = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/patients`, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Employees:</h1>
        <button onClick={() => getAllEmployees()}>Search</button>
        <table className="centerTable">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th className="tableHeader">Id</th>
              <th className="tableHeader">Personal Number</th>
              <th className="tableHeader">First Name</th>
              <th className="tableHeader">Last Name</th>
              <th className="tableHeader">Lab Id</th>
              <th className="tableHeader">User Id</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((item, index) => (
              <tr key={index} className="tableRow">
                <td className="tableCell">{item.id}</td>
                <td className="tableCell">{item.personalNumber}</td>
                <td className="tableCell">{item.firstName}</td>
                <td className="tableCell">{item.lastName}</td>
                <td className="tableCell">{item.labId}</td>
                <td className="tableCell">{item.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetPatients;
