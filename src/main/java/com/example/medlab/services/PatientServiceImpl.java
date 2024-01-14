package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.patient.PatientCreationInput;
import com.example.medlab.model.entities.Patient;
import com.example.medlab.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient savePatient(PatientCreationInput input) {
        Patient patient = new Patient(input);
        return patientRepository.save(patient);
    }

    @Override
    public Patient getPatient(Long patientId) {
        if (patientExists(patientId)){
            return patientRepository.findById(patientId).get();
        } else {
            throw new ResourceNotFoundException(String.format("Patient with id %s doesn't exists.", patientId));
        }
    }

    @Override
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient modifyPatient(Long patientId, PatientCreationInput input) {
        if (patientExists(patientId)) {
            Patient patient = new Patient(input);
            patient.setId(patientId);
            return patientRepository.save(patient);
        } else {
            throw new ResourceNotFoundException(String.format("Patient with id %s doesn't exists.", patientId));
        }
    }

    @Override
    public void deletePatient(Long patientId) {
        if (patientExists(patientId)) {
            patientRepository.deleteById(patientId);
        } else {
            throw new ResourceNotFoundException(String.format("Patient with id %s doesn't exists.", patientId));
        }
    }

    @Override
    public boolean patientExists(Long patientId) {
        return patientRepository.existsById(patientId);
    }
}
