package com.example.medlab.services;

import com.example.medlab.model.dto.labtest.LabTestInput;
import com.example.medlab.model.entities.LabTest;

import java.util.List;

public interface LabTestService {

    LabTest saveTest(LabTestInput labTestInput);

    LabTest getTest(Long testId);

    LabTest getTest(String testName, Long labId);

    List<LabTest> getTests();

    LabTest modifyTest(Long testId, LabTestInput labTestInput);

    void deleteTest(Long testId);

    boolean existsById(Long testId);

    boolean existsByNameAndLabId(String name, Long labId);
}
