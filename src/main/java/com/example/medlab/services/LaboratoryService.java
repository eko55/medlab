package com.example.medlab.services;

import com.example.medlab.model.entities.Laboratory;

import java.util.List;

public interface LaboratoryService {

    Laboratory saveLaboratory(Laboratory laboratory);

    Laboratory getLaboratory(Long labId);

    List<Laboratory> getLaboratories();

    void modifyLaboratory(Long labId, Laboratory laboratory);

    void partiallyModifyLaboratory(Long labId, Laboratory laboratory);

    void deleteLaboratory(Long labId);

    boolean exists(Long labId);
}
