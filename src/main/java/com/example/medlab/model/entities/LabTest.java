package com.example.medlab.model.entities;

import com.example.medlab.model.dto.labtest.LabTestInput;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

@Entity
@Table(name = "lab_tests")
public class LabTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @NotBlank(message = "name should not be blank")
    private String name;

    @Column(name = "description")
    @NotBlank(message = "description should not be blank")
    private String description;

    @Column(name = "price")
    @NotNull(message = "price should not be null")
    private BigDecimal price;

    @Column(name = "reference_range")
    @NotBlank(message = "referenceRange should not be blank")
    private String referenceRange;

    @Column(name = "units")
    @NotBlank(message = "units should not be blank")
    private String units;

    @Column(name = "lab_Id")
    @NotNull(message = "labId should not be null")
    private Long labId;

    public LabTest() {

    }
    public LabTest(Long id, String name, String description, BigDecimal price, String referenceRange, String units, Long labId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.referenceRange = referenceRange;
        this.units = units;
        this.labId = labId;
    }

    public LabTest(LabTestInput input) {
        this.name = input.getName();
        this.description = input.getDescription();
        this.price = input.getPrice();
        this.referenceRange = input.getReferenceRange();
        this.units = input.getUnits();
        this.labId = input.getLabId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
