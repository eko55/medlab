import React, { useState } from "react";
import GetTestResults from "./GetTestResults";
import GetTestResult from "./GetTestResult";

const PatientExamList = () => {
  const [displayTestResults, setDisplayTestResults] = useState(false);
  const [displayTestResult, setDisplayTestResult] = useState(false);

  const toggleDisplayTestResults = () => {
    setDisplayTestResult(false);
    setDisplayTestResults(true);
  };

  const toggleDisplayTestResult = () => {
    setDisplayTestResults(false);
    setDisplayTestResult(true);
  };

  return (
    <div className="main-container">
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayTestResults}
        >
          Get Test Results
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={toggleDisplayTestResult}
        >
          Get Test Result
        </button>
      </div>

      {displayTestResults && <GetTestResults />}
      {displayTestResult && <GetTestResult />}
    </div>
  );
};

export default PatientExamList;
