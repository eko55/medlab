import React from "react";
import { useState } from "react";

const GetTestResults = () => {
  const [responseData, setResponseData] = useState([]);

  const getAllTestResults = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("user1" + ":" + "password"));
      const response = await fetch(`http://localhost:8080/testresults`, {
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
        <h1>Tests Results:</h1>
        <button onClick={() => getAllTestResults()}>Search</button>
        <table className="centerTable">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th className="tableHeader">Id</th>
              <th className="tableHeader">Date</th>
              <th className="tableHeader">Values</th>
              <th className="tableHeader">Lab Test Id</th>
              <th className="tableHeader">Lab Employee Id</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((item, index) => (
              <tr key={index} className="tableRow">
                <td className="tableCell">{item.id}</td>
                <td className="tableCell">{item.date}</td>
                <td className="tableCell">{item.values}</td>
                <td className="tableCell">{item.labTestId}</td>
                <td className="tableCell">{item.labEmployeeId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetTestResults;
