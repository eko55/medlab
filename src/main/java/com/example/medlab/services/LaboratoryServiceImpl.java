package com.example.medlab.services;

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
        Laboratory laboratory = new Laboratory(input);
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
    public void partiallyModifyLaboratory(Long labId, LaboratoryInput input) {
        if (exists(labId)) {
            Laboratory originalLab = getLaboratory(labId);
            LaboratoryInput lab = new LaboratoryInput(originalLab);
            lab.setHospitalName(input.getHospitalName() != null ? input.getHospitalName() : lab.getHospitalName());
            lab.setAddress(input.getAddress() != null ? input.getAddress() : lab.getAddress());
            lab.setEmail(input.getEmail() != null ? input.getEmail() : lab.getEmail());
            lab.setName(input.getName() != null ? input.getName() : lab.getName());
            lab.setPhone(input.getPhone() != null ? input.getPhone() : lab.getPhone());
            saveLaboratory(lab);
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
