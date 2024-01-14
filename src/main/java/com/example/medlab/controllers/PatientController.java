package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.patient.PatientCreationInput;
import com.example.medlab.model.entities.Patient;
import com.example.medlab.services.PatientService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping
    public ResponseEntity<Patient> createUser(@Valid @RequestBody PatientCreationInput requestBody, UriComponentsBuilder builder) {
        Patient patient = patientService.savePatient(requestBody);

        URI locationOfNewPatientResource = builder
                .path("patients/{id}")
                .buildAndExpand(patient.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewPatientResource).body(patient);
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<Patient> getPatient(@PathVariable Long patientId) {
        try {
            return ResponseEntity.ok(patientService.getPatient(patientId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @GetMapping
    public ResponseEntity<List<Patient>> getPatients() {
        return ResponseEntity.ok(patientService.getPatients());
    }

    @PutMapping("/{patientId}")
    public ResponseEntity<Patient> modifyPatient(@PathVariable Long patientId, @Valid @RequestBody PatientCreationInput requestBody) {
        try {
            return ResponseEntity.ok(patientService.modifyPatient(patientId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

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
