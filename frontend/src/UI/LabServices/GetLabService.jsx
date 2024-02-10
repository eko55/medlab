import React from "react";
import { useState } from "react";

const GetLabService = () => {
  const [responseData, setResponseData] = useState([]);
  const [labTestId, setLabId] = useState("");

  const handleInputChange = (event) => {
    setLabId(event.target.value);
  };

  const getALabTest = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/tests/${labTestId}`, {
        method: "GET",
        headers: headers,
      });
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
            <label htmlFor="exampleFormControlInput1">Enter lab id:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="lab test id"
              value={labTestId}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button onClick={() => getALabTest()}>Search</button>
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
            <tr className="tableRow">
              <td className="tableCell">{responseData.id}</td>
              <td className="tableCell">{responseData.name}</td>
              <td className="tableCell">{responseData.description}</td>
              <td className="tableCell">{responseData.referenceRange}</td>
              <td className="tableCell">{responseData.units}</td>
              <td className="tableCell">{responseData.price}</td>
              <td className="tableCell">{responseData.labId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetLabService;
