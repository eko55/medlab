package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.repositories.LaboratoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaboratoryServiceImpl implements LaboratoryService {

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public Laboratory saveLaboratory(Laboratory laboratory) {
        return laboratoryRepository.save(laboratory);
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
    public List<Laboratory> getLaboratories() {
        return laboratoryRepository.findAll();
    }

    @Override
    public void modifyLaboratory(Long labId, Laboratory laboratory) {
        if (exists(labId)) {
            saveLaboratory(laboratory);
        } else {
            throw new ResourceNotFoundException("Laboratory not found.");
        }
    }

    @Override
    public void partiallyModifyLaboratory(Long labId, Laboratory inputLaboratory) {
        if (exists(labId)) {
            Laboratory originalLab = getLaboratory(labId);
            originalLab.setHospitalName(inputLaboratory.getHospitalName() != null ? inputLaboratory.getHospitalName() : originalLab.getHospitalName());
            originalLab.setAddress(inputLaboratory.getAddress() != null ? inputLaboratory.getAddress() : originalLab.getAddress());
            originalLab.setEmail(inputLaboratory.getEmail() != null ? inputLaboratory.getEmail() : originalLab.getEmail());
            originalLab.setName(inputLaboratory.getName() != null ? inputLaboratory.getName() : originalLab.getName());
            originalLab.setPhone(inputLaboratory.getPhone() != null ? inputLaboratory.getPhone() : originalLab.getPhone());
            saveLaboratory(originalLab);
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
}
