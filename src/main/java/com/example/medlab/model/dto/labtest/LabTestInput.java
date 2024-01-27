package com.example.medlab.model.dto.labtest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public class LabTestInput {

    @NotBlank(message = "name should not be blank")
    private String name;

    @NotBlank(message = "description should not be blank")
    private String description;

    @NotNull(message = "price should not be null")
    private BigDecimal price;

    @NotBlank(message = "referenceRange should not be blank")
    private String referenceRange;

    @NotBlank(message = "units should not be blank")
    private String units;

    @NotNull(message = "labId should not be null")
    private Long labId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getLabId() {
        return labId;
    }

    public void setLabId(Long labId) {
        this.labId = labId;
    }

    public String getReferenceRange() {
        return referenceRange;
    }

    public void setReferenceRange(String referenceRange) {
        this.referenceRange = referenceRange;
    }

    public String getUnits() {
        return units;
    }

    public void setUnits(String units) {
        this.units = units;
    }
}
