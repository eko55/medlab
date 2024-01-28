package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.employee.EmployeeCreationRequest;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.services.EmployeeService;
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

@Tag(name = "Employees")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Operation(summary = "Create an employee")
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody EmployeeCreationRequest requestBody, UriComponentsBuilder builder) {
        Employee employee;
        try {
            employee = employeeService.saveEmployee(requestBody);
        } catch (ResourceAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }

        URI locationOfNewUserResource = builder
                .path("employees/{id}")
                .buildAndExpand(employee.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewUserResource).body(employee);
    }

    @Operation(summary = "Get an employee")
    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long employeeId) {
        try {
            return ResponseEntity.ok(employeeService.getEmployee(employeeId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Get employees")
    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees(@RequestParam(required = false) String labName) {
        if (labName != null) {
            return ResponseEntity.ok(employeeService.getEmployees(labName));
        } else {
            return ResponseEntity.ok(employeeService.getEmployees());
        }
    }

    @Operation(summary = "Modify an employee")
    @PutMapping("/{employeeId}")
    public ResponseEntity<Employee> modifyEmployee(@PathVariable Long employeeId, @Valid @RequestBody EmployeeCreationRequest requestBody) {
        try {
            return ResponseEntity.ok(employeeService.modifyEmployee(employeeId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Delete an employee")
    @DeleteMapping("/{employeeId}")
    public ResponseEntity<Void> deleteEmployee(@RequestParam Long employeeId) {
        try {
            employeeService.deleteEmployee(employeeId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

}
