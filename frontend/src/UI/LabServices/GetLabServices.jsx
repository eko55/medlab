import React from "react";
import { useState } from "react";

const GetLabServices = () => {
  const [responseData, setResponseData] = useState([]);

  const getAllLabServices = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/tests`, {
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
        <h1>Laboratory examinations:</h1>
        <button onClick={() => getAllLabServices()}>Search</button>
        <table className="centerTable">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th className="tableHeader">Id</th>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Description</th>
              <th className="tableHeader">Reference Range</th>
              <th className="tableHeader">Units</th>
              <th className="tableHeader">Price</th>
              <th className="tableHeader">Lab Id</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((item, index) => (
              <tr key={index} className="tableRow">
                <td className="tableCell">{item.id}</td>
                <td className="tableCell">{item.name}</td>
                <td className="tableCell">{item.description}</td>
                <td className="tableCell">{item.referenceRange}</td>
                <td className="tableCell">{item.units}</td>
                <td className="tableCell">{item.price}</td>
                <td className="tableCell">{item.labId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetLabServices;
