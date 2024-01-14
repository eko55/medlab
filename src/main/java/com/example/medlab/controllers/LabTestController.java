package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.labtest.LabTestInput;
import com.example.medlab.model.entities.LabTest;
import com.example.medlab.services.LabTestService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "Laboratory Tests")
@RestController
@RequestMapping("/tests")
public class LabTestController {

    private LabTestService labTestService;

    public LabTestController(LabTestService labTestService) {
        this.labTestService = labTestService;
    }

    @PostMapping
    public ResponseEntity<LabTest> createTest(@Valid @RequestBody LabTestInput requestBody, UriComponentsBuilder builder) {
        LabTest test = labTestService.saveTest(requestBody);

        URI locationOfNewTestResource = builder
                .path("tests/{id}")
                .buildAndExpand(test.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewTestResource).body(test);
    }

    @GetMapping("/{testId}")
    public ResponseEntity<LabTest> getTest(@PathVariable Long testId) {
        try {
            return ResponseEntity.ok(labTestService.getTest(testId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @GetMapping
    public ResponseEntity<List<LabTest>> getTests() {
        return ResponseEntity.ok(labTestService.getTests());
    }

    @PutMapping("/{testId}")
    public ResponseEntity<LabTest> modifyTests(@PathVariable Long testId, @Valid @RequestBody LabTestInput requestBody) {
        try {
            return ResponseEntity.ok(labTestService.modifyTest(testId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @DeleteMapping("/{testId}")
    public ResponseEntity<Void> deleteTest(@RequestParam Long testId) {
        try {
            labTestService.deleteTest(testId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }
}