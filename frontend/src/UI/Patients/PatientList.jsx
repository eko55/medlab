import React, { useState } from "react";
import GetPatients from "./GetPatients";
import GetPatient from "./GetPatient";
import CreatePatient from "./CreatePatient";
import ModifyPatient from "./ModifyPatient";
import DeletePatient from "./DeletePatient";

const PatientList = () => {
  const [displayAllPatients, setDisplayAllPatients] = useState(false);
  const [displayPatient, setDisplayPatient] = useState(false);
  const [displayCreatePatient, setDisplayCreatePatient] = useState(false);
  const [displayModifyPatient, setDisplayModifyPatient] = useState(false);
  const [displayDeletePatient, setDisplayDeletePatient] = useState(false);

  const toggleDisplayAllPatients = () => {
    setDisplayPatient(false);
    setDisplayCreatePatient(false);
    setDisplayModifyPatient(false);
    setDisplayDeletePatient(false);
    setDisplayAllPatients(true);
  };

  const toggleDisplayPatient = () => {
    setDisplayAllPatients(false);
    setDisplayCreatePatient(false);
    setDisplayModifyPatient(false);
    setDisplayDeletePatient(false);
    setDisplayPatient(true);
  };

  const toggleDisplayCreatePatient = () => {
    setDisplayAllPatients(false);
    setDisplayPatient(false);
    setDisplayCreatePatient(false);
    setDisplayModifyPatient(false);
    setDisplayDeletePatient(false);
    setDisplayCreatePatient(true);
  };

  const toggleDisplayModifyPatient = () => {
    setDisplayAllPatients(false);
    setDisplayPatient(false);
    setDisplayCreatePatient(false);
    setDisplayDeletePatient(false);
    setDisplayModifyPatient(true);
  };

  const toggleDisplayDeletePatient = () => {
    setDisplayAllPatients(false);
    setDisplayPatient(false);
    setDisplayCreatePatient(false);
    setDisplayModifyPatient(false);
    setDisplayDeletePatient(true);
  };

  return (
    <div className="main-container">
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayAllPatients}
        >
          Patients
        </button>
        <button style={{ marginRight: "10px" }} onClick={toggleDisplayPatient}>
          Search for Patient by Id
        </button>

        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayCreatePatient}
        >
          Create Patient
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayModifyPatient}
        >
          Modify Patient
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayDeletePatient}
        >
          Delete Patient
        </button>
      </div>

      {displayAllPatients && <GetPatients />}
      {displayPatient && <GetPatient />}
      {displayCreatePatient && <CreatePatient />}
      {displayModifyPatient && <ModifyPatient />}
      {displayDeletePatient && <DeletePatient />}
    </div>
  );
};

export default PatientList;
