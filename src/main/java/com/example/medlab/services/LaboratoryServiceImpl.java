package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.lab.LaboratoryInput;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.repositories.LaboratoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaboratoryServiceImpl implements LaboratoryService {

    private LaboratoryRepository laboratoryRepository;

    public LaboratoryServiceImpl(LaboratoryRepository laboratoryRepository) {
        this.laboratoryRepository = laboratoryRepository;
    }

    @Override
    public Laboratory saveLaboratory(LaboratoryInput input) {
        if (!laboratoryRepository.existsByName(input.getName())) {
            Laboratory laboratory = new Laboratory(input);
            return laboratoryRepository.save(laboratory);
        } else {
            throw new ResourceAlreadyExistsException("Laboratory with the given name already exists!");
        }
    }

    @Override
    public Laboratory getLaboratory(Long labId) {
        if (exists(labId)) {
            return laboratoryRepository.findById(labId).get();
        } else {
            throw new ResourceNotFoundException("Laboratory not found.");
        }
    }

    @Override
    public Laboratory getLaboratory(String labName) {
        return laboratoryRepository.findByName(labName);
    }

    @Override
    public List<Laboratory> getLaboratories() {
        return laboratoryRepository.findAll();
    }

    @Override
    public void modifyLaboratory(Long labId, LaboratoryInput input) {
        if (exists(labId)) {
            Laboratory newLab = new Laboratory(input);
            newLab.setId(labId);
            laboratoryRepository.save(newLab);
        } else {
            throw new ResourceNotFoundException("Laboratory not found.");
        }
    }

    @Override
    public Laboratory partiallyModifyLaboratory(Long labId, LaboratoryInput input) {
        if (exists(labId)) {
            Laboratory originalLab = getLaboratory(labId);
            originalLab.setHospitalName(input.getHospitalName() != null ? input.getHospitalName() : originalLab.getHospitalName());
            originalLab.setAddress(input.getAddress() != null ? input.getAddress() : originalLab.getAddress());
            originalLab.setEmail(input.getEmail() != null ? input.getEmail() : originalLab.getEmail());
            originalLab.setName(input.getName() != null ? input.getName() : originalLab.getName());
            originalLab.setPhone(input.getPhone() != null ? input.getPhone() : originalLab.getPhone());
            return laboratoryRepository.save(originalLab);
        } else {
            throw new ResourceNotFoundException("Laboratory not found.");
        }
    }

    @Override
    public void deleteLaboratory(Long labId) {
        if (exists(labId)) {
            laboratoryRepository.deleteById(labId);
        } else {
            throw new ResourceNotFoundException("Laboratory not found.");
        }
    }

    @Override
    public boolean exists(Long labId) {
        return laboratoryRepository.existsById(labId);
    }

    @Override
    public boolean existsByName(String labName) {
        return laboratoryRepository.existsByName(labName);
    }
}
