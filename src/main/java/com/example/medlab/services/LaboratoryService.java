package com.example.medlab.services;

import com.example.medlab.model.dto.lab.LaboratoryInput;
import com.example.medlab.model.entities.Laboratory;

import java.util.List;

public interface LaboratoryService {

    Laboratory saveLaboratory(LaboratoryInput laboratory);

    Laboratory getLaboratory(Long labId);

    List<Laboratory> getLaboratories();

    void modifyLaboratory(Long labId, LaboratoryInput laboratory);

    void partiallyModifyLaboratory(Long labId, LaboratoryInput laboratory);

    void deleteLaboratory(Long labId);

    boolean exists(Long labId);
}
