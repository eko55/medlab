import React from "react";
import { useState } from "react";

const DeleteLabService = () => {
  const [responseData, setResponseData] = useState([]);
  const [responseError, setResponseError] = useState([]);
  const [serviceId, setServiceId] = useState(0);

  const handleInputChange = (event) => {
    setServiceId(event.target.value);
  };

  const deleteLab = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(`http://localhost:8080/tests/${serviceId}`, {
        method: "DELETE",
        headers: headers,
      });

      const data = await response.json();
      if (!response.ok) {
        alert(`Error!: ${data.message}`);
        throw new Error(`Error! status: ${response.status}`);
      } else {
        alert(`Record successfully deleted!`);
      }
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseError(error);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Delete lab service:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="serviceId">Service id:</label>
            <input
              type="number"
              className="form-control"
              id="serviceId"
              placeholder="service id"
              value={serviceId}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button onClick={() => deleteLab()}>Submit</button>
      </div>
    </>
  );
};

export default DeleteLabService;
