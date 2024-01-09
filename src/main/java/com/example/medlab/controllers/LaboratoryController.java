package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.services.LaboratoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

@Tag(name = "Laboratories")
@RestController
@RequestMapping("/laboratories")
public class LaboratoryController {

    @Autowired
    private LaboratoryService laboratoryService;

    @Operation(
            summary = "Create a laboratory",
            responses = {@ApiResponse(responseCode = "201", description = "Laboratory is created", content = @Content),
                    @ApiResponse(responseCode = "404", description = "Laboratory not found", content = @Content)}
//            ,requestBody = {@RequestBody(
//                    content = @Content(
//                            mediaType = "application/json",
//                            schema = @Schema(ref = "LaboratoryInput.class")
//                    ))}
    )

    @PostMapping()
    public ResponseEntity<Void> saveLaboratory(@Valid @RequestBody Laboratory requestBody, UriComponentsBuilder uriComponentsBuilder) {
        Laboratory laboratory = laboratoryService.saveLaboratory(requestBody);

        URI uri = uriComponentsBuilder
                .path("laboratories/{id}")
                .buildAndExpand(laboratory.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
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
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }

    @Operation(summary = "Modify a laboratory")
    @PutMapping("/{labId}")
    public ResponseEntity<Void> modifyLaboratory(@PathVariable Long labId,@Valid @RequestBody Laboratory laboratory) {
        try {
            laboratoryService.modifyLaboratory(labId, laboratory);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }

    @Operation(summary = "Partially modify a laboratory")
    @PatchMapping("/{labId}")
    public ResponseEntity<Void> partiallyModifyLaboratory(@PathVariable Long labId,@RequestBody Laboratory laboratory) {
        try {
            laboratoryService.partiallyModifyLaboratory(labId, laboratory);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }

    @Operation(summary = "Delete a laboratory")
    @DeleteMapping("/{labId}")
    public ResponseEntity<Void> deleteLaboratory(@PathVariable Long labId) {
        try {
            laboratoryService.deleteLaboratory(labId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }

}
