import React from "react";
import { useState } from "react";

const GetPatient = () => {
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
        `http://localhost:8080/patients/${employeeId}`,
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
        <h1>Get lab service information:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Enter employee id:</label>
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
              <th className="tableHeader">Personal Number</th>
              <th className="tableHeader">First Name</th>
              <th className="tableHeader">Last Name</th>
              <th className="tableHeader">Lab Id</th>
              <th className="tableHeader">User Id</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="tableCell">{responseData.id}</td>
              <td className="tableCell">{responseData.personalNumber}</td>
              <td className="tableCell">{responseData.firstName}</td>
              <td className="tableCell">{responseData.lastName}</td>
              <td className="tableCell">{responseData.labId}</td>
              <td className="tableCell">{responseData.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetPatient;
