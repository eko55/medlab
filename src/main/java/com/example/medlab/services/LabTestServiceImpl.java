package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
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
    public LabTest saveTest(LabTestInput input) {
        if (!existsByNameAndLabId(input.getName(), input.getLabId())) {
            LabTest test = new LabTest(input);
            return labTestRepository.save(test);
        } else {
            throw new ResourceAlreadyExistsException("A test with the given name and lab id already exists!");
        }
    }

    @Override
    public LabTest getTest(Long testId) {
        if (existsById(testId)) {
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
        if (existsById(testId)) {
            LabTest test = new LabTest(input);
            test.setId(testId);
            return labTestRepository.save(test);
        } else {
            throw new ResourceNotFoundException(String.format("Test with id %s doesn't exists.", testId));
        }
    }

    @Override
    public void deleteTest(Long testId) {
        if (existsById(testId)) {
            labTestRepository.deleteById(testId);
        } else {
            throw new ResourceNotFoundException(String.format("Test with id %s doesn't exists.", testId));
        }
    }

    @Override
    public boolean existsById(Long testId) {
        return labTestRepository.existsById(testId);
    }

    @Override
    public boolean existsByNameAndLabId(String name, Long labId) {
        return labTestRepository.existsByNameAndLabId(name, labId);
    }
}
