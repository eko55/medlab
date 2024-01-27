package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.model.entities.LabTest;
import com.example.medlab.model.entities.TestResults;
import com.example.medlab.repositories.TestResultsRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestResultsServiceImpl implements TestResultsService {

    private TestResultsRepository testResultsRepository;

    private LabTestService labTestService;

    private EmployeeService employeeService;

    private PatientService patientService;

    public TestResultsServiceImpl(TestResultsRepository testResultsRepository, LabTestService labTestService, EmployeeService employeeService, PatientService patientService) {
        this.testResultsRepository = testResultsRepository;
        this.labTestService = labTestService;
        this.employeeService = employeeService;
        this.patientService = patientService;
    }

    @Override
    public TestResults saveTestResult(TestResultsInput input) {
        Employee employee = employeeService.getEmployee(input.getLabEmployeeId());
        LabTest labTest = labTestService.getTest(input.getLabTestName(), employee.getLabId());

        TestResults testResults = TestResults.builder()
                .date(input.getDate())
                .values(input.getValues())
                .labTestId(labTest.getLabId())
                .patientId(input.getPatientId())
                .labEmployeeId(input.getLabEmployeeId())
                .build();
        return testResultsRepository.save(testResults);
    }

    @Override
    public TestResults getTestResult(Long testResultId) {
        if (testResultsRepository.existsById(testResultId)) {
            return testResultsRepository.findById(testResultId).get();
        } else {
            throw new ResourceNotFoundException("No test result with such id exists!");
        }
    }

    @Override
    public List<TestResults> getTestResultsByEmployee() {
        return testResultsRepository.findAll();
    }

    @Override
    public List<TestResults> getTestResultsByEmployee(Long employeeId) {
        if (employeeService.employeeExists(employeeId)){
            return testResultsRepository.findByLabEmployeeId(employeeId);
        } else {
            throw new ResourceNotFoundException("Employee with such id does not exists!");
        }
    }

    @Override
    public List<TestResults> getTestResultsForPatient(Long patientId) {
        if (patientService.patientExists(patientId)){
            return testResultsRepository.findByPatientId(patientId);
        } else {
            throw new ResourceNotFoundException("Patient with such id does not exists!");
        }
    }

    @Override
    public List<TestResults> getTestResultsByEmployeeAndPatientId(Long employeeId, Long patientId, Authentication authentication) {
        authentication.getAuthorities();
        if (employeeService.employeeExists(employeeId)){
            if (patientService.patientExists(patientId)) {
                return testResultsRepository.findByLabEmployeeIdAndPatientId(employeeId, patientId);
            } else {
                throw new ResourceNotFoundException("Patient with such id does not exists!");
            }
        } else {
            throw new ResourceNotFoundException("Employee with such id does not exists!");
        }
    }

    @Override
    public TestResults modifyTestResult(Long testResultId, TestResultsInput input) {
        Employee employee = employeeService.getEmployee(input.getLabEmployeeId());
        LabTest labTest = labTestService.getTest(input.getLabTestName(), employee.getLabId());

        if (testResultsRepository.existsById(testResultId)) {
            TestResults testResults = TestResults.builder()
                    .id(testResultId)
                    .date(input.getDate())
                    .values(input.getValues())
                    .labTestId(labTest.getLabId())
                    .patientId(input.getPatientId())
                    .labEmployeeId(input.getLabEmployeeId())
                    .build();
            testResults.setId(testResultId);
            return testResultsRepository.save(testResults);
        } else {
            throw new ResourceNotFoundException("No test result with such id exists!");
        }
    }

    @Override
    public void deleteTestResult(Long testResultId) {
        if (testResultsRepository.existsById(testResultId)) {
            testResultsRepository.deleteById(testResultId);
        } else {
            throw new ResourceNotFoundException("No test result with such id exists!");
        }
    }

    @Override
    public boolean testResultExists(Long testResultId) {
        return testResultsRepository.existsById(testResultId);
    }
}
