package com.example.medlab.model.dto.testresults;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public class TestResultsInput {

    @NotNull(message = "date should not be null")
    private Date date;

    @Column(name = "referral_values")
    @NotNull(message = "referralValues should not be null")
    private Double referralValues;

    @Column(name = "units")
    @NotBlank(message = "units should not be blank")
    private String units;

    @Column(name = "lab_test_id")
    @NotNull(message = "labId should not be null")
    private Long labId;

    @Column(name = "patient_id")
    @NotNull(message = "patientId should not be null")
    private Long patientId;

    @Column(name = "lab_employee_id")
    @NotNull(message = "labEmployeeId should not be null")
    private Long labEmployeeId;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getReferralValues() {
        return referralValues;
    }

    public void setReferralValues(Double referralValues) {
        this.referralValues = referralValues;
    }

    public String getUnits() {
        return units;
    }

    public void setUnits(String units) {
        this.units = units;
    }

    public Long getLabId() {
        return labId;
    }

    public void setLabId(Long labId) {
        this.labId = labId;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getLabEmployeeId() {
        return labEmployeeId;
    }

    public void setLabEmployeeId(Long labEmployeeId) {
        this.labEmployeeId = labEmployeeId;
    }
}
