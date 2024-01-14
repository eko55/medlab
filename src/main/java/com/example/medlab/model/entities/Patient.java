package com.example.medlab.model.entities;

import com.example.medlab.model.dto.employee.EmployeeCreationInput;
import com.example.medlab.model.dto.patient.PatientCreationInput;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "personal_number")
    @NotBlank(message = "personalNumber should not be blank")
    private String personalNumber;

    @Column(name = "first_name")
    @NotBlank(message = "firstName should not be blank")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "lastName should not be blank")
    private String lastName;

    @Column(name = "lab_id")
    @NotNull(message = "labId must not be null")
    private Long labId;

    public Patient() {
    }

    public Patient(Long id, String personalNumber, String firstName, String lastName, Long labId) {
        this.id = id;
        this.personalNumber = personalNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.labId = labId;
    }

    public Patient(PatientCreationInput input) {
        this.personalNumber = input.getPersonalNumber();
        this.firstName = input.getFirstName();
        this.lastName = input.getLastName();
        this.labId = input.getLabId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPersonalNumber() {
        return personalNumber;
    }

    public void setPersonalNumber(String personalNumber) {
        this.personalNumber = personalNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getLabId() {
        return labId;
    }

    public void setLabId(Long labId) {
        this.labId = labId;
    }
}
