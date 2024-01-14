package com.example.medlab.model.dto.user;

import com.example.medlab.model.Role;
import jakarta.validation.constraints.NotBlank;

public class UserCreationInput {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    private Role role;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
