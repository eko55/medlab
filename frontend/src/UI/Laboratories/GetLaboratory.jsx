import React from "react";
import { useState } from "react";
import './CreateLaboratory.css';

const GetLaboratory = () => {
  const [responseData, setResponseData] = useState([]);
  const [labId, setLabId] = useState('');

 const handleInputChange = (event) => {
  setLabId(event.target.value);
  };

  const getALab = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/laboratories/${labId}`, {
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
        <h1>Get laboratory information:</h1>
        <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Enter lab id:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="lab id" value={labId} onChange={handleInputChange} />
        </div>
      </form>
        <button onClick={() => getALab()}>Search</button>
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
              <tr className="tableRow">
                <td className="tableCell">{responseData.id}</td>
                <td className="tableCell">{responseData.name}</td>
                <td className="tableCell">{responseData.address}</td>
                <td className="tableCell">{responseData.email}</td>
                <td className="tableCell">{responseData.phone}</td>
                <td className="tableCell">{responseData.hospitalName}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetLaboratory;
