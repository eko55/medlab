package com.example.medlab.controllers;

import com.example.medlab.exceptions.NoAssignedRoleException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.Role;
import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.example.medlab.model.entities.AppUser;
import com.example.medlab.model.entities.Patient;
import com.example.medlab.model.entities.TestResults;
import com.example.medlab.services.PatientService;
import com.example.medlab.services.TestResultsService;
import com.example.medlab.services.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "Test Results")
@RestController
@RequestMapping("/testresults")
public class TestResultsController {

    private TestResultsService testResultsService;

    private UserService userService;

    private PatientService patientService;

    public TestResultsController(TestResultsService testResultsService, UserService userService, PatientService patientService) {
        this.testResultsService = testResultsService;
        this.userService = userService;
        this.patientService = patientService;
    }

    @PostMapping
    public ResponseEntity<TestResults> createTestResults(@Valid @RequestBody TestResultsInput requestBody, UriComponentsBuilder builder) {
        TestResults testResults = testResultsService.saveTestResult(requestBody);

        URI locationOfNewTestResultsResource = builder
                .path("testresults/{id}")
                .buildAndExpand(testResults.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewTestResultsResource).body(testResults);
    }

    @GetMapping("/{testResultsId}")
    public ResponseEntity<TestResults> getTest(@PathVariable Long testResultsId) {
        try {
            return ResponseEntity.ok(testResultsService.getTestResult(testResultsId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @GetMapping
    public ResponseEntity<List<TestResults>> getTestResults(@RequestParam(required = false) Long employeeId, @RequestParam(required = false) Long patientId, Authentication authentication) {
        if (userService.hasRole(authentication, Role.EMPLOYEE)) {
            if (employeeId != null && patientId != null) {
                try {
                    return ResponseEntity.ok(testResultsService.getTestResultsByEmployeeAndPatientId(employeeId, patientId, authentication));
                } catch (ResourceNotFoundException e) {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
                }
            } else if (employeeId != null) {
                try {
                    return ResponseEntity.ok(testResultsService.getTestResultsByEmployee(employeeId));
                } catch (ResourceNotFoundException e) {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
                }
            } else if (patientId != null) {
                try {
                    return ResponseEntity.ok(testResultsService.getTestResultsForPatient(patientId));
                } catch (ResourceNotFoundException e) {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
                }
            } else {
                return ResponseEntity.ok(testResultsService.getTestResultsByEmployee());
            }
        } else if (userService.hasRole(authentication, Role.PATIENT)) {
            AppUser user = userService.getUserByUsername(authentication.getName());
            Patient patient = patientService.getPatientByUserId(user.getId());
            try {
                return ResponseEntity.ok(testResultsService.getTestResultsForPatient(patient.getId()));
            } catch (ResourceNotFoundException e) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
            }
        } else {
            throw new NoAssignedRoleException("The user should have either EMPLOYEE or PATIENT role assigned to execute the give operation!");
        }
    }

    @PutMapping("/{testResultsId}")
    public ResponseEntity<TestResults> modifyTests(@PathVariable Long testResultsId, @Valid @RequestBody TestResultsInput requestBody) {
        try {
            return ResponseEntity.ok(testResultsService.modifyTestResult(testResultsId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @DeleteMapping("/{testResultsId}")
    public ResponseEntity<Void> deleteTest(@RequestParam Long testResultsId) {
        try {
            testResultsService.deleteTestResult(testResultsId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }
}
