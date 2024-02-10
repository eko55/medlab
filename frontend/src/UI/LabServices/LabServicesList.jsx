import React, { useState } from "react";
import GetLabServices from "../../UI/LabServices/GetLabServices";
import GetLabService from "../../UI/LabServices/GetLabService";
import ModifyLabService from "../../UI/LabServices/ModifyLabService";
import DeleteLabService from "./DeleteLabService";
import CreateLabService from "./CreateLabService";

const LabServicesList = () => {
  const [displayAllLabServices, setDisplayAllLabServices] = useState(false);
  const [displayLabService, setDisplayLabService] = useState(false);
  const [displayCreateLabService, setDisplayCreateLabService] = useState(false);
  const [displayModifyLabService, setDisplayModifyLabService] = useState(false);
  const [displayDeleteLabService, setDisplayDeleteLabService] = useState(false);

  const toggleDisplayAllLabServices = () => {
    setDisplayAllLabServices(false);
    setDisplayLabService(false);
    setDisplayCreateLabService(false);
    setDisplayModifyLabService(false);
    setDisplayDeleteLabService(false);
    setDisplayAllLabServices(true);
  };

  const toggleDisplayLabService = () => {
    setDisplayAllLabServices(false);
    setDisplayLabService(false);
    setDisplayCreateLabService(false);
    setDisplayModifyLabService(false);
    setDisplayDeleteLabService(false);
    setDisplayLabService(true);
  };

  const toggleDisplayCreateLabService = () => {
    setDisplayAllLabServices(false);
    setDisplayLabService(false);
    setDisplayCreateLabService(false);
    setDisplayModifyLabService(false);
    setDisplayDeleteLabService(false);
    setDisplayCreateLabService(true);
  };

  const toggleModifyLabServices = () => {
    setDisplayAllLabServices(false);
    setDisplayLabService(false);
    setDisplayCreateLabService(false);
    setDisplayModifyLabService(false);
    setDisplayDeleteLabService(false);
    setDisplayModifyLabService(true);
  };

  const toggleDeleteLabServices = () => {
    setDisplayAllLabServices(false);
    setDisplayLabService(false);
    setDisplayCreateLabService(false);
    setDisplayModifyLabService(false);
    setDisplayDeleteLabService(false);
    setDisplayDeleteLabService(true);
  };

  return (
    <div className="main-container">
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayAllLabServices}
        >
          Lab Services
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayLabService}
        >
          Search for lab service by id
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayCreateLabService}
        >
          Add Lab Service
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleModifyLabServices}
        >
          Modify Lab Service
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDeleteLabServices}
        >
          Delete Lab Service
        </button>
      </div>

      {displayAllLabServices && <GetLabServices />}

      {displayLabService && <GetLabService />}

      {displayCreateLabService && <CreateLabService />}

      {displayModifyLabService && <ModifyLabService />}

      {displayDeleteLabService && <DeleteLabService />}
    </div>
  );
};

export default LabServicesList;
