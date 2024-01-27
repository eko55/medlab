package com.example.medlab.services;

import com.example.medlab.exceptions.ResourceAlreadyExistsException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.patient.PatientCreationRequest;
import com.example.medlab.model.entities.Laboratory;
import com.example.medlab.model.entities.Patient;
import com.example.medlab.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;

    private LaboratoryService laboratoryService;

    private UserService userService;

    public PatientServiceImpl(PatientRepository patientRepository, LaboratoryService laboratoryService, UserService userService) {
        this.patientRepository = patientRepository;
        this.laboratoryService = laboratoryService;
        this.userService = userService;
    }

    @Override
    public Patient savePatient(PatientCreationRequest request) {
        if (laboratoryService.existsByName(request.getLabName())) {
            Laboratory lab = laboratoryService.getLaboratory(request.getLabName());
            if (!patientRepository.existsByPersonalNumber(request.getPersonalNumber())) {
                Patient patient = Patient.builder()
                        .personalNumber(request.getPersonalNumber())
                        .firstName(request.getFirstName())
                        .lastName(request.getLastName())
                        .labId(lab.getId())
                        .build();
                return patientRepository.save(patient);
            } else {
                throw new ResourceAlreadyExistsException("Patient with the given personal number already exists!");
            }
        } else {
            throw new ResourceAlreadyExistsException("Laboratory with the given name does not exists!");
        }
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
    public Patient getPatientByUserId(Long userId) {
        return patientRepository.findByUserId(userId);
    }

    @Override
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @Override
    public List<Patient> getPatients(String labName) {
        if(laboratoryService.existsByName(labName)) {
            Laboratory laboratory = laboratoryService.getLaboratory(labName);
            return patientRepository.findByLabId(laboratory.getId());
        } else {
            throw new ResourceNotFoundException("Laboratory with the given name does not exists!");
        }

    }

    @Override
    public Patient modifyPatient(Long patientId, PatientCreationRequest request) {
        if (laboratoryService.existsByName(request.getLabName())) {
            Laboratory lab = laboratoryService.getLaboratory(request.getLabName());
            if (!patientRepository.existsByPersonalNumber(request.getPersonalNumber())) {
                Patient patient = Patient.builder()
                        .id(patientId)
                        .personalNumber(request.getPersonalNumber())
                        .firstName(request.getFirstName())
                        .lastName(request.getLastName())
                        .labId(lab.getId())
                        .build();
                return patientRepository.save(patient);
            } else {
                throw new ResourceAlreadyExistsException("Patient with the given personal number already exists!");
            }
        } else {
            throw new ResourceAlreadyExistsException("Laboratory with the given name does not exists!");
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
