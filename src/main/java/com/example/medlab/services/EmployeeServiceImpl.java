package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.employee.EmployeeCreationInput;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.repositories.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee saveEmployee(EmployeeCreationInput input) {
        Employee employee = new Employee(input);
        return employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployee(Long employeeId) {
        if (employeeExists(employeeId)) {
            return employeeRepository.findById(employeeId).get();
        } else {
            throw new ResourceNotFoundException(String.format("Employee with id %s doesn't exists.", employeeId));
        }
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee modifyEmployee(Long employeeId, EmployeeCreationInput input) {
        if (employeeExists(employeeId)) {
            Employee employee = new Employee(input);
            employee.setId(employeeId);
            return employeeRepository.save(employee);
        } else {
            throw new ResourceNotFoundException(String.format("Employee with id %s doesn't exists.", employeeId));
        }
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        if (employeeExists(employeeId)) {
           employeeRepository.deleteById(employeeId);
        } else {
            throw new ResourceNotFoundException(String.format("Employee with id %s doesn't exists.", employeeId));
        }
    }

    @Override
    public boolean employeeExists(Long employeeId) {
        return employeeRepository.existsById(employeeId);
    }
}
