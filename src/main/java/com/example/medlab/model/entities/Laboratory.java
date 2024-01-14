package com.example.medlab.model.entities;

import com.example.medlab.model.dto.lab.LaboratoryInput;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "laboratories")
public class Laboratory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @NotBlank(message = "name should not be blank")
    private String name;

    @Column(name = "address")
    @NotBlank(message = "address should not be blank")
    private String address;

    @Column(name = "email")
    @NotBlank(message = "email should not be blank")
    @Email
    private String email;

    @Column(name = "phone")
    @NotBlank(message = "phone should not be blank")
    private String phone;

    @Column(name = "hospital_name")
    private String hospitalName;

    public Laboratory() {
    }

    public Laboratory(Long id, String name, String address, String email, String phone, String hospitalName) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.hospitalName = hospitalName;
    }

    public Laboratory(LaboratoryInput input) {
        this.name = input.getName();
        this.address = input.getAddress();
        this.email = input.getEmail();
        this.phone = input.getPhone();
        this.hospitalName = input.getHospitalName();
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }
}
