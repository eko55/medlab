import React from "react";
import { useState } from "react";
import './CreateLaboratory.css';

const CreateLaboratory = () => {
  const [responseData, setResponseData] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hospitalName, setHospitalName] = useState('');

 const handleLabNameInputChange = (event) => {
    setName(event.target.value);
  };

 const handleAddressInputChange = (event) => {
    setAddress(event.target.value);
 };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
 };

 const handlePhoneInputChange = (event) => {
    setPhone(event.target.value);
 };

 const handleHospitalNameInputChange = (event) => {
    setHospitalName(event.target.value);
 };
        

  const createLab = async () => {
    try {
      let headers = new Headers();
      headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
      headers.set("Content-Type", "application/json; charset=UTF-8");
      const response = await fetch(`http://localhost:8080/laboratories`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            name,
            address,
            email,
            phone,
            hospitalName
          })
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
        <h1>Create laboratory record:</h1>
        <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Enter lab name:</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="lab name" value={name} onChange={handleLabNameInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Enter lab address:</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="lab address" value={address} onChange={handleAddressInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput4">Enter lab email:</label>
          <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="lab email" value={email} onChange={handleEmailInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput5">Enter lab phone:</label>
          <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="lab phone" value={phone} onChange={handlePhoneInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput6">Enter lab hospital name:</label>
          <input type="text" className="form-control" id="exampleFormControlInput6" placeholder="hospital name" value={hospitalName} onChange={handleHospitalNameInputChange} />
        </div>
      </form>
        <button onClick={() => createLab()}>Submit</button>
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

export default CreateLaboratory;
