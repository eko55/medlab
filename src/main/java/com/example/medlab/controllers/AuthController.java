package com.example.medlab.controllers;

import com.example.medlab.model.LoginRequest;
import com.example.medlab.model.entities.AppUser;
import com.example.medlab.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        AppUser user = userRepository.findUserByUsername(loginRequest.getUsername());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("User authenticated successfully");
        }
        return ResponseEntity.status(401).body("Invalid username or password");
    }
}
