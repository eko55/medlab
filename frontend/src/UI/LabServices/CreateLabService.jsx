import React from "react";
import { useState } from "react";

const CreateLabService = () => {
  const [responseData, setResponseData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [referenceRange, setReferenceRange] = useState("");
  const [units, setUnits] = useState("");
  const [price, setPrice] = useState("");
  const [labId, setLabId] = useState("");

  const handleLabNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleReferenceRangeInputChange = (event) => {
    setReferenceRange(event.target.value);
  };

  const handleUnitsInputChange = (event) => {
    setUnits(event.target.value);
  };

  const handlePriceInputChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLabIdInputChange = (event) => {
    setLabId(event.target.value);
  };

  const createLabService = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      headers.set("Content-Type", "application/json; charset=UTF-8");
      const response = await fetch(`http://localhost:8080/tests`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          name,
          description,
          referenceRange,
          units,
          price,
          labId,
        }),
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
        <h1>Create laboratory service:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="service name"
              value={name}
              onChange={handleLabNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput3">Description:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="service description"
              value={description}
              onChange={handleDescriptionInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Range:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="service reference range"
              value={referenceRange}
              onChange={handleReferenceRangeInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput5">Units:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput5"
              placeholder="service units"
              value={units}
              onChange={handleUnitsInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput6">Price:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput6"
              placeholder="service price"
              value={price}
              onChange={handlePriceInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput7">Lab id:</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput7"
              placeholder="service lab id"
              value={labId}
              onChange={handleLabIdInputChange}
            />
          </div>
        </form>
        <button onClick={() => createLabService()}>Submit</button>
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

export default CreateLabService;
