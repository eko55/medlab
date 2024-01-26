package com.example.medlab.repositories;

import com.example.medlab.model.entities.LabTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabTestRepository extends JpaRepository<LabTest,Long> {

    LabTest findByNameAndLabId(String name, Long labId);
}
