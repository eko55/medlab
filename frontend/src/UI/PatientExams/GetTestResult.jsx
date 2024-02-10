import React from "react";
import { useState } from "react";

const GetTestResult = () => {
  const [responseData, setResponseData] = useState([]);
  const [employeeId, setEmployeeId] = useState("");

  const handleInputChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const getEmployee = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(
        `http://localhost:8080/testresults/${employeeId}`,
        {
          method: "GET",
          headers: headers,
        }
      );
      const data = await response.json();
      if (!response.ok) {
        alert(`Error!: ${data.message}`);
        throw new Error(`Error! status: ${response.status}`);
      }
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Get test result by id:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Enter test result id:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="employee Id"
              value={employeeId}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button onClick={() => getEmployee()}>Search</button>
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
            <tr className="tableRow">
              <td className="tableCell">{responseData.id}</td>
              <td className="tableCell">{responseData.date}</td>
              <td className="tableCell">{responseData.values}</td>
              <td className="tableCell">{responseData.labTestId}</td>
              <td className="tableCell">{responseData.labEmployeeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetTestResult;
