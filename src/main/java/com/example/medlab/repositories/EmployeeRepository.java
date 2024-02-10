package com.example.medlab.repositories;

import com.example.medlab.model.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    boolean existsByPersonalNumber(String personalNumber);

    Employee findByPersonalNumber(String personalNumber);

    List<Employee> findByLabId(Long labId);
}
