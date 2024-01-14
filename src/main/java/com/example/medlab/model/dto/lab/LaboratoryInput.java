package com.example.medlab.model.dto.lab;

import com.example.medlab.model.entities.Laboratory;

public class LaboratoryInput {

    private String name;

    private String address;

    private String email;

    private String phone;

    private String hospitalName;

    public LaboratoryInput() {
    }

    public LaboratoryInput(String name, String address, String email, String phone, String hospitalName) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.hospitalName = hospitalName;
    }

    public LaboratoryInput(Laboratory lab) {
        this.name = lab.getName();
        this.address = lab.getAddress();
        this.email = lab.getAddress();
        this.phone = lab.getPhone();
        this.hospitalName = lab.getHospitalName();
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
