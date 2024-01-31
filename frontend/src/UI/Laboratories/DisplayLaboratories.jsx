import React from "react";
import { useState } from "react";
import './CreateLaboratory.css';

const DisplayLaboratories = () => {
  const [responseData, setResponseData] = useState([]);

  const getAllLabs = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/laboratories`, {
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
      <div className="main-container CreateLaboratory">
        <h1>List laboratories info:</h1>
        <button onClick={() => getAllLabs()}>Search</button>
        <table className="centerTable">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th className="tableHeader">Id</th>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Address</th>
              <th className="tableHeader">Email</th>
              <th className="tableHeader">Phone</th>
              <th className="tableHeader">Hospital Name</th>
            </tr>
          </thead>
          <tbody>
            {/*to iterate through each object in the array and generate table rows.*/}
            {responseData.map((item, index) => (
              <tr key={index} className="tableRow">
                <td className="tableCell">{item.id}</td>
                <td className="tableCell">{item.name}</td>
                <td className="tableCell">{item.address}</td>
                <td className="tableCell">{item.email}</td>
                <td className="tableCell">{item.phone}</td>
                <td className="tableCell">{item.hospitalName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayLaboratories;
