package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.employee.EmployeeCreationRequest;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.repositories.EmployeeRepository;
import com.example.medlab.repositories.LaboratoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    private LaboratoryRepository laboratoryRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, LaboratoryRepository laboratoryRepository) {
        this.employeeRepository = employeeRepository;
        this.laboratoryRepository = laboratoryRepository;
    }

    @Override
    public Employee saveEmployee(EmployeeCreationRequest request) {
        if (laboratoryRepository.existsByName(request.getLabName())) {
            Laboratory lab = laboratoryRepository.findByName(request.getLabName());
            if (!employeeRepository.existsByPersonalNumber(request.getPersonalNumber())) {
                Employee employee = Employee.builder()
                        .personalNumber(request.getPersonalNumber())
                        .firstName(request.getFirstName())
                        .lastName(request.getLastName())
                        .labId(lab.getId())
                        .build();
                return employeeRepository.save(employee);
            } else {
                throw new ResourceAlreadyExistsException("Employee with the given personal number already exists!");
            }
        } else {
            throw new ResourceAlreadyExistsException("Laboratory with the given name does not exists!");
        }
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
    public List<Employee> getEmployees(String labName) {
        if (laboratoryRepository.existsByName(labName)) {
            Laboratory laboratory = laboratoryRepository.findByName(labName);
            return employeeRepository.findByLabId(laboratory.getId());
        } else {
            throw new ResourceNotFoundException("No laboratory with such name exists!");
        }
    }

    @Override
    public Employee modifyEmployee(Long employeeId, EmployeeCreationRequest request) {
        if (laboratoryRepository.existsByName(request.getLabName())) {
            Laboratory lab = laboratoryRepository.findByName(request.getLabName());
            if (!employeeRepository.existsByPersonalNumber(request.getPersonalNumber())) {
                Employee employee = Employee.builder()
                        .id(employeeId)
                        .personalNumber(request.getPersonalNumber())
                        .firstName(request.getFirstName())
                        .lastName(request.getLastName())
                        .labId(lab.getId())
                        .build();
                return employeeRepository.save(employee);
            } else {
                throw new ResourceAlreadyExistsException("Employee with the given personal number already exists!");
            }
        } else {
            throw new ResourceAlreadyExistsException("Laboratory with the given name does not exists!");
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
