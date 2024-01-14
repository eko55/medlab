package com.example.medlab.controllers;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.employee.EmployeeCreationInput;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.services.EmployeeService;
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

    @PostMapping
    public ResponseEntity<Employee> createUser(@Valid @RequestBody EmployeeCreationInput requestBody, UriComponentsBuilder builder) {
        Employee employee = employeeService.saveEmployee(requestBody);

        URI locationOfNewUserResource = builder
                .path("employees/{id}")
                .buildAndExpand(employee.getId())
                .toUri();

        return ResponseEntity.created(locationOfNewUserResource).body(employee);
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long employeeId) {
        try {
            return ResponseEntity.ok(employeeService.getEmployee(employeeId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(employeeService.getEmployees());
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<Employee> modifyEmployee(@PathVariable Long employeeId, @Valid @RequestBody EmployeeCreationInput requestBody) {
        try {
            return ResponseEntity.ok(employeeService.modifyEmployee(employeeId, requestBody));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

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
