package com.example.medlab.model.dto.patient;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PatientCreationInput {

    @NotBlank(message = "personalNumber should not be blank")
    private String personalNumber;

    @NotBlank(message = "firstName should not be blank")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "lastName should not be blank")
    private String lastName;

    @NotNull(message = "labId must not be null")
    private Long labId;


    public PatientCreationInput() {
    }

    public PatientCreationInput(Long id, String personalNumber, String firstName, String lastName, Long labId) {
        this.personalNumber = personalNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.labId = labId;
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
