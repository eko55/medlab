import React, { useState } from "react";
import GetEmployees from "./GetEmployees";
import GetEmployee from "./GetEmployee";
import CreateEmployee from "./CreateEmployee";
import ModifyEmployee from "./ModifyEmployee";
import DeleteEmployee from "./DeleteEmployee";

const StaffList = () => {
  const [displayAllEmployees, setDisplayAllEmployees] = useState(false);
  const [displayEmployee, setDisplayEmployee] = useState(false);
  const [displayCreateEmployee, setDisplayCreateEmployee] = useState(false);
  const [displayModifyEmployee, setDisplayModifyEmployee] = useState(false);
  const [displayDeleteEmployee, setDisplayDeleteEmployee] = useState(false);

  const toggleDisplayAllEmployees = () => {
    setDisplayEmployee(false);
    setDisplayCreateEmployee(false);
    setDisplayModifyEmployee(false);
    setDisplayDeleteEmployee(false);
    setDisplayAllEmployees(true);
  };

  const toggleDisplayEmployee = () => {
    setDisplayAllEmployees(false);
    setDisplayCreateEmployee(false);
    setDisplayModifyEmployee(false);
    setDisplayDeleteEmployee(false);
    setDisplayEmployee(true);
  };

  const toggleDisplayCreateEmployee = () => {
    setDisplayAllEmployees(false);
    setDisplayEmployee(false);
    setDisplayModifyEmployee(false);
    setDisplayDeleteEmployee(false);
    setDisplayCreateEmployee(true);
  };

  const toggleDisplayModifyEmployee = () => {
    setDisplayAllEmployees(false);
    setDisplayEmployee(false);
    setDisplayCreateEmployee(false);
    setDisplayDeleteEmployee(false);
    setDisplayModifyEmployee(true);
  };

  const toggleDisplayDeleteEmployee = () => {
    setDisplayAllEmployees(false);
    setDisplayEmployee(false);
    setDisplayCreateEmployee(false);
    setDisplayModifyEmployee(false);
    setDisplayDeleteEmployee(true);
  };

  return (
    <div className="main-container">
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayAllEmployees}
        >
          Employees
        </button>
        <button style={{ marginRight: "10px" }} onClick={toggleDisplayEmployee}>
          Search for employee by Id
        </button>

        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayCreateEmployee}
        >
          Create employee
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayModifyEmployee}
        >
          Modify employee
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayDeleteEmployee}
        >
          Delete employee
        </button>
      </div>

      {displayAllEmployees && <GetEmployees />}
      {displayEmployee && <GetEmployee />}
      {displayCreateEmployee && <CreateEmployee />}
      {displayModifyEmployee && <ModifyEmployee />}
      {displayDeleteEmployee && <DeleteEmployee />}
    </div>
  );
};

export default StaffList;
