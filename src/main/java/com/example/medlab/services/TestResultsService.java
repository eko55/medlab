package com.example.medlab.services;

import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.example.medlab.model.entities.TestResults;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface TestResultsService {
    TestResults saveTestResult(TestResultsInput patient);

    TestResults getTestResult(Long testResultId);

    List<TestResults> getTestResultsByEmployee();

    List<TestResults> getTestResultsByEmployee(Long employeeId);

    List<TestResults> getTestResultsForPatient(Long patientId);

    List<TestResults> getTestResultsByEmployeeAndPatientId(Long employeeId, Long patientId, Authentication authentication);

    TestResults modifyTestResult(Long testResultId, TestResultsInput employee);

    void deleteTestResult(Long testResultId);

    boolean testResultExists(Long testResultId);
}
