package com.example.medlab.model.entities;

import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

@Entity
@Table(name = "tests_results")
public class TestResults {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    @JsonFormat(pattern = "yyyy-MM-dd")
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

    public TestResults() {
    }

    public TestResults(Long id, Date date, Double referralValues, String units, Long labId, Long patientId, Long labEmployeeId) {
        this.id = id;
        this.date = date;
        this.referralValues = referralValues;
        this.units = units;
        this.labId = labId;
        this.patientId = patientId;
        this.labEmployeeId = labEmployeeId;
    }

    public TestResults(TestResultsInput input) {
        this.date = input.getDate();
        this.referralValues = input.getReferralValues();
        this.units = input.getUnits();
        this.labId = input.getLabId();
        this.patientId = input.getPatientId();
        this.labEmployeeId = input.getLabEmployeeId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
