package com.example.medlab.services;

import com.example.medlab.model.dto.employee.EmployeeCreationRequest;
import com.example.medlab.model.entities.Employee;

import java.util.List;

public interface EmployeeService {

    Employee saveEmployee(EmployeeCreationRequest employee);

    Employee getEmployee(Long employeeId);

    List<Employee> getEmployees();

    List<Employee> getEmployees(String labName);

    Employee modifyEmployee(Long employeeId, EmployeeCreationRequest employee);

    void deleteEmployee(Long employeeId);

    boolean employeeExists(Long employeeId);
}
