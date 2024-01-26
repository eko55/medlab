package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.labtest.LabTestInput;
import com.example.medlab.model.entities.LabTest;
import com.example.medlab.repositories.LabTestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabTestServiceImpl implements LabTestService {

    private LabTestRepository labTestRepository;

    public LabTestServiceImpl(LabTestRepository labTestRepository) {
        this.labTestRepository = labTestRepository;
    }

    @Override
    public LabTest saveTest(LabTestInput labTestInput) {
        LabTest test = new LabTest(labTestInput);
        return labTestRepository.save(test);
    }

    @Override
    public LabTest getTest(Long testId) {
        if (testExists(testId)) {
            return labTestRepository.findById(testId).get();
        } else {
            throw new ResourceNotFoundException(String.format("Test with id %s doesn't exists.", testId));
        }
    }

    @Override
    public LabTest getTest(String testName, Long labId) {
        return labTestRepository.findByNameAndLabId(testName, labId);
    }

    @Override
    public List<LabTest> getTests() {
        return labTestRepository.findAll();
    }

    @Override
    public LabTest modifyTest(Long testId, LabTestInput input) {
        if (testExists(testId)) {
            LabTest test = new LabTest(input);
            test.setId(testId);
            return labTestRepository.save(test);
        } else {
            throw new ResourceNotFoundException(String.format("Test with id %s doesn't exists.", testId));
        }
    }

    @Override
    public void deleteTest(Long testId) {
        if (testExists(testId)) {
            labTestRepository.deleteById(testId);
        } else {
            throw new ResourceNotFoundException(String.format("Test with id %s doesn't exists.", testId));
        }
    }

    @Override
    public boolean testExists(Long testId) {
        return labTestRepository.existsById(testId);
    }
}
