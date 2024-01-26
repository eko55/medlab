package com.example.medlab.repositories;

import com.example.medlab.model.entities.Laboratory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaboratoryRepository extends JpaRepository<Laboratory, Long> {

    Laboratory findByName(String labName);

    boolean existsByName(String labName);
}
