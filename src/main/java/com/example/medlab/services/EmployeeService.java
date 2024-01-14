package com.example.medlab.services;

import com.example.medlab.model.dto.employee.EmployeeCreationInput;
import com.example.medlab.model.entities.Employee;

import java.util.List;

public interface EmployeeService {

    Employee saveEmployee(EmployeeCreationInput employee);

    Employee getEmployee(Long employeeId);

    List<Employee> getEmployees();

    Employee modifyEmployee(Long employeeId, EmployeeCreationInput employee);

    void deleteEmployee(Long employeeId);

    boolean employeeExists(Long employeeId);
}
