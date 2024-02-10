package com.example.medlab.model.dto.employee;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class EmployeeCreationRequest {

    @NotBlank(message = "personalNumber should not be blank")
    private String personalNumber;

    @NotBlank(message = "firstName should not be blank")
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "lastName should not be blank")
    private String lastName;

    @NotBlank(message = "labName must not be blank")
    private String labName;

    @Column(name = "user_id")
    @NotNull(message = "userId must not be null")
    private Long userId;


    public EmployeeCreationRequest() {
    }

    public EmployeeCreationRequest(String personalNumber, String firstName, String lastName, String labName, Long userId) {
        this.personalNumber = personalNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.labName = labName;
        this.userId = userId;
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

    public String getLabName() {
        return labName;
    }

    public void setLabName(String labName) {
        this.labName = labName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
