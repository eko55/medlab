package com.example.medlab.services;

import com.example.medlab.model.dto.patient.PatientCreationRequest;
import com.example.medlab.model.entities.Patient;

import java.util.List;

public interface PatientService {

    Patient savePatient(PatientCreationRequest patient);

    Patient getPatient(Long patientId);

    Patient getPatientByUserId(Long userId);

    List<Patient> getPatients();

    List<Patient> getPatients(String labName);

    Patient modifyPatient(Long patientId, PatientCreationRequest employee);

    void deletePatient(Long patientId);

    boolean patientExists(Long patientId);
}
