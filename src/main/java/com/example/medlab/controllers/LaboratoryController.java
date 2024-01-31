package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.lab.LaboratoryInput;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.services.LaboratoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "Laboratories")
@RestController
@RequestMapping("/laboratories")
public class LaboratoryController {

    private LaboratoryService laboratoryService;

    public LaboratoryController(LaboratoryService laboratoryService) {
        this.laboratoryService = laboratoryService;
    }

    @Operation(
            summary = "Create a laboratory",
            responses = {@ApiResponse(responseCode = "201", description = "Laboratory is created", content = @Content),
                    @ApiResponse(responseCode = "404", description = "Laboratory not found", content = @Content)}
    )

    @PostMapping()
    public ResponseEntity<Laboratory> saveLaboratory(@Valid @RequestBody LaboratoryInput requestBody, UriComponentsBuilder uriComponentsBuilder) {
        Laboratory laboratory;
        try {
            laboratory = laboratoryService.saveLaboratory(requestBody);
        } catch (ResourceAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }

        URI uri = uriComponentsBuilder
                .path("laboratories/{id}")
                .buildAndExpand(laboratory.getId())
                .toUri();

        return ResponseEntity.created(uri).body(laboratory);
    }

    @Operation(summary = "Get laboratories")
    @GetMapping
    public ResponseEntity<List<Laboratory>> getLaboratories() {
        return ResponseEntity.ok(laboratoryService.getLaboratories());
    }

    @Operation(summary = "Get a laboratory")
    @GetMapping("/{labId}")
    public ResponseEntity<Laboratory> getLaboratory(@PathVariable Long labId) {
        try {
            return ResponseEntity.ok(laboratoryService.getLaboratory(labId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Modify a laboratory")
    @PutMapping("/{labId}")
    public ResponseEntity<Laboratory> modifyLaboratory(@PathVariable Long labId,@Valid @RequestBody LaboratoryInput requestBody) {
        try {
            Laboratory laboratory = laboratoryService.modifyLaboratory(labId, requestBody);
            return ResponseEntity.ok(laboratory);
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Partially modify a laboratory")
    @PatchMapping("/{labId}")
    public ResponseEntity<Laboratory> partiallyModifyLaboratory(@PathVariable Long labId,@RequestBody LaboratoryInput requestBody) {
        try {
            Laboratory laboratory = laboratoryService.partiallyModifyLaboratory(labId, requestBody);
            return ResponseEntity.ok(laboratory);
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Delete a laboratory")
    @DeleteMapping("/{labId}")
    public ResponseEntity<Void> deleteLaboratory(@PathVariable Long labId) {
        try {
            laboratoryService.deleteLaboratory(labId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

}
