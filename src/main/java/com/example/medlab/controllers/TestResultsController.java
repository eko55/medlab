package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.example.medlab.model.entities.TestResults;
import com.example.medlab.services.TestResultsService;
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

    public TestResultsController(TestResultsService testResultsService) {
        this.testResultsService = testResultsService;
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
        if (employeeId != null && patientId != null) {
            try {
                return ResponseEntity.ok(testResultsService.getTestResultsByEmployeeAndPatientId(employeeId, patientId, authentication));
            } catch (ResourceNotFoundException e){
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
            }
        } else if (employeeId != null) {
            try {
                return ResponseEntity.ok(testResultsService.getTestResultsByEmployee(employeeId));
            } catch (ResourceNotFoundException e){
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
            }
        } else if (patientId != null) {
            try {
                return ResponseEntity.ok(testResultsService.getTestResultsForPatient(patientId));
            } catch (ResourceNotFoundException e){
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
            }
        } else {
            return ResponseEntity.ok(testResultsService.getTestResultsByEmployee());
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
