import React from "react";
import { useState } from "react";

const DeleteEmployee = () => {
  const [responseData, setResponseData] = useState([]);
  const [responseError, setResponseError] = useState([]);
  const [employeeId, setServiceId] = useState(0);

  const handleInputChange = (event) => {
    setServiceId(event.target.value);
  };

  const deleteEmployee = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      const response = await fetch(
        `http://localhost:8080/employees/${employeeId}`,
        {
          method: "DELETE",
          headers: headers,
        }
      );

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
        <h1>Delete employee:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="serviceId">Employee id:</label>
            <input
              type="number"
              className="form-control"
              id="serviceId"
              placeholder="service id"
              value={employeeId}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button onClick={() => deleteEmployee()}>Submit</button>
      </div>
    </>
  );
};

export default DeleteEmployee;
