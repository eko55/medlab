package com.example.medlab.services;

import com.example.medlab.model.dto.lab.LaboratoryInput;
import com.example.medlab.model.entities.Laboratory;

import java.util.List;

public interface LaboratoryService {

    Laboratory saveLaboratory(LaboratoryInput laboratory);

    Laboratory getLaboratory(Long labId);

    Laboratory getLaboratory(String labName);

    List<Laboratory> getLaboratories();

    Laboratory modifyLaboratory(Long labId, LaboratoryInput laboratory);

    Laboratory partiallyModifyLaboratory(Long labId, LaboratoryInput laboratory);

    void deleteLaboratory(Long labId);

    boolean exists(Long labId);

    boolean existsByName(String labName);

}
