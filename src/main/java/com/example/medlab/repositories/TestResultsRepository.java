package com.example.medlab.repositories;

import com.example.medlab.model.entities.TestResults;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TestResultsRepository extends JpaRepository<TestResults, Long> {

    List<TestResults> findByLabEmployeeId(Long employeeId);

    List<TestResults> findByPatientId(Long patientId);

    List<TestResults> findByLabEmployeeIdAndPatientId(Long employeeId, Long patientId);

}
