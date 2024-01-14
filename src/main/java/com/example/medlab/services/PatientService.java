package com.example.medlab.services;

import com.example.medlab.model.dto.employee.EmployeeCreationInput;
import com.example.medlab.model.dto.patient.PatientCreationInput;
import com.example.medlab.model.entities.Employee;
import com.example.medlab.model.entities.Patient;

import java.util.List;

public interface PatientService {

    Patient savePatient(PatientCreationInput patient);

    Patient getPatient(Long patientId);

    List<Patient> getPatients();

    Patient modifyPatient(Long patientId, PatientCreationInput employee);

    void deletePatient(Long patientId);

    boolean patientExists(Long patientId);
}
