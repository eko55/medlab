package com.example.medlab.model.dto.testresults;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public class TestResultsInput {

    @NotNull(message = "date should not be null")
    private Date date;

    @NotNull(message = "values should not be null")
    private Double values;

    @NotBlank(message = "labTestName should not be blank")
    private String labTestName;

    @NotNull(message = "patientId should not be null")
    private Long patientId;

    @NotNull(message = "labEmployeeId should not be null")
    private Long labEmployeeId;

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

    public String getLabTestName() {
        return labTestName;
    }

    public void setLabTestName(String labTestName) {
        this.labTestName = labTestName;
    }
}
