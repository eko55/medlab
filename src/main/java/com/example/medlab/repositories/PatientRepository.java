package com.example.medlab.repositories;

import com.example.medlab.model.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    List<Patient> findByLabId(Long labId);

    boolean existsByPersonalNumber(String personalNumber);

}
