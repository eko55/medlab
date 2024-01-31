import React from "react";
import { useState } from "react";
import './CreateLaboratory.css';

const DeleteLab = () => {
  const [responseData, setResponseData] = useState([]);
  const [responseError, setResponseError] = useState([]);
  const [labId, setLabId] = useState('');

 const handleInputChange = (event) => {
  setLabId(event.target.value);
  };

  const deleteLab = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/laboratories/${labId}`, {
        method: "DELETE",
        headers: headers,
      });
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseError(error);
    }
  };

  return (
    <>
      <div className="main-container CreateLaboratory">
        <h1>Delete laboratory record:</h1>
        <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Enter lab id:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="lab id" value={labId} onChange={handleInputChange} />
        </div>
      </form>
        <button onClick={() => deleteLab()}>Submit</button>
      </div>
    </>
  );
};

export default DeleteLab;
