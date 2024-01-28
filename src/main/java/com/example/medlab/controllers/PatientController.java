package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.patient.PatientCreationRequest;
import com.example.medlab.model.entities.Patient;
import com.example.medlab.services.LaboratoryService;
import com.example.medlab.services.PatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "Patients")
@RestController
@RequestMapping("/patients")
public class PatientController {

    private PatientService patientService;

    private LaboratoryService laboratoryService;

    public PatientController(PatientService patientService, LaboratoryService laboratoryService) {
        this.patientService = patientService;
        this.laboratoryService = laboratoryService;
    }

    @Operation(summary = "Register a patient")
    @PostMapping
    public ResponseEntity<Patient> createPatient(@Valid @RequestBody PatientCreationRequest requestBody, UriComponentsBuilder builder) {
        Patient patient = patientService.savePatient(requestBody);

        URI locationOfNewPatientResource = builder
                .path("patients/{id}")
                .buildAndExpand(patient.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewPatientResource).body(patient);
    }

    @Operation(summary = "Get a patient")
    @GetMapping("/{patientId}")
    public ResponseEntity<Patient> getPatient(@PathVariable Long patientId) {
        try {
            return ResponseEntity.ok(patientService.getPatient(patientId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Get patients")
    @GetMapping
    public ResponseEntity<List<Patient>> getPatients(@RequestParam(required = false) String labName) {
        if(labName == null) {
            return ResponseEntity.ok(patientService.getPatients());
        } else {
            try {
                return ResponseEntity.ok(patientService.getPatients(labName));
            } catch (ResourceNotFoundException e) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
            }
        }
    }

    @Operation(summary = "Modify patient information")
    @PutMapping("/{patientId}")
    public ResponseEntity<Patient> modifyPatient(@PathVariable Long patientId, @Valid @RequestBody PatientCreationRequest requestBody) {
        try {
            return ResponseEntity.ok(patientService.modifyPatient(patientId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Delete a patient")
    @DeleteMapping("/{patientId}")
    public ResponseEntity<Void> deletePatient(@RequestParam Long patientId) {
        try {
            patientService.deletePatient(patientId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }
}
