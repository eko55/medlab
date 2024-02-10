import React from "react";
import { useState } from "react";

const ModifyEmployee = () => {
  const [responseData, setResponseData] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [labName, setLabName] = useState("");
  const [userId, setUserId] = useState("");

  const handleEmployeeIdInputChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handlePersonalNumberInputChange = (event) => {
    setPersonalNumber(event.target.value);
  };

  const handleFirstNameInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserIdInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleLabNameInputChange = (event) => {
    setLabName(event.target.value);
  };

  const createEmployee = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      headers.set("Content-Type", "application/json; charset=UTF-8");
      const response = await fetch(
        `http://localhost:8080/employees/${employeeId}`,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify({
            personalNumber,
            firstName,
            lastName,
            labName,
            userId,
          }),
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
        <h1>Create laboratory service:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput6">Employee Id:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput6"
              placeholder="service units"
              value={employeeId}
              onChange={handleEmployeeIdInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pn">Personal Number:</label>
            <input
              type="text"
              className="form-control"
              id="pn"
              placeholder="personal number"
              value={personalNumber}
              onChange={handlePersonalNumberInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput3">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="service description"
              value={firstName}
              onChange={handleFirstNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="service reference range"
              value={lastName}
              onChange={handleLastNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput5">Lab Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput5"
              placeholder="service units"
              value={labName}
              onChange={handleLabNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput5">User Id:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput5"
              placeholder="service units"
              value={userId}
              onChange={handleUserIdInputChange}
            />
          </div>
        </form>
        <button onClick={() => createEmployee()}>Submit</button>
        <table className="centerTable">
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th className="tableHeader">Id</th>
              <th className="tableHeader">Personal Number</th>
              <th className="tableHeader">First Name</th>
              <th className="tableHeader">Last Name</th>
              <th className="tableHeader">Lab Name</th>
              <th className="tableHeader">User Id</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="tableCell">{responseData.id}</td>
              <td className="tableCell">{responseData.personalNumber}</td>
              <td className="tableCell">{responseData.firstName}</td>
              <td className="tableCell">{responseData.lastName}</td>
              <td className="tableCell">{responseData.labName}</td>
              <td className="tableCell">{responseData.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModifyEmployee;
