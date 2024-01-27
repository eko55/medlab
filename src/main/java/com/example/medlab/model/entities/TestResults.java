package com.example.medlab.model.entities;

import com.example.medlab.model.dto.testresults.TestResultsInput;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.util.Date;

@Builder
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

    @Column(name = "values")
    @NotNull(message = "values should not be null")
    private Double values;

    @Column(name = "lab_test_id")
    @NotNull(message = "labId should not be null")
    private Long labTestId;

    @Column(name = "patient_id")
    @NotNull(message = "patientId should not be null")
    private Long patientId;

    @Column(name = "lab_employee_id")
    @NotNull(message = "labEmployeeId should not be null")
    private Long labEmployeeId;

    public TestResults() {
    }

    public TestResults(Long id, Date date, Double values, Long labId, Long patientId, Long labEmployeeId) {
        this.id = id;
        this.date = date;
        this.values = values;
        this.labTestId = labId;
        this.patientId = patientId;
        this.labEmployeeId = labEmployeeId;
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

    public Double getValues() {
        return values;
    }

    public void setValues(Double values) {
        this.values = values;
    }

    public Long getLabTestId() {
        return labTestId;
    }

    public void setLabTestId(Long labTestId) {
        this.labTestId = labTestId;
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
